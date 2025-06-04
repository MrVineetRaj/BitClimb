import React, { useEffect } from "react";
import Navbar from "./components/shared/navbar";
import Background from "./components/shared/background";
import { Route, Routes } from "react-router";
import HomePage from "./pages/home-page";
import { useAuthStore } from "./store/useAuthStore";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";
import AdminPanel from "./pages/admin/admin-panel";
import CreateProblem from "./pages/admin/create-problem";
import CreateContest from "./pages/admin/create-contest";
import ProblemPage from "./pages/problem-page";
const App = () => {
  const { isCheckingAuth, checkAuth } = useAuthStore();
  useEffect(() => {
    const initializeAuth = () => {
      checkAuth();
    };

    initializeAuth();
  }, []);
  return (
    <div className="min-h-screen w-screen flex flex-col items-center relative">
      <Background />
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin/panel" element={<AdminPanel />} />
        <Route path="/admin/panel/create-problem" element={<CreateProblem />} />
        <Route path="/admin/panel/create-contest" element={<CreateContest />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/problem/:problemId" element={<ProblemPage />} />
      </Routes>
    </div>
  );
};
export default App;
