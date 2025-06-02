import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
  });

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const createProblemSchema = z.object({
  // {
  //   "title": "Add Two Numbers a and b ",
  title: z.string().min(1, "Title is required"),
  //   "description": "Given two numbers a and b add them up and return the output",
  description: z.string().min(1, "Description is required"),
  //   "difficulty": "EASY",
  difficulty: z.enum(["EASY", "MEDIUM", "HARD"], {
    message: "Difficulty must be one of EASY, MEDIUM, or HARD",
  }),

  tags: z.array(z.string()).min(1, "At least one tag is required"),
  companies: z.array(z.string()).min(1, "At least one company is required"),
  constraints: z.string().min(1, "Constraints are required"),

  examples: z
    .array(
      z.object({
        input: z.string().min(1, "Input is required"),
        output: z.string().min(1, "Output is required"),
        explanation: z.string().optional(),
      })
    )
    .min(1, "At least one example is required"),
  hints: z.array(z.string()).optional(),
  editorial: z.string().optional(),
  testCases: z
    .array(
      z.object({
        input: z.string().min(1, "Input is required"),
        output: z.string().min(1, "Output is required"),
      })
    )
    .min(1, "At least one test case is required"),
  codeSnippets: z.object({
    JAVASCRIPT: z.string().min(1, "JavaScript code snippet is required"),
    PYTHON: z.string().min(1, "Python code snippet is required"),
    CPP: z.string().min(1, "C++ code snippet is required"),
  }),

  referenceSolutionHeader: z.object({
    JAVASCRIPT: z.string().min(1, "JavaScript reference solution is required"),
    PYTHON: z.string().min(1, "Python reference solution is required"),
    CPP: z.string().min(1, "C++ reference solution is required"),
  }),
  referenceSolution: z.object({
    JAVASCRIPT: z.string().min(1, "JavaScript reference solution is required"),
    PYTHON: z.string().min(1, "Python reference solution is required"),
    CPP: z.string().min(1, "C++ reference solution is required"),
  }),
  referenceSolutionFooter: z.object({
    JAVASCRIPT: z.string().min(1, "JavaScript reference solution is required"),
    PYTHON: z.string().min(1, "Python reference solution is required"),
    CPP: z.string().min(1, "C++ reference solution is required"),
  }),
});

export const createContestSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  startTime: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Start time must be a valid ISO8601 date string",
  }),
  endTime: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "End time must be a valid ISO8601 date string",
  }),
  problems: z.array(z.string()).min(1, "At least one problem ID is required"),
  problemIndex: z
    .array(z.string())
    .min(1, "At least one problem index is required"),
  problemPoints: z.array(
    z
      .string()
      .transform((val) => parseInt(val, 10))
      .or(z.number())
  ),
});
