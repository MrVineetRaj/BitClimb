import { create } from "zustand";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
export const useAdminStore = create((set) => ({
  isLoadingMetrics: false,
  isLoadingUsers: false,
  isLoadingProblem: false,
  isLoadingContests: false,
  isAddingHiddenTestCases: false,
  isGeneratingTestCases: false,

  loadMetrics: async () => {
    set({ isLoadingMetrics: true });
    try {
      const response = await axiosInstance.get("/admin/metrics");
      return response.data;
    } catch (error) {
      set({ isLoadingMetrics: false });
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "Failed to load metrics";
        toast.error(errorMessage, {
          duration: 3000,
        });
      } else {
        toast.error("Metrics Load Failed", {
          duration: 3000,
        });
      }
    } finally {
      set({ isLoadingMetrics: false });
    }
  },

  getRecentRegistrations: async () => {
    set({ isLoadingUsers: true });
    try {
      const response = await axiosInstance.get("/auth/recent-registrations");

      return response.data;
    } catch (error) {
      set({ isLoadingUsers: false });
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message ||
          "Failed to load recent registrations";
        toast.error(errorMessage, {
          duration: 3000,
        });
      } else {
        toast.error("Recent Registrations Load Failed", {
          duration: 3000,
        });
      }
    } finally {
      set({ isLoadingUsers: false });
    }
  },

  getOneProblem: async (problemId) => {
    set({ isLoadingProblem: true });
    try {
      const response = await axiosInstance.get(
        `/admin/get-problem/${problemId}`
      );
      return response.data;
    } catch (error) {
      set({ isLoadingProblem: false });
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "Failed to load problem details";
        toast.error(errorMessage, {
          duration: 3000,
        });
      } else {
        toast.error("Problem Load Failed", {
          duration: 3000,
        });
      }
    } finally {
      set({ isLoadingProblem: false });
    }
  },

  addHiddenTestCases: async (problemId, data) => {
    set({ isAddingHiddenTestCases: true });
    try {
      const response = await axiosInstance.post(
        `/admin/add-hidden-test-cases/${problemId}`,
        data
      );
      toast.success("Hidden test cases added successfully", {
        duration: 3000,
      });
      return response.data;
    } catch (error) {
      set({ isAddingHiddenTestCases: false });
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "Failed to add hidden test cases";
        toast.error(errorMessage, {
          duration: 3000,
        });
      } else {
        toast.error("Add Hidden Test Cases Failed", {
          duration: 3000,
        });
      }
    } finally {
      set({ isAddingHiddenTestCases: false });
    }
  },

  generateTestCases: async (constraints, examples, testCases, title) => {
    console.log("Generating test cases with:", {
      constraints,
      examples,
      testCases,
    });
    set({ isGeneratingTestCases: true });
    try {
      const response = await axiosInstance.post("/ai/test-case-generation", {
        constraints,
        examples,
        testCases,
        title,
      });
      console.log("Problem Details:", response.data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "Failed to generate test cases";
        toast.error(errorMessage, {
          duration: 3000,
        });
      } else {
        toast.error("Test Case Generation Failed", {
          duration: 3000,
        });
      }
    } finally {
      set({ isGeneratingTestCases: false });
    }
  },

  deleteHiddenTestCase: async (testCaseId) => {
    try {
      const response = await axiosInstance.delete(
        `/admin/delete-hidden-test-cases/${testCaseId}`
      );
      toast.success("Hidden test case deleted successfully", {
        duration: 3000,
      });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "Failed to delete hidden test case";
        toast.error(errorMessage, {
          duration: 3000,
        });
      } else {
        toast.error("Delete Hidden Test Case Failed", {
          duration: 3000,
        });
      }
    }
  },
}));
