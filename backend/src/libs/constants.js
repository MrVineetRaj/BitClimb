export const CookieOptions = {
  maxAge: 7 * 24 * 60 * 60 * 1000,
  httpOnly: process.env.NODE_ENV !== "development",
  sameSite: "strict",
  secure: process.env.NODE_ENV !== "development",
};


export const CorsOptions = {
  origin: process.env.CORS_ORIGIN || "http://localhost:3000",
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