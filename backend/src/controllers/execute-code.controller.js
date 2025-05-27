import { asyncHandler } from "../libs/helpers.js";
import { getJudge0LanguageId, pollBatchResults, submissionBatch } from "../libs/judg0.lib.js";
export const executeCode = asyncHandler(async (req, res) => {
  const { problemId } = req.params;
  const { source_code, language, stdin, expected_outputs } = req.body;

  console.log("Executing code for problem:", problemId,"\n","user:", req.user?.id);

  // const userId = req.user.id; // Assuming user ID is available in the request object
  const code = source_code.trim();
  // Simulate code execution
  // In a real application, you would use a service to execute the code securely
  const result = `Executed ${language} code: ${code}`;

  //validate testcases
  if (expected_outputs.length !== stdin.length) {
    return res.status(400).json({
      success: false,
      message: "Expected outputs must match the number of test cases",
    });
  }



  // step 2: prepare each testcases for judge0 batch request
  const submissions = stdin.map((input,idx)=>{
    return {
      source_code: source_code,
      language_id: getJudge0LanguageId(language),
      stdin: input,
      base64_encoded: false,
      wait:false,
      expected_output: expected_outputs[idx] || "", // Use empty string if no expected output is provided
    };
  })

  // step 3: submit batch to judge0 api

  const submissionsResult = await submissionBatch(submissions);

  console.log(
    "Submitting batch to Judge0 API with submissions:",
    submissionsResult
  );
  const tokens = submissionsResult.map((res) => res.token);

  // step 4: poll for results
  const results = await pollBatchResults(tokens);


  res.status(200).json({
    success: true,
    message: "Code executed successfully",
    data: {
      results,
    },
  });
});
