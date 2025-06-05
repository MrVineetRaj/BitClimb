import { Badge } from "@/components/ui/badge";
import { useContestStore } from "@/store/useContestStore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const ContestPage = () => {
  const { isLoading, getContests } = useContestStore();
  const [contests, setContests] = useState();
  const now = new Date();
  useEffect(() => {
    getContests().then((data) => {
      // console.log(data);
      setContests(data);
    });
  }, []);
  return (
    <div className="w-full md:w-[90%] xl:w-[60%]  flex flex-col items-center justify-center gap-8">
      <h1 className="text-center  text-4xl font-extrabold">
        Feeling <span className="text-primary">competitive</span> today let's
        take a look to <span className="text-primary"> contests</span>
      </h1>
      <hr className="border-2 border-primary w-[20%]" />
      <div className="w-full my-8 flex flex-col gap-4 ">
        {contests &&
          contests?.map((contest, idx) => {
            return (
              <Link
                to={`/contest/${contest?.id}`}
                key={contest?.id}
                className={`flex items-center justify-between ${
                  idx % 2 === 0 ? "bg-primary/10 " : "bg-secondary/10 "
                } p-4 rounded-lg transition-all duration-300 hover:bg-primary/20`}
              >
                <span>
                  <h2 className="flex items-center gap-4">
                    {contest.title}
                    <Badge>
                      {now < new Date(contest?.startTime)
                        ? "Upcoming"
                        : now < new Date(contest?.endTime)
                        ? "Live"
                        : "Ended"}
                    </Badge>
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {contest?.description}
                  </p>
                </span>
                <span className="text-sm text-gray-400">
                  {new Date(contest.startTime).toLocaleDateString() ===
                  new Date(contest.endTime).toLocaleDateString() ? (
                    <p className="">
                      {contest?.startTime &&
                        new Date(contest.startTime).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          }
                        )}
                      {", "}
                      <strong>
                        {contest?.startTime &&
                          new Date(contest.startTime).toLocaleTimeString(
                            "en-US",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            }
                          )}

                        {" - "}
                        {contest?.endTime &&
                          new Date(contest.endTime).toLocaleTimeString(
                            "en-US",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            }
                          )}
                      </strong>
                    </p>
                  ) : (
                    <p className="text-gray-500">
                      {contest?.startTime &&
                        new Date(contest.startTime).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          }
                        )}
                      {", "}
                      <strong>
                        {contest?.startTime &&
                          new Date(contest.startTime).toLocaleTimeString(
                            "en-US",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            }
                          )}
                      </strong>
                      {" - "}

                      {contest?.startTime &&
                        new Date(contest.startTime).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          }
                        )}
                      {", "}

                      <strong>
                        {contest?.endTime &&
                          new Date(contest.endTime).toLocaleTimeString(
                            "en-US",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            }
                          )}
                      </strong>
                    </p>
                  )}
                </span>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ContestPage;
