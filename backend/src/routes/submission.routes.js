import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";

import {
  getSubmissionById,
  getSubmissionsByProblemForUser,
  getAllSubmissionsOfUser,
  getSubmissionsCntPerYearForPublicProfile,
} from "../controllers/submission.controller.js";

const submissionRouter = express.Router();

// Route to get all submissions of a user
submissionRouter.get("/user", getAllSubmissionsOfUser);
// Route to get submissions by problem ID
submissionRouter.get("/problem/:problemId",authMiddleware, getSubmissionsByProblemForUser);

// Route to get a submission by its ID
submissionRouter.get("/:submissionId", authMiddleware, getSubmissionById);

submissionRouter.get("/heatmap-submission-count/:userId", getSubmissionsCntPerYearForPublicProfile);

export default submissionRouter;
