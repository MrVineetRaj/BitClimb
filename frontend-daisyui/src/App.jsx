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
import ProblemListsPage from "./pages/problem-lists/problem-lists-page";
import Contests from "./pages/contests/contests";
import { useProblemListStore } from "./store/useProblemListStore";
import ProblemListPage from "./pages/problem-lists/problem-list-page";
import ProblemViewForAdmin from "./pages/admin/problem-view-for-admin";
import SubmissionPage from "./pages/submission-page";
import ProblemListTagWise from "./pages/problem-lists/problem-list-tag-wise";
import ProfilePage from "./pages/profile-page";
import AdminLayout from "./layout/admin-layout";
import UserAuthLayout from "./layout/user-auth-layout";
const App = () => {
  const { isCheckingAuth, checkAuth, authUser } = useAuthStore();
  const { getAllProblemLists } = useProblemListStore();
  useEffect(() => {
    const initializeAuth = () => {
      checkAuth();
    };

    initializeAuth();
  }, []);

  useEffect(() => {
    const fetchProblemLists = () => {
      if (authUser) {
        getAllProblemLists();
      }
    };
    fetchProblemLists();
  }, [authUser]);
  return (
    <div className="min-h-screen w-screen flex flex-col items-center relative">
      <Background />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/submission/:submissionID"
          element={<SubmissionPage />} // Placeholder for SubmissionPage
        />

        <Route path="/profile/:userId" element={<ProfilePage />} />

        <Route element={<UserAuthLayout />}>
          <Route path="/home" element={<HomePage />} />{" "}
          <Route
            path="/problem-lists/topic/:tag"
            element={<ProblemListTagWise />}
          />
          <Route
            path="/problem-lists/company/:tag"
            element={<ProblemListTagWise />}
          />{" "}
          <Route path="/problem/:problemId" element={<ProblemPage />} />
          <Route path="/problem-lists" element={<ProblemListsPage />} />
          <Route
            path="/problem-lists/:problemListId"
            element={<ProblemListPage />}
          />
          <Route path="/contests" element={<Contests />} />
          <Route path="/contests/:contestId" element={<Contests />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/admin/panel" element={<AdminPanel />} />
          <Route
            path="/admin/panel/create-problem"
            element={<CreateProblem />}
          />
          <Route
            path="/admin/panel/create-contest"
            element={<CreateContest />}
          />
          <Route
            path="/admin/panel/problem/:problemId"
            element={<ProblemViewForAdmin />}
          />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
