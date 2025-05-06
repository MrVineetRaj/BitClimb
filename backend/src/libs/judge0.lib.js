import axios from "axios";
export function getJudge0LanguageId(language) {
  const languageMap = {
    PYTHON: 71,
    "C++": 54,
    JAVASCRIPT: 63,
  };

  return languageMap[language.toUpperCase()] || "";
}

export async function submitBatch(submissions) {
  const { data } = await axios.post(
    `${process.env.JUDGE0_API_URL}/submissions/batch?base64_encoded=false`,
    {
      submissions,
    }
  );

  const judge0Tokens = data;

  return judge0Tokens; // [{token},{token},{token}]
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function pollBatchResults(tokens) {
  while (true) {
    const { data } = await axios.get(
      `${process.env.JUDGE0_API_URL}/submissions/batch}`,{
        params: {
          tokens: tokens.join(","),
          base64_encoded: false,
        },
      }
    );

    const result = data.submissions;

    const isAllDone = result.every(
      (r) => r.status?.id >= 3
    );

    if (isAllDone) {
      return result;
    }

    await sleep(2000);
  }
}
