import OpenAI from "openai";
import { SYSTEM_PROMPTS } from "./chatgpt-system-prompts.js";
const client = new OpenAI();

export const reviewCode = async (source_code, problem_description, verdict, error) => {
  let messages = [
    {
      role: "system",
      content: SYSTEM_PROMPTS.CODE_REVIEWER,
    },
    {
      role: "user",
      content: JSON.stringify({
        problem_description: problem_description,
        source_code: source_code,
        verdict: verdict,
        error: error,
      }),
    },
  ];
  const completion = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: messages,
  });

  let resp = completion.choices[0].message.content;

  return resp;
};

export const testCaseGenerator = async (constraints, examples, testCases) => {
  let messages = [
    {
      role: "system",
      content: SYSTEM_PROMPTS.TEST_CASE_GENERATOR,
    },
    {
      role: "user",
      content: JSON.stringify({
        constraints: constraints,
        examples: examples,
        testCases: testCases,
      }),
    },
  ];
  const completion = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: messages,
  });

  let resp = completion.choices[0].message.content;

  return resp;
};
