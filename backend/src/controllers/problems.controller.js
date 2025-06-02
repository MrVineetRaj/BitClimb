import { db } from "../libs/db.js";
import { ApiError, ApiResponse, asyncHandler } from "../libs/helpers.js";
import {
  getJudge0LanguageId,
  pollBatchResults,
  submissionBatch,
} from "../libs/judg0.lib.js";
import { getUserIdIfAuthenticated } from "../libs/utils.js";

export const createProblem = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    difficulty,
    tags,
    companies,
    examples,
    constraints,
    hints,
    editorial,
    testCases,
    codeSnippetsHeader,
    codeSnippets,
    codeSnippetsFooter,
    referenceSolutionHeader,
    referenceSolution,
    referenceSolutionFooter,
  } = req.body;

  // console.log("Creating problem with data:", req.body);

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

  for (const [lang, solutionCodeHeader] of Object.entries(
    referenceSolutionHeader
  )) {
    const langId = getJudge0LanguageId(lang);
    let coder_to_pass =
      solutionCodeHeader +
      "\n" +
      referenceSolution[lang] +
      "\n" +
      referenceSolutionFooter[lang];
    if (!langId) {
      throw new ApiError(400, `Invalid language: ${lang}`);
    }

    const submission = {
      source_code: coder_to_pass,
      language_id: langId,
      stdin:
        testCases?.length +
        "\n" +
        testCases.map((testCase) => testCase.input).join("\n"),
      expected_output: testCases.map((testCase) => testCase.output).join("\n"),
    };

    const res = await submissionBatch(submission);
    const token = res.token;
    // console.log("Judge0 submission token:", res);
    const pollingResult = await pollBatchResults(token);

    const result = {
      ...pollingResult,
      stdout: pollingResult?.stdout
        ? Buffer.from(pollingResult.stdout, "base64").toString("utf-8")
        : null, // Keep as null instead of empty string
      compile_output: pollingResult?.compile_output
        ? Buffer.from(pollingResult.compile_output, "base64").toString("utf-8")
        : null,
      message: pollingResult?.message
        ? Buffer.from(pollingResult.message, "base64").toString("utf-8")
        : null,
      stderr: pollingResult?.stderr
        ? Buffer.from(pollingResult.stderr, "base64").toString("utf-8")
        : null,
    };

    // console.log("Judge0 submission result:", result);

    if (result.status.id !== 3) {
      throw new ApiError(
        500,
        `Judge0 submission failed for language: ${lang}`,
        {
          error: result,
        }
      );
    }
    // console.log("Judge0 submission result:", result);
  }

  // Save the reference solution to the database
  const newProblem = await db.problem.create({
    data: {
      title,
      description,
      difficulty,
      tags: tags || null,
      companies: companies || null,
      examples: examples || null,
      constraints: constraints || null,
      hints: hints || null,
      editorial: editorial || null,
      testCases: testCases || null,
      codeSnippets: codeSnippets || null,
      referenceSolutionHeader: referenceSolutionHeader || null,
      referenceSolution: referenceSolution,
      referenceSolutionFooter: referenceSolutionFooter || null,
      userId: req.user.id, // Assuming the user creating the problem is the one making the request
    },
  });

  res
    .status(201)
    .json(
      new ApiResponse(
        201,
        { problemId: newProblem.id },
        "Problem created successfully with reference solution"
      )
    );
});

export const getAllProblems = asyncHandler(async (req, res) => {
  //todo : implement filtering based on company tags, difficulty, .
  // pagination, etc.
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const difficultySort = req.query.difficultySort || "asc";
  const difficultyFilter = req.query.difficulty || null;

  // console.log("Fetching all problems with pagination:", {
  //   page,
  //   limit,
  // });
  const problems = await db.problem.findMany({
    where: {
      isPublic: true, // Only fetch public problems
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      tags: true,
      difficulty: true,
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  // console.log("problems fetched:", problems.length);
  if (!problems || problems.length === 0) {
    return res.status(200).json(new ApiResponse(404, [], "No problems found"));
  }

  const totalProblems = await db.problem.count();
  const totalPages = Math.ceil(totalProblems / limit);

  const userId = await getUserIdIfAuthenticated(req);

  if (!userId) {
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
    return;
  }

  const SolvedProblems = Promise.all(
    problems.map(async (problem) => {
      const solved = await db.problemsSolved.findFirst({
        where: {
          userId: userId,
          problemId: problem.id,
        },
      });
      return {
        ...problem,
        solved: !!solved,
      };
    })
  );

  const problemsWithSolvedStatus = await SolvedProblems;

  res.status(200).json(
    new ApiResponse(
      200,
      {
        problems: problemsWithSolvedStatus,
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
  const ref = req.query.ref || ""; // Check if ref query parameter is present
  // console.log("Fetching problem with ID:", id);
  console.log("Fetching problem with ID and ref:", id, " ", ref);
  // Validate problem ID
  if (!id) {
    throw new ApiError(400, "Problem ID is required");
  }

  let findQuery = {
    where: {
      id: id,
      isPublic: true, // Only fetch public problems by default
    },
  };

  if (ref === "contest") {
    findQuery = {
      where: {
        id: id,
        isPublic: false, // Only fetch public problems for contests
      },
      select: {
        id: true,
        title: true,
        description: true,
        difficulty: true,
        tags: true,
        examples: true,
        constraints: true,
        hints: true,
        testCases: true,
        codeSnippets: true,
        referenceSolutionHeader: true,
        referenceSolutionFooter: true,
        createdAt: true,
        updatedAt: true,
      },
    };
  }
  const problem = await db.problem.findUnique(findQuery);

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
      userId: req.user.id,
      id: id,
    },
  });

  if (!problem) {
    throw new ApiError(
      404,
      "Problem not found or you are not authorized to delete it"
    );
  }

  res
    .status(200)
    .json(new ApiResponse(200, {}, "Problem deleted successfully"));
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
