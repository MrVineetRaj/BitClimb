import express from "express";
// import { ApiError,ApiResponse,A } from '../libs/helpers.js';
import {
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
} from "../controllers/contest.controller.js";
import {
  adminAuthMiddleware,
  authMiddleware,
} from "../middlewares/auth.middleware.js";

const contestRouter = express.Router();

contestRouter.post("/", authMiddleware, adminAuthMiddleware, createContest);
contestRouter.get("/", getAllContests);
contestRouter.get("/:contestId", authMiddleware, getContest);
contestRouter.put(
  "/:contestId",
  authMiddleware,
  adminAuthMiddleware,
  updateContest
);
contestRouter.delete(
  "/:contestId",
  authMiddleware,
  adminAuthMiddleware,
  deleteContest
);
contestRouter.get(
  "/:contestId/problems",
  authMiddleware,
  getContestProblem,
);

contestRouter.get(
  "/:contestId/submissions",
  authMiddleware,
  getContestSubmissions,
);
contestRouter.post(
  "/:contestId/register",
  authMiddleware,
  registerUserForContest
);
contestRouter.post(
  "/:contestId/unregister",
  authMiddleware,
  unregisterUserFromContest
);
contestRouter.get(
  "/:contestId/leaderboard",
  authMiddleware,
  getContestLeaderboard
);
contestRouter.post(
  "/:contestId/update-rating",
  authMiddleware,
  adminAuthMiddleware,
  updateUserRating
);

export default contestRouter;
