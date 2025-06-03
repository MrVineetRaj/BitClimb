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
    data: {
      title: title,
      description: description || "",
      startTime: new Date(startTime),
      endTime: new Date(endTime),
    },
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
  });

  const isParticipated = await db.contestParticipation.findFirst({
    where: {
      contestId: contestId,
      userId: req.user.id,
    },
    select: {
      id: true,
    },
  });

  // console.log("Contest fetched:", contest);
  if (!contest) {
    throw new ApiError(404, "Contest not found");
  }

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { contest, isParticipated: !!isParticipated },
        "Contest fetched"
      )
    );
});
const getAllContests = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const now = new Date();
  const type = req.query.typeOfContest || "DEFAULt";
  // console.log("query:", req.query);

  // console.log("Query type:", type);
  // console.log("Current time:", now);
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
      : {}; // This should return all contests when type is not "BANNER"
  // console.log("Where condition:", JSON.stringify(whereCondition, null, 2));

  // First, let's check if there are any contests at all
  const totalContests = await db.contest.count();
  // console.log("Total contests in database:", totalContests);

  const contests = await db.contest.findMany({
    where: whereCondition,
    orderBy: { startTime: "desc" },
    skip: (page - 1) * limit,
    take: limit,
  });

  // console.log("Contests fetched:", contests);
  // console.log("Number of contests found:", contests.length);

  if (!contests || contests?.length <= 0) {
    return res.status(200).json(new ApiResponse(200, [], "Contest fetched"));
  }

  res.status(200).json(new ApiResponse(200, contests, "Contest fetched"));
});

// 223.181.34.191
//todo
const updateContest = asyncHandler(async (req, res) => {});

// todo
const deleteContest = asyncHandler(async (req, res) => {});

// todo
const getContestProblems = asyncHandler(async (req, res) => {
  const { contestId } = req.params;
  const problems = await db.contestProblem.findMany({
    where: {
      contestId,
    },
    include: {
      problem: {
        select: {
          id: true,
          title: true,
        },
      },
    },
  });
  if (!problems || problems.length === 0) {
    throw new ApiError(404, "No problems found for this contest");
  }
  res
    .status(200)
    .json(
      new ApiResponse(200, problems, "Contest problems fetched successfully")
    );
});

//  todo
const getContestSubmissions = asyncHandler(async (req, res) => {});

const registerUserForContest = asyncHandler(async (req, res) => {
  const { contestId } = req.params;
  const userId = req.user.id;

  const prevParticipationOfUser = await db.contestParticipation.findFirst({
    where: {
      userId,
    },
    select: {
      rating: true,
      contestId: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const isParticipated = await db.contestParticipation.create({
    data: {
      userId,
      contestId,
      rating: prevParticipationOfUser?.rating || 800,
    },
  });

  res.status(200).json(
    new ApiResponse(
      200,
      {
        isParticipated: !!isParticipated,
      },
      "User registered for contest successfully"
    )
  );
});

// todo
const unregisterUserFromContest = asyncHandler(async (req, res) => {
  const { contestId } = req.params;
  const userId = req.user.id;

  // console.log("Unregistering user:", userId, "from contest:", contestId);
  const isParticipated = await db.contestParticipation.delete({
    where: {
      userId_contestId: {
        userId,
        contestId,
      },
    },
  });

  res.status(200).json(
    new ApiResponse(
      200,
      {
        isParticipated: !!!isParticipated, // Invert the boolean to indicate unregistration
      },
      "User unregistered from contest successfully"
    )
  );
});

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

  const contest = await db.contest.findFirst({
    where: {
      id: contestId,
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

  const contestProblems = await db.contestProblem.findMany({
    where: {
      contestId,
    },
    select: {
      problemId: true,
      points: true,
      problemIndex: true,
    },
  });

  res.status(200).json(
    new ApiResponse(
      200,
      {
        contest: contest,
        leaderboard: result,
        currentRankOfUser,
        contestProblems,
      },
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
  getContestProblems,
  getContestSubmissions,
  registerUserForContest,
  unregisterUserFromContest,
  getContestLeaderboard,
  updateUserRating,
};
