import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { Routes, Route } from "react-router";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";
import { useAuthStore } from "./store/useAuthStore";
import { Loader } from "lucide-react";
import VerifyEmailPage from "./pages/verify-email";

function App() {
  const {
    authUser,
    checkAuth,
    isCheckingAuth,
    resendVerificationEmail,
    isResendingVerificationEmail,
  } = useAuthStore();

  useEffect(() => {
    const initializeAuth = async () => {
      await checkAuth();
    };
    initializeAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin h-10 w-10 text-blue-500" />
      </div>
    );
  }

  return (
    <>
      {authUser && !authUser.isEmailVerified && (
        <span className="w-full flex items-center justify-center bg-yellow-100 text-yellow-800 p-4">
          <span>
            Your email is not verified. Please check your inbox for the
            verification link.
          </span>
          <Button
            className="ml-4 text-white"
            onClick={() => resendVerificationEmail(authUser.email)}
            disabled={isResendingVerificationEmail}
          >
            Resend Verification Email
          </Button>
        </span>
      )}

      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-email/:token" element={<VerifyEmailPage />} />
      </Routes>
    </>
  );
}

export default App;
