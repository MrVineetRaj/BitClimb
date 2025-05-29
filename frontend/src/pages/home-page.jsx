import ProblemListContainer from "@/components/home-page/problems-container";
import StreakCalendar from "@/components/home-page/streak-calendar";
import React, { useState } from "react";
import { DSA_TAGS, COMPANY_TAGS, DUMMY_CONTESTS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { LayoutDashboard } from "lucide-react";
const HomePage = () => {
  const [selectedTheoryTags, setSelectedTheoryTags] = useState([]);
  const [selectedCompanyTags, setSelectedCompanyTags] = useState([]);
  return (
    <div className="flex flex-col items-center mt-8 gap-8 w-full min-h-screen ">
      <div className=" w-full lg:w-[85%] flex justify-between items-center bg-primary/20 p-4 rounded-xl gap-4 ">
        <div
          className=" pr-2 w-full overflow-x-hidden"
          style={{
            scrollbarWidth: "none",
          }}
        >
          <h1 className="text-white text-2xl font-bold mb-4 ">Contests</h1>
          <div
            className="overflow-x-scroll flex gap-4"
            style={{
              scrollbarWidth: "none",
            }}
          >
            {DUMMY_CONTESTS?.map((contest, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-500/20 via-blue-400/20 to-blue-300/30   p-4 rounded-lg shadow-md min-w-84 h-48 hover:to-blue-500/30 hover:via-blue-400/20 hover:from-blue-300/20 transition-color duration-300 relative"
              >
                <LayoutDashboard className="absolute top-4 right-4" />
                <h2 className="text-xl font-semibold text-white">
                  {contest.title}
                </h2>
                <p className="text-primary font-black absolute bottom-2 right-2">
                  {new Date(contest.startTime).toLocaleString("en-US", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className=" hidden lg:flex  items-center justify-center">
          <StreakCalendar />
        </div>
      </div>
      <div className=" w-full lg:w-[85%] flex flex-col lg:flex-row-reverse justify-between bg-primary/20 p-4 rounded-xl gap-4 ">
        <div className="max-w-64">
          <h2 className="text-xl font-semibold mb-2 text-orange-500 ">
            Topics
          </h2>
          <div
            className="flex gap-2 overflow-x-scroll lg:flex-wrap"
            style={{
              scrollbarWidth: "none",
            }}
          >
            {DSA_TAGS?.map((tag, index) => (
              <Badge
                key={index}
                variant={"outline"}
                className={`cursor-pointer text-gray-400 transition-colors ${
                  selectedTheoryTags.includes(tag)
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => {
                  setSelectedTheoryTags((prev) =>
                    prev.includes(tag)
                      ? prev.filter((t) => t !== tag)
                      : [...prev, tag]
                  );
                }}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h2 className="text-xl font-semibold mt-4 mb-2 text-orange-500">
            Companies
          </h2>

          <div
            className="flex gap-2 overflow-x-scroll lg:flex-wrap mb-4"
            style={{
              scrollbarWidth: "none",
            }}
          >
            {COMPANY_TAGS?.map((tag, index) => (
              <Badge
                key={index}
                variant={"outline"}
                className={`cursor-pointer text-gray-400 transition-colors ${
                  selectedCompanyTags.includes(tag)
                    ? "bg-blue-500 text-white"
                    : ""
                }`}
                onClick={() => {
                  setSelectedCompanyTags((prev) =>
                    prev.includes(tag)
                      ? prev.filter((t) => t !== tag)
                      : [...prev, tag]
                  );
                }}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="w-full lg:col-span-3 ">
          <ProblemListContainer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
