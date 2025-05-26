import { db } from "../libs/db.js";
import { ApiError, ApiResponse, asyncHandler } from "../libs/helpers.js";
import {
  getJudge0LanguageId,
  pollBatchResults,
  submissionBatch,
} from "../libs/judg0.lib.js";

export const createProblem = asyncHandler(async (req, res) => {
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
    codeSnippets,
    referenceSolution,
  } = req.body;

  if (req.user.role !== "ADMIN") {
    return res.status(403).json({
      status: 403,
      message: "You are not authorized to create a problem",
    });
  }
  // Validate required fields
  if (!title || !description || !difficulty) {
    throw new ApiError(400, "Title, description, and difficulty are required");
  }

  // todo : make you have to run judge0 on vps and then only use it
  // try {
  //   for (const [lang, solutionCode] of Object.entries(referenceSolution)) {
  //     const langId = getJudge0LanguageId(lang);

  //     if (!langId) {
  //       throw new ApiError(400, `Invalid language: ${lang}`);
  //     }

  //     //
  //     const submission = testCases.map(({ input, output }) => {
  //       return {
  //         source_code: solutionCode,
  //         language_id: langId,
  //         stdin: input,
  //         expected_output: output,
  //       };
  //     });

  //     const submissionResults = await submissionBatch(submission);

  //     const tokens = submissionResults.map((res) => res.token);

  //     const results = await pollBatchResults(tokens);

  //     for (const result of results) {
  //       console.log(result);
  //       if (result.status.id !== 3) {
  //         throw new ApiError(
  //           400,
  //           `Reference solution failed for language ${lang}: ${result.status.description}`
  //         );
  //       }
  //     }

  //     console.log(
  //       `Reference solution for language ${lang} passed all test cases`
  //     );

  //     // Save the reference solution to the database
  //     const newProblem = await db.problem.create({
  //       data: {
  //         title,
  //         description,
  //         difficulty,
  //         tags: tags ? JSON.stringify(tags) : null,
  //         examples: examples ? JSON.stringify(examples) : null,
  //         constraints: constraints ? JSON.stringify(constraints) : null,
  //         hints: hints ? JSON.stringify(hints) : null,
  //         editorial: editorial ? JSON.stringify(editorial) : null,
  //         testCases: testCases ? JSON.stringify(testCases) : null,
  //         codeSnippets: codeSnippets ? JSON.stringify(codeSnippets) : null,
  //         referenceSolution: referenceSolution,
  //       },
  //     });

  //     return ApiResponse(
  //       201,
  //       newProblem,
  //       "Problem created successfully with reference solution"
  //     );
  //   }
  // } catch (error) {
  //   throw new ApiError(
  //     400,
  //     `Error processing reference solution: ${error.message}`
  //   );
  // }

  const problem = await db.problem.create({
    data: {
      title,
      description,
      difficulty,
      tags: tags ? JSON.stringify(tags) : null,
    },
  });

  res
    .status(201)
    .json(new ApiResponse(201, problem, "Problem created successfully"));
});

export const getAllProblems = asyncHandler(async (req, res) => {
  //todo : implement filtering based on company tags, difficulty, .
  // pagination, etc.
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const difficultySort = req.query.difficultySort || "asc";
  const difficultyFilter = req.query.difficulty || null;
  const problems = await db.problem.findMany({
    orderBy: {
      createdAt: "desc",
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  const totalProblems = await db.problem.count();
  const totalPages = Math.ceil(totalProblems / limit);

  res.status(200).json(
    new ApiResponse(
      200,
      {
        problems,
        totalPages,
        currentPage: page,
        limit,
      },
      "Problems fetched successfully"
    )
  );
});

export const getProblemById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // Validate problem ID
  if (!id) {
    throw new ApiError(400, "Problem ID is required");
  }

  const problem = await db.problem.findUnique({
    where: {
      id: parseInt(id, 10),
    },
  });

  if (!problem) {
    throw new ApiError(404, "Problem not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, problem, "Problem fetched successfully"));
});

//todo : need to work on this
export const updateProblem = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description, difficulty, tags } = req.body;

  // Validate problem ID
  if (!id) {
    throw new ApiError(400, "Problem ID is required");
  }

  // Validate required fields
  if (!title || !description || !difficulty) {
    throw new ApiError(400, "Title, description, and difficulty are required");
  }

  const problem = await db.problem.update({
    where: {
      id: parseInt(id, 10),
    },
    data: {
      title,
      description,
      difficulty,
      tags: tags ? JSON.stringify(tags) : null,
    },
  });

  res
    .status(200)
    .json(new ApiResponse(200, problem, "Problem updated successfully"));
});

export const deleteProblem = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Validate problem ID
  if (!id) {
    throw new ApiError(400, "Problem ID is required");
  }

  const problem = await db.problem.delete({
    where: {
      id: parseInt(id, 10),
    },
  });

  res
    .status(200)
    .json(new ApiResponse(200, problem, "Problem deleted successfully"));
});

export const getSolvedProblems = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  // Validate user ID
  if (!userId) {
    throw new ApiError(400, "User ID is required");
  }

  const solvedProblems = await db.problem.findMany({
    where: {
      solvedBy: {
        some: {
          userId: userId,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        solvedProblems,
        "Solved problems fetched successfully"
      )
    );
});
