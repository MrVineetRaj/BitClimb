import React from "react";

const Background = () => {
  return (
    <div className="fixed overflow-hidden w-full h-full bottom-0 left-0 -z-10">
      {Array.from({ length: 100 }, (_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 bg-primary rounded-full animate-pulse`}
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0"></div>
    </div>
  );
};

export default Background;
