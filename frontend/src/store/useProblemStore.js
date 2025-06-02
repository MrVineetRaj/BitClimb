import { create } from "zustand";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { axiosInstance } from "@/lib/axios";

export const useProblemStore = create((set) => ({
  isRunningCode: false,
  isSubmittingCode: false,
  isLoadingProblems: false,
  isLoadingSubmissions: false,
  isLoadingProblem: false,
  isLoadingHeatMap: false,

  runCode: async ({
    source_code_header,
    source_code,
    source_code_footer,
    language,
    stdin,
    expected_outputs,
    problemId,
  }) => {
    set({ isRunningCode: true });
    try {
      const response = await axiosInstance.post(`/execute/run/${problemId}`, {
        source_code_header,
        source_code,
        source_code_footer,
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
    source_code_header,
    source_code,
    source_code_footer,
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
          source_code_header,
          source_code,
          source_code_footer,
          language,
          stdin,
          expected_outputs,
        }
      );
      set({ isSubmitting: false });
      // console.log("Submission Response:", response.data);
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
    set({ isLoadingProblem: true });
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
    } finally {
      set({ isLoadingProblem: false });
    }
  },

  getUserSubmissionsPerProblem: async (problemId) => {
    set({ isLoadingSubmissions: true });
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
    } finally {
      set({ isLoadingSubmissions: false });
    }

    // get
  },

  getAllProblems: async (limit = 10, page = 1) => {
    set({ isLoadingProblems: true });
    try {
      const response = await axiosInstance.get(
        `/problem/get-problems?limit=${limit}&page=${page}`
      );
      
      set({ isLoadingProblems: false });
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
      set({ isLoadingProblems: false });
      // throw error;
    } finally {
      set({ isLoadingProblems: false });
    }
  },

  getAllUserSubmissions: async (userId, limit = 10, page = 1, isAccepted) => {
    set({ isLoadingSubmissions: true });
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
    } finally {
      set({ isLoadingSubmissions: false });
    }
  },

  getUserHeatMap: async (userId, year) => {
    set({ isLoadingHeatMap: true });
    try {
      const response = await axiosInstance.get(
        `/submission/heatmap-submission-count/${userId}?year=${year}`
      );
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "Failed to fetch heatmap data";
        toast.error("Fetch Heatmap Failed", {
          description: errorMessage,
          duration: 3000,
        });
      } else {
        toast.error("Fetch Heatmap Failed", {
          description: "An unexpected error occurred",
          duration: 3000,
        });
      }
      throw error;
    } finally {
      set({ isLoadingHeatMap: false });
    }
  },
}));
