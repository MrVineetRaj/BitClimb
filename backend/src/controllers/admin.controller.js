import { UserRole } from "../generated/prisma/index.js";
import { db } from "../libs/db.js";
import { ApiResponse, asyncHandler } from "../libs/helpers.js";
import {
  getJudge0LanguageId,
  pollBatchResults,
  submissionBatch,
} from "../libs/judg0.lib.js";

export const getMetrics = asyncHandler(async (req, res) => {
  const metrics = {
    users: await db.user.count(),
    problems: await db.problem.count(),
    contests: await db.contest.count(),
    admins: await db.user.count({
      where: {
        role: UserRole.ADMIN,
      },
    }),
  };

  res
    .status(200)
    .json(new ApiResponse(200, metrics, "Metrics fetched successfully"));
});

export const getProblemDetails = asyncHandler(async (req, res) => {
  const { problemId } = req.params;

  const problem = await db.problem.findUnique({
    where: {
      id: problemId,
    },
    include: {
      hiddenTestCases: true,
    },
  });

  if (!problem) {
    return res
      .status(200)
      .json(new ApiResponse(404, null, "Problem not found"));
  }

  res
    .status(200)
    .json(new ApiResponse(200, problem, "Problem details fetched"));
});

export const addHiddenTestCases = asyncHandler(async (req, res) => {
  const { problemId } = req.params;
  const {
    source_code_header,
    source_code,
    source_code_footer,
    language,
    testcase_inputs,
  } = req.body;

  console.log("Adding hidden test cases for problem:", req.body);

  const code =
    source_code_header.trim() +
    "\n" +
    source_code.trim() +
    "\n" +
    source_code_footer.trim();

  if (
    !testcase_inputs ||
    !source_code ||
    !language ||
    !source_code_footer ||
    !source_code_header
  ) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Invalid test cases format"));
  }

  let stdin = testcase_inputs?.split("_")?.map((input) => input.trim());
  const submission = {
    source_code: code,
    language_id: getJudge0LanguageId(language),
    stdin: stdin?.length + "\n" + stdin.join("\n"), // Join all inputs into a single string
    base64_encoded: false,
    wait: false,
  };

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
  
  const stdout = finalResults.stdout
    ? finalResults.stdout
        .trim()
        .split("\n")
        ?.map((output) => output.trim())
    : [];

  
  const testCaseData = stdin.map((input, index) => ({
    problemId,
    stdin: input, // ✅ Individual input
    stdout: stdout[index], // ✅ Corresponding output
    userId: req.user.id,
  }));



  await db.testCases.createMany({
    data: testCaseData, // ✅ Array of objects
  });

  res.status(200).json(new ApiResponse(200, {}, "Hidden test cases added"));
});

export const deleteHiddenTestCase = asyncHandler(async (req, res) => {
  const { testCaseId } = req.params;

  const deletedTestCase = await db.testCases.delete({
    where: {
      id: testCaseId,
    },
  });

  if (!deletedTestCase) {
    return res
      .status(404)
      .json(new ApiResponse(404, null, "Test case not found"));
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, deletedTestCase, "Test case deleted successfully")
    );
});
