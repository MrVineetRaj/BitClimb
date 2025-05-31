import {
  AlertTriangle,
  BringToFront,
  Clock,
  LucideStars,
  MemoryStick,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useProblemStore } from "@/store/useProblemStore";
import { Badge } from "../ui/badge";
import Pagination from "../shared/pagination";
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
        className={`${"bg-green-500/20 "} p-4 py-2 flex justify-between items-center relative hover:bg-primary/20 transition-all duration-200 rounded-md w-full`}
      >
        <span>
          <p className="font-bold text-white text-lg">
            {submission?.problem?.title}
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
        <span className={" absolute  -top-3 left-2 flex gap-2 items-center"}>
          {" "}
          <Badge className={"bg-green-500 text-black "}>
            {submission?.status}
          </Badge>
          <Badge className={"bg-orange-500 text-white "}>
            {submission?.language?.toLowerCase()}
          </Badge>
        </span>
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
        className={`${"bg-red-500/20 "} p-4 py-2 flex justify-between items-center relative hover:bg-primary/20 transition-all duration-200 rounded-md w-full`}
      >
        <span>
          <p className="font-bold text-white text-lg">
            {submission?.problem?.title}
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
        <span className={" absolute  -top-3 left-2 flex gap-2 items-center"}>
          {" "}
          <Badge className={"bg-red-500 text-black "}>
            {JSON.parse(submission?.status)}
          </Badge>
          <Badge className={"bg-orange-500 text-white "}>
            {submission?.language?.toLowerCase()}
          </Badge>
        </span>
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

const SubmissionContainerForProfile = ({ profileId }) => {
  const [acceptedSubmissions, setAcceptedSubmissions] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [acceptedPage, setAcceptedPage] = useState({
    currPage: 1,
    totalPage: 1,
  });
  const [submissionsPage, setSubmissionsPage] = useState({
    currPage: 1,
    totalPage: 5,
  });
  const { getAllUserSubmissions, isLoadingSubmissions } = useProblemStore();
  const fetchSubmissions = async (page) => {
    try {
      const resp = await getAllUserSubmissions(profileId, 10, page, false);

      setSubmissions(resp.submissions);
      setSubmissionsPage({
        currPage: resp.currentPage,
        totalPage: resp.totalPages,
      });
    } catch (error) {
      console.error("Failed to fetch submissions:", error);
    }
  };

  const fetchAcceptedSubmissions = async (page) => {
    try {
      const resp = await getAllUserSubmissions(profileId, 10, page, true);

      setAcceptedSubmissions(resp.submissions);
      setAcceptedPage({
        currPage: resp.currentPage,
        totalPage: resp.totalPages,
      });
    } catch (error) {
      console.error("Failed to fetch accepted submissions:", error);
    }
  };
  useEffect(() => {
    fetchSubmissions(submissionsPage.currPage);
    fetchAcceptedSubmissions(acceptedPage.currPage);
  }, [getAllUserSubmissions]);

  const handleChangeSubmissionsPage = (page) => {
    fetchSubmissions(page);
  };
  const handleChangeAcceptedSubmissionsPage = (page) => {
    fetchAcceptedSubmissions(page);
  };
  return (
    <div>
      <Tabs defaultValue="submissions" className="mt-8 mb-12">
        <TabsList className="">
          <TabsTrigger value="submissions" className="w-full">
            Submissions
          </TabsTrigger>
          <TabsTrigger value="accepted-submissions" className="w-full">
            Accepted Submissions
          </TabsTrigger>
        </TabsList>

        <TabsContent value="submissions" className="">
          {isLoadingSubmissions ? (
            <div className="flex flex-col gap-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className={` bg-primary/10  animate-pulse flex items-center justify-between w-full h-8`}
                ></div>
              ))}
            </div>
          ) : (
            <div className="flex items-center flex-col gap-4 mt-4 ">
              {submissions && submissions.length && submissions.length > 0 ? (
                submissions?.map((submission, idx) =>
                  submission?.status === "Accepted" ? (
                    <AcceptedSubmission
                      submission={submission}
                      idx={idx}
                      problemDescription={submission?.problem?.description}
                      fetchSubmissionsByProblem={() => {}}
                      key={submission?.id}
                    />
                  ) : (
                    <WrongSubmission
                      submission={submission}
                      idx={idx}
                      key={submission?.id}
                    />
                  )
                )
              ) : (
                <p>No submissions found.</p>
              )}
            </div>
          )}
          {submissionsPage?.totalPage > 1 && (
            <div className="flex justify-end w-full mt-4">
              <Pagination
                currPage={submissionsPage?.currPage}
                setCurrPage={(val) => {
                  setSubmissionsPage({
                    ...submissionsPage,
                    currPage: val,
                  });

                  handleChangeSubmissionsPage(val);
                }}
                totalPages={submissionsPage?.totalPage}
              />
            </div>
          )}
        </TabsContent>

        <TabsContent value="accepted-submissions" className="">
          {isLoadingSubmissions ? (
            <div className="flex flex-col gap-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className={` bg-primary/10  animate-pulse flex items-center justify-between w-full h-8`}
                ></div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-6 mt-4">
              {acceptedSubmissions &&
              acceptedSubmissions.length &&
              acceptedSubmissions.length > 0 ? (
                acceptedSubmissions?.map((submission, idx) => (
                  <AcceptedSubmission
                    submission={submission}
                    idx={idx}
                    problemDescription={submission?.problem?.description}
                    fetchSubmissionsByProblem={() => {}}
                    key={submission?.id}
                  />
                ))
              ) : (
                <p>No submissions found.</p>
              )}
            </div>
          )}
          {acceptedPage?.totalPage > 1 && (
            <div className="flex justify-end w-full mt-4">
              <Pagination
                currPage={acceptedPage?.currPage}
                setCurrPage={(val) => {
                  setAcceptedPage({
                    ...acceptedPage,
                    currPage: val,
                  });
                  handleChangeAcceptedSubmissionsPage(val);
                }}
                totalPages={acceptedPage?.totalPage}
              />
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SubmissionContainerForProfile;
