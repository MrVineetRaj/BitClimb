import { Button } from "@/components/ui/button";
import { Code, Stars, TriangleAlertIcon, User2Icon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const LandingPage = () => {
  const FEATURES = [
    {
      title: "Learn Coding",
      description:
        "Master coding skills with interactive coding challenges which are actually asked in companies. with robust filtering for topic wise and company wise challenges.",
      image: "/landing-page/problem-page.png",
      icon: Code,
    },
    {
      title: "AI Powered Assistance",
      description:
        "Need analysis for submission?. Stuck on a page not sure what to do next? or failing to solve certain ype of topics? Get AI powered assistance to help you with your coding journey.",
      image: "/landing-page/ai-powered-analysis.png",
      icon: Stars,
    },
    {
      title: "Detailed Error Messages",
      description:
        "Code on a personal code editor like VS code as over platform has similar code editor that shares the similar features like syntax highlighting,and detailed error messages.",
      image: "/landing-page/detailed-error.png",
      icon: TriangleAlertIcon,
    },
    {
      title: "User Profile and Analytics",
      description:
        "Get detailed analysis of your code submissions, including time complexity, space complexity,topics covered streaks, and more. Understand your strengths and weaknesses to improve your coding skills. and you can share all of it with anyone.",
      image: "/landing-page/profile-page.png",
      icon: User2Icon,
    },
    {
      title: "Contests and Competitions",
      description:
        "Participate in coding contests to show how better you can do as on our platform what you code matters , but what others are coding do matters more. and even how fast they are doing it. So you will test the real competitive coding environment.",
      image: "/landing-page/contest-page.png",
      icon: Code,
    },
  ];
  return (
    <div className="w-full md:w-[90%] xl:w-[60%]  flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col justify-center text-gray-600 text-sm mb-4  w-full">
        <div className="flex-1 flex flex-col items-center ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-white w-full ">
            Welcome to <span className="text-primary">BitClimb</span>
          </h1>
          <h3 className="text-xl font-semibold text-center">
            Where you climb to the top <span>Bit by Bit</span>
          </h3>
          <div className="flex gap-2 my-4">
            <Link to={"/signup"}>
              <Button className={"font-bold text-white rounded-2xl"}>
                Get Started
              </Button>
            </Link>

            <Link to={"/home"}>
              <Button
                variant={"outline"}
                className={"font-bold text-white rounded-2xl"}
              >
                Platform Tour
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full flex items-center  ">
          <img
            src="/landing-page/home-page.png"
            alt="her_image"
            className="w-[80%] rounded-6xl flex-1"
          />
        </div>

        <p className="my-4 text-center text-gray-400">
          <span className="text-primary font-bold">BitClimb</span> is a platform
          designed to help you learn coding and programming skills through a
          gamified experience. Whether you're a beginner or an experienced
          coder, BitClimb offers a unique way to enhance your skills and connect
          with a community of like-minded individuals.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center text-gray-300 text-sm my-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
          What we Offer ?
        </h2>
        <p className="text-lg text-center mb-4">
          Connect with fellow coders, share your progress, and learn together.
        </p>

        <div className="flex flex-col gap-8">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg flex gap-4 h-full p-4  ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className=" bg-primary/10 flex-1 w-full flex flex-col items-start">
                <feature.icon className="size-6 text-primary m" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
              <div className="flex-1 w-full h-full">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className=" w-full h-auto rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
