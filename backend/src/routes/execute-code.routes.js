import express from "express";

const executeCodeRouter = express.Router();

import { executeCodeValidator } from "../validators/execute-code.validator.js";
import { executeCode } from "../controllers/execute-code.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

executeCodeRouter.post(
  "/problem/:problemId",
  authMiddleware,
  executeCodeValidator(),
  validate,
  executeCode
);

export default executeCodeRouter;