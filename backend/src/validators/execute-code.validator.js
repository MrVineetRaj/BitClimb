import { body } from "express-validator"

export const executeCodeValidator = ()=>{
  return[
    body("source_code")
      .trim()
      .notEmpty()
      .withMessage("Source code is required"),
    body("language")
      .trim()
      .notEmpty()
      .withMessage("Programming language is required"),
    // body("stdin")
    //   .notEmpty()
    //   .withMessage("Standard input is required")
    //   .isArray()
    //   .withMessage("Standard input must be an array")
    //   .custom(array => array.length >= 1)
    //   .withMessage("Standard input must have at least one item"),
    // body("expected_outputs")
    //   .notEmpty()
    //   .withMessage("Expected outputs are required")
    //   .isArray()
    //   .withMessage("Expected outputs must be an array"),
  ]
}