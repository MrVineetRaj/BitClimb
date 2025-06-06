import React from "react";
import Heading from "../components/shared/heading";
import TagWiseDistribution from "../components/profile-page/tag-distribution-chart";
import useProfileStore from "../store/useProfileStore";
import { useAuthStore } from "../store/useAuthStore";
import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { useState } from "react";

const ProfilePage = () => {
  const { userId } = useParams();
  const { authUser } = useAuthStore();
  const {
    isLoadingBasicMetrics,
    getBasicMetrics,
    isLoadingTagWiseSolvedCount,
    getTagWiseSolvedCount,
  } = useProfileStore();
  const [basicMetrics, setBasicMetrics] = useState(null);
  const [tagWiseSolvedCount, setTagWiseSolvedCount] = useState({});
  useEffect(() => {
    const fetchBasicMetrics = async () => {
      if (userId) {
        await getBasicMetrics(userId)
          .then((data) => {
            if (data) {
              setBasicMetrics(data.data);
              console.log("Basic metrics fetched successfully:", data.data);
            } else {
              console.error("Failed to fetch basic metrics");
            }
          })
          .catch((error) => {
            console.error("Error fetching basic metrics:", error);
          });
      }
    };

    const fetchTagWiseSolvedCount = async () => {
      if (userId) {
        await getTagWiseSolvedCount(userId)
          .then((res) => {
            if (res.success) {
              setTagWiseSolvedCount(res.data);
              console.log(
                "Tag-wise solved count fetched successfully:",
                res.data
              );
            }
          })
          .catch((error) => {
            console.error("Error fetching tag-wise solved count:", error);
          });
      }
    };
    fetchTagWiseSolvedCount();
    fetchBasicMetrics();
  }, [userId]);

  return (
    <div className="w-full max-w-[1500px] my-4 flex flex-col items-center gap-4 px-8">
      {!!authUser && authUser.id === userId && (
        <Heading title={"Hello, "} highLightedText={authUser?.name} />
      )}
      <div className="grid grid-cols-3 min-h-48 gap-4 w-full">
        {isLoadingBasicMetrics ? (
          Array(6)
            .fill(0)
            ?.map((_, idx) => (
              <div
                className="min-h-48 w-full col-span-1 skeleton"
                key={idx}
              ></div>
            ))
        ) : (
          <>
            <div className="col-span-1 w-full h-full bg-base-200 flex items-center justify-center flex-col p-4 gap-4">
              <img
                src={basicMetrics?.user?.avatar || "/avatar.png"}
                alt=""
                className="rounded-full"
              />
              <p className="font-bold italic">{basicMetrics?.user?.name}</p>
            </div>
            <div className="col-span-1 w-full h-full bg-base-200 flex items-center justify-center flex-col gap-4 relative">
              <p className="text-primary font-extrabold text-xl absolute top-4 left-4">
                GlobalRanking
              </p>
              <h1 className="text-6xl font-bold">{basicMetrics?.user?.rank}</h1>
            </div>
            <div className="col-span-1 w-full h-full bg-base-200">
              {" "}
              <div className="col-span-1 w-full h-full bg-base-200 flex items-center justify-center flex-col gap-4 relative">
                <p className="text-primary font-extrabold text-xl absolute top-4 left-4">
                  Contest Rating
                </p>
                <h1 className="text-4xl font-bold">
                  {basicMetrics?.contestRatings?.length > 0
                    ? basicMetrics?.contestRatings[contestRatings?.length - 1]
                    : "No Rating"}
                </h1>
              </div>
            </div>
          </>
        )}
      </div>

      {!isLoadingBasicMetrics && (
        <div className="grid grid-cols-3 min-h-48 gap-2 w-full bg-base-300  p-2 rounded-md">
          <div className="col-span-1 w-full h-full bg-base-100 flex flex-col items-center gap-4 p-8">
            <div className="flex items-center justify-center flex-col w-full flex-1 gap-4">
              <div
                className="radial-progress bg-primary text-primary-content border-primary border-4  "
                style={
                  {
                    "--value": 70,
                    "--size": "7rem",
                  } /* as React.CSSProperties */
                }
                aria-valuenow={70}
                role="progressbar"
              >
                {basicMetrics?.numberOfProblems?.total > 0 &&
                  `${basicMetrics?.numberOfProblems?.solved}` +
                    "/" +
                    `${basicMetrics?.numberOfProblems?.total}`}
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center gap-2 justify-center ">
              <div className="">
                <span className="flex justify-between items-center w-full -mb-2">
                  <span className="text-sm">
                    {basicMetrics?.numberOfProblems?.solvedEasy}
                  </span>
                  <span className="text-sm">
                    {basicMetrics?.numberOfProblems?.easy}
                  </span>
                </span>
                <progress
                  className="progress progress-success w-56"
                  value={basicMetrics?.numberOfProblems?.solvedEasy || 0}
                  max={basicMetrics?.numberOfProblems?.easy || 0}
                ></progress>
              </div>
              <div className="">
                <span className="flex justify-between items-center w-full -mb-2">
                  <span className="text-sm">
                    {basicMetrics?.numberOfProblems?.solvedMedium}
                  </span>
                  <span className="text-sm">
                    {basicMetrics?.numberOfProblems?.medium || 0}
                  </span>
                </span>
                <progress
                  className="progress progress-warning w-56"
                  value={basicMetrics?.numberOfProblems?.solvedMedium || 0}
                  max={basicMetrics?.numberOfProblems?.medium || 0}
                ></progress>
              </div>
              <div className="">
                <span className="flex justify-between items-center w-full -mb-2">
                  <span className="text-sm">
                    {basicMetrics?.numberOfProblems?.solvedHard}
                  </span>
                  <span className="text-sm">
                    {basicMetrics?.numberOfProblems?.hard || 0}
                  </span>
                </span>
                <progress
                  className="progress progress-error w-56"
                  value={basicMetrics?.numberOfProblems?.solvedHard || 0}
                  max={basicMetrics?.numberOfProblems?.hard || 0}
                ></progress>
              </div>
            </div>
          </div>
          <div className="col-span-1 w-full h-full bg-base-100 flex flex-col items-center justify-center ">
            <Heading
              title={
                (
                  (basicMetrics?.submissionsCnt?.accepted * 100) /
                  basicMetrics?.submissionsCnt?.total
                ).toFixed(1) + "%"
              }
              subtitle={"Acceptance Rate"}
            />
            <div className="flex items-center justify-center  gap-5">
              <div className="tooltip" data-tip="For Easy">
                <p className="text-lg font-bold text-green-500">
                  {basicMetrics?.submissionsCnt?.easy > 0
                    ? (
                        (basicMetrics?.submissionsCnt?.acceptedEasy * 100) /
                        basicMetrics?.submissionsCnt?.easy
                      ).toFixed(1) + "%"
                    : 0 + "%"}
                </p>
              </div>
              <div className="tooltip" data-tip="For Medium">
                <p className="text-lg font-bold text-orange-500">
                  {basicMetrics?.submissionsCnt?.medium > 0
                    ? (
                        (basicMetrics?.submissionsCnt?.acceptedMedium * 100) /
                        basicMetrics?.submissionsCnt?.medium
                      ).toFixed(1) + "%"
                    : 0 + "%"}
                </p>
              </div>
              <div className="tooltip" data-tip="For Hard">
                <p className="text-lg font-bold text-red-500">
                  {basicMetrics?.submissionsCnt?.hard > 0
                    ? (
                        (basicMetrics?.submissionsCnt?.acceptedHard * 100) /
                        basicMetrics?.submissionsCnt?.hard
                      ).toFixed(1) + "%"
                    : 0 + "%"}
                </p>
              </div>
            </div>
          </div>
          <div className="relative col-span-1 w-full h-full bg-base-100 flex flex-col items-center justify-center gap-4">
            <h2 className="absolute top-2 left-4 text-xl font-bold text-center text-info">
              Submissions per Languages
            </h2>
            {basicMetrics?.submissionsPerLanguage &&
            Object.entries(basicMetrics?.submissionsPerLanguage).length > 0 ? (
              Object.entries(basicMetrics?.submissionsPerLanguage).map(
                ([language, count]) => (
                  <h2
                    key={language}
                    className="text-lg font-bold text-center"
                  >{`${language} x ${count}`}</h2>
                )
              )
            ) : (
              <p className="text-lg font-bold text-center">No Submissions</p>
            )}
          </div>
        </div>
      )}
      {isLoadingTagWiseSolvedCount ? (
        <div className="w-full min-h-120 skeleton"></div>
      ) : (
        <div className="w-full max-w-[1500px] bg-base-300 p-4 rounded-md flex gap-4 items-center justify-center">
          <div className="flex-1 flex flex-col items-center justify-center">
            <TagWiseDistribution
              labels={Object?.keys(tagWiseSolvedCount)}
              values={Object?.values(tagWiseSolvedCount)}
            />
          </div>
          <div className="flex-1 w-full  flex flex-col items-start  gap-4 h-full min-h-[400px]">
            <h2 className="text-xl font-bold text-center text-info">
              Tags covered
            </h2>
            <div className="flex flex-row flex-wrap gap-4">
              {tagWiseSolvedCount &&
              Object.entries(tagWiseSolvedCount).length > 0 ? (
                Object.entries(tagWiseSolvedCount).map(([tag, count]) => (
                  <div key={tag} className="flex items-center gap-2">
                    <Link
                      to={`/problem-lists/topic/${tag}`}
                      className="badge badge-primary badge-soft"
                    >
                      {tag}
                    </Link>
                    x {count}
                  </div>
                ))
              ) : (
                <p className="text-lg font-bold text-center">No Tags Covered</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
