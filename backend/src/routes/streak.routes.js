import express from "express";

import { getDailyChallenge } from "../controllers/streak.controllers.js";
const streakRouter = express.Router();

streakRouter.get("/month-wise-daily-challenge", getDailyChallenge);

export default streakRouter;
