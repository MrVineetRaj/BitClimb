import React from "react";
import { useParams } from "react-router";

const TopicWiseList = () => {
  const { topic } = useParams();
  return <div>TopicWiseList for {topic}</div>;
};

export default TopicWiseList;
