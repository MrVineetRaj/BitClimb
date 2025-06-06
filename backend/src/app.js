import "../sentry.js";
import * as Sentry from "@sentry/node";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

import authRoutes from "./routes/auth.routes.js";
import { ApiError } from "./libs/helpers.js";
import { CorsOptions } from "./libs/constants.js";
import problemRouter from "./routes/problems.route.js";
import executeCodeRouter from "./routes/execute-code.routes.js";
import problemListRouter from "./routes/problem-list.routes.js";
import submissionRouter from "./routes/submission.routes.js";
import adminRouter from "./routes/admin.routes.js";
import streakRouter from "./routes/streak.routes.js";
import { addNewDailyChallenge } from "./controllers/streak.controllers.js";
import aiRouter from "./routes/ai.routes.js";
import contestRouter from "./routes/contest.routes.js";
import { findAndUpdateContestRatings } from "./libs/contest.conf.js";
import { redis } from "./libs/redis.conf.js";
import profileRouter from "./routes/profile.routes.js";
import { updateUserRanks } from "./libs/cron.jobs.js";
let isProduction = process.env.NODE_ENV === "production";
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors(CorsOptions));

redis.on("connect", () => {
  console.log("Connected to Redis");
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello from the auth API!",
  });
});

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

if (isProduction) {
  Sentry.setupExpressErrorHandler(app);
}

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/problem", problemRouter);
app.use("/api/v1/execute", executeCodeRouter);
app.use("/api/v1/problem-list", problemListRouter);
app.use("/api/v1/submission", submissionRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/streak", streakRouter);
app.use("/api/v1/ai", aiRouter);
app.use("/api/v1/contest", contestRouter);
app.use("/api/v1/profile", profileRouter);

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  if (!isProduction) {
    console.error(err);
  }

  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
  }

  // Handle other errors
  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
    errors: err.message ? [err.message] : [],
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    sentryCode: res.sentry,
  });
});

setInterval(async () => {
  await addNewDailyChallenge();
}, 1000 * 60 * 60);

setInterval(async () => {
  try {
    await findAndUpdateContestRatings();
  } catch (error) {
    console.error("Error updating contest ratings:", error);
  }
}, 1000 * 30 * 2); // Every hour

setInterval(() => {
  updateUserRanks();
}, 1000 * 60);

export default app;
