import { create } from "zustand";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { axiosInstance } from "@/lib/axios";

export const useProblemStore = create((set) => ({
  isRunningCode: false,
  isSubmittingCode: false,

  runCode: async ({
    source_code,
    language,
    stdin,
    expected_outputs,
    problemId,
  }) => {
    set({ isRunningCode: true });
    try {
      const response = await axiosInstance.post(`/execute/run/${problemId}`, {
        source_code,
        language,
        stdin,
        expected_outputs,
      });

      set({ isRunningCode: false });
      toast.success("Execution Successful");
      return response.data.data;
    } catch (error) {
      set({ isRunningCode: false });
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "Code execution failed";
        toast.error("Execution Failed", {
          description: errorMessage,
          duration: 3000,
        });
      } else {
        toast.error("Execution Failed", {
          description: "An unexpected error occurred",
          duration: 3000,
        });
      }
    } finally {
      set({ isRunningCode: false });
    }
  },

  submitCode: async ({
    source_code,
    language,
    stdin,
    expected_outputs,
    problemId,
  }) => {
    set({ isSubmittingCode: true });
    try {
      const response = await axiosInstance.post(
        `/execute/submit/${problemId}`,
        {
          source_code,
          language,
          stdin,
          expected_outputs,
        }
      );
      set({ isSubmitting: false });
      toast.success("Submission Successful");
      return response.data.data;
    } catch (error) {
      set({ isSubmitting: false });
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "Code execution failed";
        toast.error("Execution Failed", {
          description: errorMessage,
          duration: 3000,
        });
      } else {
        toast.error("Execution Failed", {
          description: "An unexpected error occurred",
          duration: 3000,
        });
      }
    } finally {
      set({ isSubmittingCode: false });
    }
  },

  getProblemById: async (problemId) => {
    try {
      const response = await axiosInstance.get(
        `/problem/get-problem/${problemId}`
      );
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "Failed to fetch problem";
        toast.error("Fetch Problem Failed", {
          description: errorMessage,
          duration: 3000,
        });
      } else {
        toast.error("Fetch Problem Failed", {
          description: "An unexpected error occurred",
          duration: 3000,
        });
      }
      throw error;
    }
  },

  getUserSubmissionsPerProblem: async (problemId) => {
    try {
      const response = await axiosInstance.get(
        `/submission/problem/${problemId}`
      );
      
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "Failed to fetch submissions";
        toast.error("Fetch Submissions Failed", {
          description: errorMessage,
          duration: 3000,
        });
      } else {
        toast.error("Fetch Submissions Failed", {
          description: "An unexpected error occurred",
          duration: 3000,
        });
      }
      throw error;
    }

    // get
  },

  getAllProblems: async (limit = 10, page = 1) => {
    try {
      const response = await axiosInstance.get(
        `/problem/get-problems?limit=${limit}&page=${page}`
      );
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "Failed to fetch problems";
        toast.error("Fetch Problems Failed", {
          description: errorMessage,
          duration: 3000,
        });
      } else {
        toast.error("Fetch Problems Failed", {
          description: "An unexpected error occurred",
          duration: 3000,
        });
      }
      throw error;
    }
  },

  getAllUserSubmissions: async (userId, limit = 10, page = 1, isAccepted) => {
    try {
      
      const response = await axiosInstance.get(
        `/submission/user?userId=${userId}&limit=${limit}&page=${page}&isAccepted=${isAccepted}`
      );
      
      
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "Failed to fetch user submissions";
        toast.error("Fetch User Submissions Failed", {
          description: errorMessage,
          duration: 3000,
        });
      } else {
        toast.error("Fetch User Submissions Failed", {
          description: "An unexpected error occurred",
          duration: 3000,
        });
      }
      throw error;
    }
  },
}));
