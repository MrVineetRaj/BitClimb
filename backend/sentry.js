import "dotenv/config";
// const Sentry = require("@sentry/node");

import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.SENTRY_DNS,
});
