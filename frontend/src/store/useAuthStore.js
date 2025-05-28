import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigninUp: false,
  isLoggingIn: false,
  isCheckingAuth: false,
  isVerifyingEmail: false,
  isResendingVerificationEmail: false,

  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const response = await axiosInstance.get("/auth/check");
      set({ authUser: response.data.data, isCheckingAuth: false });
      console.log("Auth User:", response);
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

      set({ authUser: response.data.user, isLoggingIn: false });
      return response.data.success;
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.message || "Login failed";
        toast.error("Login Failed", {
          description: errorMessage,
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
      set({ authUser: response.data.user, isSigninUp: false });
      toast.success("Signup Successful", {
        description: "Verification Email Sent",
        duration: 3000,
      });
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

  logout: async () =>
    axiosInstance
      .delete("/auth/logout")
      .then(() => {
        set({ authUser: null });
        toast.success("Logged out successfully", {
          duration: 3000,
        });
      })
      .catch((error) => {
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
        set({ authUser: null });
      }),

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
}));
