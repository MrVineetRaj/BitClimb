import { useStreakStore } from "@/store/useStreakStore";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, Flame } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const StreakCalendar = () => {
  const currDate = new Date();
  const { isLoadingChallenges, loadDailyChallenges, dailyChallenges } =
    useStreakStore();
  const WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const [startIdx, setStartIdx] = React.useState(0);
  const navigate = useNavigate();
  const [currentMonth, setCurrentMonth] = React.useState(new Date().getMonth());
  const [monthWiseDailyChallenges, setMonthWiseDailyChallenges] = useState([]);

  const [streakSubmissions, setStreakSubmissions] = React.useState([
    { date: "01", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
    { date: "05", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
    { date: "10", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
    { date: "11", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
    { date: "21", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
  ]);

  useEffect(() => {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const startDay = startOfMonth.getDay();

    setStartIdx(startDay);

    loadDailyChallenges();

    if (streakSubmissions?.length > 0) {
      let streakSubmissionPtr = 0;

      const tempMonthlyChallenges = monthWiseDailyChallenges?.map(
        (challenge, index) => {
          let isSolved = false;
          if (challenge.date === streakSubmissions[streakSubmissionPtr]?.date) {
            streakSubmissionPtr++;
            isSolved = true;
          }
          return {
            ...challenge,
            isSolved,
          };
        }
      );

      setMonthWiseDailyChallenges(tempMonthlyChallenges);
    }
  }, []);

  useEffect(() => {
    const tempChallenges = dailyChallenges?.map((challenge) => {
      const challengeDay = new Date(challenge?.createdAt).getDate();
      return {
        id: challenge.id,
        problemId: challenge?.problemId,
        date: challengeDay,
      };
    });

    console.log(tempChallenges);
    setMonthWiseDailyChallenges(tempChallenges);
  }, [dailyChallenges]);

  return (
    <div className="w-64  flex flex-col items-center justify-center gap-2">
      <span className="text-lg font-semibold">{currDate?.toDateString()}</span>

      {isLoadingChallenges ? (
        <div className="bg-primary/20 w-64 h-72 animate-pulse"></div>
      ) : (
        <div className="bg-primary/20 w-64 h-72 rounded-lg grid grid-cols-7 grid-rows-6 gap-1 p-2">
          {WEEK_DAYS.map((day) => (
            <div
              key={day}
              className="text-center font-semibold text-sm text-gray-400"
            >
              {day}
            </div>
          ))}

          {Array.from({ length: 35 }).map((_, index) => (
            <div key={index} className="bg-black/10 rounded-md ">
              {index >= startIdx && (
                <span
                  className={`h-full w-full flex items-center justify-center ${
                    !monthWiseDailyChallenges.some((challenge) => {
                      return (
                        challenge?.date == index - startIdx + 1 &&
                        challenge?.problemId
                      );
                    })
                      ? "cursor-not-allowed text-gray-400 opacity-40"
                      : "bg-primary/20 cursor-pointer"
                  } rounded-md`}
                  onClick={() => {
                    if (
                      monthWiseDailyChallenges?.find(()=>{})?.date == index - startIdx + 1 &&
                      challenge?.problemId
                    ) {
                      navigate(
                        `/problem/${
                          monthWiseDailyChallenges[index - startIdx].problem
                        }?ref=streak-calendar`
                      );
                    }
                  }}
                >
                  {monthWiseDailyChallenges[index - startIdx]?.isSolved ? (
                    <Flame className="text-orange-500" />
                  ) : (
                    index - startIdx + 1
                  )}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StreakCalendar;
