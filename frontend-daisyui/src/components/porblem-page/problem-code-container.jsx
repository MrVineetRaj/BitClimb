import { Editor } from "@monaco-editor/react";
import {
  AlertTriangle,
  AlignLeft,
  Clock,
  Loader2,
  Play,
  RefreshCcw,
  Save,
  Terminal,
} from "lucide-react";
import React, { useRef, useState } from "react";
import { useProblemStore } from "../../store/useProblemStore";

const ProblemCodeContainer = ({
  userCodeSnippet,
  setUserCodeSnippet,
  problem,
  isLoadingProblem,
  scrollToTestCases,
  setTestResults,
  setSubmittedCodeResult,
}) => {
  const { runCode, isRunningCode, isSubmittingCode, submitCode } =
    useProblemStore();
  const [selectedLanguage, setSelectedLanguage] = useState("JAVASCRIPT");
  const [editorLoaded, setEditorLoaded] = useState(false);
  const editorRef = useRef(null);

  const handleRunCode = () => {
    setTestResults([]);
    runCode({
      source_code_header: problem?.referenceSolutionHeader[selectedLanguage],
      source_code: userCodeSnippet[selectedLanguage],
      source_code_footer: problem?.referenceSolutionFooter[selectedLanguage],
      language: selectedLanguage,
      stdin: problem?.testCases.map((testCase) => testCase.input),
      expected_outputs: problem?.testCases.map((testCase) => testCase.output),
      problemId: problem?.id,
    }).then((res) => {
      console.log("Run Code Response:", res);
      if (res?.success) {
        scrollToTestCases();
        setTestResults(res.data);
      }
    });
  };

  const handleSubmitCode = () => {
    setTestResults([]);
    submitCode({
      source_code_header: problem?.referenceSolutionHeader[selectedLanguage],
      source_code: userCodeSnippet[selectedLanguage],
      source_code_footer: problem?.referenceSolutionFooter[selectedLanguage],
      language: selectedLanguage,
      problemId: problem?.id,
      ref: problem?.ref || "",
      contestId: problem?.contestId || "",
      contestProblemId: problem?.contestProblemId || "",
    }).then((res) => {
        // console.log("Submitted Code Result:", res);
      if (res?.success) {
        setSubmittedCodeResult(res.data);
      }
    });
  };

  // const handleSubmitCode = () => {};
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
    setEditorLoaded(true);
    editorRef.current = editor;

    // Ctrl+Enter for submit
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      console.log("Submit command executed");
    });

    // Ctrl+' for run
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Quote, () => {
      handleRunCode();
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
    <div className="flex-1">
      {isLoadingProblem ? (
        <div className="w-full mb-2 h-10 skeleton"></div>
      ) : (
        <div className="flex items-center justify-between gap-4 mb-2 h-10">
          <Clock className="size-4 text-gray-500" />
          <div className="flex gap-4">
            <div className="tooltip tooltip-bottom" data-tip="ctrl+' to run">
              <span className="flex items-center gap-2">
                <button
                  className="btn "
                  onClick={handleRunCode}
                  disabled={isRunningCode || isSubmittingCode}
                >
                  {isRunningCode ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <Play className="size-4" />
                  )}
                  {isRunningCode ? "Running" : "Run"}
                </button>
              </span>
            </div>
            <div
              className="tooltip tooltip-bottom"
              data-tip="ctrl+enter to submit"
            >
              <span className="flex items-center gap-2">
                <button
                  className="btn btn-primary"
                  onClick={handleSubmitCode}
                  disabled={isRunningCode || isSubmittingCode}
                >
                  <Save className="size-4" />
                  Submit
                </button>
              </span>
            </div>
          </div>
        </div>
      )}

      {isLoadingProblem ? (
        <div className="h-[700px] w-full skeleton"></div>
      ) : (
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
              width="100%"
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
      )}
    </div>
  );
};

export default ProblemCodeContainer;
