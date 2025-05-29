import axios from "axios";
export const getJudge0LanguageId = (lang) => {
  const langMapping = {
    python: 71,
    javascript: 63,
    java: 62,
    cpp: 54,
  };

  return langMapping[lang.toLowerCase()] || null;
};

export const submissionBatch = async (submissions) => {
  
  try {
    const { data } = await axios.post(
      `${process.env.JUDGE0_API_URL}/submissions/batch?base64_encoded=false`,
      {
        submissions,
      }
    );

    return data;
  } catch (error) {
    if (error instanceof axios.AxiosError) {
      throw new Error(
        `Judge0 API error: ${error.response?.data?.message || error.message}`
      );
    }
    throw new Error(`Unexpected error: ${error.message}`);
  }
};

export const pollBatchResults = async (tokens) => {
  console.log("Polling Judge0 API for results:", tokens);
  while (true) {
    try {
      const { data } = await axios.get(
        `${process.env.JUDGE0_API_URL}/submissions/batch?tokens=${tokens.join(
          ","
        )}&base64_encoded=true`
      );

      // Check if all results are ready
      if (data.submissions.every((result) => result.status.id >= 3)) {
        return data.submissions;
      }

      // Wait before polling again
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      console.log("Error polling Judge0 API:", error);
      if (error instanceof axios.AxiosError) {
        throw new Error(
          `Judge0 API error: ${error.response?.data?.message || error.message}`
        );
      }
      throw new Error(`Unexpected error: ${error.message}`);
    }
  }
};
