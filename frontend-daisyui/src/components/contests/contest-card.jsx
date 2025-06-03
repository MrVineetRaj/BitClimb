import React from "react";

const ContestCard = ({ contest }) => {
  return (
    <div className="card bg-base-base image-full w-96 shadow-lg relative hover:-mt-8 transition-all duration-300 hover:shadow-gray-500/50 hover:shadow-lg border-2 bg-base-200 ">
      <div className="badge badge-accent absolute -top-4 -right-4 z-10 text-xs text-white font-bold ">
        Ongoing
      </div>
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{contest?.title}</h2>
        <p>{contest?.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
