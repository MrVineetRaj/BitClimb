import express from "express";

import {
  getUserProfileMetrics,
  tagWiseProblemSolvedCntByUser,
} from "../controllers/profile.controller.js";

const profileRouter = express.Router();

// Route to get user profile metrics
profileRouter.get("/basic-metrics", getUserProfileMetrics);
profileRouter.get("/tag-wise-problems-solved", tagWiseProblemSolvedCntByUser);

// Export the router
export default profileRouter;
