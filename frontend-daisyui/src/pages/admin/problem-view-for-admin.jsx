import React, { useEffect, useState } from "react";
import Heading from "../../components/shared/heading";
import { Link, useParams } from "react-router";
import { useAdminStore } from "../../store/useAdminStore";
import { Cog, Edit, Stars, Trash } from "lucide-react";

const AddHiddenTestCases = ({
  problemId,
  source_code_header,
  source_code,
  source_code_footer,
  language,
  constraints,
  examples,
  testCases,
}) => {
  const {
    addHiddenTestCases,
    isAddingHiddenTestCases,
    generateTestCases,
    isGeneratingTestCases,
  } = useAdminStore();
  const [input, setInput] = useState("");
  return (
    <>
      <button
        className="btn btn-ghost"
        onClick={() =>
          document
            .getElementById(`add_hidden_test_cases_for_${problemId}`)
            .showModal()
        }
      >
        <Cog className="w-5 h-5 " />
      </button>
      <dialog id={`add_hidden_test_cases_for_${problemId}`} className="modal">
        <div className="modal-box relative">
          {isGeneratingTestCases ? (
            <span className="loading loading-dots loading-md absolute right-3 top-3"></span>
          ) : (
            <Stars
              className=" absolute right-3 top-3 w-6 h-6 text-primary cursor-pointer"
              onClick={() => {
                generateTestCases(constraints, examples, testCases).then(
                  (res) => {
                    if (res.success) {
                      if (res.data.testCases.includes('"')) {
                        setInput(JSON.parse(res.data.testCases));
                      } else {
                        setInput(res.data.testCases);
                      }
                    }
                  }
                );
              }}
            />
          )}
          <h3 className="font-bold text-lg">Enter Input</h3>
          <textarea
            className="textarea textarea-bordered w-full mt-2"
            placeholder="Enter input for hidden test case separated by '_'"
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isAddingHiddenTestCases || isGeneratingTestCases}
          ></textarea>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn"
                disabled={isGeneratingTestCases || isAddingHiddenTestCases}
              >
                Close
              </button>
            </form>
            <button
              className="btn btn-primary"
              onClick={async (e) => {
                if (input.length > 0) {
                  const res = await addHiddenTestCases(problemId, {
                    source_code_header,
                    source_code,
                    source_code_footer,
                    language,
                    testcase_inputs: input,
                  });
                  if (res.success) {
                    document
                      .getElementById(`add_hidden_test_cases_for_${problemId}`)
                      .close();
                    setInput("");
                  }
                }
              }}
              disabled={
                isAddingHiddenTestCases ||
                input.length === 0 ||
                isGeneratingTestCases
              }
            >
              {isAddingHiddenTestCases ? "Adding..." : "Add Hidden Test Cases"}
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

const ProblemViewForAdmin = () => {
  const { problemId } = useParams();
  const { getOneProblem, isLoadingProblem, deleteHiddenTestCase } =
    useAdminStore();
  const [problem, setProblem] = useState(null);
  useEffect(() => {
    const fetchProblem = async () => {
      if (problemId) {
        const res = await getOneProblem(problemId);
        if (res.success) {
          setProblem(res.data);
        }
      }
    };
    fetchProblem();
  }, [problemId]);
  return (
    <div className="w-full max-w-[1200px] p-4 flex flex-col items-start relative">
      <div className="absolute top-2 right-2 flex gap-2">
        <div className="tooltip" data-tip="Add Hidden Test Cases">
          <AddHiddenTestCases
            problemId={problemId}
            source_code_header={problem?.referenceSolutionHeader["CPP"] || ""}
            source_code={problem?.referenceSolution["CPP"] || ""}
            source_code_footer={problem?.referenceSolutionFooter["CPP"] || ""}
            language={"CPP"}
            constraints={problem?.constraints || ""}
            examples={problem?.examples || []}
            testCases={problem?.testCases || []}
          />
        </div>
        <div className="tooltip" data-tip="Update Problem">
          <Link
            to={`/admin/panel/create-problem?problemId=${problemId}`}
            className="btn btn-ghost"
          >
            <Edit className="w-5 h-5 " />
          </Link>
        </div>
      </div>
      {isLoadingProblem ? (
        <div className="min-h-[800px] w-[1200px] skeleton"></div>
      ) : (
        <>
          <span className=" gap-2 ">
            <span>
              <Heading title={problem?.title} />
              <p className="text-base text-gray-500 pl-8 -mt-4">
                {problem?.id} create at{" "}
                {new Date(problem?.createdAt)?.toLocaleString()}
              </p>
            </span>
          </span>
          <div className="flex flex-wrap gap-2 my-4">
            {problem?.tags?.length > 0 &&
              problem.tags.map((tag) => (
                <span
                  key={tag}
                  className="badge badge-primary badge-soft text-sm"
                >
                  {tag}
                </span>
              ))}
            {problem?.companies?.length > 0 &&
              problem.companies.map((comp) => (
                <span
                  key={comp}
                  className="badge badge-secondary badge-soft text-sm"
                >
                  {comp}
                </span>
              ))}
          </div>
          <hr className="w-full text-gray-500 my-8" />
          <h3 className="text-xl font-bold mb-2 text-secondary">Description</h3>
          <pre className="whitespace-pre-wrap  break-words rounded p-4 font-sans bg-base-300 w-full">
            {problem?.description}
          </pre>
          <h3 className="text-xl font-bold mt-4 mb-2 text-secondary">
            Constraints
          </h3>
          <pre className="whitespace-pre-wrap  break-words rounded p-4 font-sans bg-base-300 w-full">
            {problem?.constraints}
          </pre>
          <h3 className="text-xl font-bold mt-4 mb-2 text-secondary">Hints</h3>
          {problem &&
            problem?.hints?.length > 0 &&
            problem?.hints?.map((hint, idx) => (
              <pre className="whitespace-pre-wrap  break-words rounded p-4 font-sans bg-base-300 w-full">
                - {hint}
              </pre>
            ))}
          <h3 className="text-xl font-bold mt-4 mb-2 text-secondary">
            Examples
          </h3>
          <div className="grid grid-cols-3 gap-4 w-full">
            <p>Inputs</p>
            <p>Outputs</p>
            <p>Explanation</p>
            {problem &&
              problem?.examples?.length > 0 &&
              problem?.examples?.map((example, idx) => (
                <>
                  <pre className="whitespace-pre-wrap  break-words rounded p-4 font-sans bg-base-300 w-full">
                    {example?.input}
                  </pre>
                  <pre className="whitespace-pre-wrap  break-words rounded p-4 font-sans bg-base-300 w-full">
                    {example?.output}
                  </pre>
                  <pre className="whitespace-pre-wrap  break-words rounded p-4 font-sans bg-base-300 w-full">
                    {example?.explanation | "No explanation provided"}
                  </pre>
                </>
              ))}
          </div>
          <hr className="w-full text-gray-500 my-8" />
          {problem?.codeSnippets &&
            Object.entries(problem.codeSnippets).length > 0 && (
              <>
                <h3 className="text-xl font-bold mt-4 mb-2 text-secondary">
                  {" "}
                  Code Snippets
                </h3>
                <div className="grid grid-cols-3 gap-4 w-full">
                  {Object.entries(problem.codeSnippets).map(([lang, code]) => (
                    <div key={lang} className="mb-4 ">
                      <h4 className="text font-semibold text-primary">
                        {lang}
                      </h4>
                      <pre className="whitespace-pre-wrap break-words rounded p-4 font-sans bg-base-300 h-full w-full">
                        {code}
                      </pre>
                    </div>
                  ))}
                </div>
              </>
            )}

          <hr className="w-full text-gray-500 my-8" />
          {problem?.referenceSolutionHeader &&
            Object.entries(problem.referenceSolutionHeader).length > 0 && (
              <>
                <h3 className="text-xl font-bold mt-4 mb-2 text-secondary">
                  {" "}
                  Reference Solutions Header
                </h3>
                <div className="grid grid-cols-3 gap-4 w-full">
                  {Object.entries(problem.referenceSolutionHeader).map(
                    ([lang, code]) => (
                      <div key={lang} className="mb-4 ">
                        <h4 className="text font-semibold text-primary">
                          {lang}
                        </h4>
                        <pre className="whitespace-pre-wrap break-words rounded p-4 font-sans bg-base-300 h-full w-full">
                          {code}
                        </pre>
                      </div>
                    )
                  )}
                </div>
              </>
            )}
          {problem?.referenceSolution &&
            Object.entries(problem.referenceSolution).length > 0 && (
              <>
                <h3 className="text-xl font-bold mt-4 mb-2 text-secondary">
                  {" "}
                  Reference Solutions
                </h3>
                <div className="grid grid-cols-3 gap-4 w-full">
                  {Object.entries(problem.referenceSolution).map(
                    ([lang, code]) => (
                      <div key={lang} className="mb-4 ">
                        <h4 className="text font-semibold text-primary">
                          {lang}
                        </h4>
                        <pre className="whitespace-pre-wrap break-words rounded p-4 font-sans bg-base-300 h-full w-full">
                          {code}
                        </pre>
                      </div>
                    )
                  )}
                </div>
              </>
            )}
          {problem?.referenceSolutionFooter &&
            Object.entries(problem.referenceSolutionFooter).length > 0 && (
              <>
                <h3 className="text-xl font-bold mt-4 mb-2 text-secondary">
                  {" "}
                  Reference Solutions Footer
                </h3>
                <div className="grid grid-cols-3 gap-4 w-full">
                  {Object.entries(problem.referenceSolutionFooter).map(
                    ([lang, code]) => (
                      <div key={lang} className="mb-4 ">
                        <h4 className="text font-semibold text-primary">
                          {lang}
                        </h4>
                        <pre className="whitespace-pre-wrap break-words rounded p-4 font-sans bg-base-300 h-full w-full">
                          {code}
                        </pre>
                      </div>
                    )
                  )}
                </div>
              </>
            )}

          <hr className="w-full text-gray-500 my-8" />
          <h3 className="text-xl font-bold mt-4 mb-2 text-secondary">
            TestCases
          </h3>
          <div className="grid grid-cols-2 gap-4 w-full">
            <p>Inputs</p>
            <p>Outputs</p>
            {problem &&
              problem?.testCases?.length > 0 &&
              problem?.testCases?.map((testCase, idx) => (
                <>
                  <pre className="whitespace-pre-wrap  break-words rounded p-4 font-sans bg-base-300 w-full">
                    {testCase?.input}
                  </pre>
                  <pre className="whitespace-pre-wrap  break-words rounded p-4 font-sans bg-base-300 w-full">
                    {testCase?.output}
                  </pre>
                </>
              ))}
          </div>
          <h3 className="text-xl font-bold mt-4 mb-2 text-secondary">
            Hidden TestCases
          </h3>
          {problem && problem?.hiddenTestCases?.length > 0 ? (
            <>
              <div className="grid grid-cols-2 gap-4 w-full">
                <p className="px-8">Inputs</p>
                <p className="px-8">Outputs</p>
              </div>
              {problem &&
                problem?.hiddenTestCases?.length > 0 &&
                problem?.hiddenTestCases?.map((testCase, idx) => (
                  <div className="grid grid-cols-2 gap-4 w-full p-4 bg-base-200 my-2 rounded-xl relative">
                    <pre className="whitespace-pre-wrap  break-words rounded p-4 font-sans bg-base-300 w-full">
                      {testCase?.stdin}
                    </pre>
                    <pre className="whitespace-pre-wrap  break-words rounded p-4 font-sans bg-base-300 w-full">
                      {testCase?.stdout}
                    </pre>
                    <Trash
                      className="w-5 h-5 absolute -top-2 -right-2 cursor-pointer text-red-500 hover:text-red-700 "
                      onClick={() => {
                        deleteHiddenTestCase(testCase.id).then((res) => {
                          if (res.success) {
                            setProblem((prev) => ({
                              ...prev,
                              hiddenTestCases: prev.hiddenTestCases.filter(
                                (tc) => tc.id !== testCase.id
                              ),
                            }));
                          }
                        });
                      }}
                    />
                  </div>
                ))}
            </>
          ) : (
            <p className="text-gray-500 text-center w-full">
              No hidden test cases available
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default ProblemViewForAdmin;
