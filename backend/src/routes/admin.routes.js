import express from "express";

const adminRouter = express.Router();

import { getMetrics } from "../controllers/admin.controller.js";

import {
  authMiddleware,
  adminAuthMiddleware,
} from "../middlewares/auth.middleware.js";

adminRouter.get("/metrics", authMiddleware, adminAuthMiddleware, getMetrics);

export default adminRouter;
