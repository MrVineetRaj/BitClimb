import "dotenv/config";
// const Sentry = require("@sentry/node");

import * as Sentry from "@sentry/node";

console.log(process.env.SENTRY_DNS);
Sentry.init({
  dsn: process.env.SENTRY_DNS,
  environment: process.env.NODE_ENV || "development",
  tracesSampleRate: 1.0, // Adjust this value in production
});
