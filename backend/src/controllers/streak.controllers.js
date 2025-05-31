import { ApiResponse, asyncHandler } from "../libs/helpers.js";
import { db } from "../libs/db.js";

export const addNewDailyChallenge = async () => {
  try {
    const currDate = new Date();
    const todayChallenge = await db.dailyChallenge.findFirst({
      where: {
        date: {
          gte: new Date(
            currDate.getFullYear(),
            currDate.getMonth(),
            currDate.getDate()
          ),
          lt: new Date(
            currDate.getFullYear(),
            currDate.getMonth(),
            currDate.getDate() + 1
          ),
        },
      },
    });

    if (todayChallenge) {
      return;
    }

    const newProblem = await db.$queryRaw`
      SELECT * FROM "Problem"
      WHERE id NOT IN (
        SELECT "problemId"
        FROM "DailyChallenge"
        WHERE "date" >= NOW() - INTERVAL '7 days'
      )
      ORDER BY RANDOM()
      LIMIT 1
    `;

    if (newProblem.length === 0) {
      return;
    }
    await db.dailyChallenge.create({
      data: {
        problemId: newProblem[0].id,
        date: new Date(),
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getDailyChallenge = asyncHandler(async (req, res) => {
  const currDate = new Date();
  const firstDayOfMonth = new Date(
    currDate.getFullYear(),
    currDate.getMonth(),
    1
  );

  const monthWiseDailyChallenges = await db.dailyChallenge.findMany({
    where: {
      date: {
        gte: firstDayOfMonth,
      },
    },
    include: {
      problem: true,
    },
  });

  console.log("Month Wise Challenges:", monthWiseDailyChallenges);
  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        monthWiseDailyChallenges,
        "Daily challenge fetched successfully"
      )
    );
});
