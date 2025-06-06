import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useProblemStore } from "../store/useProblemStore";
import Heading from "../components/shared/heading";
import Code from "../components/shared/code";
import Markdown from "react-markdown";
const SubmissionPage = () => {
  const { submissionID } = useParams();
  const { isLoadingSubmission, getSubmissionById } = useProblemStore();
  const [submission, setSubmission] = useState(null);
  const [testCasesInputs, setTestCasesInput] = useState([]);
  const [testCasesOutputs, setTestCasesOutput] = useState([]);
  const [expectedOutputs, setExpectedOutputs] = useState([]);
  const fetchSubmission = async () => {
    try {
      const res = await getSubmissionById(submissionID);
      console.log("Fetched submission data:", res);
      if (res?.success) {
        setSubmission(res?.data);
        setTestCasesInput(res?.data?.stdin?.split("_"));
        setTestCasesOutput(res?.data?.stdout?.split("_"));
        setExpectedOutputs(res?.data?.expectedOutput?.split("_"));
      }
    } catch (error) {
      console.error("Failed to fetch submission:", error);
    }
  };

  useEffect(() => {
    fetchSubmission();
  }, [submissionID, getSubmissionById]);

  useEffect(() => {
    console.log({ testCasesInputs, testCasesOutputs, expectedOutputs });
  }, [testCasesInputs, testCasesOutputs, expectedOutputs]);
  return (
    <div className="w-full max-w-[1000px] min-h-screen flex flex-col items-center justify-start gap-4 p-4">
      {isLoadingSubmission ? (
        <>
          <div className="flex items-center justify-center h-[300px] w-full skeleton"></div>
          <div className="flex items-center justify-center h-[calc(100vh-300px)] w-full skeleton"></div>
        </>
      ) : (
        <div className="p-4">
          {submission ? (
            <div className="w-full flex flex-col items-center justify-start gap-4">
              <h1
                className={`text-2xl font-bold mb-4 text-center ${
                  submission?.status?.toLowerCase() === "accepted"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {submission?.status}
              </h1>
              <Heading title={submission?.problem?.title} />
              <p>
                Submitted on {new Date(submission?.createdAt).toLocaleString()}
              </p>
              <div className="badge  badge-primary">
                {submission?.problem?.difficulty}
              </div>
              <div className="flex gap-4">
                {submission?.problem?.tags &&
                  submission?.problem?.tags.map((tag) => (
                    <span key={tag} className="badge  badge-neutral">
                      {tag}
                    </span>
                  ))}
              </div>
              {submission?.problem?.description && (
                <div className="bg-base-100 p-4 rounded-lg w-full">
                  <h2 className="text-lg font-semibold mb-2 text-primary">
                    Problem Description
                  </h2>
                  <pre className="whitespace-pre-wrap mb-4">
                    <code>{submission?.problem?.description}</code>
                  </pre>{" "}
                </div>
              )}{" "}
              {submission?.problem?.description && (
                <div className="bg-base-100 p-4 rounded-lg w-full">
                  <h2 className="text-lg font-semibold mb-2 text-primary">
                    Problem Constraints
                  </h2>
                  <pre className="whitespace-pre-wrap mb-4">
                    <code>{submission?.problem?.constraints}</code>
                  </pre>{" "}
                </div>
              )}
              {submission?.sourceCode && (
                <div className="bg-base-100 p-4 rounded-lg w-full">
                  <h2 className="text-lg font-semibold mb-2 text-primary">
                    Code Submitted
                  </h2>
                  <Code
                    codeString={submission?.sourceCode}
                    language={submission?.language}
                  />
                </div>
              )}
              {submission?.codeReview && (
                
                  <div className=" p-4 rounded-lg markdown-body">
                    <Markdown>{submission?.codeReview}</Markdown>
                  </div>
                
              )}
              {(submission?.stdError ||
                submission?.compileOutput ||
                submission?.message) && (
                <div className="bg-base-100 p-4 rounded-lg w-full">
                  <h2 className="text-lg font-semibold mb-2 text-primary">
                    Error/Output
                  </h2>
                  <pre className="whitespace-pre-wrap mb-4 text-xs text-red-500 bg-base-200 p-4 rounded-xl">
                    <code>{submission?.compileOutput}</code>
                    <code>{submission?.stdError}</code>
                    <code>{submission?.status}</code>
                  </pre>
                </div>
              )}
              
              {submission?.sourceCode && (
                <div className="bg-base-100 p-4 rounded-lg w-full">
                  <h2 className="text-lg font-semibold mb-2 text-primary">
                    Hidden Test Cases
                  </h2>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="w-full ">Input</div>
                    <div className="w-full ">Output</div>
                    <div className="w-full ">Expected Output</div>

                    {testCasesInputs.map((input, index) => (
                      <>
                        <div
                          key={`input-${index}`}
                          className="w-full p-2 bg-info/20 rounded"
                        >
                          {input}
                        </div>
                        <div
                          key={`output-${index}`}
                          className={`w-full p-2  ${
                            testCasesOutputs &&
                            testCasesOutputs.length > 0 &&
                            testCasesOutputs[index] === expectedOutputs[index]
                              ? "bg-success/20"
                              : "bg-error/20"
                          } rounded`}
                        >
                          {testCasesOutputs && testCasesOutputs.length > 0
                            ? testCasesOutputs[index]
                            : "No Output"}
                        </div>
                        <div
                          key={`expected-${index}`}
                          className="w-full p-2  bg-info/20 rounded"
                        >
                          {expectedOutputs[index] || "No Expected Output"}
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              )}
              {/* <p>
                <strong>Problem Title:</strong> {submission.problem.title}
              </p>
              <p>
                <strong>Description:</strong> {submission.problem.description}
              </p>
              <p>
                <strong>Status:</strong> {submission.status}
              </p>
              <p>
                <strong>Submitted At:</strong>{" "}
                {new Date(submission.createdAt).toLocaleString()}
              </p> */}
              {/* Add more fields as necessary */}
            </div>
          ) : (
            <p>No submission found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SubmissionPage;
