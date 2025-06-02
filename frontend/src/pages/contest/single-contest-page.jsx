import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useContestStore } from "@/store/useContestStore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const SingleContestPage = () => {
  const { contestId } = useParams();
  const [contest, setContest] = useState(null);
  const {
    isLoading,
    getContestById,
    registerForContest,
    unregisterFromContest,
  } = useContestStore();
  const [contestStatus, setContestStatus] = useState("Upcoming");
  const [isParticipated, setIsParticipated] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getContestById(contestId)
      .then((data) => {
        // console.log("Contest data:", data);
        setContest(data.contest);
        setIsParticipated(data.isParticipated);
        const now = new Date();
        const startTime = new Date(data.contest.startTime);
        const endTime = new Date(data.contest.endTime);

        if (now < startTime) {
          setContestStatus("Upcoming");
        } else if (now >= startTime && now <= endTime) {
          setContestStatus("Ongoing");
        } else {
          setContestStatus("Ended");
        }
      })
      .catch((error) => {
        console.error("Failed to fetch contest details:", error);
      });
  }, [contestId]);
  return (
    <div className="flex flex-col items-center mt-8 gap w-full min-h-screen ">
      {isLoading ? (
        <div className=" w-full lg:w-[85%] flex justify-between items-center bg-primary/20 p-4 rounded-xl gap-4 animate-pulse"></div>
      ) : (
        <div className=" w-full lg:w-[85%] flex flex-col gap-2 p-4 items-start">
          <small className="w-full lg:w-[85%]-mb-8">Contest</small>
          <h1 className=" w-full lg:w-[85%] flex justify-between items-center rounded-xl gap-4 text-3xl font-bold">
            {contest?.title}{" "}
            <Badge
              className={`text-sm ${
                contestStatus === "Ongoing"
                  ? "bg-green-500"
                  : contestStatus === "Ended"
                  ? "bg-red-500"
                  : "bg-yellow-500"
              }`}
            >
              {contestStatus}
            </Badge>
          </h1>

          <span>
            {contest?.startTime &&
              new Date(contest.startTime).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            {", "}
            <strong>
              {contest?.startTime &&
                new Date(contest.startTime).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}

              {" - "}
              {contest?.endTime &&
                new Date(contest.endTime).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
            </strong>
          </span>

          {isParticipated ? (
            <Button
              className={"rounded-2xl w-48 text-white cursor-pointer"}
              onClick={() => {
                if (contestStatus === "Ongoing") {
                  navigate(`/contest/${contestId}/problems`);
                } else if (contestStatus === "Ended") {
                  window.location.href = `/contest/${contestId}/results`;
                } else {
                  unregisterFromContest(contestId).then((res) => {
                    // console.log("Unregistered from contest:", res);
                    setIsParticipated(res.isParticipated);
                  });
                }
              }}
            >
              {contestStatus === "Upcoming"
                ? "Leave"
                : contestStatus === "Ongoing"
                ? "Enter"
                : "View Results"}
            </Button>
          ) : (
            <Button
              className={"rounded-2xl w-48 text-white cursor-pointer"}
              onClick={() => {
                registerForContest(contestId).then((res) => {
                  setIsParticipated(res.isParticipated);
                });
              }}
            >
              {contestStatus === "Upcoming"
                ? "Register"
                : contestStatus === "Ongoing"
                ? "Join"
                : "View Results"}
            </Button>
          )}
        </div>
      )}
      {isLoading ? (
        <div className=" w-full lg:w-[85%] flex justify-between items-center bg-primary/20 p-4 rounded-xl gap-4 animate-pulse"></div>
      ) : (
        <h1 className=" w-full lg:w-[85%] flex justify-between items-center p-4 rounded-xl gap-4">
          {contest?.description}
        </h1>
      )}

      <div className="w-full lg:w-[85%] gap-4  rounded-xl flex">
        <div className=" bg-primary/10  p-6 border border-border ">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            Contest Guidelines
          </h2>
          <div className="prose prose-sm text-muted-foreground space-y-3">
            <p className="leading-relaxed">
              <strong className="text-foreground">
                Authentication Required:
              </strong>{" "}
              You must be logged in to participate in this contest. <br />
              <strong className="text-foreground"> Registration:</strong> You
              can register for the contest at any time before it ends, even
              after it has started. <br />
              <strong className="text-foreground"> No Exit Policy:</strong> Once
              you register after the contest has begun, you cannot leave or
              unregister from the contest. <br />
              <strong className="text-foreground">
                {" "}
                Rating Eligibility:
              </strong>{" "}
              Only participants who register and remain in the contest until
              completion will be counted for rating calculations. <br />
              <strong className="text-foreground">
                {" "}
                Performance Rating:
              </strong>{" "}
              Your rating will be determined by the time you take to complete
              all contest problems - faster completion results in higher
              ratings. <br />
              <strong className="text-foreground"> Rating Updates:</strong>{" "}
              Final contest ratings and leaderboard rankings will be updated
              30-40 minutes after the contest ends to ensure accurate
              calculations.
            </p>
          </div>
        </div>
        <div className=" bg-primary/10  p-6 border border-border min-w-64 max-w-80 w-full ">
          <h2 className="text-xl font-semibold mb-4 text-primary">Rankings</h2>
        </div>
      </div>
    </div>
  );
};

export default SingleContestPage;
