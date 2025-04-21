import { body } from "express-validator";
// import { AvailablePlatformUserRoles } from "../utils/constants.js";

const registrationValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Username is required")
      .isLength({ min: 3, max: 30 })
      .withMessage("Username must be 3 to 13 characters long"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ];
};

const userLoginValidator = () => {
  return [
    body("email").isEmail().withMessage("Email is not valid"),
    body("password").notEmpty().withMessage("Password cannot be empty"),
  ];
};

const justEmailValidator = () => {
  return [body("email").isEmail().withMessage("Email is not valid")];
};
const updatePasswordValidator = () => {
  return [
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ];
};


export {
  registrationValidator,
  userLoginValidator,
  justEmailValidator,
  updatePasswordValidator,
  // updateUserNameValidator,
};
