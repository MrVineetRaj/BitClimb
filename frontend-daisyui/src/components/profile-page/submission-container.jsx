import React, { useEffect, useState } from "react";
import { useProblemStore } from "../../store/useProblemStore";
import { Clock, MemoryStick } from "lucide-react";
import { Link } from "react-router";
import Pagination from "../shared/pagination";

const OneProfileSubmission = ({ submission }) => {
  return (
    <Link
      to={`/submission/${submission?.id}`}
      className={`w-full px-4 py-2 flex items-center justify-between
      ${
        submission?.status?.toLowerCase() === "accepted"
          ? "bg-success/30"
          : "bg-error/30"
      } shadow-md rounded-lg p-4 mb-4`}
    >
      <div>
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold">{submission.problem?.title}</h3>
          <span className="badge badge-primary font-semibold lowercase text-xs">
            {submission?.problem?.difficulty}
          </span>
        </div>
        <p className="text-xs">
          {new Date(submission.createdAt).toLocaleString()}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <span className="badge badge-secondary font-bold lowercase">
          {submission?.language}
        </span>
        {submission?.status?.toLowerCase() === "accepted" && (
          <>
            <span className=" font-semibold lowercase py-2">
              <Clock className="inline mr-1" />
              {submission?.time}
            </span>
            <span className=" font-semibold lowercase py-2">
              <MemoryStick className="inline mr-1" />
              {submission?.memory}
            </span>
          </>
        )}
      </div>
    </Link>
  );
};
const ProfilePageSubmissionContainer = ({ userId }) => {
  const { getAllUserSubmissions, isLoadingSubmissions } = useProblemStore();
  const [page, setPage] = useState({
    normal: 1,
    accepted: 1,
    notAccepted: 1,
  });

  // const [limit, setLimit] = useState(10);
  // const [isLoadingSubmissions, setIsLoadingSubmissions] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [totalPages, setTotalPages] = useState({
    normal: 0,
    accepted: 0,
    notAccepted: 0,
  });
  const [acceptedSubmissions, setAcceptedSubmissions] = useState([]);
  const [notAcceptedSubmissions, setNotAcceptedSubmissions] = useState([]);

  const fetchSubmission = (isAccepted, pageNum = 1) => {
    const currentPage =
      isAccepted === "accepted"
        ? page.accepted
        : isAccepted === "not-accepted"
        ? page.notAccepted
        : page.normal;

    getAllUserSubmissions(userId, 10, pageNum || currentPage, isAccepted)
      .then((res) => {
        if (res.success) {
          if (isAccepted === "accepted") {
            setAcceptedSubmissions(res.data.submissions);
            setTotalPages((prev) => ({
              ...prev,
              accepted: res.data.totalPages,
            }));
          } else if (isAccepted === "not-accepted") {
            setNotAcceptedSubmissions(res.data.submissions);
            setTotalPages((prev) => ({
              ...prev,
              notAccepted: res.data.totalPages,
            }));
          } else {
            setSubmissions(res.data.submissions);
            setTotalPages((prev) => ({ ...prev, normal: res.data.totalPages }));
          }
        }
      })
      .catch((error) => {
        console.error("Error fetching submissions:", error);
      });
  };
  useEffect(() => {
    fetchSubmission("accepted");
    fetchSubmission("not-accepted");
    fetchSubmission("");
  }, [userId]);

  // Fetch when page changes
  useEffect(() => {
    if (userId) {
      fetchSubmission("", page.normal);
    }
  }, [page.normal]);

  useEffect(() => {
    if (userId) {
      fetchSubmission("accepted", page.accepted);
    }
  }, [page.accepted]);

  useEffect(() => {
    if (userId) {
      fetchSubmission("not-accepted", page.notAccepted);
    }
  }, [page.notAccepted]);
  return (
    <div className="tabs tabs-box w-full ">
      <input
        type="radio"
        name="profile_page_submissions_tabs"
        className="tab"
        aria-label="Submissions"
        defaultChecked
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        {submissions.length > 0 ? (
          <>
            {isLoadingSubmissions
              ? Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="w-full px-4 py-2 skeleton rounded-lg mb-4 h-16"
                    ></div>
                  ))
              : submissions?.map((submission) => (
                  <OneProfileSubmission
                    submission={submission}
                    key={submission?.id}
                  />
                ))}

            <div className="flex justify-end mt-4">
              <div className="flex justify-end mt-4">
                <Pagination
                  currPage={page.normal}
                  setCurrPage={(newPage) => {
                    setPage((prev) => ({
                      ...prev,
                      normal: newPage,
                    }));
                  }}
                  totalPage={totalPages.normal}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-500">No submissions found.</div>
        )}
      </div>

      <input
        type="radio"
        name="profile_page_submissions_tabs"
        className="tab"
        aria-label="Accepted Submission"
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        {acceptedSubmissions.length > 0 ? (
          <>
            {isLoadingSubmissions
              ? Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="w-full px-4 py-2 skeleton rounded-lg mb-4 h-16"
                    ></div>
                  ))
              : acceptedSubmissions?.map((submission) => (
                  <OneProfileSubmission
                    submission={submission}
                    key={submission?.id}
                  />
                ))}

            {/* Pagination for accepted submissions */}
            {totalPages.accepted > 1 && (
              <div className="flex justify-center mt-4">
                <Pagination
                  currPage={page.accepted}
                  setCurrPage={(newPage) =>
                    setPage((prev) => ({
                      ...prev,
                      accepted: newPage,
                    }))
                  }
                  totalPage={totalPages.accepted}
                />
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-gray-500">No submissions found.</div>
        )}
      </div>

      <input
        type="radio"
        name="profile_page_submissions_tabs"
        className="tab"
        aria-label="Failed Submissions"
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        {notAcceptedSubmissions.length > 0 ? (
          <>
            {isLoadingSubmissions
              ? Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="w-full px-4 py-2 skeleton rounded-lg mb-4 h-16"
                    ></div>
                  ))
              : notAcceptedSubmissions?.map((submission) => (
                  <OneProfileSubmission
                    submission={submission}
                    key={submission?.id}
                  />
                ))}

            {/* Pagination for not accepted submissions */}
            {totalPages.notAccepted > 1 && (
              <div className="flex justify-center mt-4">
                <Pagination
                  currPage={page.notAccepted}
                  setCurrPage={(newPage) =>
                    setPage((prev) => ({
                      ...prev,
                      notAccepted: newPage,
                    }))
                  }
                  totalPage={totalPages.notAccepted}
                />
              </div>
            )}
          </>
        ) : (
          <div className="text-center text-gray-500">No submissions found.</div>
        )}
      </div>
    </div>
  );
};

export default ProfilePageSubmissionContainer;
