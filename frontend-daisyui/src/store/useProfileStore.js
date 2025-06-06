import { create } from "zustand";
import { AxiosError } from "axios";
import { axiosInstance } from "../lib/axios"; // Adjust the import path as necessary
import { toast } from "react-hot-toast"; // Adjust the import path as necessary
const useProfileStore = create((set) => ({
  isLoadingBasicMetrics: false,
  isLoadingTagWiseSolvedCount: false,

  getBasicMetrics: async (profileId) => {
    set({ isLoadingBasicMetrics: true });
    try {
      const response = await axiosInstance.get(
        `/profile/basic-metrics?userid=${profileId}`
      );

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message || "Failed to fetch basic metrics",
          {
            duration: 3000,
          }
        );
      } else {
        toast.error("An unexpected error ", {
          duration: 3000,
        });
      }
    } finally {
      set({ isLoadingBasicMetrics: false });
    }
  },

  getTagWiseSolvedCount: async (profileId) => {
    set({ isLoadingTagWiseSolvedCount: true });
    try {
      const response = await axiosInstance.get(
        `/profile/tag-wise-problems-solved?userid=${profileId}`
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message ||
            "Failed to fetch tag-wise solved count",
          {
            duration: 3000,
          }
        );
      } else {
        toast.error("An unexpected error occurred", {
          duration: 3000,
        });
      }
    } finally {
      set({ isLoadingTagWiseSolvedCount: false });
    }
  },
}));

export default useProfileStore;
