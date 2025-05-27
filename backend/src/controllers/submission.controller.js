import { db } from "../libs/db.js";

import { ApiResponse, asyncHandler } from "../libs/helpers.js";
export const getAllSubmissionsOfUser = asyncHandler(async (req, res) => {
  const { userId } = req.query;
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;
  const submissions = await db.submissions.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  const totalPages = Math.ceil(
    (await db.submissions.count({
      where: {
        userId: userId,
      },
    })) / limit
  );

  res.status(200).json(
    new ApiResponse({
      statusCode: 200,
      message: "Submissions fetched successfully",
      data: { submissions, totalPages, currentPage: page, limit },
    })
  );
});

export const getSubmissionsByProblem = asyncHandler(async (req, res) => {
  const { problemId } = req.params;

  const submissionsCnt = await db.submissions.count({
    where: {
      problemId: problemId,
    },
  });
  const acceptedSubmissionsCnt = await db.submissions.count({
    where: {
      problemId: problemId,
      status: "ACCEPTED",
    },
  });
  res.status(200).json(
    new ApiResponse({
      statusCode: 200,
      message: "Submissions fetched successfully",
      data: {
        submissionsCnt,
        acceptedSubmissionsCnt,
      },
    })
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
