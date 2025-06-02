import { useContestStore } from "@/store/useContestStore";
import { LayoutDashboard } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const BannerContests = () => {
  const { isLoading, getContests } = useContestStore();
  const [contests, setContests] = useState(null);
  useEffect(() => {
    getContests(1, 10, "").then((res) => {
      setContests(res);
    });
  }, []);
  return (
    <div
      className="overflow-x-scroll flex gap-4"
      style={{
        scrollbarWidth: "none",
      }}
    >
      {isLoading
        ? Array.from({ length: 5 })?.map((_, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-blue-500/20 via-blue-400/20 to-blue-300/30 min-h-48   p-4 rounded-lg shadow-md min-w-84 h-48 hover:to-blue-500/30 hover:via-blue-400/20 hover:from-blue-300/20 transition-color duration-300 relative animate-pulse"
            ></div>
          ))
        : contests &&
          contests.length > 0 &&
          contests?.map((contest, index) => (
            <Link
              to={`/contest/${contest.id}`}
              key={index}
              className="bg-gradient-to-br from-blue-500/20 via-blue-400/20 to-blue-300/30   p-4 rounded-lg shadow-md min-w-84 h-48 hover:to-blue-500/30 hover:via-blue-400/20 hover:from-blue-300/20 transition-color duration-300 relative"
            >
              <LayoutDashboard className="absolute top-4 right-4" />
              <h2 className="text-xl font-semibold text-white">
                {contest.title}
              </h2>
              <p className="text-gray-300 mt-4">{contest?.description}</p>
              <span className="absolute bottom-2 right-2 flex gap-2 text-sm">
                <p className="text-primary font-black text-sm">
                  {new Date(contest.startTime).toLocaleString("en-US", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </p>
                <p className="text-gray-400">To</p>
                <p className="text-primary font-black ">
                  {new Date(contest.startTime).toLocaleString("en-US", {
                    dateStyle: "short",
                    timeStyle: "short",
                  })}
                </p>
              </span>
            </Link>
          ))}
    </div>
  );
};

export default BannerContests;
