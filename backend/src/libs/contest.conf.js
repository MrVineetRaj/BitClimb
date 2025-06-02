import { db } from "./db.js";

const metricsForNormalizingContestData = async (
  problemIdWiseSubmissions,
  contestId,
  endTime
) => {
  const contestProblemIds = Object.keys(problemIdWiseSubmissions);
  const submissionsArray = Object.values(problemIdWiseSubmissions);

  let metrics = Array.from({
    length: contestProblemIds.length,
  });

  // Fix: Change from id to contestId
  const participationCount = await db.contestParticipation.count({
    where: {
      contestId: contestId, // Fix: was using 'id' instead of 'contestId'
    },
  });

  // console.log(
  //   `Participation count for contest ${contestId}:`,
  //   participationCount
  // );

  for (let i = 0; i < contestProblemIds.length; i++) {
    let times = submissionsArray[i].map((sub) =>
      new Date(sub.createdAt).getTime()
    );

    // console.log(`Problem ${contestProblemIds[i]} - Submission times:`, times);

    if (times.length === 0) {
      // If no submissions for this problem, set default values
      metrics[i] = {
        contestProblemId: contestProblemIds[i],
        mean: 0,
        stdDeviation: 0,
      };
      continue;
    }

    const endTimeInMs = new Date(endTime).getTime();
    const arrayForOtherParticipants = Array.from(
      { length: participationCount - times.length },
      () => endTimeInMs
    );

    times = [...times, ...arrayForOtherParticipants];

    // console.log(
    //   `Total times array for problem ${contestProblemIds[i]}:`,
    //   times.length
    // );

    // Check if participationCount is 0 to avoid division by zero
    if (participationCount === 0) {
      metrics[i] = {
        contestProblemId: contestProblemIds[i],
        mean: 0,
        stdDeviation: 0,
      };
      continue;
    }

    const mean = times.reduce((sum, t) => sum + t, 0) / participationCount;

    const variance =
      times.reduce((acc, t) => acc + Math.pow(t - mean, 2), 0) /
      participationCount;

    const stdDeviation = Math.sqrt(variance);

    // console.log(
    //   `Problem ${contestProblemIds[i]} - Mean: ${mean}, StdDev: ${stdDeviation}`
    // );

    metrics[i] = {
      contestProblemId: contestProblemIds[i],
      mean,
      stdDeviation,
    };
  }

  return metrics.filter((metric) => metric !== undefined); // Filter out undefined metrics
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

  // console.log(
  //   `\n\nCalculating rating for user ${userId} in contest ${contestId} with ${submissions.length} accepted submissions`,
  //   JSON.stringify(submissions, null, 2)
  // );
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

  // console.log(problemMap);
  for (const metric of metrics) {
    const { contestProblemId, mean, stdDeviation } = metric;
    // console.log(
    //   `Processing metric for problem ${contestProblemId} with mean ${mean} and stdDeviation ${stdDeviation}`
    // );
    const data = problemMap.get(contestProblemId);
    // console.log("data", data);
    if (!data || stdDeviation === 0) continue;

    // console.log(
    //   `Calculating score for problem ${contestProblemId} with finish time ${data.finishTime}, mean ${mean}, stdDeviation ${stdDeviation}`
    // );
    const normalizedScore = (data.finishTime - mean) / stdDeviation;
    const scaled = Math.ceil(normalizedScore * data.points);

    userScore += scaled;
    // console.log(
    //   `Problem ${contestProblemId} -Point : ${data.points}, Normalized Score: ${normalizedScore}, Scaled Score: ${scaled}`
    // );
    // console.log(`Current user score: ${userScore}`);
  }

  // console.log(
  //   `\n\nUser ${userId} has a total score of ${userScore} in contest ${contestId}`
  // );
  const existingParticipation = await db.contestParticipation.findUnique({
    where: {
      userId_contestId: {
        userId,
        contestId,
      },
    },
    select: {
      rating: true,
    },
  });

  const currentRating = existingParticipation?.rating || 0;
  const newRating = currentRating + userScore;

  // console.log(
  //   `User ${userId} has a score of ${userScore} and current rating of ${currentRating} in contest ${contestId}`
  // );
  // // Update or create the contest participation record
  // console.log(
  //   `Updating contest participation for user ${userId} in contest ${contestId} with score ${userScore} and new rating ${newRating}`
  // );
  const updatedProfile = await db.contestParticipation.upsert({
    where: {
      userId_contestId: {
        userId,
        contestId,
      },
    },
    update: {
      score: userScore,
      rating: newRating, // Increment the rating
    },
    create: {
      userId,
      contestId,
      score: userScore,
      rating: 800 + newRating,
    },
  });

  // console.log(
  //   `Updated rating for user ${userId} in contest ${contestId}: ${updatedProfile.rating}`
  // );
};

const updateContestRating = async (contestId, endTime) => {
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

  const metrics = await metricsForNormalizingContestData(
    problemIdWiseSubmissions,
    contestId,
    endTime
  );

  // console.log(
  //   `Contest metrics calculated for contestId: ${contestId} with ${metrics.length} problems and metrics` +
  //     JSON.stringify(metrics, null, 2)
  // );
  const userIds = new Set(
    contestWiseAllAcceptedSubmissions.map((sub) => sub.userId)
  );

  // console.log(
  //   `\n\nUpdating contest ratings for ${userIds.size} users in contestId: ${contestId}`
  // );

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
      endTime: {
        lte: new Date(), 
      },
    },
    select: {
      id: true,
      endTime: true,
    },
  });

  for (const contest of contests) {
    // console.log(`Updating ratings for contestId: ${contest.id}`);
    await updateContestRating(contest.id, contest.endTime);
  }

  // Mark contests as ranking completed
  await db.contest.updateMany({
    where: {
      id: {
        in: contests.map((contest) => contest.id),
      },
    },
    data: {
      isRankingCompleted: true,
    },
  });
};

export { findAndUpdateContestRatings };
