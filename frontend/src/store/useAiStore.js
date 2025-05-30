import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";

const useAiStore = create((set) => ({
  isThinking: false,
  reviewCode: async (source_code, problem_description) => {
    set({ isThinking: true });
    const response = await axiosInstance.post("/ai/review-code", {
      source_code,
      problem_description,
    });

    return response.data.data.review;
  },
}));

export default useAiStore;
