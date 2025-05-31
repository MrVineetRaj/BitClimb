import { body } from "express-validator";

const createProblemValidator = () => {
  return [
    body("title").trim().notEmpty().withMessage("Title is required"),
    body("description")
      .trim()
      .notEmpty()
      .withMessage("description is required"),
    body("difficulty")
      .trim()
      .notEmpty()
      .withMessage("Problem difficulty is required"),
    body("examples").notEmpty().withMessage("Examples are required"),
    body("tags").optional().isArray().withMessage("Tags must be an array"),
    body("constraints").optional(),
    body("hints").optional().isArray().withMessage("Hints must be an array"),
    body("editorial").optional(),
    body("testCases").notEmpty().withMessage("Test cases are required"),
    body("codeSnippets").notEmpty().withMessage("Code snippets are required"),
    body("referenceSolution")
      .notEmpty()
      .withMessage("Reference solution is required"),
  ];
};

export { createProblemValidator };
