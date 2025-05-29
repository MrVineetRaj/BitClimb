import React, { useState } from "react";
import { Flame, LayoutDashboard } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { UserAvatar } from "./user-avatar";

const Navbar = () => {
  const { authUser } = useAuthStore();
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
  ];
  return (
    <div className="w-[100svw] flex flex-col items-center justify-center bg-black/30 p-2 sticky top-0 z-50">
      <div className="w-[95%] md:w-[80%] lg:w-[60%] flex items-center justify-between ">
        <span className="flex items-center gap-2">
          <LayoutDashboard className="text-primary size-10" />
          <h3 className=" font-bold text-2xl">BitClimb</h3>
        </span>

        <span className="flex items-center gap-4 font-bold">
          {nav_menu?.map(({ name, url }) => (
            <Link to={url} key={url} className="px-4 py-2 hover:text-primary ">
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
    </div>
  );
};

export default Navbar;
