import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const problemListRouter = express.Router();
import {
  getAllProblemLists,
  getProblemListById,
  createProblemList,
  updateProblemList,
  deleteProblemList,
  addProblemToList,
  removeProblemFromList,
} from "../controllers/problem-list.controller.js";

problemListRouter.get("/", authMiddleware, getAllProblemLists);
problemListRouter.get("/:id", authMiddleware, getProblemListById);
problemListRouter.post("/", authMiddleware, createProblemList);
problemListRouter.put("/:id", authMiddleware, updateProblemList);
problemListRouter.delete("/:id", authMiddleware, deleteProblemList);
problemListRouter.post("/:id/add-problem", authMiddleware, addProblemToList);
problemListRouter.post(
  "/:id/remove-problem",
  authMiddleware,
  removeProblemFromList
);

export default problemListRouter;
