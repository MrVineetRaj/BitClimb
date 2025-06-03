import React from "react";
import Navbar from "./components/shared/navbar";
import Background from "./components/shared/background";
import { Route, Routes } from "react-router";
import HomePage from "./pages/home-page";
const App = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center relative">
      <Background />
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
      
    </div>
  );
};
export default App;
