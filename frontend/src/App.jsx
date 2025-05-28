import { useState } from "react";
import { Button } from "./components/ui/button";
import { Routes, Route } from "react-router";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
