import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const useProblemListStore = create((set) => ({
  problemLists: [],
  isLoadingProblemsLists: false,
  isCreatingProblemList: false,
  isAddingProblemToList: false,
  error: null,

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
}));
