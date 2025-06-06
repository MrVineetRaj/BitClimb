import { Code, Crown, File, Target, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { ADMIN_OPTIONS } from "../../lib/constants";
import { useAdminStore } from "../../store/useAdminStore";
import AdminPanelProblemContainer from "../../components/admin-panel-problem-container";

const AdminPanel = () => {
  const [adminOptions, setAdminOptions] = useState(ADMIN_OPTIONS);
  const [recentRegistrations, setRecentRegistrations] = useState(null);

  const {
    isLoadingMetrics,
    getRecentRegistrations,
    loadMetrics,
    isLoadingUsers,
  } = useAdminStore();

  useEffect(() => {
    const fetchMetrics = async () => {
      const res = await loadMetrics();

      if (res.success) {
        const tempMetrics = [...adminOptions];
        tempMetrics[0].count = res.data?.problems || 0;
        tempMetrics[1].count = res.data?.contests || 0;
        tempMetrics[2].count = res.data?.users || 0;
        tempMetrics[3].count = res.data.admins || 1;
        console.log("Metrics", tempMetrics);
        setAdminOptions(tempMetrics);
      }
    };

    const fetchRecentRegistrations = async () => {
      const res = await getRecentRegistrations();
      if (res.success) {
        console.log("Recent Registrations", res.data);
        setRecentRegistrations(res.data);
      }
    };
    fetchRecentRegistrations();
    fetchMetrics();
  }, []);
  return (
    <div className="w-full">
      <div className="grid grid-cols-4 gap-4 p-4 w-full ">
        {isLoadingMetrics
          ? Array(4)
              .fill(0)
              .map((_, idx) => {
                return (
                  <div className="w-full min-h-48 skeleton" key={idx}></div>
                );
              })
          : adminOptions?.map((option, idx) => {
              return (
                <div
                  className="w-full min-h-48 bg-base-300 p-4 rounded-xl relative flex flex-col justify-between items-end  hover:-rotate-2 transition-all duration-200"
                  key={idx}
                >
                  <option.icon className="absolute top-4 right-4 text-secondary" />
                  <h2 className="text-2xl font-semibold w-full">
                    {option?.title}
                  </h2>
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
            <input
              type="radio"
              name="admin_panel_dashboard_tab"
              defaultChecked
            />
            <Code className="size-4 me-2 text-white" />
            <span className="text-white font-bold">Problems</span>
          </label>

          <div className="tab-content border-base-300 bg-base-100 p-10">
            <AdminPanelProblemContainer />
          </div>
          {/* <label className="tab">
            <input type="radio" name="admin_panel_dashboard_tab" />
            <Target className="size-4 me-2" />
            <span className="text-white font-bold">Contests</span>
          </label>
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Tab content 2
          </div>
          <label className="tab">
            <input type="radio" name="admin_panel_dashboard_tab" />
            <File className="size-4 me-2" />
            <span className="text-white font-bold">Submissions</span>
          </label>
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Tab content 3
          </div> */}
        </div>
        <div className="max-w-84 w-full h-full ">
          <h3 className="text-2xl font-semibold mb-4">Recent Registration</h3>
          {isLoadingUsers ? (
            <div className="min-h-[500px] skeleton "></div>
          ) : (
            <div className=" flex flex-col gap-1">
              {recentRegistrations?.map((user, idx) => (
                <Link
                  to={`/admin/panel/users/${user?.id}`}
                  key={idx}
                  className={`px-4 py-2 ${
                    idx % 2 === 0 ? "bg-base-200" : ""
                  } hover:bg-base-400 transition-colors duration-200 hover:bg-base-300`}
                >
                  {user.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
