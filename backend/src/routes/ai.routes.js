import express from "express";

import {
  reviewCodeController,
  testCaseGenerationController,
} from "../controllers/ai.controllers.js";
import {
  adminAuthMiddleware,
  authMiddleware,
} from "../middlewares/auth.middleware.js";

const aiRouter = express.Router();
aiRouter.post(
  "/review-code/:submission_id",
  authMiddleware,
  reviewCodeController
);

aiRouter.post(
  "/test-case-generation",
  authMiddleware,
  adminAuthMiddleware,
  testCaseGenerationController
);

export default aiRouter;
