import { axiosInstance } from "@/lib/axios";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { create } from "zustand";

const useContestStore = create((set) => ({
  // contest: null,
  isLoading: false,

  createContest: async (contestData) => {
    set({ isLoading: true });
    try {
      const { data } = await axiosInstance.post("/contest", contestData);
      toast.success("Contest created successfully!");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message || "Failed to create contest"
        );
      } else {
        toast.error(error.message || "An unexpected error occurred");
      }
    } finally {
      set({ isLoading: false });
    }
  },

  getContests: async (page = 1, limit = 10, typeOfContest = "DEFAULT") => {
    set({ isLoading: true });
    try {
      const { data } = await axiosInstance(
        `/contest?page=${page}&limit=${limit}&typeOfContest=${typeOfContest}`
      );
      return data?.data;
    } catch (error) {
      console.error("Error fetching contests:", error);
      toast.error(error.response?.data?.message || "Failed to fetch contests");
    } finally {
      set({ isLoading: false });
    }
  },

  getContestById: async (contestId) => {
    set({ isLoading: true });
    try {
      const { data } = await axiosInstance(`/contest/${contestId}`);
      set({ isLoading: false });
      return data?.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message || "Failed to fetch contest details"
        );
      } else {
        toast.error(error.message || "An unexpected error occurred");
      }
      set({ isLoading: false });
    } finally {
      set({ isLoading: false });
    }
  },

  registerForContest: async (contestId) => {
    set({ isLoading: true });
    try {
      const { data } = await axiosInstance.post(
        `/contest/${contestId}/register`
      );
      toast.success(data?.message || "Registered for contest successfully!");
      return data?.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message || "Failed to register for contest"
        );
      } else {
        toast.error(error.message || "An unexpected error occurred");
      }
    } finally {
      set({ isLoading: false });
    }
  },

  unregisterFromContest: async (contestId) => {
    set({ isLoading: true });
    try {
      const { data } = await axiosInstance.post(
        `/contest/${contestId}/unregister`
      );
      toast.success(data?.message || "Unregistered from contest successfully!");
      return data?.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message || "Failed to unregister from contest"
        );
      } else {
        toast.error(error.message || "An unexpected error occurred");
      }
    } finally {
      set({ isLoading: false });
    }
  },
  getContestLeaderboard: async (contestId) => {
    set({ isLoading: true });
    try {
      const { data } = await axiosInstance(`/contest/${contestId}/leaderboard`);
      return data?.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message || "Failed to fetch leaderboard"
        );
      } else {
        toast.error(error.message || "An unexpected error occurred");
      }
    } finally {
      set({ isLoading: false });
    }
  },

  getContestProblems: async (contestId) => {
    set({ isLoading: true });
    try {
      const { data } = await axiosInstance(`/contest/${contestId}/problems`);
      return data?.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message || "Failed to fetch contest problems"
        );
      } else {
        toast.error(error.message || "An unexpected error occurred");
      }
    } finally {
      set({ isLoading: false });
    }
  },
}));

export { useContestStore };
