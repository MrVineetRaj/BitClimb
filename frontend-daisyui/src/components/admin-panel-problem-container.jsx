import React, { useEffect, useState } from "react";
import { useProblemStore } from "../store/useProblemStore";
import { Link } from "react-router";

const AdminPanelProblemContainer = () => {
  const { getAllProblems, isLoadingProblems } = useProblemStore();

  const [searchQuery, setSearchQuery] = useState("");
  const [problems, setProblems] = useState([]);
  const fetchProblems = async (searchQuery = "") => {
    console.log("Fetching all problems");
    const res = await getAllProblems(
      30,
      1,
      searchQuery.length > 3 ? searchQuery : "",
      "",
      "",
      "ADMIN"
    );
    if (res && res.problems.length > 0) {
      console.log("All Problems", res);
      setProblems(res.problems);
    }
  };
  useEffect(() => {
    fetchProblems();
  }, []);

  useEffect(() => {
    if (searchQuery.length > 3) {
      fetchProblems(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div>
      <div className="w-full p-4">
        <h2 className="text-2xl font-bold mb-4">Admin Panel - Problems</h2>
        <input
          type="text"
          placeholder="Search problems..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input input-bordered w-full mb-4"
        />
        <div className="gap-2 flex flex-col">
          {isLoadingProblems
            ? Array(10)
                .fill(0)
                ?.map(() => <div className="skeleton w-full h-8"></div>)
            : problems.map((problem) => (
                <Link
                  to={`/admin/panel/problem/${problem?.id}`}
                  key={problem.id}
                  className="mb-2 bg-primary/20 px-4 py-2 rounded-md flex gap-2"
                >
                  <span className="">{problem.title}</span>
                  <span className="badge badge-info text-xs font-bold">
                    {problem.difficulty}
                  </span>
                  <span className="badge badge-secondary text-xs font-bold">
                    {problem.tags.join(", ")}
                  </span>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanelProblemContainer;
