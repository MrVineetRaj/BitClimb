import { db } from "../libs/db.js";

import { ApiResponse, asyncHandler } from "../libs/helpers.js";
export const getAllSubmissionsOfUser = asyncHandler(async (req, res) => {
  const { userId, isAccepted } = req.query;
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;
  console.log(typeof isAccepted);

  let whereCondition = {
    userId: userId,
  };

  if (isAccepted === "true") {
    whereCondition = {
      ...whereCondition,
      status: "ACCEPTED",
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
    where: whereCondition
  });

  const totalPages = Math.ceil(submissionsCnt / limit);
  if(isAccepted) console.log("submissionsCnt",submissionsCnt,totalPages);

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
  });

  if (!submission) {
    return res.status(404).json(
      new ApiResponse({
        statusCode: 404,
        message: "Submission not found",
      })
    );
  }

  res.status(200).json(
    new ApiResponse({
      statusCode: 200,
      message: "Submission fetched successfully",
      data: submission,
    })
  );
});
