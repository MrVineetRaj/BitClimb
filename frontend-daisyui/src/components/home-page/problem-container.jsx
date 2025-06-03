import React, { useEffect, useState } from "react";
import { useProblemStore } from "../../store/useProblemStore";
import { Bookmark, Check, CheckCircle, Circle } from "lucide-react";
import { Link } from "react-router";
import Heading from "../shared/heading";
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
          className={`font-bold text-sm  `}
        >
          {problem.title}
        </Link>
      </span>

      <span className="flex items-center gap-4">
        <span className="md:flex items-center gap-2 hidden ">
          {problem?.tags &&
            problem?.tags.length > 0 &&
            problem?.tags?.map((tag, index) => (
              <div className="badge badge-neutral" key={index}>
                {tag}
              </div>
            ))}
        </span>
        <div
          className={`${
            problem?.difficulty === "EASY"
              ? "bg-green-500"
              : problem?.difficulty === "MEDIUM"
              ? "bg-orange-500"
              : "bg-red-500"
          } text-white badge badge-neutral`}
        >
          {" "}
          {problem?.difficulty}
        </div>
        <Bookmark className="size-4 text-gray-400 ml-2" />
      </span>
    </div>
  );
};
const ProblemContainer = () => {
  const { getAllProblems, isLoadingProblem } = useProblemStore();
  const [problems, setProblems] = useState();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchQuery, setSearchQuery] = useState([]);
  const loadProblems = async () => {
    const res = await getAllProblems(limit.page);
    setProblems(res?.problems);
  };

  useEffect(() => {
    loadProblems();
  }, []);

  useEffect(() => {
    if (searchQuery.length < 3) return;

    setTimeout(() => {
      console.log(searchQuery);
    }, 1500);
  }, [searchQuery]);
  return (
    <div className="h-full w-full flex items-start flex-col  ">
      <div className="flex items-center justify-between w-full">
        <Heading title={"Problems"} />
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={searchQuery}
            type="search"
            className="grow"
            placeholder="Search"
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="w-full p-4 flex flex-col gap-4">
        {problems &&
          problems?.map((problem, idx) => {
            return <ProblemRow problem={problem} idx={idx} key={idx} />;
          })}
      </div>
    </div>
  );
};

export default ProblemContainer;
