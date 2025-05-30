import { reviewCode } from "../libs/chatgpt.config.js";
import { db } from "../libs/db.js";
import { ApiResponse, asyncHandler } from "../libs/helpers.js";
import {
  getJudge0LanguageId,
  pollBatchResults,
  submissionBatch,
} from "../libs/judg0.lib.js";

export const runCode = asyncHandler(async (req, res) => {
  const { problemId } = req.params;
  const { source_code, language, stdin, expected_outputs } = req.body;


  
  const code = source_code.trim();
  
  
  if (expected_outputs.length !== stdin.length) {
    return res.status(400).json({
      success: false,
      message: "Expected outputs must match the number of test cases",
    });
  }

  const submissions = stdin.map((input, idx) => {
    return {
      source_code: source_code,
      language_id: getJudge0LanguageId(language),
      stdin: input,
      base64_encoded: false,
      wait: false,
      expected_output: expected_outputs[idx] || "", 
    };
  });

  const submissionsResult = await submissionBatch(submissions);

  const tokens = submissionsResult.map((res) => res.token);

  const pollingResults = await pollBatchResults(tokens);

  const finalResults = pollingResults.map((result) => {
    return {
      ...result,
      stdout: result.stdout
        ? Buffer.from(result.stdout, "base64").toString("utf-8")
        : "",
      compile_output: result.compile_output
        ? Buffer.from(result.compile_output, "base64").toString("utf-8")
        : "",
      message: result.message
        ? Buffer.from(result.message, "base64").toString("utf-8")
        : "",
      stderr: result.stderr
        ? Buffer.from(result.stderr, "base64").toString("utf-8")
        : "",
    };
  });

  const detailedResults = finalResults.map((res, idx) => {
    const { stdout, status, compile_output, message, stderr } = res;

    return {
      input: stdin[idx],
      expected_output: expected_outputs[idx] || "",
      output: stdout.trim(),
      status: status.description,
      compile_output: compile_output ? compile_output : "",
      message: message ? message : "",
      stderr: stderr ? stderr : "",
    };
  });

  res.status(200).json({
    success: true,
    message: "Code executed successfully",
    data: {
      detailedResults,
    },
  });
});

export const submitCode = asyncHandler(async (req, res) => {
  const { problemId } = req.params;
  const { source_code, language, stdin, expected_outputs } = req.body;

  const userId = req.user.id;
  const code = source_code.trim();

  if (expected_outputs.length !== stdin.length) {
    return res.status(400).json({
      success: false,
      message: "Expected outputs must match the number of test cases",
    });
  }

  const submissions = stdin.map((input, idx) => {
    return {
      source_code: code,
      language_id: getJudge0LanguageId(language),
      stdin: input,
      base64_encoded: false,
      wait: false,
      expected_output: expected_outputs[idx] || "",
    };
  });

  const submissionsResult = await submissionBatch(submissions);

  const tokens = submissionsResult.map((res) => res.token);

  const pollingResults = await pollBatchResults(tokens);

  const results = pollingResults.map((result) => {
    return {
      ...result,
      stdout: result.stdout
        ? Buffer.from(result.stdout, "base64").toString("utf-8")
        : "",
      compile_output: result.compile_output
        ? Buffer.from(result.compile_output, "base64").toString("utf-8")
        : "",
      message: result.message
        ? Buffer.from(result.message, "base64").toString("utf-8")
        : "",
      stderr: result.stderr
        ? Buffer.from(result.stderr, "base64").toString("utf-8")
        : "",
    };
  });

  let isAllPassed = true;
  const detailedResults = results.map((res, idx) => {
    const { stdout, status, time, memory, compile_output, message, stderr } =
      res;
    const isPassed = status.id === 3;

    if (!isPassed) {
      isAllPassed = false;
    }

    return {
      input: stdin[idx],
      expected_output: expected_outputs[idx] || "",
      output: stdout.trim(),
      status: status.description,
      time: time,
      memory: memory,
      compile_output: compile_output ? compile_output : "",
      message: message ? message : "",
      stderr: stderr ? stderr : "",
    };
  });

  let firstIndexWhereFailed = detailedResults.findIndex(
    (result) => result.status !== "Accepted"
  );
  isAllPassed;
  let totalTime = 0;
  let totalMemory = 0;

  const problemExists = await db.problem.findUnique({
    where: {
      id: problemId,
    },
    select: { id: true },
  });

  if (!problemExists) {
    return res.status(404).json({
      success: false,
      message: "Problem not found",
    });
  }

  if (isAllPassed) {
    detailedResults.forEach((result) => {
      totalTime += Number(result.time);
      totalMemory += Number(result.memory);
    });

    await db.problemsSolved.upsert({
      where: {
        userId_problemId: {
          userId,
          problemId,
        },
      },
      update: {},
      create: {
        userId,
        problemId,
      },
    });
  }

  const newSubmission = await db.submissions.create({
    data: {
      problemId,
      userId,
      sourceCode: code,
      language,
      stdin: isAllPassed ? null : stdin[firstIndexWhereFailed],
      stdout: isAllPassed
        ? null
        : detailedResults[firstIndexWhereFailed].output,
      stdError: detailedResults[firstIndexWhereFailed]?.stderr
        ? detailedResults[firstIndexWhereFailed]?.stderr
        : null,
      compileOutput: detailedResults[firstIndexWhereFailed]?.compile_output
        ? JSON.stringify(detailedResults[firstIndexWhereFailed]?.compile_output)
        : null,
      status: isAllPassed
        ? "Accepted"
        : detailedResults[firstIndexWhereFailed]?.status
        ? JSON.stringify(detailedResults[firstIndexWhereFailed]?.status)
        : "Unknown Error",
      time: isAllPassed ? `${totalTime} s` : null,
      memory: isAllPassed ? `${totalMemory} KB` : null,
      message: detailedResults[firstIndexWhereFailed]?.message
        ? JSON.stringify(detailedResults[firstIndexWhereFailed]?.message)
        : null,

      isAccepted: isAllPassed,
    },
  });

  console.log("New submission created:", newSubmission);
  res.status(200).json(
    new ApiResponse(200, "Code submitted successfully", {
      submission: newSubmission,
    })
  );
});
