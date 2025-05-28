import { Router } from "express";
import { validate } from "../middlewares/validator.middleware.js";
import {
  registrationValidator,
  userLoginValidator,
  justEmailValidator,
  updatePasswordValidator,
} from "../validators/auth.validator.js";
import {
  registerUser,
  loginUser,
  logoutUser,
  verifyEmail,
  resendVerificationEmail,
  // refreshAccessToken,
  forgotPasswordRequest,
  getCurrentUser,
  updatePassword,
  getSolvedProblemsByUser,
  getListOfSolvedProblemsByUser,
  checkAuth,
  // updateUserName,
} from "../controllers/auth.controllers.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
const router = Router();

//note : Allowed unauthorized access
// info : here registrationValidator() is just returning an array and we are using the array but for rest two i am passing them as callback function

router.route("/register").post(registrationValidator(), validate, registerUser);
// router.route("/register").post(registerUser);
router.route("/login").post(userLoginValidator(), validate, loginUser);
router.route("/verify-email/:token").get(verifyEmail);
router
  .route("/resend-verification-email")
  .post(justEmailValidator(), validate, resendVerificationEmail);
// router.route("/refresh-access-token").post(refreshAccessToken);
router
  .route("/forgot-password-request")
  .put(justEmailValidator(), validate, forgotPasswordRequest);
router
  .route("/forgot-password/:forgotPasswordToken")
  .put(updatePasswordValidator(), validate, updatePassword);

//note :  unauthorized access not allowed
router.route("/").get(authMiddleware, getCurrentUser);
router.route("/logout").delete(authMiddleware, logoutUser);
router.route("/solved-problems").get(authMiddleware, getSolvedProblemsByUser);
router
  .route("/solved-problems-list")
  .get(authMiddleware, getListOfSolvedProblemsByUser);
// router.route("/update-username").put(authMiddleware, updateUserName);

router.get("/check", authMiddleware, checkAuth);

export default router;
