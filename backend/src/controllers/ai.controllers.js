import { reviewCode, testCaseGenerator } from "../libs/chatgpt.config.js";
import { db } from "../libs/db.js";
import { ApiError, ApiResponse, asyncHandler } from "../libs/helpers.js";

export const reviewCodeController = asyncHandler(async (req, res) => {
  const { submission_id } = req.params;
  const { source_code, problem_description, verdict, error } = req.body;
  if (!source_code || !problem_description || !verdict || !error) {
    return res
      .status(400)
      .json(
        new ApiError(
          400,
          "Source code, problem description, and verdict are required for code review."
        )
      );
  }

  // const error = req.body.error || null; // Optional error field
  console.log("Received Code Review Request:", {
    submission_id,
    source_code,
    problem_description,
    verdict,
  });
  // Simulate a code review process
  const resp = await reviewCode(
    source_code,
    problem_description,
    verdict,
    error
  );

  console.log("Code Review Response:", resp);

  const submission = await db.submissions.update({
    where: {
      id: submission_id,
    },
    data: {
      codeReview: resp,
    },
  });

  console.log("Updated Submission:", submission);

  res
    .status(200)
    .json(
      new ApiResponse(
        true,
        { review: resp },
        "Code review completed successfully."
      )
    );
});

export const testCaseGenerationController = asyncHandler(async (req, res) => {
  const { constraints, examples, testCases,title } = req.body;
  if (!constraints || !examples || !testCases) {
    return res.status(400).json({
      error: "Problem description is required for test case generation.",
    });
  }

  const result = await testCaseGenerator(
    constraints,
    examples,
    testCases,
    title
  );

  console.log("Test Case Generation Response:", result);

  res
    .status(200)
    .json(
      new ApiResponse(
        true,
        { testCases: result },
        "Test cases generated successfully."
      )
    );
});
