"use client";
import DashboardAdmin from "@/components/dashboard-admin";
import DashboardStudent from "@/components/dashboard-student";
import DashboardTeacher from "@/components/dashboard-teacher";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Page() {
  const [role, setRole] = useState("admin");
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      <Card className="px-4 py-2">
        <div className="flex items-center gap-4">
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            className="border rounded-md p-2"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </div>
      </Card>
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
