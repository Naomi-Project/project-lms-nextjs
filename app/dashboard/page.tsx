"use client";

import useAuthStore from "@/hooks/use-auth";
import DashboardManager from "@/app/dashboard/managers/page";
import DashboardAdmin from "@/app/dashboard/admins/page";
import DashboardStudent from "@/app/dashboard/students/page";
import DashboardTeacher from "@/app/dashboard/teachers/page";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";

export default function Page() {
  const { role } = useAuthStore();

  // contoh penggunaan apollo graphql
  const GET_USERS = gql`
   query {
      users {
        id
        username
        role
        dateOfBirth
        gender
        address
        phone
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_USERS);

  useEffect(() => {
    console.log(data)
  }, [data])

  
  return (
    <div className="space-y-6">
      {role === "manager" ? (
        <DashboardManager />
      ) : role === "admin" ? (
        <DashboardAdmin />
      ) : role === "teacher" ? (
        <DashboardTeacher />
      ) : (
        <DashboardStudent />
      )}
    </div>
  );
}
