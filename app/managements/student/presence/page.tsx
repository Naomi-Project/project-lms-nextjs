"use client"
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import { useGetClassroomsQuery, useGetAttendancesQuery, useUserPayloadQuery, useDeleteAttendanceMutation, useGetUsersQuery } from "@/graphql/generated";
import {
  Badge,
  CalendarCheck2,
  CalendarOff,
  Hourglass,
  Thermometer,
} from "lucide-react";


import React from "react";


 

export default function PresenceStudent() {
    const { data: filterStudent } = useGetUsersQuery()
    const { data: absen } = useGetAttendancesQuery()
    const { data: userPayload } = useUserPayloadQuery()
    const dataAbsent = absen
    const filteringDataStudent: any[] = filterStudent?.users.filter((item: any) => item.id === userPayload?.me.id && item.role === "STUDENT") || [];
    console.log(absen)
    const studentsInClass: any[] = (filteringDataStudent[0] as { students: any[] })?.students || [];
  const columns = [
    {
      accessorKey: "name",
      header: "RIWAYAT ABSENSI",
      cell: ({ row }: any) => <span className="">{row.getValue('name')}</span>,
    },
    {
      accessorKey: "action",
      header: "ABSENSI",
      cell: ({ row }: any) => {
        const existingAttendance = absen?.attendances.find(
          (item) => item.studentId === row.original.id
        );
  
        // Jika sudah absen, tampilkan status
        if (existingAttendance) {
          if (existingAttendance.status === 'PRESENT') {
            return (
             <Badge className="bg-green-100 text-green-700 shadow-none hover:bg-opaci  cursor-pointer py-1">Hadir</Badge>
            );
          } else if (existingAttendance.status === 'PERMIT') {
            return (
             <Badge className="bg-yellow-100 text-yellow-700 shadow-none hover:bg-opaci  cursor-pointer py-1">Izin</Badge>
            );
          } else if (existingAttendance.status === 'SICK') {
            return (
             <Badge className="bg-orange-100 text-orange-700 shadow-none hover:bg-opaci  cursor-pointer py-1">Sakit</Badge>
            );
          } else if (existingAttendance.status === 'ABSENT') {
            return (
             <Badge className="bg-red-100 text-red-700 shadow-none hover:bg-opaci  cursor-pointer py-1">Tidak Hadir</Badge>
            );
          }
        }
  
        // Jika belum absen, tampilkan dropdown untuk absensi
        return (
          <div className="flex gap-3">
            <span>Kamu Belum Absen</span>
          </div>
        );
      },
    },
  ];   
  return (
    <div className="min-h-screen">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        <div className="col-span-1 border-2 rounded-lg justify-items-center content-center py-2 bg-white">
          <div className="grid grid-cols-4 gap-2 ">
            <div className="col-span-1 bg-green-100 border-green-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <CalendarCheck2 className="w-9 h-9 text-green-400" />
            </div>

            <div className="col-span-3 grid content-center">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-sm text-stone-400">Kehadiran</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base font-bold">8</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg justify-items-center content-center py-2 bg-white">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1 bg-orange-100 border-orange-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <Hourglass className="w-9 h-9 text-orange-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-sm text-stone-400">Izin</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base font-bold">24</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg justify-items-center content-center py-2 bg-white">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1 bg-orange-100 border-orange-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <Thermometer className="w-9 h-9 text-orange-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-sm text-stone-400">Sakit</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base font-bold">12</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg justify-items-center content-center py-2 bg-white">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1 bg-red-100 border-red-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <CalendarOff className="w-9 h-9 text-red-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-sm text-stone-400">Absen</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base font-bold">2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white mt-10 border rounded-md p-5 ">
        <DataTable
          columns={columns}
          data={studentsInClass}
          filterName="name"
          filterPlaceholder="Cari Siswa.."
        />
      </div>
    </div>
  );
}
