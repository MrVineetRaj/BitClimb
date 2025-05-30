import { reviewCode } from "../libs/chatgpt.config.js";
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
