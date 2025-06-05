import express from "express";

const adminRouter = express.Router();

import {
  addHiddenTestCases,
  deleteHiddenTestCase,
  getMetrics,
  getProblemDetails,
} from "../controllers/admin.controller.js";

import {
  authMiddleware,
  adminAuthMiddleware,
} from "../middlewares/auth.middleware.js";

adminRouter.get("/metrics", authMiddleware, adminAuthMiddleware, getMetrics);
adminRouter.get(
  "/get-problem/:problemId",
  authMiddleware,
  adminAuthMiddleware,
  getProblemDetails
);

adminRouter.post(
  "/add-hidden-test-cases/:problemId",
  authMiddleware,
  adminAuthMiddleware,
  addHiddenTestCases
);

adminRouter.delete(
  "/delete-hidden-test-cases/:testCaseId",
  authMiddleware,
  adminAuthMiddleware,
  deleteHiddenTestCase
);
export default adminRouter;
