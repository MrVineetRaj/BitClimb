import React, { useEffect, useState } from "react";
import { Flame, LayoutDashboard } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { Link, useLocation } from "react-router";
import { Button } from "../ui/button";
import { UserAvatar } from "./user-avatar";

const Navbar = () => {
  const location = useLocation();
  const { authUser, isResendingVerificationEmail, resendVerificationEmail } =
    useAuthStore();

  const [streak, setStreak] = useState(0);
  const nav_menu = [
    {
      name: "Home",
      url: "/home",
    },
    // {
    //   name: "Problems",
    //   url: "/problems",
    // },
    {
      name: "Contest",
      url: "/contest",
    },
    {
      name: "Problem Lists",
      url: "/problem-lists",
    },
  ];

  
  return (
    <div className="w-[100svw] flex flex-col items-center justify-center bg-black/30 p-2 sticky top-0 z-50">
      <div className="w-[95%] md:w-[80%] lg:w-[60%] flex items-center justify-between ">
        <Link to="/" className="flex items-center gap-2">
          <LayoutDashboard className="text-primary size-10" />
          <h3 className=" font-bold text-2xl hidden sm:block">BitClimb</h3>
        </Link>

        <span className="flex items-center gap-4 font-bold">
          {nav_menu?.map(({ name, url }) => (
            <Link
              to={url}
              key={url}
              className={` hover:text-primary ${
                location?.pathname === url ? "text-primary" : "text-gray-200"
              }`}
            >
              {name}
            </Link>
          ))}

          {authUser && (
            <Link
              to="/problem/17dd90d1-bc6e-4871-b882-be50d728f563"
              className="flex "
            >
              <Flame className="text-primary size-5 inline-block" />
              {streak}
            </Link>
          )}

          {authUser ? (
            <UserAvatar />
          ) : (
            <Link
              to="/signup"
              className={
                "text-white font-semibold bg-primary px-4 py-2 rounded-md"
              }
            >
              Get Started
            </Link>
          )}
        </span>
      </div>
      {authUser && !authUser.isEmailVerified && (
        <span className="w-full flex items-center justify-center bg-yellow-100 text-yellow-800 p-4">
          <span>
            Unverified email ! So your are restricted to 10 submissions and 1
            contest ( submissions during contest counted )
          </span>
          <Button
            className="ml-4 text-white"
            onClick={() => resendVerificationEmail(authUser.email)}
            disabled={isResendingVerificationEmail}
          >
            Resend Verification Email
          </Button>
        </span>
      )}
    </div>
  );
};

export default Navbar;
