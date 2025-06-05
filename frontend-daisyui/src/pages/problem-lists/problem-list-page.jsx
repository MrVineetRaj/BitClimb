import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useProblemListStore } from "../../store/useProblemListStore";
import Heading from "../../components/shared/heading";
import ProblemRow from "../../components/shared/problem-row";
import { axiosInstance } from "../../lib/axios";

const ProblemListProblemContainer = ({ problemListId }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [difficulty, setDifficulty] = useState("");
  const {
    isLoadingProblemListWiseProblems,
    getProblemListMetricsById,
    getProblemsPerProblemList,
  } = useProblemListStore();

  const [problems, setProblems] = useState([]);
  const fetchProblems = async () => {
    try {
      const response = await axiosInstance.get(
        `/problem-list/${problemListId}/problems?page=${page}&limit=${limit}&difficulty=${difficulty}`
      );
      console.log("Fetched problems:", response.data.data);
      setProblems(response.data.data.problems || []);
    } catch (error) {
      if (error.response) {
        console.error("Error fetching problems:", error.response.data);
      } else {
        console.error("Error fetching problems:", error.message);
      }
    }
  };

  useEffect(() => {
    fetchProblems();
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-2 overflow-y-scroll">
      {isLoadingProblemListWiseProblems ? (
        Array.from({ length: 10 })?.map((_, index) => (
          <div
            key={index}
            className="w-full bg-base-200 rounded-lg shadow-md h-12 skeleton"
          ></div>
        ))
      ) : problems && problems?.length > 0 ? ( // Fix the logical operator
        problems?.map(
          (
            listProblem,
            index // Add key and pass problem data
          ) => (
            <ProblemRow
              key={listProblem.id || index}
              problem={listProblem.problem}
              idx={index}
            />
          )
        )
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-gray-500">No problems found in this list.</p>
        </div>
      )}
    </div>
  );
};
const ProblemListPage = () => {
  const { problemListId } = useParams();
  const {
    getProblemListMetricsById,
    isLoadingProblemListMetrics,
    isLoadingProblemListWiseProblems,
  } = useProblemListStore();
  const [listMetadata, setListMetadata] = useState(null);
  const [problemCnt, setProblemCnt] = useState(0);
  const [solvedProblemCnt, setSolvedProblemCnt] = useState(0);
  useEffect(() => {
    if (problemListId) {
      getProblemListMetricsById(problemListId).then((data) => {
        console.log("Problem List Metrics:", data?.counts, data?.solved);
        setListMetadata(data);
        setProblemCnt({
          ...data?.counts,
          total: data?.counts?.easy + data?.counts?.medium + data?.counts?.hard,
        });
        setSolvedProblemCnt({
          ...data?.solved,
          total: data?.solved?.easy + data?.solved?.medium + data?.solved?.hard,
        });
      });
    }
  }, [problemListId]);

  return (
    <div className="w-full h-[calc(100vh-100px)] flex gap-4 items-start  px-4">
      <div className="h-full  max-w-[400px] w-full ">
        {isLoadingProblemListMetrics ? (
          <div className="h-[800px] skeleton w-full"></div>
        ) : (
          <div className="flex flex-col gap-4 bg-base-300 h-full overflow-y-scroll p-4">
            <h1 className="text-3xl font-bold text-secondary">
              {listMetadata?.title}
            </h1>
            <small className="text-gray-500">
              Created at {new Date(listMetadata?.createdAt)?.toLocaleString()}
            </small>
            {listMetadata?.description && <p>{listMetadata?.description}</p>}
            <hr className="text-gray-500" />
            <div className="w-full flex flex-col gap-4 mt-8 items-center">
              <div
                className="radial-progress bg-secondary text-primary-content border-secondary border-4 "
                style={
                  {
                    "--value":
                      (
                        ((solvedProblemCnt?.total || 0) * 100) /
                        problemCnt?.total
                      ).toFixed(0) || 0,
                    "--size": "12rem",
                    "--thickness": "8px",
                  } /* as React.CSSProperties */
                }
                aria-valuenow={
                  (
                    ((solvedProblemCnt?.total || 0) * 100) /
                    problemCnt?.total
                  ).toFixed(0) || 0
                }
                role="progressbar"
              >
                <h2 className="text-2xl font-bold">
                  {solvedProblemCnt?.total || 0} / {problemCnt?.total || 0}
                </h2>
              </div>
              <h3 className="text-xl font-bold mt-8">Problem Distribution</h3>
              <div className="">
                <p className="text-lg">Easy</p>
                <div className="w-full flex items-center justify-between">
                  <span>{solvedProblemCnt?.easy || 0}</span>
                  <span>{problemCnt?.easy || 0}</span>
                </div>
                <progress
                  className="progress progress-success w-56"
                  value={solvedProblemCnt?.easy || 0}
                  max={problemCnt?.easy || 0}
                ></progress>
              </div>{" "}
              <div className="">
                <p className="text-lg">Medium</p>
                <div className="w-full flex items-center justify-between">
                  <span>{solvedProblemCnt?.medium || 0}</span>
                  <span>{problemCnt?.medium || 0}</span>
                </div>
                <progress
                  className="progress progress-warning w-56"
                  value={solvedProblemCnt?.medium || 0}
                  max={problemCnt?.medium || 0}
                ></progress>
              </div>{" "}
              <div className="">
                <p className="text-lg">Hard</p>
                <div className="w-full flex items-center justify-between">
                  <span>{solvedProblemCnt?.hard || 0}</span>
                  <span>{problemCnt?.hard || 0}</span>
                </div>
                <progress
                  className="progress progress-error w-56"
                  value={solvedProblemCnt?.hard || 0}
                  max={problemCnt?.hard || 0}
                ></progress>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="min-h-[700px] w-full flex flex-col items-start">
        <Heading title="Problems" />
        <div className="w-full h-full flex flex-col gap-2  overflow-y-scroll">
          {isLoadingProblemListWiseProblems ? (
            Array.from({ length: 10 })?.map((_, index) => (
              <div
                key={index}
                className="w-full bg-base-200 rounded-lg shadow-md h-12 skeleton"
              ></div>
            ))
          ) : (
            <ProblemListProblemContainer problemListId={problemListId} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemListPage;
