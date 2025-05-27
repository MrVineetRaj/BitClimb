import express from "express";
import {
  adminAuthMiddleware,
  authMiddleware,
} from "../middlewares/auth.middleware.js";
import { createProblemValidator } from "../validators/problem.validator.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  getSubmissionById,
  getSubmissionsByProblem,
  getAllSubmissionsOfUser,
} from "../controllers/submission.controller.js";

const submissionRouter = express.Router();

// Route to get all submissions of a user
submissionRouter.get("/user", getAllSubmissionsOfUser);
// Route to get submissions by problem ID
submissionRouter.get("/problem/:problemId", getSubmissionsByProblem);

// Route to get a submission by its ID
submissionRouter.get("/:submissionId", authMiddleware, getSubmissionById);

export default submissionRouter;
