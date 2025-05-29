import React, { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useProblemStore } from "@/store/useProblemStore";
import { Badge } from "../ui/badge";

const SubmissionContainerForProfile = ({ profileId }) => {
  const [acceptedSubmissions, setAcceptedSubmissions] = React.useState([]);
  const [submissions, setSubmissions] = React.useState([]);
  const [acceptedPage, setAcceptedPage] = React.useState(1);
  const [submissionsPage, setSubmissionsPage] = React.useState(1);
  const { getAllUserSubmissions } = useProblemStore();

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const resp = await getAllUserSubmissions(
          profileId,
          10,
          submissionsPage,
          false
        );
        console.log("All Submissions:", resp);
        setSubmissions(resp.submissions);
      } catch (error) {
        console.error("Failed to fetch submissions:", error);
      }
    };

    const fetchAcceptedSubmissions = async () => {
      try {
        const resp = await getAllUserSubmissions(null, 10, acceptedPage, true);
        setAcceptedSubmissions(resp.submissions);
      } catch (error) {
        console.error("Failed to fetch accepted submissions:", error);
      }
    };

    fetchSubmissions();
    fetchAcceptedSubmissions();
  }, [getAllUserSubmissions, acceptedPage, submissionsPage]);
  return (
    <div>
      <Tabs defaultValue="submissions" className="mt-8 mb-12">
        <TabsList className="">
          <TabsTrigger value="submissions" className="w-full">
            Submissions
          </TabsTrigger>
          <TabsTrigger value="contest-submissions" className="w-full">
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
        </TabsContent>

        <TabsContent value="contest-submissions" className="">
          {/* Render contest submissions here */}
          <div className="">
            {acceptedSubmissions &&
            acceptedSubmissions.length &&
            acceptedSubmissions.length > 0 ? (
              acceptedSubmissions?.map((submission, idx) => (
                <span
                  className={`flex items-center justify-between p-2 hover:bg-primary/20 transition-all duration-200 cursor-pointer ${
                    idx % 2 == 0 ? "bg-primary/10" : ""
                  }`}
                  key={idx}
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SubmissionContainerForProfile;
