import jwt from "jsonwebtoken";
import { db } from "./db.js";

export const getUserIdIfAuthenticated = async (req) => {
  const accessToken = req.cookies?.[process.env.JWT_TOKEN_NAME];

  if (!accessToken) {
    return false;
  }

  const decoded = jwt.decode(accessToken, process.env.JWT_SECRET);

  const user = await db.user.findUnique({
    where: {
      id: decoded.id,
    },
  });

  if (!user) {
    return false;
  }
  return user.id;
};
