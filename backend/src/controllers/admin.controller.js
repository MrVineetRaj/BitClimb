import { db } from "../libs/db.js";
import { asyncHandler } from "../libs/helpers.js";

export const getMetrics = asyncHandler(async (req, res) => {
  const metrics = {
    users: await db.user.count(),
    problems: await db.problem.count(),
    // contests: await db.contest.count(),
    submissions: await db.submissions.count(),
  };

  res.status(200).json({
    status: "success",
    data: metrics,
  });
});

