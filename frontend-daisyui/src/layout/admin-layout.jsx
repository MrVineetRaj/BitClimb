import { Outlet } from "react-router";
import { useAuthStore } from "../store/useAuthStore";
const AdminLayout = () => {
  const { authUser, isChecking } = useAuthStore();

  return (
    <>
      {isChecking ? (
        <div className="flex flex-col  items-center justify-center h-[calc(100vh-180px)] w-full">
          <Heading title={"Loading"} />
          <progress className="progress w-56"></progress>
        </div>
      ) : !authUser || (authUser && authUser.role !== "ADMIN") ? (
        <div className="flex flex-col  items-center justify-center h-[calc(100vh-180px)] w-full">
          <Heading title={"Access"} highLightedText="Denied" />
          <img src="/401_notAuth.jpg" alt="" className="w-132 rounded-2xl"/>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default AdminLayout;
