export const CookieOptions = {
  maxAge: 7 * 24 * 60 * 60 * 1000,
  httpOnly: process.env.NODE_ENV !== "development",
  sameSite: "none",
  secure: process.env.NODE_ENV !== "development",
};
const corsOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(",").map((url) => url.trim())
  : ["http://localhost:5173"];
export const CorsOptions = {
  origin: corsOrigins,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "Accept",
    "Origin",
    "X-CSRF-Token",
  ],
};
