import { body, param } from "express-validator";

export const createNewContestValidator = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isString()
    .withMessage("Title must be a string"),
  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string"),
  body("startTime")
    .notEmpty()
    .withMessage("Start time is required")
    .isISO8601()
    .toDate()
    .withMessage("Start time must be a valid date"),
  body("endTime")
    .notEmpty()
    .withMessage("End time is required")
    .isISO8601()
    .toDate()
    .withMessage("End time must be a valid date"),
  body("problems")
    .isArray()
    .withMessage("Problems must be an array")
    .custom((value) => {
      if (value.length === 0) {
        throw new Error("At least one problem is required");
      }
      return true;
    }),
  body("problemIndex").isArray().withMessage("Problem index must be an array"),
  body("problemPoints")
    .isArray()
    .withMessage("PMust assign the points to each problem"),
];
