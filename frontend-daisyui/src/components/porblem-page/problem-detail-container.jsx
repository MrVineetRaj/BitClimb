import {
  Check,
  Edit,
  File,
  Lightbulb,
  MessageCircle,
  User,
} from "lucide-react";
import React from "react";
import Code from "../shared/code";

const ProblemDetailContainer = ({
  problem,
  activeTab,
  setActiveTab,
  isLoadingProblem,
}) => {
  const tabs = ["details", "discussions", "solutions", "submissions"];

  return (
    <div className="flex-1">
      {isLoadingProblem ? (
        <div className="w-full mb-2 h-10 skeleton"></div>
      ) : (
        <div className="w-full flex items-center gap-4 mb-2 h-10">
          <h2 className="text-2xl font-extrabold ">{problem?.title}</h2>
          <div className="tooltip tooltip-bottom">
            <div className="tooltip-content tooltip-bottom">
              {problem &&
                problem?.tags?.map((tag, idx) => (
                  <div className="badge badge-neutral" key={idx}>
                    {tag}
                  </div>
                ))}
            </div>
            <div className="badge badge-neutral">tags</div>
          </div>
          <div className="tooltip tooltip-bottom">
            <div className="tooltip-content">
              {problem &&
                problem?.companies?.map((company, idx) => (
                  <div className="badge badge-neutral" key={idx}>
                    {company}
                  </div>
                ))}
            </div>
            <div className="badge badge-info">Companies</div>
          </div>
        </div>
      )}
      {isLoadingProblem ? (
        <div className="h-[700px] w-full skeleton"></div>
      ) : (
        <div className="flex-1 min-h-0 ">
          <div className="tabs tabs-lift tabs-box relative h-full">
            <div className="absolute top-2 right-2 flex items-center gap-4 hover:bg-transparent">
              <div className="tooltip" data-tip="Users Attempted">
                <span className="flex items-center gap-2">
                  <User className="size-4" />
                  {problem && problem.usersAttempted
                    ? ` ${problem.usersAttempted}`
                    : " 0"}
                </span>
              </div>
              <div className="tooltip" data-tip="Acceptance Rate">
                <span className="flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  {problem && problem.acceptanceRate
                    ? ` ${problem.acceptanceRate}%`
                    : " 0"}
                </span>
              </div>
            </div>
            <label className="tab">
              <input
                type="radio"
                name="my_tabs_4"
                checked={tabs[activeTab] === "details"}
                onChange={() => setActiveTab(0)}
              />
              <Edit className="size-4 me-2" />
              Details
            </label>
            <div className="tab-content bg-base-100 border-base-300  min-h-[650px] max-h-[650px] p-6 overflow-y-scroll">
              <pre className="max-w-full overflow-auto whitespace-pre-wrap break-words font-sans rounded-lg ">
                {problem?.description}
              </pre>
              <div className="my-4">
                <h3 className="text-lg font-semibold mb-2">Constraints</h3>{" "}
                <pre className="max-w-full overflow-auto whitespace-pre-wrap break-words font-sans rounded-lg bg-base-300 p-2 ">
                  {problem?.constraints}
                </pre>
              </div>

              <div className="">
                {problem?.examples?.length > 0 &&
                  problem?.examples?.map(
                    ({ input, output, explanation }, index) => (
                      <div key={index} className="my-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Example {index + 1}
                        </h3>
                        <div className="pl-4 border-l-2 border-gray-500">
                          <span className="block mb-2">
                            <strong>Input:</strong>
                            <pre className="bg-black p-2 rounded text-white">
                              {input}
                            </pre>
                          </span>
                          <span className="block mb-2">
                            <strong>Output:</strong>
                            <pre className="bg-black p-2 rounded text-white">
                              {output}
                            </pre>
                          </span>
                          {explanation && (
                            <p className="text-sm text-gray-500">
                              <strong>Explanation:</strong> {explanation}
                            </p>
                          )}
                        </div>
                      </div>
                    )
                  )}
              </div>
            </div>

            <label className="tab">
              <input
                type="radio"
                name="my_tabs_4"
                checked={tabs[activeTab] === "discussions"}
                onChange={() => setActiveTab(1)}
              />
              <MessageCircle className="size-4 me-2" />
              Discussions
            </label>
            <div className="tab-content bg-base-100 min-h-[650px] max-h-[650px] overflow-y-scroll border-base-300 p-6 relative">
              <h1 className="text-2xl font-bold">Discussion</h1>
              <Edit className="absolute top-4 right-4 size-6 text-gray-500 cursor-pointer" />
            </div>

            <label className="tab">
              <input
                type="radio"
                name="my_tabs_4"
                checked={tabs[activeTab] === "solutions"}
                onChange={() => setActiveTab(2)}
              />
              <Lightbulb className="size-4 me-2" />
              Solutions
            </label>
            <div className="tab-content bg-base-100 min-h-[650px] max-h-[650px] overflow-y-scroll border-base-300 p-6">
              {/* name of each tab group should be unique */}
              <div className="tabs tabs-border ">
                <input
                  type="radio"
                  name="problem_page_solutions_tab_coding_solutions_language_wise"
                  className="tab"
                  aria-label="cpp"
                  defaultChecked
                />
                <div className="tab-content border-base-300  bg-base-100 p-6">
                  <Code
                    language={"cpp"}
                    codeString={problem?.referenceSolution["CPP"]}
                  />
                </div>
                <input
                  type="radio"
                  name="problem_page_solutions_tab_coding_solutions_language_wise"
                  className="tab"
                  aria-label="javascript"
                />
                <div className="tab-content border-base-300 bg-base-100 p-6">
                  <Code
                    language={"javascript"}
                    codeString={problem?.referenceSolution["JAVASCRIPT"]}
                  />
                </div>
                <input
                  type="radio"
                  name="problem_page_solutions_tab_coding_solutions_language_wise"
                  className="tab"
                  aria-label="Python"
                />
                <div className="tab-content border-base-300 bg-base-100 p-6">
                  <Code
                    language={"python"}
                    codeString={problem?.referenceSolution["PYTHON"]}
                  />
                </div>
              </div>
            </div>
            <label className="tab">
              <input
                type="radio"
                name="my_tabs_4"
                checked={tabs[activeTab] === "submissions"}
                onChange={() => setActiveTab(3)}
              />
              <File className="size-4 me-2" />
              Submissions
            </label>
            <div className="tab-content bg-base-100 border-base-300 p-6 min-h-[650px] max-h-[650px] overflow-y-scroll ">
              Tab content 4
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemDetailContainer;
