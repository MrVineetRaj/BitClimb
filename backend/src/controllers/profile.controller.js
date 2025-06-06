// import { ProblemDifficulty } from "../generated/prisma.js";
import { db } from "../libs/db.js";
import { ApiResponse, asyncHandler } from "../libs/helpers.js";

const ProblemDifficulty = {
  EASY: "EASY",
  MEDIUM: "MEDIUM",
  HARD: "HARD",
};
export const getUserProfileMetrics = asyncHandler(async (req, res) => {
  const userId = req.query.userid;

  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  const user = await db.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      avatar: true,
      rank: true,
    },
  });

  const contestRatings = await db.contestParticipation.findMany({
    where: { userId: userId },
    select: {
      contestId: true,
      rating: true,
      rank: true,
    },
  });

  const numberOfProblems = {
    total: await db.problem.count(),
    easy: await db.problem.count({
      where: { difficulty: ProblemDifficulty.EASY },
    }),
    medium: await db.problem.count({
      where: { difficulty: ProblemDifficulty.MEDIUM },
    }),
    hard: await db.problem.count({
      where: { difficulty: ProblemDifficulty.HARD },
    }),
    solved: await db.problemsSolved.count({ where: { userId: userId } }),
    solvedEasy: await db.problemsSolved.count({
      where: {
        userId: userId,
        problem: { difficulty: ProblemDifficulty.EASY },
      },
    }),
    solvedMedium: await db.problemsSolved.count({
      where: {
        userId: userId,
        problem: { difficulty: ProblemDifficulty.MEDIUM },
      },
    }),
    solvedHard: await db.problemsSolved.count({
      where: {
        userId: userId,
        problem: { difficulty: ProblemDifficulty.HARD },
      },
    }),
  };

  const submissionsCnt = {
    total: await db.submissions.count({
      where: { userId: userId },
    }),
    accepted: await db.submissions.count({
      where: { userId: userId, isAccepted: true },
    }),
    easy: await db.submissions.count({
      where: {
        userId: userId,
        problem: { difficulty: ProblemDifficulty.EASY },
      },
    }),
    medium: await db.submissions.count({
      where: {
        userId: userId,
        problem: { difficulty: ProblemDifficulty.MEDIUM },
      },
    }),
    hard: await db.submissions.count({
      where: {
        userId: userId,
        problem: { difficulty: ProblemDifficulty.HARD },
      },
    }),

    acceptedEasy: await db.submissions.count({
      where: {
        userId: userId,
        isAccepted: true,
        problem: { difficulty: ProblemDifficulty.EASY },
      },
    }),
    acceptedMedium: await db.submissions.count({
      where: {
        userId: userId,
        isAccepted: true,
        problem: { difficulty: ProblemDifficulty.MEDIUM },
      },
    }),
    acceptedHard: await db.submissions.count({
      where: {
        userId: userId,
        isAccepted: true,
        problem: { difficulty: ProblemDifficulty.HARD },
      },
    }),
  };

  const languageStats = await db.submissions.groupBy({
    by: ["language"],
    where: { userId: userId, isAccepted: true },
    _count: {
      language: true,
    },
  });

  // Or as an object for easier access
  const submissionsPerLanguageObj = languageStats.reduce((acc, stat) => {
    acc[stat.language] = stat._count.language;
    return acc;
  }, {});

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user,
        contestRatings,
        numberOfProblems,
        submissionsPerLanguage: submissionsPerLanguageObj,
        submissionsCnt,
      },
      "User profile metrics retrieved successfully"
    )
  );
});

export const tagWiseProblemSolvedCntByUser = asyncHandler(async (req, res) => {
  const userId = req.query.userid;

  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  // Get all problems solved by the user with their tags
  const problemsSolved = await db.problemsSolved.findMany({
    where: { userId: userId },
    include: {
      problem: {
        select: {
          tags: true,
        },
      },
    },
  });

  // Count problems by tags
  const tagCounts = {};

  problemsSolved.forEach((solved) => {
    solved.problem.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        tagCounts,
        "Tag-wise problem solved count retrieved successfully"
      )
    );
});
