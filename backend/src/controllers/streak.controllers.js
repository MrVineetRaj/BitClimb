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
      console.log("Challenge was already created for today", todayChallenge.id);
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
      console.log("No new problem available for daily challenge");
      return;
    }
    await db.dailyChallenge.create({
      data: {
        problemId: newProblem[0].id,
        date: new Date(),
      },
    });

    console.log("New problem selected:", newProblem[0].id);
  } catch (error) {
    console.log(error.message);
  }
};
