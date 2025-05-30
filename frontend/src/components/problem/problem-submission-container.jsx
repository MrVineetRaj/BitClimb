import {
  AlertTriangle,
  BringToFront,
  Clock,
  LucideStars,
  MemoryStick,
} from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";
import useAiStore from "@/store/useAiStore";
import { Button } from "../ui/button";
import ReactMarkdown from "react-markdown";

 const AcceptedSubmission = ({
  submission,
  idx,
  problemDescription,
  fetchSubmissionsByProblem,
}) => {
  const [openBlock, setOpenBlock] = React.useState("none");
  const { reviewCode, isThinking } = useAiStore();
  const [thinking, setThinking] = React.useState(false);

  const submissionDate = new Date(submission?.createdAt);
  return (
    <>
      <div
        className={`${
          idx % 2 == 0 ? "bg-primary/10 " : ""
        } p-4 py-2 flex justify-between items-center relative hover:bg-primary/20 transition-all duration-200 rounded-md w-full`}
      >
        <span>
          <p className="font-bold text-green-500 text-lg">
            {submission?.status}
          </p>
          <p className="font-bold text-gray-500 text-xs">
            {submissionDate?.toDateString()}
          </p>
        </span>

        <span className="flex items-center gap-4">
          <Button
            variant={"ghost"}
            className="text-gray-300 flex items-center gap-2 p-2 hover:bg-primary/20 rounded-md cursor-pointer"
            onClick={() => {
              if (openBlock === "review") {
                setOpenBlock("none");
                return;
              }
              if (submission?.codeReview) {
                setOpenBlock("review");
              } else {
                setThinking(true);
                reviewCode(
                  submission?.sourceCode,
                  problemDescription,
                  "Accepted",
                  submission?.id
                )
                  .then((review) => {
                    submission.review = review;
                    setOpenBlock("review");
                  })
                  .catch((error) => {
                    console.error("Error reviewing code:", error);
                  })
                  .finally(() => {
                    setThinking(false);
                    fetchSubmissionsByProblem();
                  });
              }
            }}
            disabled={isThinking}
          >
            <LucideStars className="size-4 " />
            <p className="text-sm">
              {submission?.codeReview
                ? "View Analysis"
                : thinking
                ? "Reviewing"
                : "Analyze"}
            </p>
          </Button>
          <span className="text-gray-300 flex items-center gap-2 p-2">
            <Clock className="size-4 " />
            <p className="text-sm  pt-0.5">{submission?.time}</p>
          </span>{" "}
          <span className="text-gray-300  items-center gap-2 p-2 hidden sm:flex">
            <MemoryStick className="size-4 " />
            <p className="text-sm  pt-0.5">{submission?.memory}</p>
          </span>
        </span>
        <Badge className={"bg-orange-500 absolute text-white -top-3 left-2"}>
          {submission?.language?.toLowerCase()}
        </Badge>
      </div>
      {openBlock === "review" && (
        <div
          className={`p-4 rounded-md w-full ${
            idx % 2 == 0 ? "bg-primary/10" : "bg-black/20"
          } `}
        >
          <ReactMarkdown>{submission?.codeReview}</ReactMarkdown>
        </div>
      )}
    </>
  );
};

 const WrongSubmission = ({ submission, idx }) => {
  const submissionDate = new Date(submission?.createdAt);
  const [openBlock, setOpenBlock] = React.useState("none");
  const handleOpenBlock = (blockName) => {
    if (openBlock === blockName) {
      setOpenBlock("none");
    } else {
      setOpenBlock(blockName);
    }
  };
  return (
    <>
      <div
        className={`${
          idx % 2 == 0 ? "bg-primary/10 " : "bg-black/20"
        } p-4 py-2 flex justify-between items-center relative hover:bg-primary/20 transition-all duration-200 rounded-md w-full`}
      >
        <span>
          <p className="font-bold text-red-500 text-lg">
            {JSON.parse(submission?.status)}
          </p>
          <p className="font-bold text-gray-500 text-xs">
            {submissionDate?.toDateString()}
          </p>
        </span>

        <span className="flex items-center gap-4">
          <span className="text-gray-300 flex items-center gap-2 p-2 hover:bg-primary/20 rounded-md cursor-pointer">
            <LucideStars className="size-4 " />
            <p className="text-sm">Analyze</p>
          </span>
          <span
            className="text-gray-300 flex items-center gap-2 p-2 hover:bg-primary/20 rounded-md cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleOpenBlock("error");
            }}
          >
            <AlertTriangle className="size-4 " />
            <p className="text-sm">Detailed Error</p>
          </span>
        </span>
        <Badge className={"bg-orange-500 absolute text-white -top-3 left-2"}>
          {submission?.language?.toLowerCase()}
        </Badge>
      </div>

      {openBlock === "error" && (
        <div
          className={`p-4 w-full rounded-md ${
            idx % 2 == 0 ? "bg-primary/10" : "bg-black/20"
          } `}
        >
          <h3 className="text-lg font-semibold mb-2">Error Details</h3>
          {submission?.compileOutput && (
            <pre className="max-w-full overflow-auto whitespace-pre-wrap break-words p-2 text-red-500 rounded text-sm">
              {JSON.parse(submission?.compileOutput)}
            </pre>
          )}
          {submission?.stdError && (
            <pre className="max-w-full overflow-auto whitespace-pre-wrap break-words p-2 text-red-500 rounded text-sm">
              {submission?.stdError}
            </pre>
          )}
          {submission?.message && (
            <pre className="max-w-full overflow-auto whitespace-pre-wrap break-words p-2 text-red-500 rounded text-sm">
              {JSON.parse(submission?.message)}
            </pre>
          )}

          <h3 className="text-lg font-semibold mb-2">First Failed Testcase</h3>
          {submission?.stdin && (
            <div className="flex gap-4 ">
              <span className="flex-1 bg-primary/10 p-2 rounded-md">
                <p className="text-orange-500">stdin</p>
                <pre className="max-w-full overflow-auto whitespace-pre-wrap break-words p-2 text-white rounded text-sm">
                  {submission?.stdin}
                </pre>
              </span>
              <span className="flex-1 bg-primary/10 p-2 rounded-md">
                <p className="text-orange-500">stdout</p>
                <pre className="max-w-full overflow-auto whitespace-pre-wrap break-words p-2 text-white rounded text-sm">
                  {submission?.stdout || "No Output"}
                </pre>
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
};

const ProblemSubmissionContainer = ({
  userSubmissions,
  problemDescription,
  fetchSubmissionsByProblem,
}) => {
  return (
    <div
      className="w-full h-full overflow-y-scroll pr-2"
      style={{ scrollbarWidth: "thin", scrollbarColor: "#ccc transparent" }}
    >
      <div className="p-2">
        <h2 className="text-2xl font-bold ">Submissions</h2>
      </div>

      {userSubmissions && userSubmissions.length > 0 ? (
        userSubmissions?.map((submission, idx) => {
          return (
            <div className="relative my-4" key={submission?.id}>
              {submission?.status === "Accepted" ? (
                <AcceptedSubmission
                  submission={submission}
                  idx={idx}
                  problemDescription={problemDescription}
                  fetchSubmissionsByProblem={fetchSubmissionsByProblem}
                />
              ) : (
                <WrongSubmission submission={submission} idx={idx} />
              )}
            </div>
          );
        })
      ) : (
        <div className="flex flex-col items-center justify-center ">
          <BringToFront className="text-gray-500/20 size-50 mt-8" />
          <h1 className="text-2xl font-bold text-gray-600">
            Nothing To Display
          </h1>
        </div>
      )}
    </div>
  );
};

export default ProblemSubmissionContainer;
