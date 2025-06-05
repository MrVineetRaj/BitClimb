import React, { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { Link } from "react-router";
import { Plus } from "lucide-react";
import Heading from "../../components/shared/heading";
import { useProblemListStore } from "../../store/useProblemListStore";
import CreateNewProblemList from "../../components/shared/create-new-problem-list";

const ProblemListsPage = () => {
  const { authUser } = useAuthStore();
  const { problemLists } = useProblemListStore();

  return (
    <div className="w-full p-8 h-full flex gap-4 items-start">
      <div className="min-w-72 w-48 bg-base-100/50 backdrop:blur-2xl min-h-[700px] sticky bottom-0">
        <h2 className="text-2xl font-bold">Your Problem Lists</h2>
        <hr className="my-4" />
        <div className="flex flex-col gap-5 mt-8 items-center ">
          <CreateNewProblemList />
          {problemLists?.map((list, idx) => {
            return (
              <Link
                to={`/problem-lists/${list.id}`}
                key={list.id}
                className="w-full cursor-pointer"
              >
                <button
                  className="w-full text-left
                bg-base-200 hover:bg-primary p-3 rounded-lg
                 font-semibold  transition-all duration-200 cursor-pointer"
                >
                  {list.title}
                </button>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="w-full flex flex-col items-start">
        <Heading title={"Problem Lists"} />
        <hr className="my-4 w-full" />
        <div className="flex flex-col gap-4 p-4">
          <h3 className="text-xl font-bold">Topic Wise</h3>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <h3 className="text-xl font-bold">Company Wise</h3>
        </div>
      </div>
    </div>
  );
};

export default ProblemListsPage;
