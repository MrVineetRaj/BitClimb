import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProblemStore } from "@/store/useProblemStore";
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

const ProfilePageHeatMap = ({ publicProfile, profileId }) => {
  const currentYear = new Date().getFullYear();
  const [chosenYear, setChosenYear] = useState(currentYear);
  const [isChosenYearLeap, setIsChosenYearLeap] = useState(
    currentYear % 4 === 4 ||
      (currentYear % 100 === 0 && currentYear % 400 === 0)
  );
  const { getUserHeatMap } = useProblemStore();
  const [heatMapData, setHeatMapData] = useState([]);

  const fetchHeatMapData = async (year) => {
    try {
      const res = await getUserHeatMap(profileId, year);

      const modifiedData = res?.result?.map((item) => {
        return {
          location: {
            month: Number(item.date.split("T")[0].split("-")[1] - 1),
            day: Number(item.date.split("T")[0].split("-")[2] - 1),
          },
          count: item.count,
        };
      });

      setHeatMapData(modifiedData);
      
    } catch (error) {
      console.error("Error fetching heat map data:", error);
      return {};
    }
  };

  useEffect(() => {
    fetchHeatMapData(chosenYear);
  }, [chosenYear]);

  return (
    <div className="mt-8 p-4">
      <div className="">
        <Select
          defaultValue={chosenYear}
          onValueChange={(value) => {
            setChosenYear(parseInt(value));
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

      {heatMapData.length == 0 ? (
        <>Loading</>
      ) : (
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
                        heatMapData.some(
                          (item) =>
                            item.location.month === index &&
                            item.location.day === dayIndex &&
                            item.count > 5
                        )
                          ? "bg-green-800"
                          : heatMapData.some(
                              (item) =>
                                item.location.month === index &&
                                item.location.day === dayIndex &&
                                item.count > 5
                            )
                          ? "bg-green-600"
                          : heatMapData.some(
                              (item) =>
                                item.location.month === index &&
                                item.location.day === dayIndex &&
                                item.count > 5
                            )
                          ? "bg-green-500"
                          : heatMapData[heatMapData?.length - 1].location
                              .month >=
                            index + 1
                          ? "bg-primary/20"
                          : heatMapData[heatMapData?.length - 1].location
                              .month == index &&
                            heatMapData[heatMapData?.length - 1].location
                              .day >=
                              dayIndex
                          ? "bg-primary/20"
                          : "bg-gray-950"
                      }  rounded-sm`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePageHeatMap;
