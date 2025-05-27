import jwt from "jsonwebtoken";
import { ApiError, asyncHandler } from "../libs/helpers.js";
import { db } from "../libs/db.js";
import { UserRole } from "../generated/prisma/index.js";

export const authMiddleware = asyncHandler(async (req, res, next) => {
  // Get token from cookies
  const accessToken = req.cookies?.[process.env.JWT_TOKEN_NAME];

  if (!accessToken) {
    throw new ApiError(401, "Unauthorized Access");
  }

  const decoded = jwt.decode(accessToken, process.env.JWT_SECRET);

  // const user = await User.findById(decoded.id);
  const user = await db.user.findUnique({
    where: {
      id: decoded.id,
    },
  });

  if (!user) {
    throw new ApiError(401, "Unauthorized Access");
  }

  req.user = user;

  next();
});

export const adminAuthMiddleware = asyncHandler(async (req, res, next) => {
  if (req.user.isEmailVerified === false) {
    throw new ApiError(403, "Email not verified");
  }
  if (req.user.role !== UserRole.ADMIN) {
    throw new ApiError(403, "Access Denied - Admins Only");
  }
  next();
});
