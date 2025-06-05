import React, { useEffect, useState } from "react";
import { useProblemStore } from "../../store/useProblemStore";
import { Bookmark, Check, CheckCircle, Circle } from "lucide-react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router";
import Heading from "../shared/heading";
import SaveProblemToPlaylistModel from "../shared/save-problem-to-playlist-model";
import ProblemRow from "../shared/problem-row";




const ProblemContainer = ({ selectedTopics = [], selectedCompanies = [] }) => {
  const { getAllProblems, isLoadingProblems } = useProblemStore();
  const [problems, setProblems] = useState();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );
  const navigate = useNavigate();
  const loadProblems = async (
    page = 1,
    limit = 10,
    search = "",
    tags = "",
    company = ""
  ) => {
    const res = await getAllProblems(limit, page, search, tags, company);
    console.log("res", res);
    setProblems(res?.problems);
  };

  useEffect(() => {
    // setTimeout(() => {
      loadProblems();
    // }, );
  }, []);

  useEffect(() => {
    navigate(
      `/home?${
        selectedCompanies?.length > 0
          ? `company=${selectedCompanies.join(";")}&`
          : ""
      }${
        selectedTopics?.length > 0 ? `tags=${selectedTopics.join(";")}&` : ""
      }${searchQuery?.length > 3 ? `search=${searchQuery}` : ""}`
    );
    setTimeout(() => {
      loadProblems(
        1,
        10,
        searchQuery.length > 3 ? searchQuery : "",
        selectedTopics.join(";"),
        selectedCompanies.join(";")
      );
    }, 500);
  }, [selectedTopics, selectedCompanies, searchQuery]);
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
        {isLoadingProblems ? (
          Array.from({ length: 10 }).map((_, idx) => (
            <div
              className="w-full bg-primary/20 animate-pulse h-10"
              key={idx}
            ></div>
          ))
        ) : problems && problems.length > 0 ? (
          problems?.map((problem, idx) => {
            return <ProblemRow problem={problem} idx={idx} key={idx} />;
          })
        ) : (
          <div className="flex items-center justify-center w-full h-full flex-col gap-4">
            <img
              src="/404_notfound.png"
              alt="404_notfound"
              className="size-64"
            />
            <h2 className="text-xl text-center font-bold">
              No Problems with such Filters
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemContainer;
