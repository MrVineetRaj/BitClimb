export const CookieOptions = {
  maxAge: 7 * 24 * 60 * 60 * 1000,
  httpOnly: process.env.NODE_ENV !== "development",
  sameSite: "strict",
  secure: process.env.NODE_ENV !== "development",
};
