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

  // console.log("Polling results:", submission);

  const { token } = await submissionBatch(submission);

  const result = await pollBatchResults(token);

  const finalResults = {
    ...result,
    stdout: result.stdout
      ? Buffer.from(result.stdout, "base64").toString("utf-8")
      : null,
    compile_output: result.compile_output
      ? Buffer.from(result.compile_output, "base64").toString("utf-8")
      : null,
    message: result.message
      ? Buffer.from(result.message, "base64").toString("utf-8")
      : null,
    stderr: result.stderr
      ? Buffer.from(result.stderr, "base64").toString("utf-8")
      : null,
  };
  console.log("Final results:", finalResults);
  const outputs = finalResults.stdout
    ? finalResults.stdout.trim().split("\n")
    : [];

  const detailedResults = expected_outputs.map((expected_output, idx) => {
    // const { stdout, status, compile_output, message, stderr } = res;

    return {
      input: stdin[idx],
      expected_output: expected_output || "",
      output: outputs[idx] || null,
      status:
        expected_output === outputs[idx] &&
        !finalResults?.compile_output &&
        !finalResults?.stderr &&
        !finalResults?.message
          ? "Accepted"
          : finalResults?.status?.description,
      compile_output:
        expected_output === outputs[idx] &&
        !finalResults?.compile_output &&
        !finalResults?.stderr &&
        !finalResults?.message
          ? null
          : finalResults?.compile_output
          ? finalResults?.compile_output
          : null,
      message:
        expected_output === outputs[idx] &&
        !finalResults?.compile_output &&
        !finalResults?.stderr &&
        !finalResults?.message
          ? null
          : finalResults?.message
          ? finalResults?.message
          : null,
      stderr:
        expected_output === outputs[idx] &&
        !finalResults?.compile_output &&
        !finalResults?.stderr &&
        !finalResults?.message
          ? null
          : finalResults?.stderr
          ? finalResults?.stderr
          : null,
    };
  });

  console.log("Detailed results:", detailedResults);
  res
    .status(200)
    .json(new ApiResponse(200, detailedResults, "Code executed successfully"));
});

export const submitCode = asyncHandler(async (req, res) => {
  const { problemId } = req.params;
  const { contestProblemId, ref, contestId } = req.query;
  const {
    source_code_header,
    source_code,
    source_code_footer,
    language,
    stdin,
    expected_outputs,
  } = req.body;

  if (!problemId) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Problem ID is required"));
  }

  const testCases = await db.testCases.findMany({
    where: {
      problemId: problemId,
    },
    select: {
      stdin: true,
      stdout: true,
    },
  });
  const userId = req.user.id;
  const code =
    source_code_header.trim() +
    "\n" +
    source_code.trim() +
    "\n" +
    source_code_footer.trim();

  const submissions = {
    source_code: code,
    language_id: getJudge0LanguageId(language),
    stdin:
      testCases.length +
      "\n" +
      testCases.map((testCase) => testCase.stdin).join("\n"),
    base64_encoded: false,
    wait: false,
    expected_output: testCases.map((testCase) => testCase.stdout).join("\n"),
  };

  // ...existing code...
  //   const submissions = {
  //     source_code: `
  // import sys
  // input_data = sys.stdin.read().strip()
  // print("Input received:", repr(input_data))
  // lines = input_data.split('\\n')
  // print("Lines:", lines)
  // t = int(lines[0])
  // print("Number of test cases:", t)
  // for i in range(1, t + 1):
  //     n = int(lines[i])
  //     result = "Even" if n % 2 == 0 else "Odd"
  //     print(result)
  //   `,
  //     language_id: getJudge0LanguageId(language),
  //     stdin: stdin.length + "\n" + stdin.join("\n"),
  //     base64_encoded: false,
  //     wait: false,
  //   };
  // ...existing code...
  // console.log(submissions);
  const { token } = await submissionBatch(submissions);

  const pollingResults = await pollBatchResults(token);

  // console.log("Polling results:", pollingResults);
  const results = {
    ...pollingResults,
    stdout: pollingResults?.stdout
      ? Buffer.from(pollingResults.stdout, "base64").toString("utf-8")
      : null, // Keep as null instead of empty string
    compile_output: pollingResults?.compile_output
      ? Buffer.from(pollingResults.compile_output, "base64").toString("utf-8")
      : null,
    message: pollingResults?.message
      ? Buffer.from(pollingResults.message, "base64").toString("utf-8")
      : null,
    stderr: pollingResults?.stderr
      ? Buffer.from(pollingResults.stderr, "base64").toString("utf-8")
      : null,
  };

  // console.log("Decoded results:", results); // Add this to debug
  const outputs = results.stdout ? results.stdout.trim().split("\n") : [];

  let isAllPassed = results?.status?.id === 3 && outputs.length > 0;

  const separateResults = outputs.map((output, idx) => {
    if (output !== testCases[idx].stdout) {
      return false;
    }
    return true;
  });

  let firstIndexWhereFailed =
    results.compile_output || results.message
      ? 0
      : separateResults.findIndex((result) => !result);

      
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

  // console.log("isAllPassed :", isAllPassed);

  const newSubmission = await db.submissions.create({
    data: {
      problemId,
      userId,
      sourceCode: source_code,
      language,
      stdin: testCases?.map((testCase) => testCase.stdin).join("_"),

      stdout: results?.stdout?.trim()?.split("\n").join("_") || null,
      stdError: results?.stderr || null,
      compileOutput: results?.compile_output || null,
      status: results?.status?.description || "Unknown",
      // time: isAllPassed ? `${totalTime.toFixed(3)} s` : null,
      time: results?.time ? `${(results.time / 1000).toFixed(3)} s` : null,
      // memory: isAllPassed ? `${(totalMemory / 1024).toFixed(2)} MB` : null,
      memory: results?.memory
        ? `${(results.memory / 1024).toFixed(2)} MB`
        : null,
      message: results?.message || null,
      expectedOutput: testCases.map((testCase) => testCase.stdout).join("_"),
      firstIndexWhereFailed,
      isAccepted: isAllPassed,
    },
  });

  console.log("New submission created:", newSubmission);

  if (ref === "contest") {
    await db.contestSubmission.create({
      data: {
        contestId,
        contestProblemId,
        userId,
        submissionId: newSubmission.id,
        status: isAllPassed ? "Accepted" : "Rejected",
        firstIndexWhereFailed
      },
    });
  }

  // console.log("New submission created:", newSubmission);
  res.status(200).json(
    new ApiResponse(
      200,
      {
        // submission: newSubmission,
      },
      "Code submitted successfully"
    )
  );
});
