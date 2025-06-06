import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";

const Pagination = ({ currPage, setCurrPage, totalPage }) => {
  return (
    <div className="flex items-center justify-center space-x-2 p-4 bg-base-200 rounded-lg">
      <MoveLeft
        className="cursor-pointer"
        onClick={() => setCurrPage(Math.max(1, currPage - 1))}
      />
      <span className="mx-2">
        Page {currPage} of {totalPage}
      </span>
      <MoveRight
        className="cursor-pointer"
        onClick={() => setCurrPage(Math.min(totalPage, currPage + 1))}
      />
    </div>
  );
};

export default Pagination;
