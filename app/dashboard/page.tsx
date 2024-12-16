"use client";

import useAuthStore from "@/hooks/use-auth";
import DashboardAdmin from "@/components/dashboard-admin";
import DashboardStudent from "@/components/dashboard-student";
import DashboardTeacher from "@/components/dashboard-teacher";

export default function Page() {
  const { role } = useAuthStore();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {role === "admin" ? (
        <DashboardAdmin />
      ) : role === "teacher" ? (
        <DashboardTeacher />
      ) : (
        <DashboardStudent />
      )}
    </div>
  );
}
