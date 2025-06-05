import { reviewCode, testCaseGenerator } from "../libs/chatgpt.config.js";
import { db } from "../libs/db.js";
import { ApiResponse, asyncHandler } from "../libs/helpers.js";

export const reviewCodeController = asyncHandler(async (req, res) => {
  const { submission_id } = req.params;
  const { source_code, problem_description, verdict } = req.body;
  if (!source_code || !problem_description || !verdict) {
    return res
      .status(400)
      .json({ error: "Code,verdict and problem description are required." });
  }

  // Simulate a code review process
  const resp = await reviewCode(source_code, problem_description, verdict);

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
  const { constraints, examples, testCases } = req.body;
  if (!constraints || !examples || !testCases) {
    return res.status(400).json({
      error: "Problem description is required for test case generation.",
    });
  }

  const result = await testCaseGenerator(constraints, examples, testCases);

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
