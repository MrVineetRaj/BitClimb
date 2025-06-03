import React from "react";

const Heading = ({ title, subtitle, badgeText = "", highLightedText = "" }) => {
  return (
    <div className="flex flex-col items-center bg-base-200/30 p-4 rounded-lg ">
      {badgeText && (
        <div className="badge badge-soft badge-warning text-sm">
          {badgeText}
        </div>
      )}
      <h1 className="text-6xl font-extrabold">
        {title} <span className="text-primary">{highLightedText}</span>
      </h1>
      {subtitle && <p className="text-gray-500 text-lg italic">{subtitle}</p>}
    </div>
  );
};

export default Heading;
