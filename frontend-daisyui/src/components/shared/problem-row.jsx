import { CheckCircle, Circle, Trash } from "lucide-react";
import SaveProblemToPlaylistModel from "./save-problem-to-playlist-model";
import { Link } from "react-router";
import { axiosInstance } from "../../lib/axios";

const ProblemRow = ({
  problem,
  idx = 0,
  listId = "",
  setProblems = () => {},
}) => {
  return (
    <div
      className={`${
        idx % 2 == 0 ? "bg-primary/10" : ""
      } p-4 transition-colors min-w-64 flex items-center justify-between hover:bg-primary/20 w-full `}
    >
      <span className="flex items-center gap-2">
        {problem?.isSolved ? (
          <CheckCircle className="size-4 text-green-500" />
        ) : (
          <Circle className="size-4" />
        )}
        <Link to={`/problem/${problem.id}`} className={`font-bold text  `}>
          {problem.title}
        </Link>
      </span>

      <span className="flex items-center gap-4">
        <span className="md:flex items-center gap-2 hidden ">
          {problem?.tags &&
            problem?.tags.length > 0 &&
            problem?.tags?.map((tag, index) => (
              <div className="badge badge-neutral" key={index}>
                {tag}
              </div>
            ))}
        </span>
        <div
          className={`${
            problem?.difficulty === "EASY"
              ? "bg-green-500"
              : problem?.difficulty === "MEDIUM"
              ? "bg-orange-500"
              : "bg-red-500"
          } text-white badge badge-neutral`}
        >
          {" "}
          {problem?.difficulty}
        </div>
        <SaveProblemToPlaylistModel problemId={problem?.id} />
        {listId && (
          <Trash
            className="size-4 text-red-500 cursor-pointer hover:text-red-700 transition-colors"
            onClick={() => {
              if (listId) {
                axiosInstance
                  .delete(`/problem-list/${listId}/problem/${problem.id}`)
                  .then((response) => {
                    if (response.data.success) {
                      setProblems((prevProblems) =>
                        prevProblems.filter((p) => p.problem.id !== problem.id)
                      );
                    }
                  });
              }
            }}
          />
        )}
      </span>
    </div>
  );
};

export default ProblemRow;
