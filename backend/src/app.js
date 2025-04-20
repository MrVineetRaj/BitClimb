import "../sentry.js";
import * as Sentry from "@sentry/node";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

let isProduction = process.env.NODE_ENV === "production";

// The error handler must be registered before any other error middleware and after all controllers
if (isProduction) {
  Sentry.setupExpressErrorHandler(app);
}
// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});

export default app;
