import express from "express";

const executeCodeRouter = express.Router();

import { executeCodeValidator } from "../validators/execute-code.validator.js";
import { runCode, submitCode } from "../controllers/execute-code.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

executeCodeRouter.post(
  "/run/:problemId",
  authMiddleware,
  executeCodeValidator(),
  validate,
  runCode
);
executeCodeRouter.post(
  "/submit/:problemId",
  authMiddleware,
  executeCodeValidator(),
  validate,
  submitCode
);

export default executeCodeRouter;
