import React, { useEffect, useRef, useState } from "react";
import ProblemDetailContainer from "../components/porblem-page/problem-detail-container";
import { useParams } from "react-router";
import { useProblemStore } from "../store/useProblemStore";
import Heading from "../components/shared/heading";
import {
  AlertTriangle,
  AlignLeft,
  Check,
  Play,
  RefreshCcw,
  Save,
  Terminal,
  User,
} from "lucide-react";
import { Editor } from "@monaco-editor/react";

const ProblemPage = () => {
  const { problemId } = useParams();
  const { isLoadingProblem, getProblemById } = useProblemStore();
  const [problem, setProblem] = useState(null);
  const [activeTab, setActiveTab] = useState(2);
  const [selectedLanguage, setSelectedLanguage] = useState("PYTHON");
  const editorRef = useRef(null);
  const [userCodeSnippet, setUserCodeSnippet] = useState(null);
  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const fetchedProblem = await getProblemById(problemId);
        setProblem(fetchedProblem);
        setUserCodeSnippet(fetchedProblem?.codeSnippets || {});
        console.log("Fetched Problem:", fetchedProblem);
      } catch (error) {
        console.error("Failed to fetch problem:", error);
      }
    };
    fetchProblem();
  }, [problemId]);

  const formatCode = () => {
    if (editorRef.current) {
      try {
        console.log("Formatting code...");
        // Use trigger method instead of getAction
        editorRef.current.trigger(
          "keyboard",
          "editor.action.formatDocument",
          {}
        );
        console.log("Code formatted successfully");
      } catch (error) {
        console.error("Formatting error:", error);
      }
    }
  };

  const handleEditorMount = (editor, monaco) => {
    editorRef.current = editor;

    // Ctrl+Enter for submit
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      console.log("Submit command executed");
    });

    // Ctrl+' for run
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Quote, () => {
      console.log("Run command executed");
    });

    // Ctrl+Shift+F for format - FIXED
    editor.addCommand(
      monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.KeyF,
      () => {
        try {
          console.log("Formatting via keyboard shortcut...");
          const action = editor.getAction("editor.action.formatDocument");
          if (action) {
            action.run();
          } else {
            console.log("Format action not available, using trigger method");
            formatCode(); // Fallback to your formatCode function
          }
        } catch (error) {
          console.error("Keyboard shortcut formatting error:", error);
          formatCode(); // Fallback
        }
      }
    );
  };
  return (
    <div className="w-screen items-center p-10">
      <div className="flex items-center justify-between gap-4">
        <div className="w-full flex items-center gap-4">
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
            <button className="btn">Tags</button>
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
            <button className="btn btn-info text-white">Companies</button>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="tooltip tooltip-bottom" data-tip="ctrl+' to run">
            <span className="flex items-center gap-2">
              <button className="btn ">
                <Play className="size-4" />
                Run
              </button>
            </span>
          </div>
          <div
            className="tooltip tooltip-bottom"
            data-tip="ctrl+enter to submit"
          >
            <span className="flex items-center gap-2">
              <button className="btn btn-primary">
                <Save className="size-4" />
                Submit
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-4  h-full  ">

        <div className="flex-1 ">
        <ProblemDetailContainer
          problem={problem}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        /></div>
        <div className="flex-1 w-full h-full">
          <div className="tabs tabs-lift tabs-box relative">
            <div className="absolute top-2 right-2 flex items-center gap-4 hover:bg-transparent">
              <div className="tooltip" data-tip="Formate Code">
                <span className="flex items-center gap-2" onClick={formatCode}>
                  <AlignLeft className="size-4" />
                </span>
              </div>
              <div className="tooltip" data-tip="Last Submitted">
                <span className="flex items-center gap-2">
                  <RefreshCcw className="size-4" />
                </span>
              </div>
              <div className="tooltip" data-tip="Reset Code">
                <span
                  className="flex items-center gap-2"
                  onClick={() => {
                    setUserCodeSnippet((prev) => ({
                      ...prev,
                      [selectedLanguage]:
                        problem?.codeSnippets?.[selectedLanguage] || "",
                    }));
                  }}
                >
                  <AlertTriangle className="size-4" />
                </span>
              </div>
              <select
                defaultValue={selectedLanguage}
                className="select"
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                <option value={"JAVASCRIPT"}>Javascript</option>
                <option value={"PYTHON"}>Python</option>
                <option value={"CPP"}>Cpp</option>
              </select>
            </div>
            <label className="tab">
              <input
                type="radio"
                name="problem_page_code_editor_tab"
                defaultChecked
              />
              <Terminal className="size-4 me-2" />
              Code Editor
            </label>

            <div className="tab-content bg-base-100 border-base-300 p">
              <Editor
                height="650px"
                language={selectedLanguage.toLowerCase()}
                theme="vs-dark"
                value={userCodeSnippet?.[selectedLanguage] || ""}
                onChange={(value) => {
                  setUserCodeSnippet((prev) => ({
                    ...prev,
                    [selectedLanguage]: value,
                  }));
                }}
                ref={editorRef}
                onMount={handleEditorMount}
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: "on",
                  roundedSelection: false,
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
