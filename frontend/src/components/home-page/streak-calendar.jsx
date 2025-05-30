import { ArrowLeftCircleIcon, ArrowRightCircleIcon, Flame } from "lucide-react";
import React, { useEffect } from "react";
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
  const WEEK_DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const [startIdx, setStartIdx] = React.useState(0);
  const navigate = useNavigate();
  const [currentMonth, setCurrentMonth] = React.useState(new Date().getMonth());
  const [monthWiseDailyChallenges, setMonthWiseDailyChallenges] =
    React.useState([
      { date: "01", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "02", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "03", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "04", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "05", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "06", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "07", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "08", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "09", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "10", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "11", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "12", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "13", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "14", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "15", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "16", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "17", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "18", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "19", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "20", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "21", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "22", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "23", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "24", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "25", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "26", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "27", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "28", problem: "" },
      { date: "29", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "30", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
      { date: "31", problem: "17dd90d1-bc6e-4871-b882-be50d728f563" },
    ]);

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

  return (
    <div className="w-64  flex flex-col items-center justify-center gap-2">
      <div className="flex items-center justify-between w-64 text-gray-500 ">
        <ArrowLeftCircleIcon />
        <span className="text-lg font-semibold">{MONTHS[currentMonth]}</span>
        <ArrowRightCircleIcon />
      </div>
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
                  !monthWiseDailyChallenges[index - startIdx]?.problem
                    ? "cursor-not-allowed text-gray-400"
                    : "bg-primary/20 cursor-pointer"
                } rounded-md`}
                onClick={() => {
                  if (monthWiseDailyChallenges[index - startIdx]?.problem) {
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
    </div>
  );
};

export default StreakCalendar;
