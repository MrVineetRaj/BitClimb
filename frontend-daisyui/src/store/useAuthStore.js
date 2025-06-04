import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigninUp: false,
  isLoggingIn: false,
  isCheckingAuth: false,
  isVerifyingEmail: false,
  isResendingVerificationEmail: false,
  isLoggingOut: false,
  isLoadingPublicProfile: false,

  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const response = await axiosInstance.get("/auth/check");
      set({
        authUser: {
          ...response.data.data,
          avatar:
            response.data.data.avatar ||
            "https://avatar.iran.liara.run/public/boy",
        },
        isCheckingAuth: false,
      });
    } catch (error) {
      set({ authUser: null, isCheckingAuth: false });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  login: async (email, password) => {
    set({ isLoggingIn: true });
    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      set({ authUser: response.data.data, isLoggingIn: false });
      return response.data.success;
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.message || "Login failed";
        toast.error(errorMessage, {
          duration: 3000,
        });
      } else {
        toast.error("Login Failed", {
          description: "An unexpected error occurred",
          duration: 3000,
        });
      }
      set({ authUser: null, isLoggingIn: false });
      throw error;
    } finally {
      set({ isLoggingIn: false });
    }
  },

  signup: async (name, email, password) => {
    set({ isSigninUp: true });
    try {
      if (!name || !email || !password) {
        throw new Error("All fields are required");
      }
      const response = await axiosInstance.post("/auth/register", {
        email,
        password,
        name,
      });

      set({ authUser: response.data.data, isSigninUp: false });
      toast.success("Signup Successful", {
        description: "Verification Email Sent",
        duration: 3000,
      });
      return response.data.success;
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.message || "Signup failed";
        toast.error("Signup Failed", {
          description: errorMessage,
          duration: 3000,
        });
      } else {
        toast.error("Signup Failed", {
          description: "An unexpected error occurred",
          duration: 3000,
        });
      }
      set({ authUser: null, isSigninUp: false });
      throw error;
    } finally {
      set({ isSigninUp: false });
    }
  },

  logout: async () => {
    set({
      isLoggingOut: true,
    });

    try {
      const response = await axiosInstance.delete("/auth/logout");
      set({ authUser: null, isLoggingOut: false });
      toast.success("Logout Successful", {
        duration: 3000,
      });
      return response.data.success;
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.message || "Logout failed";
        toast.error("Logout Failed", {
          description: errorMessage,
          duration: 3000,
        });
      } else {
        toast.error("Logout Failed", {
          description: "An unexpected error occurred",
          duration: 3000,
        });
      }
      set({ authUser: null, isLoggingOut: false });
      throw error;
    } finally {
      set({ isLoggingOut: false });
    }
  },

  verifyEmail: async (token) => {
    set({ isVerifyingEmail: true });
    try {
      const response = await axiosInstance.get(`/auth/verify-email/${token}`);
      set({ authUser: response.data.user, isVerifyingEmail: false });
      toast.success("Email Verified Successfully", {
        duration: 3000,
      });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "Verification failed";
        toast.error("Verification Failed", {
          description: errorMessage,
          duration: 3000,
        });
      } else {
        toast.error("Verification Failed", {
          description: "An unexpected error occurred",
          duration: 3000,
        });
      }
      set({ authUser: null, isVerifyingEmail: false });
      throw error;
    } finally {
      set({ isVerifyingEmail: false });
    }
  },

  resendVerificationEmail: async (email) => {
    set({ isResendingVerificationEmail: true });
    try {
      const response = await axiosInstance.post(
        "/auth/resend-verification-email",
        {
          email,
        }
      );
      toast.success("Verification Email Resent", {
        duration: 3000,
      });
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.message || "Resend failed";
        toast.error("Resend Failed", {
          description: errorMessage,
          duration: 3000,
        });
      } else {
        toast.error("Resend Failed", {
          description: "An unexpected error occurred",
          duration: 3000,
        });
      }
      throw error;
    } finally {
      set({ isResendingVerificationEmail: false });
    }
  },

  getPublicUserProfile: async (profileId) => {
    set({ isLoadingPublicProfile: true });
    try {
      const response = await axiosInstance.get(
        `/auth/public-profile/${profileId}`
      );
      set({ isLoadingPublicProfile: false });
      return response.data.data;
    } catch (error) {
      set({ isLoadingPublicProfile: false });
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "Failed to fetch profile";
        toast.error("Profile Fetch Failed", {
          description: errorMessage,
          duration: 3000,
        });
      }
      return null;
    } finally {
      set({ isLoadingPublicProfile: false });
    }
  },
}));
