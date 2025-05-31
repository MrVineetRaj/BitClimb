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
  const {
    source_code_header,
    source_code,
    source_code_footer,
    language,
    stdin,
    expected_outputs,
  } = req.body;

  const code =
    source_code_header.trim() +
    "\n" +
    source_code.trim() +
    "\n" +
    source_code_footer.trim();

  if (expected_outputs.length !== stdin.length) {
    return res.status(400).json({
      success: false,
      message: "Expected outputs must match the number of test cases",
    });
  }

  const submission = {
    source_code: code,
    language_id: getJudge0LanguageId(language),
    stdin: stdin?.length + "\n" + stdin.join("\n"), // Join all inputs into a single string
    base64_encoded: false,
    wait: false,
    expected_output: expected_outputs.join("\n"), // Join all expected outputs into a single string
  };

  const { token } = await submissionBatch(submission);

  const result = await pollBatchResults(token);

  const finalResults = {
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

  const outputs = finalResults.stdout
    ? finalResults.stdout.trim().split("\n")
    : [];

  const detailedResults = outputs.map((output, idx) => {
    // const { stdout, status, compile_output, message, stderr } = res;

    return {
      input: stdin[idx],
      expected_output: expected_outputs[idx] || "",
      output: output,
      status:
        output === expected_outputs[idx]
          ? "Accepted"
          : finalResults?.status?.description,
      compile_output:
        output === expected_outputs[idx]
          ? null
          : finalResults?.compile_output
          ? finalResults?.compile_output
          : null,
      message:
        output === expected_outputs[idx]
          ? null
          : finalResults?.message
          ? finalResults?.message
          : null,
      stderr:
        output === expected_outputs[idx]
          ? null
          : finalResults?.stderr
          ? finalResults?.stderr
          : null,
    };
  });

  res
    .status(200)
    .json(new ApiResponse(200, detailedResults, "Code executed successfully"));
});

export const submitCode = asyncHandler(async (req, res) => {
  const { problemId } = req.params;
  const {
    source_code_header,
    source_code,
    source_code_footer,
    language,
    stdin,
    expected_outputs,
  } = req.body;

  const userId = req.user.id;
  const code =
    source_code_header.trim() +
    "\n" +
    source_code.trim() +
    "\n" +
    source_code_footer.trim();

  if (expected_outputs.length !== stdin.length) {
    return res.status(400).json({
      success: false,
      message: "Expected outputs must match the number of test cases",
    });
  }

  const submissions = {
    source_code: code,
    language_id: getJudge0LanguageId(language),
    stdin: stdin.length + "\n" + stdin.join("\n"),
    base64_encoded: false,
    wait: false,
    expected_output: expected_outputs.join("\n"),
  };

  const { token } = await submissionBatch(submissions);

  const pollingResults = await pollBatchResults(token);

  const results = {
    ...pollingResults,
    stdout: pollingResults?.stdout
      ? Buffer.from(pollingResults?.stdout, "base64")?.toString("utf-8")
      : "",
    compile_output: pollingResults?.compile_output
      ? Buffer.from(pollingResults?.compile_output, "base64")?.toString("utf-8")
      : "",
    message: pollingResults?.message
      ? Buffer.from(pollingResults?.message, "base64")?.toString("utf-8")
      : "",
    stderr: pollingResults?.stderr
      ? Buffer.from(pollingResults?.stderr, "base64")?.toString("utf-8")
      : "",
  };

  const outputs = results.stdout ? results.stdout.trim().split("\n") : [];

  let isAllPassed = true;
  const detailedResults = outputs.map((output, idx) => {
    const { status, time, memory, compile_output, message, stderr } = results;
    const isPassed = status.id === 3;

    if (!isPassed) {
      isAllPassed = false;
    }

    return {
      input: stdin[idx],
      expected_output: expected_outputs[idx] || "",
      output: output?.trim(),
      status:
        output === expected_outputs[idx] ? "Accepted" : status.description,
      time: time,
      memory: memory,
      compile_output:
        output === expected_outputs[idx]
          ? null
          : compile_output
          ? compile_output
          : null,
      message:
        output === expected_outputs[idx] ? null : message ? message : null,
      stderr: output === expected_outputs[idx] ? null : stderr ? stderr : null,
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
      sourceCode: source_code,
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
      time: isAllPassed ? `${totalTime.toFixed(3)} s` : null,
      memory: isAllPassed ? `${(totalMemory / 1024).toFixed(2)} MB` : null,
      message: detailedResults[firstIndexWhereFailed]?.message
        ? JSON.stringify(detailedResults[firstIndexWhereFailed]?.message)
        : null,

      isAccepted: isAllPassed,
    },
  });

  console.log("New submission created:", newSubmission);
  res.status(200).json(
    new ApiResponse(
      200,
      {
        submission: newSubmission,
      },
      "Code submitted successfully"
    )
  );
});
