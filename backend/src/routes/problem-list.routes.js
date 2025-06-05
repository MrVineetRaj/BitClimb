import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const problemListRouter = express.Router();
import {
  getAllProblemLists,
  getProblemListMetricsById,
  createProblemList,
  updateProblemList,
  deleteProblemList,
  addProblemToList,
  removeProblemFromList,
  getProblemsPerProblemList,
} from "../controllers/problem-list.controller.js";

problemListRouter.get("/all", authMiddleware, getAllProblemLists);
problemListRouter.get(
  "/:id/metrics",
  authMiddleware,
  getProblemListMetricsById
);
problemListRouter.get(
  "/:id/problems",
  authMiddleware,
  getProblemsPerProblemList
);
problemListRouter.post("/new-problem-list", authMiddleware, createProblemList);
problemListRouter.put("/:id", authMiddleware, updateProblemList);
problemListRouter.delete("/:id", authMiddleware, deleteProblemList);
problemListRouter.post("/add-problem", authMiddleware, addProblemToList);

problemListRouter.post(
  "/:id/remove-problem",
  authMiddleware,
  removeProblemFromList
);

export default problemListRouter;
