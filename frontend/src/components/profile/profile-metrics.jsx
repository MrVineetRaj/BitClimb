import { useAuthStore } from "@/store/useAuthStore";
import { ChartArea } from "lucide-react";
import React from "react";

const ProfileMetrics = ({
  publicProfile,
  profileId,
  isLoadingPublicProfile,
}) => {
  const { authUser } = useAuthStore();
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
      {isLoadingPublicProfile ? (
        <>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2  bg-primary/10 flex flex-col gap-4 items-center justify-center p-4 h-64 animate-pulse"></div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2  bg-primary/10 flex flex-col gap-4 items-center justify-center p-4 h-64 animate-pulse"></div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2  bg-primary/10 flex flex-col gap-4 items-center justify-center p-4 h-64 animate-pulse"></div>
        </>
      ) : (
        <>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2  bg-primary/10 flex flex-col gap-4 items-center justify-center p-4">
            <img
              src={
                profileId === authUser?.id
                  ? authUser?.avatar
                  : "https://avatar.iran.liara.run/public/boy"
              }
              alt=""
              className="w-[80%] max-w-48"
            />
            <h2 className="text-white text-xl font-semibold italic">
              {publicProfile?.user?.name}
            </h2>
          </div>
          <div className="col-span-6 sm:col-span-3  lg:col-span-2 bg-primary/10 flex flex-col gap-4 items-center justify-center p-4">
            <span className="text-green-500 font-semibold w-[80%] ">
              <span className="flex items-center justify-between">
                <span>Easy</span>
                <span>
                  {publicProfile?.totalEasyQuestions === 0 ? (
                    0
                  ) : (
                    <span>
                      {publicProfile?.totalEasySolved || 0} {"/"}
                      {publicProfile?.totalEasyQuestions || 0}
                    </span>
                  )}
                </span>
              </span>
              <div className="w-full bg-gray-400 h-2.5 rounded-md relative">
                <div
                  className="bg-green-500 h-2.5 rounded-md"
                  style={{
                    width: `${
                      (publicProfile?.totalEasySolved /
                        publicProfile?.totalEasyQuestions) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
            </span>
            <span className="text-orange-500 font-semibold w-[80%] ">
              <span className="flex items-center justify-between">
                <span>Medium</span>
                <span>
                  {publicProfile?.totalMediumQuestions === 0 ? (
                    0
                  ) : (
                    <span>
                      {publicProfile?.totalMediumSolved || 0} {"/"}
                      {publicProfile?.totalMediumQuestions || 0}
                    </span>
                  )}
                </span>
              </span>
              <div className="w-full bg-gray-400 h-2.5 rounded-md relative">
                <div
                  className="bg-orange-500 h-2.5 rounded-md"
                  style={{
                    width: `${
                      (publicProfile?.totalMediumSolved /
                        publicProfile?.totalMediumQuestions) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
            </span>
            <span className="text-red-500 font-semibold w-[80%] ">
              <span className="flex items-center justify-between">
                <span>Hard</span>
                <span>
                  {publicProfile?.totalHardQuestions === 0 ? (
                    0
                  ) : (
                    <span>
                      {publicProfile?.totalHardSolved || 0} {"/"}
                      {publicProfile?.totalHardQuestions || 0}
                    </span>
                  )}
                </span>
              </span>
              <div className="w-full bg-gray-400 h-2.5 rounded-md relative">
                <div
                  className="bg-red-500 h-2.5 rounded-md"
                  style={{
                    width: `${
                      (publicProfile?.totalHardSolved /
                        publicProfile?.totalHardQuestions) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
            </span>
          </div>
          <div className="col-span-6 sm:col-span-3  lg:col-span-2 bg-primary/10 p-4 flex flex-col items-center justify-center relative ">
            <h2 className="font-bold w-full absolute top-2 left-2">Rating</h2>
            {publicProfile?.rating ? (
              <></>
            ) : (
              <>
                <ChartArea className="text-gray-700 size-18" />
                <h1 className="text-gray-700 italic font-bold text-2xl mt-4">
                  Nothing To Show
                </h1>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileMetrics;
