import { Button } from "@/components/ui/button";
import React from "react";
import user from "../../../../image/user.jpeg";
import Image from "next/image";
import AttendancesTable from "./datatable";

export default function PresenceTeacher() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-between border-2 bg-white rounded-lg px-5 py-10">
        <h1 className="text-3xl font-bold">Absensi Hari Ini</h1>
        <Button variant="default">Selesai</Button>
      </div>

      <div className="bg-white mt-10 border rounded-md p-5 ">
        <AttendancesTable />
      </div>
    </div>
  );
}
