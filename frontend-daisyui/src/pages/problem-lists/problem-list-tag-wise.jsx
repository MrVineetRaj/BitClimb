import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { useProblemListStore } from "../../store/useProblemListStore";
import ProblemRow from "../../components/shared/problem-row";
import Heading from "../../components/shared/heading";

const ProblemListTagWise = () => {
  const { tag } = useParams();
  const { pathname } = useLocation();
  const [problems, setProblems] = useState([]);
  const [solvedCnt, setSolvedCnt] = useState({});
  const [problemCnt, setProblemCnt] = useState({});
  const {
    isLoadingProblemListWiseProblems,
    getProblemsForTagWiseProblemLists,
    getProblemsForTagWiseProblemListMetrics,
    // getTagWiseProblemListsMetrics
    isLoadingProblemListMetrics,
  } = useProblemListStore();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [difficulty, setDifficulty] = useState("");

  const handleFetchProblems = (tag, ref) => {
    getProblemsForTagWiseProblemLists(tag, ref, page, limit).then((res) => {
      console.log(res);
      if (res?.success) {
        setProblems(res?.data?.problems);
      }
    });
  };

  const handleFetchListMetrics = (tag, ref) => {
    getProblemsForTagWiseProblemListMetrics(tag, ref).then((res) => {
      console.log("res", res);
      if (res?.success) {
        setSolvedCnt({
          total: res?.data?.totalSolvedProblems || 0,
          easy: res?.data?.totalSolvedEasyProblems || 0,
          medium: res?.data?.totalSolvedMediumProblems || 0,
          hard: res?.data?.totalSolvedHardProblems || 0,
        });

        setProblemCnt({
          total: res?.data?.totalProblems || 0,
          easy: res?.data?.totalEasyProblems || 0,
          medium: res?.data?.totalMediumProblems || 0,
          hard: res?.data?.totalHardProblems || 0,
        });
      }
    });
  };
  useEffect(() => {
    document.title = `Problem Lists - ${tag}`;

    if (pathname.includes("company")) {
      handleFetchProblems(tag, "company");
      handleFetchListMetrics(tag, "company");
    } else if (pathname.includes("topic")) {
      handleFetchProblems(tag, "topic");
      handleFetchListMetrics(tag, "topic");
    }
  }, [pathname, tag]);

  useEffect(() => {
    if (pathname.includes("company")) {
      handleFetchProblems(tag, "company");
    } else if (pathname.includes("topic")) {
      handleFetchProblems(tag, "topic");
    }
  }, [tag, page, limit, pathname]);

  return (
    <div className="w-full max-w-[1500px] p-4">
      <div className="w-full h-full flex items-start justify-start gap-4">
        <div className="w-full min-w-64 max-w-84">
          {isLoadingProblemListMetrics ? (
            <div className="h-[800px] skeleton w-full"></div>
          ) : (
            <div className="flex flex-col gap-4 bg-base-300 h-full overflow-y-scroll p-4">
              <h1 className="text-3xl font-bold text-secondary">{tag} List</h1>
              <p>Problems related to {tag}</p>
              <hr className="text-gray-500" />
              <div className="w-full flex flex-col gap-4 mt-8 items-center">
                <div
                  className="radial-progress bg-secondary text-primary-content border-secondary border-4 "
                  style={
                    {
                      "--value":
                        (
                          ((solvedCnt?.total || 0) * 100) /
                          problemCnt?.total
                        ).toFixed(0) || 0,
                      "--size": "12rem",
                      "--thickness": "8px",
                    } /* as React.CSSProperties */
                  }
                  aria-valuenow={
                    (
                      ((solvedCnt?.total || 0) * 100) /
                      problemCnt?.total
                    ).toFixed(0) || 0
                  }
                  role="progressbar"
                >
                  <h2 className="text-2xl font-bold">
                    {solvedCnt?.total || 0} / {problemCnt?.total || 0}
                  </h2>
                </div>
                <h3 className="text-xl font-bold mt-8">Problem Distribution</h3>
                <div className="">
                  <p className="text-lg">Easy</p>
                  <div className="w-full flex items-center justify-between">
                    <span>{solvedCnt?.easy || 0}</span>
                    <span>{problemCnt?.easy || 0}</span>
                  </div>
                  <progress
                    className="progress progress-success w-56"
                    value={solvedCnt?.easy || 0}
                    max={problemCnt?.easy || 0}
                  ></progress>
                </div>{" "}
                <div className="">
                  <p className="text-lg">Medium</p>
                  <div className="w-full flex items-center justify-between">
                    <span>{solvedCnt?.medium || 0}</span>
                    <span>{problemCnt?.medium || 0}</span>
                  </div>
                  <progress
                    className="progress progress-warning w-56"
                    value={solvedCnt?.medium || 0}
                    max={problemCnt?.medium || 0}
                  ></progress>
                </div>{" "}
                <div className="">
                  <p className="text-lg">Hard</p>
                  <div className="w-full flex items-center justify-between">
                    <span>{solvedCnt?.hard || 0}</span>
                    <span>{problemCnt?.hard || 0}</span>
                  </div>
                  <progress
                    className="progress progress-error w-56"
                    value={solvedCnt?.hard || 0}
                    max={problemCnt?.hard || 0}
                  ></progress>
                </div>
              </div>
            </div>
          )}
        </div>

        {isLoadingProblemListWiseProblems ? (
          <div className="text-center w-full min-h-[800px] skeleton">
            Loading...
          </div>
        ) : (
          <div className="w-full flex-1 flex flex-col gap-2 items-start">
            <Heading title={`Problems related to ${tag}`} />
            {problems.length > 0 ? (
              problems?.map((problem, idx) => (
                <ProblemRow problem={problem} idx={idx} key={problem?.id} />
              ))
            ) : (
              <div>No problems found for this tag.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemListTagWise;
