"use client";

import DashboardAdmin from "@/app/dashboard/admins/page";
import DashboardManager from "@/app/dashboard/managers/page";
import DashboardStudent from "@/app/dashboard/students/page";
import DashboardTeacher from "@/app/dashboard/teachers/page";
import { useUserPayloadQuery } from "@/graphql/generated";

export default function Page() {
  const { data } = useUserPayloadQuery()
  const role = data?.me.role

  return (
    <div className="space-y-6">
      {role === "STAFF" ? (
        <DashboardManager />
      ) : role === "ADMIN" ? (
        <DashboardAdmin />
      ) : role === "TEACHER" ? (
        <DashboardTeacher />
      ) : (
        <DashboardStudent />
      )}
    </div>
  );
}
