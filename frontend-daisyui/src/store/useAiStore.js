import { axiosInstance } from "@/lib/axios";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { create } from "zustand";

const useAiStore = create((set) => ({
  isThinking: false,
  reviewCode: async (
    source_code,
    problem_description,
    verdict,
    submission_id
  ) => {
    set({ isThinking: true });
    try {
      const response = await axiosInstance.post(
        `/ai/review-code/${submission_id}`,
        {
          source_code,
          problem_description,
          verdict,
        }
      );

      return response.data.data.review;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message ||
            "An error occurred while reviewing the code."
        );

        set({ isThinking: false });
      } else {
        toast.error("An unexpected error occurred while reviewing the code.");
        set({ isThinking: false });
        return null;
      }
    } finally {
      set({ isThinking: false });
    }
    return null;
  },
}));

export default useAiStore;
