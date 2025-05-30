import React from "react";
import { Button } from "../ui/button";
import { PanelLeftClose, PanelRightClose } from "lucide-react";

const Pagination = ({ currPage, setCurrPage, totalPages }) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant={"outline"}
        onClick={() => {
          setCurrPage(currPage - 1);
        }}
        disabled={currPage == 1}
        className={"cursor-pointer disabled:cursor-not-allowed"}
      >
        <PanelLeftClose />
      </Button>

      <Button
        variant={currPage === 1 ? "default" : "outline"}
        className={"text-gray-200"}
        onClick={() => {
          if (currPage != 1) {
            setCurrPage(1);
          }
        }}
      >
        1
      </Button>

      {totalPages > 2 &&
        (currPage == 2 ? (
          <>
            <Button variant={"default"} className={"text-gray-200"}>
              2
            </Button>
            <span>...</span>
          </>
        ) : currPage > 2 && currPage < totalPages - 1 ? (
          <>
            <span>...</span>
            <Button variant={"default"} className={"text-gray-200"}>
              {currPage}
            </Button>
            <span>...</span>
          </>
        ) : currPage == totalPages - 1 ? (
          <>
            <span>...</span>
            <Button variant={"default"} className={"text-gray-200"}>
              {totalPages - 1}
            </Button>
          </>
        ) : (
          <span>...</span>
        ))}
      <Button
        variant={currPage === totalPages ? "default" : "outline"}
        className={"text-gray-200"}
        onClick={() => {
          if (currPage != totalPages) {
            setCurrPage(totalPages);
          }
        }}
      >
        {totalPages}
      </Button>
      <Button
        variant={"outline"}
        onClick={() => {
          setCurrPage(currPage + 1);
        }}
        disabled={currPage === totalPages}
        className={"cursor-pointer disabled:cursor-not-allowed"}
      >
        <PanelRightClose />
      </Button>
    </div>
  );
};

export default Pagination;
