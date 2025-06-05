import { Bookmark } from "lucide-react";
import CreateNewProblemList from "./create-new-problem-list";
import { useProblemListStore } from "../../store/useProblemListStore";
import { useEffect, useState } from "react";
const SaveProblemToPlaylistModel = ({ problemId }) => {
  const { isLoadingProblemLists, problemLists, addProblemToLists } =
    useProblemListStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [problemListsToDisplay, setProblemListsToDisplay] = useState([]);
  const [selectedProblemList, setSelectedProblemList] = useState([]);
  useEffect(() => {
    setProblemListsToDisplay(
      problemLists.filter((list) =>
        list.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [isLoadingProblemLists, searchQuery, problemLists]);

  const handleSaveToProblemLists = async () => {
    if (selectedProblemList.length === 0) return;
    const res = await addProblemToLists(problemId, selectedProblemList);

    if (res.success) {
      document
        .getElementById(`bookmark_tab_for_${problemId}_on_home_page`)
        .close();
      setSelectedProblemList([]);
      setSearchQuery("");
    }
  };
  return (
    <>
      <Bookmark
        className="size-4 text-gray-400 ml-2 cursor-pointer"
        onClick={() =>
          document
            .getElementById(`bookmark_tab_for_${problemId}_on_home_page`)
            .showModal()
        }
      />
      <dialog
        id={`bookmark_tab_for_${problemId}_on_home_page`}
        className="modal"
      >
        <div className="modal-box w-full max-w-84 relative">
          <CreateNewProblemList problemId={problemId} />
          <h3 className="font-bold text-lg">Save problem</h3>
          <label className="input w-full  mt-4">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow w-full "
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </label>
          <div className="overflow-y-auto max-h-80 mt-4">
            {isLoadingProblemLists ? (
              <div className="text-center">Loading...</div>
            ) : problemListsToDisplay && problemListsToDisplay?.length > 0 ? (
              <ul className="menu bg-base-100 w-full">
                {problemListsToDisplay.map((list) => (
                  <li
                    key={list.id}
                    className="flex flex-row items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      checked={selectedProblemList.includes(list.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedProblemList((prev) => [...prev, list.id]);
                        } else {
                          setSelectedProblemList((prev) =>
                            prev.filter((id) => id !== list.id)
                          );
                        }
                      }}
                      disabled={isLoadingProblemLists}
                    />
                    <p
                      className="font-semibold w-full flex-1"
                      onClick={() => {
                        if (selectedProblemList.includes(list.id)) {
                          setSelectedProblemList((prev) =>
                            prev.filter((id) => id !== list.id)
                          );
                        } else {
                          setSelectedProblemList((prev) => [...prev, list.id]);
                        }
                      }}
                    >
                      {list.title}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center">No problem lists found</div>
            )}
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn btn-ghost hover:btn-error">Close</button>
            </form>
            <button
              className="btn btn-primary"
              disabled={
                isLoadingProblemLists || selectedProblemList.length === 0
              }
              onClick={() => {
                handleSaveToProblemLists();
              }}
            >
              Save to Lists
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SaveProblemToPlaylistModel;
