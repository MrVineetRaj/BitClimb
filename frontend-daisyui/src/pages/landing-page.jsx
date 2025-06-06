import React from "react";
import Heading from "../components/shared/heading";
import { ChartArea, Globe, Search, Sheet, Stars, Target } from "lucide-react";

const BIG_CARD_DETAILS = [
  {
    icon: Stars,
    title: "AI Power",
    tagline: "Will never lose again as AI will have your back",
    details: [
      "Get AI powered detailed analysis from AI for each submission so code , fail, learn and continue.",
      "Your every submission is tested against AI generated robust testcases",
    ],
  },
  {
    icon: Target,
    title: "Be Competitive",
    tagline: "Handle the pressure and Conquer Online Assessments",
    details: [
      "Take part in contest regularly to check where you stand against other who are chasing same goal",
      "We designed a rating system that ranks you after comparing with all the participant to give you exact taste",
    ],
  },
];

const SMALL_CARD_DETAILS = [
  {
    title: "Robust Search",
    description: "Easily find type of questions you are looking for",
    icon: Search,
  },
  {
    title: "Dedicated Lists",
    description:
      "Preparing for certain company or topic we got a list for you ",
    icon: Sheet,
  },
  {
    title: "Smart Tracking",
    description:
      "Every problem you attempt here is tracked and counted, Just focus on solving problems ",
    icon: ChartArea,
  },
  {
    title: "Learn in public",
    description: "Share your profile publicly to share your journey  ",
    icon: Globe,
  },
];
const BigFeatureCards = ({ content }) => {
  return (
    <div className="bg-primary/50 w-full h-full relative p-4 rounded-lg max-w-136">
      <div className="absolute top-0 left-5 flex flex-col items-center  ">
        <div className="w-0.5 h-8 bg-secondary"></div>
        <div className="bg-base-300 p-1 rounded-full">
          <content.icon className="size-6 text-secondary" />
        </div>
      </div>
      <h1 className="text-2xl font-extrabold  mt-16">{content.title}</h1>
      <h3 className="italic text-lg mb-4">{content?.tagline}</h3>
      {content?.details?.map((str, idx) => {
        return (
          <p key={idx} className="my-2">
            {"- " + str}
          </p>
        );
      })}
    </div>
  );
};
const LandingPage = () => {
  return (
    <div className="w-full px-8 max-w-[1500px] flex flex-col items-center">
      <div className="w-full flex flex-col items-center min-h-[600px] justify-center">
        <img
          src="/home-page.png"
          alt="Landing"
          className="w-[800px] mt-8 rounded-lg shadow-lg border border-primary"
        />

        <Heading title={"Welcome to Bit"} highLightedText="Climb" />
        <p className="text-center text-lg font-semibold mt-4">
          Your one-stop platform for coding challenges, contests, and community
          engagement.
        </p>
        <button className="btn btn-primary mt-6">Get Started</button>
      </div>

      <div className="mt-16 mb-32  flex flex-col items-center">
        <Heading title={"What we  "} highLightedText="Offer" />
        <div className="grid grid-cols-2 gap-4 ">
          {BIG_CARD_DETAILS?.map((feature, idx) => {
            return <BigFeatureCards content={feature} idx={idx} />;
          })}
        </div>
        <div className="grid grid-cols-4 gap-4 my-4 w-full">
          {SMALL_CARD_DETAILS?.map((feature, idx) => {
            return (
              <div
                className="flex flex-col gap-4 items-start min-w-48 w-64 bg-primary/50 p-4 rounded-lg"
                key={idx}
              >
                <feature.icon className="size-6" />
                <h2 className="text-xl font-bold text-secondary">
                  {feature.title}
                </h2>
                <p>{feature?.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
