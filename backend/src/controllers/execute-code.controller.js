import { db } from "../libs/db.js";
import { asyncHandler } from "../libs/helpers.js";
import {
  getJudge0LanguageId,
  pollBatchResults,
  submissionBatch,
} from "../libs/judg0.lib.js";

export const runCode = asyncHandler(async (req, res) => {
  const { problemId } = req.params;
  const { source_code, language, stdin, expected_outputs } = req.body;

  console.log(
    "Executing code for problem:",
    problemId,
    "\n",
    "user:",
    req.user?.id
  );

  // const userId = req.user.id; // Assuming user ID is available in the request object
  const code = source_code.trim();
  // Simulate code execution
  // In a real application, you would use a service to execute the code securely
  const result = `Executed ${language} code: ${code}`;

  //validate testcases
  if (expected_outputs.length !== stdin.length) {
    return res.status(400).json({
      success: false,
      message: "Expected outputs must match the number of test cases",
    });
  }

  // step 2: prepare each testcases for judge0 batch request
  const submissions = stdin.map((input, idx) => {
    return {
      source_code: source_code,
      language_id: getJudge0LanguageId(language),
      stdin: input,
      base64_encoded: false,
      wait: false,
      expected_output: expected_outputs[idx] || "", // Use empty string if no expected output is provided
    };
  });

  // step 3: submit batch to judge0 api

  const submissionsResult = await submissionBatch(submissions);

  console.log(
    "Submitting batch to Judge0 API with submissions:",
    submissionsResult
  );
  const tokens = submissionsResult.map((res) => res.token);

  // step 4: poll for results
  const results = await pollBatchResults(tokens);

  let isAllPassed = true;
  const detailedResults = results.map((res, idx) => {
    const { stdout, status, compile_output } = res;
    const isPassed = status.id === 3;

    if (!isPassed) {
      isAllPassed = false;
    }

    return {
      input: stdin[idx],
      expected_output: expected_outputs[idx] || "",
      output: stdout.trim(),
      status: status.description,
      compile_output: compile_output || "",
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

  const userId = req.user.id; // Assuming user ID is available in the request object
  const code = source_code.trim();
  // Simulate code execution
  // In a real application, you would use a service to execute the code securely

  //validate testcases
  if (expected_outputs.length !== stdin.length) {
    return res.status(400).json({
      success: false,
      message: "Expected outputs must match the number of test cases",
    });
  }

  // step 2: prepare each testcases for judge0 batch request
  const submissions = stdin.map((input, idx) => {
    return {
      source_code: code,
      language_id: getJudge0LanguageId(language),
      stdin: input,
      base64_encoded: false,
      wait: false,
      expected_output: expected_outputs[idx] || "", // Use empty string if no expected output is provided
    };
  });

  // step 3: submit batch to judge0 api

  const submissionsResult = await submissionBatch(submissions);

  console.log(
    "Submitting batch to Judge0 API with submissions:",
    submissionsResult
  );
  const tokens = submissionsResult.map((res) => res.token);

  // step 4: poll for results
  const results = await pollBatchResults(tokens);

  let isAllPassed = true;
  const detailedResults = results.map((res, idx) => {
    const { stdout, status, time, memory, compile_output } = res;
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
      compile_output: compile_output || "",
    };
  });

  let firstIndexWhereFailed = detailedResults.findIndex(
    (result) => result.status !== "Accepted"
  );

  let totalTime = 0;
  let totalMemory = 0;

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
  await db.submissions.create({
    data: {
      problemId,
      userId,
      sourceCode: code,
      language,
      stdin: isAllPassed ? null : stdin[firstIndexWhereFailed],
      stdout: isAllPassed
        ? null
        : detailedResults[firstIndexWhereFailed].output,
      stdError: isAllPassed
        ? null
        : detailedResults[firstIndexWhereFailed].status,
      compileOutput: isAllPassed
        ? null
        : JSON.stringify(detailedResults[firstIndexWhereFailed].compile_output),
      status: isAllPassed ? "ACCEPTED" : "FAILED",
      time: isAllPassed ? `${totalTime} s` : null,
      memory: isAllPassed ? `${totalMemory} KB` : null,
    },
  });
  res.status(200).json({
    success: true,
    message: "Code executed successfully",
    data: {
      detailedResults,
    },
  });
});
separate;