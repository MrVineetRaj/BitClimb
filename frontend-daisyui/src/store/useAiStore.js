import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

const useAiStore = create((set) => ({
  isThinking: false,
  reviewCode: async (
    source_code,
    problem_description,
    verdict,
    submission_id,
    error
  ) => {
    const toastId = toast.loading("Reviewing your code...");
    set({ isThinking: true });

    try {
      const response = await axiosInstance.post(
        `/ai/review-code/${submission_id}`,
        {
          source_code,
          problem_description,
          verdict,
          error,
        }
      );

      toast.success("Code review completed successfully.", {
        id: toastId,
        duration: 3000,
      });
      set({ isThinking: false });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message ||
            "An error occurred while reviewing the code.",
          {
            id: toastId,
            duration: 3000,
          }
        );

        set({ isThinking: false });
      } else {
        toast.error("An unexpected error occurred while reviewing the code.", {
          id: toastId,
          duration: 3000,
        });
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
