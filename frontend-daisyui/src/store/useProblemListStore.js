import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const useProblemListStore = create((set) => ({
  problemLists: [],
  isLoadingProblemsLists: false,
  isCreatingProblemList: false,
  isAddingProblemToList: false,
  isLoadingProblemListMetrics: false,
  isLoadingProblemListWiseProblems: false,

  createProblemList: async (title, description) => {
    set({
      isCreatingProblemList: true,
      error: null,
    });
    try {
      const response = await axiosInstance.post(
        "/problem-list/new-problem-list",
        {
          title,
          description,
        }
      );

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message || "Failed to create problem list"
        );
      } else {
        toast.error(
          "An unexpected error occurred while creating the problem list"
        );
      }
    } finally {
      set({ isCreatingProblemList: false });
    }
  },

  getAllProblemLists: async () => {
    set({ isLoadingProblemsLists: true, error: null });
    try {
      const response = await axiosInstance.get("/problem-list/all");
      set({ problemLists: response.data.data });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message || "Failed to fetch problem lists"
        );
      } else {
        toast.error(
          "An unexpected error occurred while fetching problem lists"
        );
      }
    } finally {
      set({ isLoadingProblemsLists: false });
    }
  },

  addProblemToLists: async (problemId, problemListIds) => {
    const toastId = toast.loading("Adding problem to list...");
    set({ isAddingProblemToList: true, error: null });
    try {
      const response = await axiosInstance.post(
        `/problem-list/add-problem?problemListIds=${problemListIds.join(
          ";"
        )}&problemId=${problemId}`
      );

      console.log("Response from addProblemToLists:", response.data);

      if (response.data.success) {
        toast.success("Problem added to list successfully", {
          id: toastId,
        });
      }

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message || "Failed to add problem to list",
          { id: toastId }
        );
      } else {
        toast.error(
          "An unexpected error occurred while adding problem to list",
          { id: toastId }
        );
      }
    } finally {
      set({ isAddingProblemToList: false });
      toast.dismiss({
        id: toastId,
        duration: 3000,
      });
    }
  },

  getProblemListMetricsById: async (id) => {
    set({ isLoadingProblemListMetrics: true, error: null });
    try {
      const response = await axiosInstance.get(`/problem-list/${id}/metrics`);
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message ||
            "Failed to fetch problem list metrics"
        );
      } else {
        toast.error(
          "An unexpected error occurred while fetching problem list metrics"
        );
      }
    } finally {
      set({ isLoadingProblemListMetrics: false });
    }
  },

  // getProblemsPerProblemList: async (
  //   problemListId,
  //   page = 1,
  //   limit = 10,
  //   difficulty = ""
  // ) => {
  //   set({ isLoadingProblemListWiseProblems: true });
  //   try {
  //     const response = await axiosInstance.get(
  //       `/problem-list/${problemListId}/problems?page=${page}&limit=${limit}&difficulty=${difficulty}`
  //     );
  //     return response.data;
  //   } catch (error) {
  //     if (error instanceof AxiosError) {
  //       toast.error(
  //         error.response?.data?.message ||
  //           "Failed to fetch problems for problem list"
  //       );
  //     } else {
  //       toast.error(
  //         "An unexpected error occurred while fetching problems for problem list"
  //       );
  //     }
  //   } finally {
  //     set({ isLoadingProblemListWiseProblems: false });
  //   }
  // },

  getProblemsPerProblemList: async (
    problemListId,
    page = 1,
    limit = 10,
    difficulty = ""
  ) => {
    set({ isLoadingProblemListWiseProblems: true });
    try {
      const response = await axiosInstance.get(
        `/problem-list/${problemListId}/problems?page=${page}&limit=${limit}&difficulty=${difficulty}`
      );
      return response.data.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message ||
            "Failed to fetch problems for problem list"
        );
      } else {
        toast.error(
          "An unexpected error occurred while fetching problems for problem list"
        );
      }
    } finally {
      set({ isLoadingProblemListWiseProblems: false });
    }
  },

  getProblemsForTagWiseProblemLists: async (tag, ref, page = 1, limit = 10) => {
    set({ isLoadingProblemListWiseProblems: true });
    try {
      const response = await axiosInstance.get(
        `/problem-list/tag-wise/${tag}?ref=${ref}&page=${page}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message ||
            "Failed to fetch problems for tag-wise problem lists"
        );
      } else {
        toast.error(
          "An unexpected error occurred while fetching problems for tag-wise problem lists"
        );
      }
    } finally {
      set({ isLoadingProblemListWiseProblems: false });
    }
  },
  getProblemsForTagWiseProblemListMetrics: async (tag, ref) => {
    set({ isLoadingProblemListMetrics: true });
    try {
      const response = await axiosInstance.get(
        `/problem-list/tag-wise/${tag}/metrics?ref=${ref}`
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message ||
            "Failed to fetch problems for tag-wise problem lists"
        );
      } else {
        toast.error(
          "An unexpected error occurred while fetching problems for tag-wise problem lists"
        );
      }
    } finally {
      set({ isLoadingProblemListMetrics: false });
    }
  },
}));
