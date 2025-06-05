import { UserRole } from "../generated/prisma/index.js";
import { db } from "../libs/db.js";
import { ApiResponse, asyncHandler } from "../libs/helpers.js";

export const getMetrics = asyncHandler(async (req, res) => {
  const metrics = {
    users: await db.user.count(),
    problems: await db.problem.count(),
    contests: await db.contest.count(),
    admins: await db.user.count({
      where: {
        role: UserRole.ADMIN,
      },
    }),
  };

  res
    .status(200)
    .json(new ApiResponse(200, metrics, "Metrics fetched successfully"));
});


