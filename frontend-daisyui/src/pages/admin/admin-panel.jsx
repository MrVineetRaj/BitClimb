import { Code, Crown, File, Target, User } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const AdminPanel = () => {
  const ADMIN_OPTIONS = [
    {
      title: "Problems",
      button: "Create Problem",
      icon: Code,
      count: 0,
      path: "/admin/panel/create-problem",
      isDisabled: false,
    },
    {
      title: "Contests",
      button: "Create Contest",
      icon: Target,
      count: 0,
      path: "/admin/panel/create-contest",
      isDisabled: false,
    },
    {
      title: "Users",
      button: "Manage User",
      icon: User,
      count: 0,
      path: "/admin/panel/manage-user",
      isDisabled: true,
    },
    {
      title: "Admin",
      button: "Manage Admin",
      icon: Crown,
      count: 0,
      path: "/admin/panel/manage-admin",
      isDisabled: true,
    },
  ];
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-4 p-4 w-full ">
        {ADMIN_OPTIONS?.map((option, idx) => {
          return (
            <div
              className="w-full min-h-48 bg-base-300 p-4 rounded-xl relative flex flex-col justify-between items-end  hover:-rotate-2 transition-all duration-200"
              key={idx}
            >
              <option.icon className="absolute top-4 right-4 text-secondary" />
              <h2 className="text-2xl font-semibold w-full">{option?.title}</h2>
              <h1 className="text-6xl font-extrabold w-full">
                {option?.count}
              </h1>
              {option?.isDisabled ? (
                <button
                  className="btn btn-primary disabled:bg-gray-500 disabled:cursor-not-allowed"
                  disabled={option?.isDisabled}
                >
                  {option?.button}
                </button>
              ) : (
                <Link to={option?.path}>
                  {" "}
                  <button className="btn btn-primary disabled:bg-gray-500 disabled:cursor-not-allowed hover:rotate-1 transition-all duration-200">
                    {option?.button}
                  </button>
                </Link>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-between gap-6 p-4">
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-border w-full">
          <label className="tab ">
            <input type="radio" name="admin_panel_dashboard_tab" />
            <Code className="size-4 me-2 text-white" />
            <span className="text-white font-bold">Problems</span>
          </label>

          <div className="tab-content border-base-300 bg-base-100 p-10">
            Tab content 1
          </div>
          <label className="tab">
            <input type="radio" name="admin_panel_dashboard_tab" />
            <Target className="size-4 me-2" />
            <span className="text-white font-bold">Contests</span>
          </label>
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Tab content 2
          </div>
          <label className="tab">
            <input
              type="radio"
              name="admin_panel_dashboard_tab"
              defaultChecked
            />
            <File className="size-4 me-2" />
            <span className="text-white font-bold">Submissions</span>
          </label>
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Tab content 3
          </div>
        </div>
        <div className="max-w-84 w-full h-full ">
          <h3 className="text-2xl font-semibold mb-4">Recent Registration</h3>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
