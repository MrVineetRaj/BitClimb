import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAdminStore } from "@/store/useAdmimStore";
import { useAuthStore } from "@/store/useAuthStore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AdminPanel = () => {
  const { authUser, isChecking } = useAuthStore();
  const { loadMetrics, isLoadingMetrics, getRecentRegistrations } =
    useAdminStore();
  const ACTIONS_FOR_ADMIN = [
    {
      name: "Create Problem",
      url: "/admin/panel/create-problem",
      isDisabled: false,
    },
    {
      name: "Create Contest",
      url: "/admin/panel/create-contest",
      isDisabled: false,
    },
    {
      name: "Manage Admins",
      url: "/admin/panel/manage admins",
      isDisabled: true,
    },
  ];

  const [metricData, setMetricData] = useState(null);
  const [recentRegistrations, setRecentRegistrations] = useState(null);

  useEffect(() => {
    const handleLoadMetrics = () => {
      if (authUser && !isChecking) {
        loadMetrics()
          .then((data) => {
            console.log("Metrics loaded:", data);
            setMetricData([
              { title: "Total Problems", value: data.problems },
              { title: "Total Contests", value: 50 },
              { title: "Total Users", value: data.users },
              { title: "Total Submissions", value: data.submissions },
            ]);
          })
          .catch((error) => {
            console.error("Failed to load metrics:", error);
          });
      }
    };

    const handleLoadUsers = () => {
      getRecentRegistrations()
        .then((data) => {
          console.log("Recent Registrations:", data);
          setRecentRegistrations(data.userCount);
        })
        .catch((error) => {
          console.error("Failed to load recent registrations:", error);
        });
    };

    handleLoadUsers();
    handleLoadMetrics();
  }, [authUser]);
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold italic">
        Hola, Admin ! <span className="text-primary">{authUser?.name}</span>
      </h1>

      <div className="flex justify-around gap-8 flex-wrap">
        {ACTIONS_FOR_ADMIN.map((action) => (
          <Link
            to={action.url}
            key={action.name}
            className={`${
              action?.isDisabled
                ? "bg-gray-900 text-gray-500 cursor-not-allowed"
                : "bg-primary/10  hover:bg-primary transition-colors"
            } p-4 my-2 flex-1 rounded-md shadow-md`}
          >
            {action.name}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {metricData?.length > 0 &&
          metricData.map((matrix) => (
            <div
              key={matrix.title}
              className="bg-primary/10 p-4 rounded-md shadow-md flex flex-col items-center justify-center"
            >
              <h2 className="text-xl font-semibold">{matrix.title}</h2>
              <p className="text-2xl font-bold mt-2">{matrix.value}</p>
            </div>
          ))}
      </div>

      <div className="grid grid-cols-3 mt-4 gap-4">
        <Tabs
          defaultValue="problems"
          className="col-span-2 min-h-[600px] bg-primary/10 p-4"
        >
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="problems">Problems</TabsTrigger>
            <TabsTrigger value="contests">Contests</TabsTrigger>
          </TabsList>
          <TabsContent value="problems" className="h-full bg-red-500">
            jbkh
          </TabsContent>
          <TabsContent value="contests" className="h-full">
            hbov
          </TabsContent>
        </Tabs>

        <Tabs
          defaultValue="new_users"
          className="col-span-1 min-h-[600px] bg-primary/10 p-4"
        >
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="new_users">New Users</TabsTrigger>
          </TabsList>
          <TabsContent value="new_users" className="h-full">
            {recentRegistrations ? (
              recentRegistrations.length > 0 &&
              recentRegistrations.map((user, index) => (
                <p
                  className={`${
                    index % 2 == 0 ? " bg-primary/20" : ""
                  } p-4 rounded-lg`}
                >
                  {user.name}
                </p>
              ))
            ) : (
              <p className="text-center">No recent registrations found.</p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
