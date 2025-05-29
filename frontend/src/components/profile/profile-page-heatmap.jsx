import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const MONT_WISE_DAYS = {
  January: 31,
  February: 28, // Leap year logic will be handled separately
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};

const ProfilePageHeatMap = ({ publicProfile }) => {
  const currentYear = new Date().getFullYear();
  const [chosenYear, setChosenYear] = useState(currentYear);
  const [isChosenYearLeap, setIsChosenYearLeap] = useState(
    currentYear % 4 === 4 ||
      (currentYear % 100 === 0 && currentYear % 400 === 0)
  );

  return (
    <div className="mt-8 p-4">
      <div className="">
        <Select
          defaultValue={chosenYear}
          onValueChange={(value) => {
            console.log("Selected value:", value);
          }}
          className="w-[180px] mb-4"
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: currentYear - 2025 + 1 }, (_, i) => (
              <SelectItem key={currentYear - i} value={currentYear - i}>
                {currentYear - i}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div
        className="w-full overflow-x-scroll pb-4"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#ccc transparent",
        }}
      >
        <div className="grid grid-cols-12 gap-2 mt-4 min-w-[950px]">
          {Object.values(MONT_WISE_DAYS).map((days, index) => (
            <div
              key={index}
              className="col-span-1 flex flex-col items-center justify-start "
            >
              <span className="text-xs font-semibold">
                {Object.keys(MONT_WISE_DAYS)[index].slice(0, 3)}
              </span>
              <div className="grid grid-cols-5 gap-1 w-full">
                {Array.from({ length: days }, (_, dayIndex) => (
                  <div
                    key={dayIndex * 50}
                    className={`size-3  ${
                      publicProfile?.heatMap?.[chosenYear]?.[
                        Object.keys(MONT_WISE_DAYS)[index]
                      ]?.includes(dayIndex + 1)
                        ? "bg-green-500"
                        : "bg-gray-500"
                    } border-primary border`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePageHeatMap;
