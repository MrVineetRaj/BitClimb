import { create } from "zustand";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
export const useAdminStore = create((set) => ({
  isLoadingMetrics: false,
  isLoadingUsers: false,
  isLoadingProblems: false,
  isLoadingContests: false,

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
}));
