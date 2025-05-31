import React from "react";
import { useParams } from "react-router";

const UserMadeList = () => {
  const { listId } = useParams();
  return <div>UserMadeList for {listId}</div>;
};

export default UserMadeList;
