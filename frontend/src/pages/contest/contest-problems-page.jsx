import { useContestStore } from "@/store/useContestStore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const ContestProblemsPage = () => {
  const { contestId } = useParams();
  const { isLoading, getContestProblems } = useContestStore();
  const [contestProblems, setContestProblems] = useState(null);
  useEffect(() => {
    getContestProblems(contestId).then((res) => {
      // console.log("Contest Problems:", res);
      setContestProblems(res);
    });
  }, [contestId]);
  return (
    <div className="flex flex-col items-center min-h-[600px] justify-center">
      {contestProblems && contestProblems?.length > 0 && !isLoading ? (
        <div className="w-full lg:w-[85%] min-w-[400px] flex flex-col gap-4 bg-primary/20 p-4 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Contest Problems
          </h1>
          <ul className="list-disc pl-5">
            {contestProblems?.map((contestProblem, index) => (
              <li key={index} className="mb-2">
                <Link
                  to={`/problem/${contestProblem?.problem.id}?q=${contestId}&r=${contestProblem?.id}&ref=contest`}
                  className="text-blue-600 hover:underline"
                  onClick={() => {
                    // console.log(
                    //   "Navigating to problem:",
                    //   contestProblem?.problem.id
                    // );
                  }}
                >
                  {contestProblem?.problem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-center text-gray-500">
          {isLoading
            ? "Loading problems..."
            : "No problems found for this contest."}
        </div>
      )}
      {isLoading && (
        <div className="animate-pulse w-full lg:w-[85%] min-w-[400px\] h-48 bg-gray-200 rounded-lg"></div>
      )}
      {/* {contestProblems && contestProblems.length === 0 && !isLoading && (
        <div className="text-center text-gray-500">
          No problems found for this contest.
        </div>
      )} */}
    </div>
  );
};

export default ContestProblemsPage;
