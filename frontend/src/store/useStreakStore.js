import { create } from "zustand";
import { axiosInstance } from "@/lib/axios";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useStreakStore = create((set) => ({
  isLoadingChallenges: false,
  dailyChallenges: null,
  userCompletedChallenges: null,

  loadDailyChallenges: async () => {
    set({ isLoading: true });
    try {
      const response = await axiosInstance.get(
        "/streak/month-wise-daily-challenge"
      );
      set({ dailyChallenges: response.data.data, isLoading: false });
    } catch (error) {
      set({ dailyChallenges: null, isLoading: false });
      if (error instanceof AxiosError) {
        return;
      } else {
        toast.error("Daily Challenge Load Failed", {
          description: "Try again later",
          duration: 3000,
        });
      }
    }
  },
}));
