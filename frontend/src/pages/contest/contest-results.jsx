import { useContestStore } from "@/store/useContestStore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ContestResults = () => {
  const { contestId } = useParams();
  const { isLoading, getContestLeaderboard } = useContestStore();
  const [contestDetails, setContestDetails] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [currentUserRank, setCurrentUserRank] = useState(null);
  const fetchContestLeaderboard = async () => {
    const data = await getContestLeaderboard(contestId);
    if (data) {
      console.log("Contest Data:", data);
      setContestDetails(data.contest);
      setLeaderboard(data.leaderboard);
      setCurrentUserRank(data.currentRankOfUser);
    }
  };
  useEffect(() => {
    fetchContestLeaderboard();
  }, [contestId, getContestLeaderboard]);
  return <div></div>;
};

export default ContestResults;
