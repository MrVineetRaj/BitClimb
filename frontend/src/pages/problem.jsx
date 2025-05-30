import { Button } from "@/components/ui/button";
import { useProblemStore } from "@/store/useProblemStore";
import { Loader, Play, Upload } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import ProblemPageDetailContainer from "@/components/problem/problem-page-detail-container";
import ProblemPageCodeContainer from "@/components/problem/problem-page-code-container";

const ProblemPage = () => {
  const {
    getProblemById,
    getUserSubmissionsPerProblem,
    runCode,
    submitCode,
    isRunningCode,
    isSubmittingCode,
  } = useProblemStore();
  const { problemId } = useParams();
  const [problem, setProblem] = useState(null);
  const [userSubmissions, setUserSubmissions] = useState([]);
  const [sourceCodeEnteredByUser, setSourceCodeEnteredByUser] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("CPP");
  const [codeRunResult, setCodeRunResult] = useState(null);
  const [submitCodeResult, setSubmitCodeResult] = useState(null);

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const res = await getProblemById(problemId);

        setProblem(res);
        
        setSourceCodeEnteredByUser(
          res.codeSnippets || {
            CPP: "",
            PYTHON: "",
            JAVASCRIPT: "",
          }
        );
      } catch (error) {
        console.error("Error fetching problem:", error);
      }
    };

    fetchProblem();
  }, [getProblemById, problemId]);
  useEffect(() => {
    const fetchSubmissionsByProblem = async () => {
      try {
        const res = await getUserSubmissionsPerProblem(problemId);
        
        setUserSubmissions(res);
      } catch (error) {
        console.error("Error fetching problem:", error);
      }
    };

    fetchSubmissionsByProblem();
  }, [getUserSubmissionsPerProblem, problemId]);

  return (
    <div className="overflow-x-hidden w-full">
      <div className="w-full flex items-center justify-center gap-4">
        {isRunningCode || isSubmittingCode ? (
          <Loader className="animate-spin " />
        ) : (
          <>
            <Button
              variant={"outline"}
              onClick={() => {
                const stdin = problem?.testCases?.map(
                  (testCase) => testCase.input
                );
                const expected_outputs = problem?.testCases?.map(
                  (testCase) => testCase.output
                );

                runCode({
                  source_code: sourceCodeEnteredByUser[selectedLanguage],
                  language: selectedLanguage,
                  stdin: stdin,
                  expected_outputs: expected_outputs,
                  problemId: problemId,
                }).then((res) => {
                  
                  setCodeRunResult(res.detailedResults);
                });
              }}
            >
              <Play className="size-4" />
              Run
            </Button>
            <Button
              className={"text-white"}
              onClick={() => {
                const stdin = problem?.testCases?.map(
                  (testCase) => testCase.input
                );
                const expected_outputs = problem?.testCases?.map(
                  (testCase) => testCase.output
                );

                submitCode({
                  source_code: sourceCodeEnteredByUser[selectedLanguage],
                  language: selectedLanguage,
                  stdin: stdin,
                  expected_outputs: expected_outputs,
                  problemId: problemId,
                }).then((res) => {
                  
                  setSubmitCodeResult(res.newSubmission);
                });
              }}
            >
              <Upload className="size-4" />
              Submit
            </Button>
          </>
        )}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-4 ">
        <div className="col-span-1 w-full min-h-[600px] ">
          <ProblemPageDetailContainer
            problem={problem}
            userSubmissions={userSubmissions}
            submitCodeResult={submitCodeResult}
          />
        </div>
        <div className="col-span-1 w-full min-h-[600px]">
          <ProblemPageCodeContainer
            problem={problem}
            setSourceCodeEnteredByUser={setSourceCodeEnteredByUser}
            sourceCodeEnteredByUser={sourceCodeEnteredByUser}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            codeRunResult={codeRunResult}
          />
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
