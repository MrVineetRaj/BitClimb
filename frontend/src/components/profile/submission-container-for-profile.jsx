import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useProblemStore } from "@/store/useProblemStore";
import { Badge } from "../ui/badge";
import Pagination from "../shared/pagination";

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
  const { getAllUserSubmissions } = useProblemStore();
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
          <div className="flex items-center flex-col gap-2 ">
            {submissions && submissions.length && submissions.length > 0 ? (
              submissions?.map((submission, idx) => (
                <span
                  className={`flex w-full items-center justify-between p-2 hover:bg-primary/20 transition-all duration-200 cursor-pointer ${
                    idx % 2 == 0 ? "bg-primary/10" : ""
                  }`}
                  key={idx}
                >
                  <span className="flex items-center gap-2 ">
                    <span className="text-sm md:text-base">
                      {submission?.problem?.title}
                    </span>
                    <Badge
                      className={`
                          hidden sm:inline-block
                        ${
                          submission?.problem?.difficulty === "EASY"
                            ? "bg-green-500"
                            : submission?.problem?.difficulty === "MEDIUM"
                            ? "bg-orange-500"
                            : "bg-red-500"
                        } text-white`}
                    >
                      {" "}
                      {submission?.problem?.difficulty}
                    </Badge>{" "}
                  </span>
                  <span
                    className={`
                        text-sm md:text-base
                      ${
                        submission?.status === "ACCEPTED"
                          ? "text-green-500"
                          : "text-red-500"
                      } font-bold`}
                  >
                    {submission?.status}
                  </span>
                </span>
              ))
            ) : (
              <p>No submissions found.</p>
            )}
          </div>
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
          <div className="">
            {acceptedSubmissions &&
            acceptedSubmissions.length &&
            acceptedSubmissions.length > 0 ? (
              acceptedSubmissions?.map((submission, idx) => (
                // <>
                <span
                  className={`flex items-center justify-between p-2 hover:bg-primary/20 transition-all duration-200 cursor-pointer ${
                    idx % 2 == 0 ? "bg-primary/10" : ""
                  }`}
                  key={idx * 100}
                >
                  <span>{submission?.problem?.title}</span>
                  <span
                    className={`${
                      submission?.status === "ACCEPTED"
                        ? "text-green-500"
                        : "text-red-500"
                    } font-bold`}
                  >
                    {submission?.status}
                  </span>
                </span>
              ))
            ) : (
              <p>No submissions found.</p>
            )}
          </div>
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
