import { useAuthStore } from "@/store/useAuthStore";
import { useProblemStore } from "@/store/useProblemStore";
import { Bookmark, Check, CheckCircle, Circle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { Link } from "react-router";

const ProblemRow = ({ problem, idx = 0 }) => {
  return (
    <div
      className={`${
        idx % 2 == 0 ? "bg-primary/10" : ""
      } p-4 transition-colors min-w-64 flex items-center justify-between hover:bg-primary/20 `}
    >
      <span className="flex items-center gap-2">
        {problem?.solved ? (
          <CheckCircle className="size-4 text-green-500" />
        ) : (
          <Circle className="size-4" />
        )}
        <Link
          to={`/problem/${problem.id}`}
          className={`text-gray-400 text-sm  `}
        >
          {problem.title}
        </Link>
      </span>

      <span className="flex items-center gap-4">
        <span className="md:flex items-center gap-2 hidden ">
          {problem?.tags &&
            problem?.tags.length > 0 &&
            problem?.tags?.map((tag, index) => (
              <Badge key={tag} className=" " variant={"outline"}>
                {tag}
              </Badge>
            ))}
        </span>
        <Badge
          className={`${
            problem?.difficulty === "EASY"
              ? "bg-green-500"
              : problem?.difficulty === "MEDIUM"
              ? "bg-orange-500"
              : "bg-red-500"
          } text-white`}
        >
          {" "}
          {problem?.difficulty}
        </Badge>
        <Bookmark className="size-4 text-gray-400 ml-2" />
      </span>
    </div>
  );
};

const ProblemsContainer = () => {
  const { getAllProblems, isLoadingProblems } = useProblemStore();
  const [problems, setProblems] = useState(null);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Simulating an API call to fetch problems
    const fetchProblems = async () => {
      getAllProblems(limit, page).then((data) => {
        console.log("Fetched problems:", data);
        setProblems(data.problems);
      });
    };
    fetchProblems();
  }, [limit, page]);

  return (
    <>
      <h1 className="text-2xl font-bold ">Problems</h1>
      {isLoadingProblems && !problems ? (
        <div className="flex flex-col gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className={` bg-primary/10  animate-pulse flex items-center justify-between w-full h-8`}
            ></div>
          ))}
        </div>
      ) : problems && problems.length > 0 ? (
        <div className="w-full flex flex-col gap-4">
          {problems.map((problem, index) => (
            <ProblemRow key={problem.id} idx={index} problem={problem} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-8">
          No problems available at the moment.
        </div>
      )}
    </>
  );
};

export default ProblemsContainer;
