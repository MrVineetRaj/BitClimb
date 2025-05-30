import React, { useEffect, useState } from "react";

import { Stars, XIcon } from "lucide-react";

const SubmissionAnalysis = ({ submission }) => {
  const [analyzing, setAnalyzing] = useState(false);
  const [tabOpen, setTabOpen] = useState(false);


  const handleAnalyze = () => {};
  return (
    <div className="">
      <span
        className="flex gap-2 cursor-pointer"
        onClick={() => {
          setAnalyzing(true);
          handleAnalyze();
        }}
      >
        <Stars className="size-5" />
        Analyze
      </span>
    </div>
  );
};

export default SubmissionAnalysis;
