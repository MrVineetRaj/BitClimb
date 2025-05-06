import { asyncHandler, ApiError, ApiResponse } from "../libs/helpers.js";
import { db } from "../libs/db.js";
import { UserRole } from "../generated/prisma/index.js";
import { getJudge0LanguageId, submitBatch } from "../libs/judge0.lib.js";

const createProblem = asyncHandler(async (req, res) => {
  if (req.user.role !== UserRole.ADMIN) {
    throw new ApiError(403, "Access Denied - Admins Only");
  }

  const {
    title,
    description,
    difficulty,
    tags,
    examples,
    constraints,
    hints,
    editorial,
    testCases,
    clientSideCodeSnippet,
    serverSideCodeSnippet,
    referenceSolution,
  } = req.body;

  if (!title || !description || !difficulty) {
    throw new ApiError(400, "Title, description and difficulty are required");
  }

  if (title.length < 5) {
    throw new ApiError(400, "Title must be at least 5 characters long");
  }

  for (const [language, solutionCode] of Object.entries(referenceSolution)) {
    const languageId = getJudge0LanguageId(language);

    if (!languageId) {
      throw new ApiError(400, `Invalid language: ${language}`);
    }

    if (!solutionCode) {
      throw new ApiError(400, `Solution code for ${language} is required`);
    }

    const submissions = testCases?.map(({ input, output }) => ({
      source_code: solutionCode,
      language_id: languageId,
      stdin: input,
      expected_output: output,
    }));

    const submissionResults = await submitBatch(submissions);

    const tokens = submissionResults.map((result) => result.token);

    const results = await pollBatchResults(tokens);

    for (let i = 0; i < results.length; i++) {
      const result = results[i];

      if (result.status?.id !== 3) {
        throw new ApiError(
          400,
          `Test case ${i + 1} failed: ${
            result.status.description
          } for language : ${language}`
        );
      }
    }
  }

  const problem = await db.problem.create({
    data: {
      userId: req.user.id,
      title,
      description,
      difficulty,
      tags: tags || [],
      examples: examples || {},
      constraints: constraints || "",
      hints: hints || "",
      editorial: editorial || "",
      testCases: testCases || {},
      clientSideCodeSnippet: clientSideCodeSnippet || {},
      serverSideCodeSnippet: serverSideCodeSnippet || {},
      referenceSolution: referenceSolution || {},
    },
  });

  return ApiResponse(res, 201, "Problem created successfully", problem);
});

const getProblems = asyncHandler(async (req, res) => {});

const getProblemById = asyncHandler(async (req, res) => {});

const updateProblem = asyncHandler(async (req, res) => {});

const deleteProblem = asyncHandler(async (req, res) => {});

const getAllSolvedProblems = asyncHandler(async (req, res) => {});

export {
  createProblem,
  getProblems,
  getProblemById,
  updateProblem,
  deleteProblem,
  getAllSolvedProblems,
};
