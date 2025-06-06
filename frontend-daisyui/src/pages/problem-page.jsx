import React, { useEffect, useRef, useState } from "react";
import ProblemDetailContainer from "../components/porblem-page/problem-detail-container";
import { useParams } from "react-router";
import { useProblemStore } from "../store/useProblemStore";
import ProblemCodeContainer from "../components/porblem-page/problem-code-container";

const ProblemPage = () => {
  const { problemId } = useParams();
  const { isLoadingProblem, getProblemById, getUserSubmissionsPerProblem } =
    useProblemStore();
  const [problem, setProblem] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [userCodeSnippet, setUserCodeSnippet] = useState(null);
  const [testCases, setTestCases] = useState([]);
  const [testResults, setTestResults] = useState([]);
  const [submittedCodeResult, setSubmittedCodeResult] = useState(null); // Add ref for test cases section
  const testCasesRef = useRef(null);
  const [userSubmissions, setUserSubmissions] = useState([]);

  // Function to scroll to test cases
  const scrollToTestCases = () => {
    if (testCasesRef.current) {
      testCasesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const fetchSubmissionsByProblem = async () => {
    try {
      const res = await getUserSubmissionsPerProblem(problemId);
      if (res.success) {
        setUserSubmissions(res.data);
      }
      console.log("User Submissions:", res);
    } catch (error) {
      console.error("Error fetching user submissions:", error);
    }
  };

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const fetchedProblem = await getProblemById(problemId);
        setProblem(fetchedProblem);
        setUserCodeSnippet(fetchedProblem?.codeSnippets || {});
        setTestCases(fetchedProblem?.testCases || []);
      } catch (error) {
        console.error("Failed to fetch problem:", error);
      }
    };

    // const
    fetchProblem();
    fetchSubmissionsByProblem();
  }, [problemId]);

  return (
    <div className="w-screen items-center px-10">
      <div className="flex gap-4 h-full  ">
        <ProblemDetailContainer
          problem={problem}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isLoadingProblem={isLoadingProblem}
          userSubmissions={userSubmissions}
          fetchSubmissionsByProblem={fetchSubmissionsByProblem}
        />
        <ProblemCodeContainer
          userCodeSnippet={userCodeSnippet}
          setUserCodeSnippet={setUserCodeSnippet}
          problem={problem}
          isLoadingProblem={isLoadingProblem}
          scrollToTestCases={scrollToTestCases}
          setTestResults={setTestResults}
          setSubmittedCodeResult={setSubmittedCodeResult}
          setActiveTab={setActiveTab}
          fetchSubmissionsByProblem={fetchSubmissionsByProblem}
        />
      </div>

      <div className="tabs tabs-box mt-4 mb-8" ref={testCasesRef}>
        {testCases &&
          testCases?.length > 0 &&
          testCases?.map((testCase, index) => (
            <>
              <label className={`tab relative`}>
                <input
                  type="radio"
                  name={`testcase_tab_for_problem_id_${problemId}`}
                  className="hidden"
                  aria-label={`Testcase ${index + 1}`}
                  defaultChecked={index === 0}
                />
                Testcase {index + 1}
                <span
                  className={`absolute -top-2.5 -right-2.5 rounded-full size-5 z-20 ${
                    testResults?.length > 0
                      ? testResults[index]?.status?.toLowerCase() === "accepted"
                        ? "bg-green-500 text-white-600"
                        : "bg-red-500 text-white-600"
                      : ""
                  }`}
                ></span>
              </label>
              <div className="tab-content bg-base-100 border-base-300 p-6">
                <p className="font-bold text-lg px-4">Input</p>
                <pre className="bg-base-200 p-4 rounded-lg">
                  <code className="whitespace-pre-wrap">{testCase.input}</code>
                </pre>
                {testResults && testResults?.length > 0 && (
                  <>
                    <p
                      className={`font-bold text-2xl px-4 mt-4 ${
                        testResults[index].status?.toLowerCase() === "accepted"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {testResults[index].status}
                    </p>
                    {(testResults[index]?.compile_output ||
                      testResults[index]?.stderr ||
                      testResults[index]?.message) && (
                      <pre className="bg-error/10 p-4 rounded-lg mt-4 whitespace-pre-wrap  break-words text-red-500 text-sm">
                        {testResults[index]?.compile_output}
                        {testResults[index]?.stderr}
                        {testResults[index]?.message}
                      </pre>
                    )}
                    <div className="flex w-full gap-4 items-start">
                      <div className="flex-1 ">
                        <p className="font-bold text-lg px-4 mt-4">Output</p>
                        <pre
                          className={`${
                            testResults[index].status?.toLowerCase() ===
                            "accepted"
                              ? "bg-success/30"
                              : "bg-error/30"
                          } p-4 rounded-lg`}
                        >
                          <code className="whitespace-pre-wrap  break-words p-2 rounded text-sm">
                            {testResults[index]?.output || "No output"}
                          </code>
                        </pre>
                      </div>
                      <div className="flex-1 ">
                        <p className="font-bold text-lg px-4 mt-4">
                          Expected Output
                        </p>
                        <pre className="bg-success/30 p-4 rounded-lg">
                          <code className="whitespace-pre-wrap  break-words p-2 rounded text-sm">
                            {testResults[index]?.expected_output ||
                              testCase.output}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default ProblemPage;
