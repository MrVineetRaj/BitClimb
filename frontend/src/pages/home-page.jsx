import ProblemListContainer from "@/components/home-page/problems-container";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center mt-8 w-full min-h-screen ">
      <div className=" w-[100%] lg:w-[80%] 2xl:w-[70%] grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-1 lg:col-span-3 flex gap-4 overflow-x-scroll pr-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 mb-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors min-w-64"
            >
              <h2 className="text-xl font-semibold">Problem {index + 1}</h2>
              <p className="text-gray-700">
                This is a brief description of problem {index + 1}.
              </p>
            </div>
          ))}
        </div>

        <div className="col-span-1 pl-2 w-64 h-72 ">
          <div className="w-full h-full bg-red-500"></div>
        </div>

        <div className="col-span-1 mt-8">
          <h2>Topic tags</h2>
          <div className="flex gap-2 overflow-x-scroll lg:flex-wrap">
            {Array.from({ length: 20 }).map((_, index) => (
              <span key={index}>index</span>
            ))}
          </div>

          <h2>Company tags</h2>

          <div className="flex gap-2 overflow-x-scroll lg:flex-wrap">
            {Array.from({ length: 20 }).map((_, index) => (
              <span key={index}>index</span>
            ))}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3">
          <ProblemListContainer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
