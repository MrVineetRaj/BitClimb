import { CalendarIcon, LogOut } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useAuthStore } from "@/store/useAuthStore";
import { Link } from "react-router";
import { Button } from "../ui/button";

export function UserAvatar() {
  const { authUser, isLoggingOut, logout } = useAuthStore();
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <img
          src={authUser?.avatar || "https://avatar.iran.liara.run/public/boy"}
          alt="user-logo"
          className="size-10 border-2 border-transparent rounded-full hover:border-primary"
        />
      </HoverCardTrigger>
      <HoverCardContent className="w-60 flex flex-col gap-4">
        {authUser?.role === "ADMIN" && (
          <Link to={`/admin/panel`} className=" hover:text-primary ">
            Admin Panel
          </Link>
        )}
        <Link to={`/profile/${authUser.id}`} className=" hover:text-primary ">
          Profile
        </Link>
        <Link to={`/profile/${authUser.id}`} className=" hover:text-primary ">
          Your Problem Lists
        </Link>

        <Button
          className="flex gap-2 items-center bg-transparent border-2 border-red-500 rounded-md text-red-500 font-semibold hover:bg-red-500 hover:text-white disabled:opacity-55 disabled:cursor-not-allowed"
          onClick={logout}
          disabled={isLoggingOut}
        >
          <LogOut />
          <span>Logout</span>
        </Button>
      </HoverCardContent>
    </HoverCard>
  );
}
