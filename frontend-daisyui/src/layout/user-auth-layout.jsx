import { Link, Navigate, Outlet, useNavigate } from "react-router";
import { useAuthStore } from "../store/useAuthStore";
import Heading from "../components/shared/heading";
import { useEffect } from "react";
const UserAuthLayout = () => {
  const { authUser, isChecking } = useAuthStore();
  const navigate = useNavigate();

  return (
    <>
      {isChecking ? (
        <div className="flex flex-col  items-center justify-center h-[calc(100vh-180px)] w-full">
          <Heading title={"Loading"} />
          <progress className="progress w-56"></progress>
        </div>
      ) : !!!authUser ? (
        <div className="flex flex-col  items-center justify-center h-[calc(100vh-180px)] w-full">
          <Heading title={"Access"} highLightedText="Denied" />
          <img src="/401_notAuth.jpg" alt="" className="w-132 rounded-2xl" />
          <p className="text-center text-lg font-semibold">
            You are not authorized to access this page. Please{" "}
            <Link to="/login" className="text-primary font-bold">
              login
            </Link>
            to continue.
          </p>
          {/* <Navigate to="/login" replace /> */}
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default UserAuthLayout;
