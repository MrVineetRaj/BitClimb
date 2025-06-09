import crypto from "crypto";
import bcrypt from "bcryptjs";
import {
  emailVerificationMailContent,
  forgotPasswordMailContent,
  sendMail,
} from "../libs/mail.js";
// import { ApiError } from "../utils/api.error.js";
import { CookieOptions } from "../libs/constants.js";
import {
  ApiError,
  ApiResponse,
  asyncHandler,
  generateTemporaryToken,
} from "../libs/helpers.js";
import { db } from "../libs/db.js";
import { UserRole } from "../generated/prisma/index.js";
import jwt from "jsonwebtoken";

//info : done
const registerUser = asyncHandler(async (req, res) => {
  const { email, name, password, role } = req.body;

  const existingUSer = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUSer) {
    throw new ApiError(400, "User already exists", [
      {
        email: "User already exists",
      },
    ]);
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const { unHashedToken, hashedToken, tokenExpiry } = generateTemporaryToken();


  // await sendMail({
  //   email,
  //   subject: "Email Verification Mail",
  //   mailGenContent: emailVerificationMailContent(
  //     name,
  //     `${process.env.FRONTEND_URL}/verify-email/${unHashedToken}`
  //   ),
  // });

  const user = await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
      role: role || UserRole.USER,
      emailVerificationToken: hashedToken,
      emailVerificationTokenExpiry: new Date(tokenExpiry),
    },
  });

  // const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
  //   expiresIn: "7d",
  // });
  // await user.save();

  const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  // await user.save();

  res.cookie(process.env.JWT_TOKEN_NAME, accessToken, CookieOptions);
  // res.cookie(process.env.ACCESS_TOKEN_NAME, token, CookieOptions);
  res.status(201).json(new ApiResponse(201, {}, "Verification Mail Sent"));
});

//info : done
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new ApiError(401, "Not Verified", [
      {
        auth: "Invalid credentials",
      },
    ]);
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new ApiError(401, "Not Verified", [
      {
        auth: "Invalid credentials",
      },
    ]);
  }

  // const accessToken = await user.generateAccessToken();

  const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  // await user.save();

  res.cookie(process.env.JWT_TOKEN_NAME, accessToken, CookieOptions);
  res.status(200).json(new ApiResponse(200, user, "Logged in successfully"));
});

//info : done
const verifyEmail = asyncHandler(async (req, res) => {
  const { token } = req.params;

  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const user = await db.user.findFirst({
    where: {
      emailVerificationToken: hashedToken,
      emailVerificationTokenExpiry: {
        gt: new Date(),
      },
    },
  });

  if (!user) {
    throw new ApiError(401, "Token Expired, Try resending verification mail", [
      {
        token: "Token Expired",
      },
    ]);
  }

  await db.user.update({
    where: {
      id: user.id,
    },
    data: {
      isEmailVerified: true,
      emailVerificationToken: null,
      emailVerificationTokenExpiry: null,
    },
  });

  res.status(200).json(new ApiResponse(200, {}, "Account Verified"));
});

//info : done
const resendVerificationEmail = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new ApiError(401, "Token sending failed", [
      {
        err: "User not found",
      },
    ]);
  }

  const { unHashedToken, hashedToken, tokenExpiry } = generateTemporaryToken();

  await db.user.update({
    where: {
      email,
    },
    data: {
      emailVerificationToken: hashedToken,
      emailVerificationTokenExpiry: new Date(tokenExpiry),
    },
  });

  await sendMail({
    email,
    subject: "Email Verification Mail",
    mailGenContent: emailVerificationMailContent(
      user.username,
      `${process.env.FRONTEND_URL}/verify-email/${unHashedToken}`
    ),
  });

  res.status(200).json(new ApiResponse(200, {}, "Verification mail sent"));
});

//info : done
const forgotPasswordRequest = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new ApiError(400, "Invalid Email");
  }

  const { unHashedToken, hashedToken, tokenExpiry } = generateTemporaryToken();

  await db.user.update({
    where: {
      email,
    },
    data: {
      forgotPasswordToken: hashedToken,
      forgotPasswordTokenExpiry: new Date(tokenExpiry),
    },
  });

  const mailInfo = await sendMail({
    email,
    subject: "Reset password mail",
    mailGenContent: forgotPasswordMailContent(
      user.username,
      `${process.env.FRONTEND_URL}/forget-password/${unHashedToken}`
    ),
  });

  res.status(200).json(new ApiResponse(200, {}, "Forgot password link send"));
});

//info : done
const updatePassword = asyncHandler(async (req, res) => {
  const { forgotPasswordToken } = req.params;
  const { password } = req.body;

  const hashedToken = crypto
    .createHash("sha256")
    .update(forgotPasswordToken)
    .digest("hex");

  const user = await db.user.findFirst({
    where: {
      forgotPasswordToken: hashedToken,
      forgotPasswordTokenExpiry: {
        gt: new Date(),
      },
    },
  });

  if (!user) {
    throw new ApiError(404, "Access Token Expired");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await db.user.update({
    where: {
      id: user.id,
    },
    data: {
      password: hashedPassword,
      forgotPasswordToken: null,
      forgotPasswordTokenExpiry: null,
    },
  });

  res.status(200).json(new ApiResponse(200, {}, "Password updated"));
});

//info : done
const getCurrentUser = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, req.user, "User loaded"));
});

//info : done
const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie(process.env.JWT_TOKEN_NAME, CookieOptions);
  res.status(200).json(new ApiResponse(200, {}, "Logged out successfully"));
});

const getSolvedProblemsByUser = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const solvedProblems = await db.problemsSolved.findMany({
    where: {
      userId: userId,
    },
  });

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        solvedProblems,
        "Solved problems fetched successfully"
      )
    );
});

const getListOfSolvedProblemsByUser = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const solvedProblems = await db.problem.findMany({
    where: {
      solvedBy: {
        some: {
          userId: userId,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    skip: (page - 1) * limit,
    take: limit,
  });

  const totalPages = Math.ceil(
    (await db.problem.count({
      where: {
        solvedBy: {
          some: {
            userId: userId,
          },
        },
      },
    })) / limit
  );

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { solvedProblems, totalPages, currentPage: page, limit },
        "Solved problems fetched successfully"
      )
    );
});

const checkAuth = asyncHandler(async (req, res) => {
  const user = req.user;

  if (!user) {
    throw new ApiError(401, "Not Authenticated");
  }

  res.status(200).json(new ApiResponse(200, user, "User is authenticated"));
});

const getRecentRegistrations = asyncHandler(async (req, res) => {
  const recentRegistrations = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      isEmailVerified: true,
      name: true,
      createdAt: true,
    },
    skip: 0,
    take: 10,
  });
  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        recentRegistrations,
        "Recent users fetched successfully"
      )
    );
});

const getPublicUserProfile = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const user = await db.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      createdAt: true,
    },
  });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const totalHardQuestions = await db.problem.count({
    where: {
      difficulty: "HARD",
    },
  });

  const totalMediumQuestions = await db.problem.count({
    where: {
      difficulty: "MEDIUM",
    },
  });
  const totalEasyQuestions = await db.problem.count({
    where: {
      difficulty: "EASY",
    },
  });

  const totalHardSolved = await db.problemsSolved.count({
    where: {
      userId: userId,
      problem: {
        difficulty: "HARD",
      },
    },
  });
  const totalMediumSolved = await db.problemsSolved.count({
    where: {
      userId: userId,
      problem: {
        difficulty: "MEDIUM",
      },
    },
  });
  const totalEasySolved = await db.problemsSolved.count({
    where: {
      userId: userId,
      problem: {
        difficulty: "EASY",
      },
    },
  });

  res.status(200).json(
    new ApiResponse(
      200,
      {
        user,
        totalHardQuestions,
        totalMediumQuestions,
        totalEasyQuestions,
        totalHardSolved,
        totalMediumSolved,
        totalEasySolved,
        totalSolved: totalHardSolved + totalMediumSolved + totalEasySolved,
        totalQuestions:
          totalHardQuestions + totalMediumQuestions + totalEasyQuestions,
      },
      "User profile fetched"
    )
  );
});
export {
  registerUser,
  loginUser,
  logoutUser,
  verifyEmail,
  resendVerificationEmail,
  forgotPasswordRequest,
  getCurrentUser,
  updatePassword,
  getSolvedProblemsByUser,
  getListOfSolvedProblemsByUser,
  checkAuth,
  getRecentRegistrations,
  getPublicUserProfile,
};
