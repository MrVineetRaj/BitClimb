import { Router } from "express";
import {
  authMiddleware,
  adminAuthMiddleware,
} from "../middlewares/auth.middleware.js";

import {
  createProblem,
  getProblems,
  getProblemById,
  updateProblem,
  deleteProblem,
  getAllSolvedProblems,
} from "../controllers/problems.controller.js";

const router = Router();

router.post(
  "/create-problem",
  authMiddleware,
  adminAuthMiddleware,
  createProblem
);

router.get("/get-all-problems", getProblems);

router.get("/get-problem/:problemId", authMiddleware, getProblemById);

router.put(
  "/update-problem/:problemId",
  authMiddleware,
  adminAuthMiddleware,
  updateProblem
);

router.delete(
  "/delete-problem/:problemId",
  authMiddleware,
  adminAuthMiddleware,
  deleteProblem
);

router.get("/get-solved-problems/:slug", authMiddleware, getAllSolvedProblems);
export default router;
