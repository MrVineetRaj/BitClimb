import express from "express";
import { adminAuthMiddleware, authMiddleware } from "../middlewares/auth.middleware.js";
import { createProblemValidator } from "../validators/problem.validator.js";
import { validate } from "../middlewares/validator.middleware.js";
import { createProblem } from "../controllers/problems.controller.js";



const problemRouter = express.Router();


problemRouter.post(
  "/create-problem",
  authMiddleware,
  adminAuthMiddleware,
  createProblemValidator(),
  validate,
  createProblem
);

export default problemRouter;