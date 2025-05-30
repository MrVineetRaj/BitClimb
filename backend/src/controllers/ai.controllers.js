import { reviewCode } from "../libs/chatgpt.config.js";
import { db } from "../libs/db.js";
import { ApiResponse, asyncHandler } from "../libs/helpers.js";

export const reviewCodeController = asyncHandler(async (req, res) => {
  const { problemId } = req.params;
  const { source_code, problem_description, verdict } = req.body;
  if (!source_code || !problem_description || !verdict) {
    return res
      .status(400)
      .json({ error: "Code,verdict and problem description are required." });
  }

  // Simulate a code review process
  const resp = await reviewCode(source_code, problem_description, verdict);

  if (!resp?.review || !res?.time_complexity || !res.space_complexity) {
    return res
      .status(500)
      .json({ error: "Failed to generate code review. Please try again." });
  }
  
  await db.submissions.updateOne(
    { problemId },
    {
      $set: {
        review: resp.review,
        time_complexity: resp.time_complexity,
        space_complexity: resp.space_complexity,
      },
    }
  );

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
