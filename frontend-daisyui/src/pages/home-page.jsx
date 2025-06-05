import React, { useEffect, useState } from "react";
import Heading from "../components/shared/heading";
import ContestCard from "../components/contests/contest-card";
import ProblemContainer from "../components/home-page/problem-container";
import { useSearchParams } from "react-router";

const DUMMY_CONTESTS = [
  {
    title: "description",
    description: "ljbl votdilrsulrsl8 5elr;6ir;86re85",
    startTime: "startTime",
    endTime: "endTime",
  },
  {
    title: "description",
    description: "ljbl votdilrsulrsl8 5elr;6ir;86re85",
    startTime: "startTime",
    endTime: "endTime",
  },
  {
    title: "description",
    description: "ljbl votdilrsulrsl8 5elr;6ir;86re85",
    startTime: "startTime",
    endTime: "endTime",
  },
];

const COMPANY_NAMES = [
  "Google",
  "Amazon",
  "Microsoft",
  "Apple",
  "Meta",
  "Netflix",
  "Tesla",
  "Uber",
  "Airbnb",
  "Spotify",
  "Twitter",
  "LinkedIn",
  "Salesforce",
  "Adobe",
  "Oracle",
];
const HomePage = () => {
  const [searchParams] = useSearchParams();
  const [contests, setContests] = useState();
  const [selectedTopics, setSelectedTopics] = useState(
    searchParams?.get("tags")?.split(";") || []
  );
  const [selectedCompanies, setSelectedCompanies] = useState(
    searchParams?.get("company")?.split(";") || []
  );

  // const []
  useEffect(() => {
    setContests(DUMMY_CONTESTS);
  }, []);

  
  // useEffect(() => {
  // Fetch or filter contests based on selected topics and companies

  return (
    <div className="flex flex-col items-center w-full p-4">
      {/* {contests && contests?.length > 0 && (
        <div className="w-full flex flex-col items-center">
          <Heading
            title={"Upcoming"}
            highLightedText="Contests"
            subtitle={"Dare to compete !"}
            badgeText="featured"
          />
          <div className="w-full flex items-center justify-center gap-8 flex-wrap mt-4">
            {contests?.map((contest, idx) => {
              return <ContestCard contest={contest} key={idx} />;
            })}
          </div>
        </div>
      )} */}
      <div className="w-full lg:w-[80%] flex flex-row items-start min-h-[600px] gap-4 my-8">
        <ProblemContainer
          selectedTopics={selectedTopics}
          selectedCompanies={selectedCompanies}
        />
        <div className="h-full max-w-84 min-w-72">
          <h1 className="text-xl font-bold mt-8">DSA TOPICS</h1>
          <div className="flex gap-3 flex-wrap mt-4 mb-8">
            {COMPANY_NAMES?.map((topic, idx) => {
              return (
                <div
                  key={idx}
                  className={`badge ${
                    selectedTopics.includes(topic)
                      ? "badge-secondary text-white"
                      : "badge-soft badge-accent hover:bg-accent hover:text-white"
                  } transition-color duration-300 cursor-pointer font-semibold `}
                  onClick={() => {
                    if (selectedTopics?.includes(topic)) {
                      const temp = selectedTopics.filter((it) => {
                        return it !== topic;
                      });

                      setSelectedTopics(temp);
                    } else {
                      setSelectedTopics([...selectedTopics, topic]);
                    }
                  }}
                >
                  {topic}
                </div>
              );
            })}
          </div>
          <h1 className="text-xl font-bold">Companies</h1>
          <div className="flex gap-3 flex-wrap mt-4 mb-8">
            {COMPANY_NAMES?.map((comp, idx) => {
              return (
                <div
                  key={idx}
                  className={`badge ${
                    selectedCompanies.includes(comp)
                      ? "badge-secondary text-white"
                      : "badge-soft badge-accent hover:bg-accent hover:text-white"
                  } transition-color duration-300 cursor-pointer font-semibold`}
                  onClick={() => {
                    if (selectedCompanies?.includes(comp)) {
                      const temp = selectedCompanies.filter((it) => {
                        return it !== comp;
                      });

                      setSelectedCompanies(temp);
                    } else {
                      setSelectedCompanies([...selectedCompanies, comp]);
                    }
                  }}
                >
                  {comp}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
