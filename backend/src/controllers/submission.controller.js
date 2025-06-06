import { db } from "../libs/db.js";

import { ApiResponse, asyncHandler } from "../libs/helpers.js";
export const getAllSubmissionsOfUser = asyncHandler(async (req, res) => {
  const { userId, isAccepted } = req.query;
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;

  let whereCondition = {
    userId: userId,
  };

  if (isAccepted === "true") {
    whereCondition = {
      ...whereCondition,
      status: "Accepted",
    };
  }

  const submissions = await db.submissions.findMany({
    where: whereCondition,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      problem: {
        select: {
          title: true,
          difficulty: true,
        },
      },
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  const submissionsCnt = await db.submissions.count({
    where: whereCondition,
  });

  const totalPages = Math.ceil(submissionsCnt / limit);

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { submissions, totalPages, currentPage: page, limit },
        "Submissions count fetched successfully"
      )
    );
});

export const getSubmissionsByProblemForUser = asyncHandler(async (req, res) => {
  const { problemId } = req.params;

  const submissions = await db.submissions.findMany({
    where: {
      problemId: problemId,
      userId: req.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      problem: {
        select: {
          title: true,
          description: true,
        },
      },
    },
  });

  res
    .status(200)
    .json(
      new ApiResponse(200, submissions, "Submissions fetched successfully")
    );
});

export const getSubmissionById = asyncHandler(async (req, res) => {
  const { submissionId } = req.params;

  const userId = req.user.id; // Assuming user ID is available in req.user
  const submission = await db.submissions.findFirst({
    where: {
      id: submissionId,
      userId: userId,
    },
    include: {
      problem: {
        select: {
          title: true,
          description: true,
          difficulty: true,
          tags: true,
          constraints: true,
        },
      },
      user: {
        select: {
          name: true,
        },
      },
    },
  });

  if (!submission) {
    return res
      .status(404)
      .json(new ApiResponse(404, {}, "Submission not found"));
  }

  res
    .status(200)
    .json(new ApiResponse(200, submission, "Submission fetched successfully"));
});

export const getSubmissionsCntPerYearForPublicProfile = asyncHandler(
  async (req, res) => {
    const { userId } = req.params;
    const { year } = req.query;

    const result = await db.$queryRaw`
    SELECT 
      DATE("createdAt") AS date, 
      COUNT(*) AS count 
    FROM "Submissions"
    WHERE "userId" = ${userId}
      AND EXTRACT(YEAR FROM "createdAt") = ${Number(year)}
    GROUP BY DATE("createdAt")
    ORDER BY date ASC;
  `;
    // Convert BigInt count to Number
    const safeResult = result.map((entry) => ({
      date: entry.date,
      count: Number(entry.count),
    }));

    // console.log("Result:", safeResult);
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { result: safeResult },
          "Submissions per year fetched successfully"
        )
      );
  }
);
