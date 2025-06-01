import { db } from "../libs/db.js";
import { asyncHandler, ApiError, ApiResponse } from "../libs/helpers.js";

const createContest = asyncHandler(async (req, res) => {
  if (req.user?.role != "ADMIN") {
    throw new ApiError(403, "You are not an admin");
  }

  const {
    title,
    description,
    startTime,
    endTime,
    problems,
    problemIndex,
    problemPoints,
  } = req.body;

  const newContest = await db?.contest.create({
    title,
    description: description || "",
    startTime: new Date(startTime),
    endTime: new Date(endTime),
  });

  if (!newContest) {
    throw new ApiError(500, "Failed to create new contest");
  }
  await Promise.all(
    problems?.map(async (problem, idx) => {
      return db.contestProblem.create({
        data: {
          contestId: newContest.id,
          problemId: problem,
          problemIndex: problemIndex[idx],
          points: problemPoints[idx],
        },
      });
    })
  );

  res
    .status(201)
    .json(new ApiResponse(201, {}, "Contest created successfully"));
});

const getContest = asyncHandler(async (req, res) => {
  const { contestId } = req.params;

  const contest = await db.contest.findFirst({
    where: {
      id: contestId,
    },
    include: {
      problems: true,
    },
  });

  if (!contest) {
    throw new ApiError(404, "Contest not found");
  }
});
const getAllContests = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.page) || 10;
  const now = new Date();
  const type = req.query.typeOfContest || "DEFAULT";

  const whereCondition =
    type === "BANNER"
      ? {
          OR: [
            { startTime: { gt: now } }, // Upcoming
            {
              startTime: { lte: now },
              endTime: { gte: now }, // Ongoing
            },
          ],
        }
      : {
          endTime: { lte: now }, // Past
        };

  const contests = await db.contest.findMany({
    where: whereCondition,
    orderBy: { startTime: "desc" },
    skip: (page - 1) * limit,
    take: limit,
  });

  if (!contests || contests?.length <= 0) {
    return res.status(200).json(new ApiResponse(200, [], "Contest fetched"));
  }

  res.status(200).json(new ApiResponse(200, contests, "Contest fetched"));
});

//todo
const updateContest = asyncHandler(async (req, res) => {});

// todo
const deleteContest = asyncHandler(async (req, res) => {});

// todo
const getContestParticipation = asyncHandler(async (req, res) => {});

//  todo
const getContestSubmissions = asyncHandler(async (req, res) => {});

const registerUserForContest = asyncHandler(async (req, res) => {
  const { contestId } = req.params;
  const userId = req.user.id;

  await db.contestParticipation.create({
    data: {
      userId,
      contestId,
    },
  });
});

// todo
const unregisterUserFromContest = asyncHandler(async (req, res) => {});

const getContestLeaderboard = asyncHandler(async (req, res) => {
  const { contestId } = req.params;
  const userID = req.user.id;

  const acceptedSubmissions = await db.contestSubmission.findMany({
    where: {
      contestId,
      status: "Accepted",
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });

  const latestAcceptedPerUser = new Map();

  for (let i = 0; i < acceptedSubmissions.length; i++) {
    const submission = acceptedSubmissions[i];

    if (!latestAcceptedPerUser.has(submission.userId)) {
      latestAcceptedPerUser.set(submission.userId, {
        userId: submission.userId,
        name: submission.user.name,
        submissions: [submission],
      });
    } else {
      latestAcceptedPerUser.get(submission.userId).submissions.push(submission);
    }
  }

  const result = Array.from(latestAcceptedPerUser.values());

  result.sort((a, b) => b.submissions.length - a.submissions.length);

  // Optional: calculate current user's rank
  let currentRankOfUser = null;
  for (let i = 0; i < result.length; i++) {
    if (result[i].userId === userID) {
      currentRankOfUser = i + 1;
      break;
    }
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { leaderboard: result, currentRankOfUser },
        "Live rank list fetched"
      )
    );
});

const updateUserRating = asyncHandler(async (req, res) => {});

export {
  createContest,
  getContest,
  getAllContests,
  updateContest,
  deleteContest,
  getContestProblem,
  getContestSubmissions,
  registerUserForContest,
  unregisterUserFromContest,
  getContestLeaderboard,
  updateUserRating,
};
