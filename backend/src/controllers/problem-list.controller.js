import { db } from "../libs/db.js";
import { ApiError, ApiResponse, asyncHandler } from "../libs/helpers.js";
import { getUserIdIfAuthenticated } from "../libs/utils.js";

const getAllProblemLists = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  // Validate user ID
  if (!userId) {
    throw new ApiError(400, "User ID is required");
  }

  const problemLists = await db.problemList.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  res
    .status(200)
    .json(
      new ApiResponse(200, problemLists, "Problem lists retrieved successfully")
    );
});

const getProblemListMetricsById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  const now = Date.now();
  // Validate problem list ID and user ID
  if (!id || !userId) {
    throw new ApiError(400, "Problem list ID and User ID are required");
  }

  // 1. Get basic problem list info
  const problemList = await db.problemList.findUnique({
    where: {
      id: id,
      userId: userId,
    },
    select: {
      id: true,
      title: true,
      description: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!problemList) {
    throw new ApiError(404, "Problem list not found or you are not authorized");
  }

  // 3. Get problems with their difficulties
  const problemsWithDifficulty = await db.problemInProblemList.findMany({
    where: {
      problemListId: id,
      userId: userId,
    },
    include: {
      problem: {
        select: {
          difficulty: true,
        },
      },
    },
  });

  // 4. Get solved problems with difficulties
  const solvedProblems = await db.problemInProblemList.findMany({
    where: {
      problemListId: id,
      userId: userId,
      problem: {
        problemSolved: {
          some: {
            userId: userId,
          },
        },
      },
    },
    include: {
      problem: {
        select: {
          difficulty: true,
        },
      },
    },
  });

  // Calculate metrics
  const totalProblems = problemsWithDifficulty.length;

  const difficultyCount = {
    easy: problemsWithDifficulty.filter((p) => p.problem.difficulty === "EASY")
      .length,
    medium: problemsWithDifficulty.filter(
      (p) => p.problem.difficulty === "MEDIUM"
    ).length,
    hard: problemsWithDifficulty.filter((p) => p.problem.difficulty === "HARD")
      .length,
  };

  const solvedCount = {
    total: solvedProblems.length,
    easy: solvedProblems.filter((p) => p.problem.difficulty === "EASY").length,
    medium: solvedProblems.filter((p) => p.problem.difficulty === "MEDIUM")
      .length,
    hard: solvedProblems.filter((p) => p.problem.difficulty === "HARD").length,
  };

  const result = {
    ...problemList,
    totalProblems,
    solved: solvedCount,
    counts: difficultyCount,
  };

  console.log(
    "\n\n\nProblem List Metrics fetch in ",
    Date.now() - now,
    "ms\n\n\n"
  );
  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        result,
        "Problem list metrics retrieved successfully"
      )
    );
});

const getProblemsPerProblemList = asyncHandler(async (req, res) => {
  const { id } = req.params; // Problem list ID
  const { page = 1, limit = 10, difficulty = "" } = req.query;
  const userId = req.user.id;

  // Validate problem list ID and user ID
  if (!id || !userId) {
    throw new ApiError(400, "Problem list ID and User ID are required");
  }

  // Validate pagination parameters
  const pageNumber = parseInt(page, 10);
  const pageSize = parseInt(limit, 10);
  if (isNaN(pageNumber) || isNaN(pageSize) || pageNumber < 1 || pageSize < 1) {
    throw new ApiError(400, "Invalid pagination parameters");
  }

  // Fetch problems in the specified problem list with pagination and difficulty filter
  const problems = await db.problemInProblemList.findMany({
    where: {
      problemListId: id,
      userId: userId,
      ...(difficulty && {
        problem: {
          difficulty: difficulty.toUpperCase(),
        },
      }),
    },
    include: {
      problem: {
        select: {
          id: true,
          title: true,
          difficulty: true,
          tags: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    skip: (pageNumber - 1) * pageSize,
    take: pageSize,
  });

  // check if any problem is solved by the user
  const solvedProblems = await db.problemsSolved.findMany({
    where: {
      userId: userId,
      problemId: { in: problems.map((p) => p.id) },
    },
    select: { problemId: true },
  });

  const solvedProblemIds = new Set(solvedProblems.map((sp) => sp.problemId));

  const problemsWithSolvedStatus = problems.map((problem) => ({
    ...problem,
    isSolved: solvedProblemIds.has(problem.id),
  }));

  const totalProblemsCount = await db.problemInProblemList.count({
    where: {
      problemListId: id,
      userId: userId,
      ...(difficulty && {
        problem: {
          difficulty: difficulty.toUpperCase(),
        },
      }),
    },
  });

  const totalProblemPages = Math.ceil(totalProblemsCount / pageSize);

  res.status(200).json(
    new ApiResponse(
      200,
      {
        problems: problemsWithSolvedStatus,
        totalPages: totalProblemPages,
        currentPage: page,
        limit,
      },
      "Problems fetched successfully"
    )
  );
});

const createProblemList = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const userId = req.user.id;

  // Validate input
  if (!title || !userId) {
    throw new ApiError(400, "Title and User ID are required");
  }

  await db.problemList.create({
    data: {
      title: title,
      description: description,
      userId: userId,
    },
  });

  res
    .status(201)
    .json(new ApiResponse(201, {}, "Problem list created successfully"));
});

const updateProblemList = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const userId = req.user.id;

  // Validate input
  if (!id || !userId) {
    throw new ApiError(400, "Problem list ID and User ID are required");
  }

  // Validate required fields
  if (!title) {
    throw new ApiError(400, "Title is required");
  }

  const updatedProblemList = await db.problemList.update({
    where: {
      id: id,
      userId: userId,
    },
    data: {
      title: title,
      description: description,
    },
  });

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        updatedProblemList,
        "Problem list updated successfully"
      )
    );
});

const deleteProblemList = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  // Validate problem list ID and user ID
  if (!id || !userId) {
    throw new ApiError(400, "Problem list ID and User ID are required");
  }

  const deletedProblemList = await db.problemList.delete({
    where: {
      id: id,
      userId: userId,
    },
  });

  if (!deletedProblemList) {
    throw new ApiError(404, "Problem list not found or you are not authorized");
  }

  res
    .status(200)
    .json(new ApiResponse(200, {}, "Problem list deleted successfully"));
});

const addProblemToList = asyncHandler(async (req, res) => {
  const { problemListIds, problemId } = req.query; // Problem list ID
  const userId = req.user.id;

  // Validate input
  if (!problemListIds || !problemId || !userId) {
    throw new ApiError(
      400,
      "Problem list ID, Problem ID, and User ID are required"
    );
  }

  const ids = problemListIds.split(";").map((id) => id.trim());

  // check if the problem exists in the any lists already
  const existingProblems = await db.problemInProblemList.findMany({
    where: {
      problemId: problemId,
      problemListId: {
        in: ids,
      },
      userId: userId,
    },
    select: {
      problemList: {
        select: {
          id: true,
          title: true,
        },
      },
    },
  });

  if (existingProblems && existingProblems.length > 0) {
    const existingListTitles = existingProblems
      .map((item) => item.problemList.title)
      .join("', '");
    throw new ApiError(400, `Problem is already in '${existingListTitles}'`);
  }

  await db.problemInProblemList.createMany({
    data: ids.map((id) => ({
      problemListId: id,
      problemId: problemId,
      userId: userId,
    })),
  });
  res
    .status(201)
    .json(new ApiResponse(200, {}, "Problem added to list successfully"));
});
const removeProblemFromList = asyncHandler(async (req, res) => {});

const getTagWiseProblemLists = asyncHandler(async (req, res) => {
  const { tag } = req.params; // Tag to filter problem lists
  const ref = req.query.ref; // Reference to filter problem lists
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  let whereClause = {};

  if (ref === "topic") {
    const tagArray = Array.isArray(tag) ? tag : [tag];
    whereClause.tags = {
      hasSome: tagArray,
    };
  }

  if (ref === "company") {
    const tagArray = Array.isArray(tag) ? tag : [tag];
    whereClause.companies = {
      hasSome: tagArray,
    };
  }

  const problems = await db.problem.findMany({
    where: whereClause,
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      difficulty: true,
      tags: true,
      companies: true,
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  const totalProblemsCount = await db.problem.count({
    where: {
      ...whereClause,
    },
  });

  const totalProblemPages = Math.ceil(totalProblemsCount / limit);

  const userId = await getUserIdIfAuthenticated(req);

  if (!userId) {
    res.status(200).json(
      new ApiResponse(
        200,
        {
          problems,
          totalPages: totalProblemPages,
          currentPage: page,
          limit,
        },
        "Problems fetched successfully"
      )
    );
    return;
  }

  // console.log("User ID:", userId, problems);

  // Get solved problems for authenticated user
  const solvedProblems = await db.problemsSolved.findMany({
    where: {
      userId: userId,
      problemId: { in: problems.map((p) => p.id) },
    },
    select: { problemId: true },
  });

  const solvedProblemIds = new Set(solvedProblems.map((sp) => sp.problemId));

  const problemsWithSolvedStatus = problems.map((problem) => ({
    ...problem,
    isSolved: solvedProblemIds.has(problem.id),
  }));

  res.status(200).json(
    new ApiResponse(
      200,
      {
        problems: problemsWithSolvedStatus,
        totalPages: totalProblemPages,
        currentPage: page,
        limit,
      },
      "Problems fetched successfully"
    )
  );
});

const getTagWiseProblemListsMetrics = asyncHandler(async (req, res) => {
  const { tag } = req.params; // Tag to filter problem lists
  const ref = req.query.ref; // Reference to filter problem lists
  
  let whereClause = {};
  if (ref === "topic") {
    const tagArray = Array.isArray(tag) ? tag : [tag];
    whereClause.tags = {
      hasSome: tagArray,
    };
  }
  if (ref === "company") {
    const tagArray = Array.isArray(tag) ? tag : [tag];
    whereClause.companies= {
      hasSome: tagArray,
    };
  }

  const totalProblemsCount = await db.problem.count({
    where: {
      ...whereClause,
    },
  });

  const totalSolvedProblemsCount = await db.problemsSolved.count({
    where: {
      problem: {
        ...whereClause,
      },
      userId: req.user.id,
    },
  });

  const totalEasyProblemsCount = await db.problem.count({
    where: {
      ...whereClause,
      difficulty: "EASY",
    },
  });
  const totalMediumProblemsCount = await db.problem.count({
    where: {
      ...whereClause,
      difficulty: "MEDIUM",
    },
  });
  const totalHardProblemsCount = await db.problem.count({
    where: {
      ...whereClause,
      difficulty: "HARD",
    },
  });

  const totalSolvedEasyProblemsCount = await db.problemsSolved.count({
    where: {
      problem: {
        ...whereClause,
        difficulty: "EASY",
      },
      userId: req.user.id,
    },
  });

  const totalSolvedMediumProblemsCount = await db.problemsSolved.count({
    where: {
      problem: {
        ...whereClause,
        difficulty: "MEDIUM",
      },
      userId: req.user.id,
    },
  });

  const totalSolvedHardProblemsCount = await db.problemsSolved.count({
    where: {
      problem: {
        ...whereClause,
        difficulty: "HARD",
      },
      userId: req.user.id,
    },
  });

  const metrics = {
    totalProblems: totalProblemsCount,
    totalSolvedProblems: totalSolvedProblemsCount,
    totalEasyProblems: totalEasyProblemsCount,
    totalMediumProblems: totalMediumProblemsCount,
    totalHardProblems: totalHardProblemsCount,
    totalSolvedEasyProblems: totalSolvedEasyProblemsCount,
    totalSolvedMediumProblems: totalSolvedMediumProblemsCount,
    totalSolvedHardProblems: totalSolvedHardProblemsCount,
  };

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        metrics,
        "Problem list metrics retrieved successfully"
      )
    );
});

export {
  getAllProblemLists,
  getProblemListMetricsById,
  createProblemList,
  updateProblemList,
  deleteProblemList,
  addProblemToList,
  removeProblemFromList,
  getProblemsPerProblemList,
  getTagWiseProblemLists,
  getTagWiseProblemListsMetrics,
};
