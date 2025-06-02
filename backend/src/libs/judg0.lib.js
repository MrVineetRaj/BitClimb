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
      `${process.env.JUDGE0_API_URL}/submissions?base64_encoded=false&wait=false`,
      submissions
    );

    return data;
  } catch (error) {
    console.error(`Error submitting batch to Judge0 API: ${error}`);
    if (error instanceof axios.AxiosError) {
      console.error(error?.response?.data);
      throw new Error(
        `Judge0 API error: ${error.response?.data?.message || error.message}`
      );
    }
    throw new Error(`Unexpected error: ${error.message}`);
  }
};

export const pollBatchResults = async (token) => {
  const currTime = Date.now();
  while (true) {
    try {
      // console.log(`Polling results for tokens: ${token}`);
      const { data } = await axios.get(
        `${process.env.JUDGE0_API_URL}/submissions/${token}?base64_encoded=true`
      );
      // console.log(data || "nothing to show....");
      // Check if all results are ready
      if (data.status.id >= 3) {
        // console.log(data.status);
        // console.log(
        //   `All results ready after ${Math.floor(Date.now() - currTime)} seconds`
        // );
        return data;
      }

      // Wait before polling again
      await new Promise((resolve) => setTimeout(resolve, 1500)); // 500ms delay
    } catch (error) {
      if (error instanceof axios.AxiosError) {
        throw new Error(
          `Judge0 API error: ${error.response?.data?.message || error.message}`
        );
      }
      throw new Error(`Unexpected error: ${error.message}`);
    }
  }
};
