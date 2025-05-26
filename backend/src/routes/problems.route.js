import express from "express";
import {
  adminAuthMiddleware,
  authMiddleware,
} from "../middlewares/auth.middleware.js";
import { createProblemValidator } from "../validators/problem.validator.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  createProblem,
  deleteProblem,
  getAllProblems,
  getProblemById,
} from "../controllers/problems.controller.js";

const problemRouter = express.Router();

problemRouter.post(
  "/create-problem",
  authMiddleware,
  adminAuthMiddleware,
  createProblemValidator(),
  validate,
  createProblem
);

problemRouter.get("/get-problems", getAllProblems);
problemRouter.get("/get-problem/:id", getProblemById);
problemRouter.delete(
  "/delete-problem/:id",
  authMiddleware,
  adminAuthMiddleware,
  deleteProblem
);

export default problemRouter;
