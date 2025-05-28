import { useAuthStore } from "@/store/useAuthStore";
import React from "react";
import { Outlet } from "react-router";

const AdminLayout = () => {
  const { authUser, isChecking } = useAuthStore();

  return (
    <>
      {isChecking ? (
        <div className="flex items-center justify-center h-scree">
          <Loader className="animate-spin h-10 w-10 text-blue-500" />
        </div>
      ) : !authUser || (authUser && authUser.role !== "ADMIN") ? (
        <>Access Denied</>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default AdminLayout;
