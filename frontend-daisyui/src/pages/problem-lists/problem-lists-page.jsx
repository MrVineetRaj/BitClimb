import React, { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { Link } from "react-router";
import { Plus } from "lucide-react";
import Heading from "../../components/shared/heading";

const ProblemListsPage = () => {
  const { authUser } = useAuthStore();
  const [lists, setLists] = useState([
    {
      id: 1,
      title: "My First Problem List",
    },
    {
      id: 2,
      title: "My Second Problem List",
    },
    {
      id: 3,
      title: "My Third Problem List",
    },
  ]);
  return (
    <div className="w-full p-8 h-full flex gap-4 items-start">
      <div className="min-w-72 w-48 bg-base-100/50 backdrop:blur-2xl min-h-[700px]">
        <h2 className="text-2xl font-bold"> Your Problem Lists</h2>
        <hr className="my-4" />
        <div className="flex flex-col gap-5 mt-8 items-center">
          <button className="btn btn-secondary btn-soft w-full btn-outline  font-bold">
            <Plus className="w-6 h-6 " />
            New List
          </button>
          {lists?.map((list, idx) => {
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
