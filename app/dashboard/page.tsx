"use client";

import useAuthStore from "@/hooks/use-auth";
import DashboardAdmin from "@/app/dashboard/admins/page";
import DashboardStudent from "@/app/dashboard/students/page";
import DashboardTeacher from "@/app/dashboard/teachers/page";

export default function Page() {
  const { role } = useAuthStore();
  return (
    <div className="space-y-6">
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
