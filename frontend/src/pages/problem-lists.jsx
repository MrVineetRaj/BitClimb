import { Button } from "@/components/ui/button";
import { COMPANY_TAGS, DSA_TAGS } from "@/lib/constants";
import { Plus } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const ProblemLists = () => {
  const DUMMY_LISTS = [
    {
      list_name: "Daily Challenges",
      list_id: "daily-challenges",
    },
    {
      list_name: "Weekly Challenges",
      list_id: "weekly-challenges",
    },
    {
      list_name: "Monthly Challenges",
      list_id: "monthly-challenges",
    },
    {
      list_name: "Contest Problems",
      list_id: "contest-problems",
    },
  ];

  return (
    <div className="flex h-screen gap w-full gap-8">
      <div className="flex flex-col gap-4 max-w-72 w-full h-full bg-primary/10 rounded-md p-4">
        <h1 className="font-bold text-xl text-primary  ">Your Problem Lists</h1>
        <hr className="border-gray-300 w-full" />
        <Button variant={"outline"}>Add New List</Button>
        {DUMMY_LISTS?.map(({ list_name: title, list_id: id }, idx) => (
          <Link
            to={`/problem-lists/${id}`}
            className="hover:bg-primary/20 px-4 py-2 cursor-pointer transition-all duration-200 text-gray-200 font-semibold hover:text-white rounded-md"
            key={id}
          >
            {title}
          </Link>
        ))}
      </div>
      <div className="flex flex-col  w-full">
        <h1 className="font-bold text-xl text-primary ">Topic wise lists</h1>
        <hr className="border-gray-300 w-full" />
        <div className="flex flex-wrap gap-4 mt-8">
          {DSA_TAGS?.map((tag, idx) => (
            <Link
              to={`/problem-lists/topic-wise/${tag
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="hover:bg-primary px-8 py-4 cursor-pointer transition-all duration-200 text-gray-200 font-semibold hover:text-white rounded-lg min-w-24 bg-primary-foreground "
              key={idx}
            >
              {tag}
            </Link>
          ))}
        </div>
        <h1 className="font-bold text-xl text-primary mt-8">
          Company wise lists
        </h1>
        <hr className="border-gray-300 w-full" />
        <div className="flex flex-wrap gap-4 mt-8">
          {COMPANY_TAGS?.map((tag, idx) => (
            <Link
              to={`/problem-lists/company-wise/${tag
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="hover:bg-primary px-8 py-4 cursor-pointer transition-all duration-200 text-gray-200 font-semibold hover:text-white rounded-lg min-w-24 bg-primary-foreground "
              key={idx}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemLists;
