import React from "react";
import { useParams } from "react-router";

const CompanyWiseList = () => {
  const { company } = useParams();
  return <div>CompanyWiseList for {company}</div>;
};

export default CompanyWiseList;
