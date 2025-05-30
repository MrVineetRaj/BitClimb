import express from "express";

import { reviewCodeController } from "../controllers/ai.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const aiRouter = express.Router();
aiRouter.post(
  "/review-code/:submission_id",
  authMiddleware,
  reviewCodeController
);

export default aiRouter;
