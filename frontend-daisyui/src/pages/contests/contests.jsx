import React from "react";
import Heading from "../../components/shared/heading";

const Contests = () => {
  return (
    <div className="w-ful max-w-[600px] ">
      <Heading title={"Contests"} subtitle={"dare to compete !"} />
      <div className="flex flex-col items-center justify-center h-[60vh]">
        <h1 className="text-2xl font-bold text-center">
          Contests are coming soon!
        </h1>
        <p className="text-center mt-4">
          Stay tuned for exciting competitions and challenges that will test
          your skills and creativity.
        </p>
        <p className="text-center mt-2">
          We are working hard to bring you an engaging contest experience.
        </p>
        <p className="text-center mt-2">
          In the meantime, feel free to explore our other features and
          resources.
        </p>
      </div>
    </div>
  );
};

export default Contests;
