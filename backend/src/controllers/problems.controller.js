import { db } from "../libs/db.js";
import { ApiError, ApiResponse, asyncHandler } from "../libs/helpers.js";
import {
  getJudge0LanguageId,
  pollBatchResults,
  submissionBatch,
} from "../libs/judg0.lib.js";
import { redis } from "../libs/redis.conf.js";
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
  // Invalidate ALL cached problem pages and related data
  const problemsPattern = "problems:*"; // This will match all keys starting with 'problems:'
  const problemKeys = await redis.keys(problemsPattern);

  if (problemKeys.length > 0) {
    await redis.del(problemKeys);
  }

  const totalProblemPagesPattern = "totalProblemPages:*"; // This will match the key for total problem pages
  const totalProblemPagesKey = await redis.keys(totalProblemPagesPattern);
  if (totalProblemPagesKey.length > 0) {
    await redis.del(totalProblemPagesKey);
  }

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
  const tagsQuery = req.query.tags || null; // Tags filter
  const companyQuery = req.query.company || null; // Company filter
  const searchQuery = req.query.search || null;

  // console.log("Fetching all problems with pagination:", {
  //   page,
  //   limit,
  // });
  console.log("Fetching all problems with pagination:", {
    tagsQuery,
    companyQuery,
    searchQuery,
    page,
    limit,
  });
  let problems = [];
  let totalProblemPages = 0;
  if (searchQuery || tagsQuery || companyQuery) {
    const whereClause = {};

    // Only add title filter if searchQuery exists and is not empty
    if (searchQuery && searchQuery.trim()) {
      whereClause.title = {
        contains: searchQuery.toLowerCase().trim(),
        mode: "insensitive",
      };
    }

    // Only add tags filter if tagsQuery exists and is not empty
    if (tagsQuery && tagsQuery.trim()) {
      whereClause.tags = {
        hasEvery: tagsQuery.split(";").filter((tag) => tag.trim()),
        // mode: "insensitive",
      };
    }
    // Only add companies filter if companyQuery exists and is not empty
    if (companyQuery && companyQuery.trim()) {
      whereClause.companies = {
        hasEvery: companyQuery.split(";").filter((company) => company.trim()),
        // mode: "insensitive",
      };
    }

    // console.log("Search where clause:", whereClause);
    const companies = ["Google", "Amazon"];

    // problems = await db.problem.findMany({
    //   where: {
    //     companies: {
    //       hasEvery: companies,
    //     },
    //   },
    //   select: {
    //     id: true,
    //     title: true,
    //     tags: true,
    //     difficulty: true,
    //     companies: true,
    //   },
    // });
    problems = await db.problem.findMany({
      where: whereClause,
      select: {
        id: true,
        title: true,
        tags: true,
        difficulty: true,
      },
    });
    console.log("problems fetched:", problems); // here it shows 2 values in problems
  } else {
    problems = await redis.get(`problems:${page}:${limit}:`);

    totalProblemPages = await redis.get(`totalProblemPages:${limit}`);
    if (problems && totalProblemPages) {
      problems = JSON.parse(problems);
    } else if (problems && !!totalProblemPages) {
      const totalProblems = await db.problem.count();
      totalProblemPages = Math.ceil(totalProblems / limit);

      await redis.set(
        `totalProblemPages:${limit}`,
        totalProblemPages,
        "EX",
        60 * 60 * 24 * 7 // Cache for 1 hour
      );
    } else {
      problems = await db.problem.findMany({
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
        return res
          .status(200)
          .json(new ApiResponse(404, [], "No problems found"));
      }

      const totalProblems = await db.problem.count();
      totalProblemPages = Math.ceil(totalProblems / limit);

      // Cache the problems and total pages in Redis
      await redis.set(
        `problems:${page}:${limit}:`,
        JSON.stringify(problems),
        "EX",
        60 * 60 * 24 * 7 // Cache for 1 hour
      );
      await redis.set(
        `totalProblemPages:${limit}`,
        totalProblemPages,
        "EX",
        60 // Cache for 1 hour
      );
    }
  }
  console.log("problems displaying:", problems); // here it show empty

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

  let solvedProblems = await db.problemsSolved.findMany({
    where: {
      userId: userId,
      problemId: { in: problems.map((p) => p.id) },
    },
    select: { problemId: true },
  });

  // solvedProblems.forEach((sp) => solvedProblems.set(sp.problemId, true));
  let idx = 0;

  const tempProblems = problems.map((problem) => {
    const isSolved = problem.id === solvedProblems[idx]?.problemId;
    if (isSolved) {
      idx++;
    }
    return {
      ...problem,
      isSolved: isSolved,
    };
  });

  res.status(200).json(
    new ApiResponse(
      200,
      {
        problems: tempProblems,
        totalPages: totalProblemPages,
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

  // If ref is provided, modify the query accordingly
  let problem = await redis.get(`problem:${id}:${ref}`);
  if (problem) {
    console.log(`Fetching problem from cache for ID: ${id} with ref: ${ref}`);
    problem = JSON.parse(problem);
  } else {
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
    problem = await db.problem.findUnique(findQuery);
    const submissionCount = await db.submissions.count({
      where: {
        problemId: id,
      },
    });

    const usersAttempted = await db.submissions.findMany({
      where: {
        problemId: id,
      },
      select: {
        userId: true,
      },
      distinct: ["userId"],
    });

    const acceptedCount = await db.submissions.count({
      where: {
        problemId: id,
        status: "Accepted",
      },
    });

    problem = {
      ...problem,
      acceptanceRate: submissionCount
        ? (acceptedCount / submissionCount) * 100
        : 0,
      usersAttempted: usersAttempted.length,
    };

    redis.set(
      `problem:${id}:${ref}`,
      JSON.stringify(problem),
      "EX",
      60 * 60 // Cache for 1 hour
    );
  }

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
