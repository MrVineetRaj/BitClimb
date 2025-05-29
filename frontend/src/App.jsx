import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";
import { Routes, Route } from "react-router";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";
import { useAuthStore } from "./store/useAuthStore";
import { Loader } from "lucide-react";
import VerifyEmailPage from "./pages/verify-email";
import Navbar from "./components/shared/navbar";
import LandingPage from "./pages/landing-page";
import HomePage from "./pages/home-page";
import ContestPage from "./pages/contests-page";
import AdminPanel from "./pages/admin-panel";
import AdminLayout from "./layouts/admin-layout";
import CreateProblem from "./pages/admin/create-problem";
import ProblemPage from "./pages/problem";
import CreateContextPage from "./pages/admin/create-contest";

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
      <Navbar />

      <div className="w-[100svw] flex flex-col items-center justify-center mt-4">
        <div className="w-[95%] flex items-center justify-between ">
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
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/contest" element={<ContestPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/verify-email/:token" element={<VerifyEmailPage />} />
            <Route path="/problem/:problemId" element={<ProblemPage />} />
            <Route element={<AdminLayout />}>
              <Route path="/admin/panel/" element={<AdminPanel />} />
              <Route
                path="/admin/panel/create-problem"
                element={<CreateProblem />}
              />
              <Route
                path="/admin/panel/create-contest"
                element={<CreateContextPage />} // Placeholder for Create Contest Page
              />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
