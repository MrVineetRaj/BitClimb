import { create } from "zustand";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { axiosInstance } from "@/lib/axios";

export const useAdminStore = create((set) => ({
  isLoadingMetrics: false,
  isLoadingUsers: false,
  isLoadingProblems: false,
  isLoadingContests: false,

  loadMetrics: async () => {
    set({ isLoadingMetrics: true });
    try {
      const response = await axiosInstance.get("/admin/metrics");
      return response.data.data;
    } catch (error) {
      set({ metrics: null, isLoadingMetrics: false });
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "Failed to load metrics";
        toast.error("Metrics Load Failed", {
          description: errorMessage,
          duration: 3000,
        });
      } else {
        toast.error("Metrics Load Failed", {
          description: "An unexpected error occurred",
          duration: 3000,
        });
      }
    }
  },

  getRecentRegistrations: async () => {
    set({ isLoadingUsers: true });
    try {
      const response = await axiosInstance.get("/auth/recent-registrations");
      console.log("Recent Registrations:", response.data.data);
      return response.data.data;
    } catch (error) {
      set({ recentRegistrations: null, isLoadingUsers: false });
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message ||
          "Failed to load recent registrations";
        toast.error("Recent Registrations Load Failed", {
          description: errorMessage,
          duration: 3000,
        });
      } else {
        toast.error("Recent Registrations Load Failed", {
          description: "An unexpected error occurred",
          duration: 3000,
        });
      }
    }
  },
}));
