import { db } from "./db.js";

const metricsForNormalizingContestData = (problemIdWiseSubmissions) => {
  //problemIdWiseSubmission => an array
  const contestProblemIds = Object.keys(problemIdWiseSubmissions);
  const submissionsArray = Object.values(problemIdWiseSubmissions);

  let metrics = Array.from({
    length: contestProblemIds.length,
  });

  for (let i = 0; i < contestProblemIds.length; i++) {
    const times = submissionsArray[i].map((sub) =>
      new Date(sub.createdAt).getTime()
    );

    if (times.length === 0) continue;

    const mean = times.reduce((sum, t) => sum + t, 0) / times.length;

    const variance =
      times.reduce((acc, t) => acc + Math.pow(t - mean, 2), 0) / times.length;

    const stdDeviation = Math.sqrt(variance);

    metrics[i] = {
      contestProblemId: contestProblemIds[i],
      mean,
      stdDeviation,
    };
  }

  return metrics;
};

const updateContestRatingPerUser = async (userId, metrics, contestId) => {
  const submissions = await db.contestSubmission.findMany({
    where: {
      userId,
      contestId,
      status: "Accepted",
    },
    orderBy: {
      createdAt: "asc",
    },
    select: {
      createdAt: true,
      contestProblemId: true,
      contestProblem: {
        select: {
          points: true,
        },
      },
    },
  });

  const problemMap = new Map();

  for (const submission of submissions) {
    if (!problemMap.has(submission.contestProblemId)) {
      problemMap.set(submission.contestProblemId, {
        finishTime: new Date(submission.createdAt).getTime(),
        points: submission.contestProblem.points || 0,
      });
    }
  }

  let userScore = 0;

  for (const metric of metrics) {
    const { problemId, mean, stdDeviation } = metric;

    const data = problemMap.get(problemId);
    if (!data || stdDeviation === 0) continue;

    const normalizedScore = (data.finishTime - mean) / stdDeviation;
    const scaled = Math.ceil(normalizedScore * data.points);

    userScore += scaled;
  }

  return userScore;
};

const updateContestRating = async (contestId) => {
  const contestWiseAllAcceptedSubmissions = await db.contestSubmission.findMany(
    {
      where: {
        contestId,
        status: "Accepted",
      },
    }
  );

  if (contestWiseAllAcceptedSubmissions.length === 0) {
    return;
  }

  const problemIdWiseSubmissions = contestWiseAllAcceptedSubmissions.reduce(
    (acc, sub) => {
      if (!acc[sub.contestProblemId]) {
        acc[sub.contestProblemId] = [];
      }
      acc[sub.contestProblemId].push(sub);
      return acc;
    },
    {}
  );

  const metrics = metricsForNormalizingContestData(problemIdWiseSubmissions);

  const userIds = new Set(
    contestWiseAllAcceptedSubmissions.map((sub) => sub.userId)
  );

  for (const userId of userIds) {
    await updateContestRatingPerUser(userId, metrics, contestId);
  }

  console.log(
    `Contest rating updated for contestId: ${contestId} with ${userIds.size} users`
  );
};

const findAndUpdateContestRatings = async () => {
  const contests = await db.contest.findMany({
    where: {
      isRankingCompleted: false,
    },
    select: {
      id: true,
    },
  });

  for (const contest of contests) {
    await updateContestRating(contest.id);
  }
};

export { findAndUpdateContestRatings };
