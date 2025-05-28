import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuthStore } from "@/store/useAuthStore";
import React, { useEffect } from "react";
import { Link } from "react-router";

const AdminPanel = () => {
  const { authUser, isChecking } = useAuthStore();
  const ACTIONS_FOR_ADMIN = [
    { name: "Create Problem", url: "/admin/panel/create-problem" },
    { name: "Create Contest", url: "/admin/panel/create-contest" },
    { name: "Manage Admins", url: "/admin/panel/manage admins" },
  ];
  
  const MATRICES = [
    { title: "Total Problems", value: 100 },
    { title: "Total Contests", value: 50 },
    { title: "Total Users", value: 1000 },
    { title: "Total Submissions", value: 5000 },
  ];
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
            className="bg-primary/10 p-4 my-2 flex-1 rounded-md shadow-md hover:bg-primary transition-colors"
          >
            {action.name}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {MATRICES.map((matrix) => (
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
            hbov
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
