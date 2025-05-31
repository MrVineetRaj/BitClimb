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
import ProfilePage from "./pages/profile-page";
import ProblemLists from "./pages/problem-lists";
import UserMadeList from "./pages/problem-lists/user-made-list";
import TopicWiseList from "./pages/problem-lists/topic-wise-list";
import CompanyWiseList from "./pages/problem-lists/company-wise-list";

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
        <div className="w-[95%] flex flex-col items-center justify-between ">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/contest" element={<ContestPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/verify-email/:token" element={<VerifyEmailPage />} />
            <Route path="/profile/:profileId" element={<ProfilePage />} />
            <Route path="/problem/:problemId" element={<ProblemPage />} />

            <Route
              path="/problem-lists"
              element={<ProblemLists />} // Placeholder for Problem Lists Page
            />
            <Route
              path="/problem-lists/:listId"
              element={<UserMadeList />} // Placeholder for Specific Problem List Page
            />
            <Route
              path="/problem-lists/topic-wise/:topic"
              element={<TopicWiseList />} // Placeholder for Specific Problem List Page
            />
            <Route
              path="/problem-lists/company-wise/:company"
              element={<CompanyWiseList />} // Placeholder for Specific Problem List Page
            />
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
