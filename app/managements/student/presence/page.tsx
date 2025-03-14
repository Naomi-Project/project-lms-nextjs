"use client"
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import { useGetClassroomsQuery, useGetAttendancesQuery, useUserPayloadQuery, useDeleteAttendanceMutation, useGetUsersQuery } from "@/graphql/generated";
import {
  CalendarCheck2,
  CalendarOff,
  Hourglass,
  Thermometer,
} from "lucide-react";
import { Badge } from '@/components/ui/badge'

import React from "react";
import { format } from "date-fns";


 

export default function PresenceStudent() {
    const { data: filterStudent } = useGetUsersQuery()
    const { data: absen, loading } = useGetAttendancesQuery()
    const { data: userPayload } = useUserPayloadQuery()
    const filteringDataStudent: any[] = filterStudent?.users.filter((item: any) => item.id === userPayload?.me.id && item.role === "STUDENT") || [];
    const studentsInClass: any[] = absen?.attendances.filter((item) => item.studentId === userPayload?.me.id) || []
    if (loading) {
      return (
        <div>Loading..</div>
      )
    }
    const columns = [
    {
      accessorKey: "date",
      header: "RIWAYAT ABSENSI",
      cell: ({ row }: any) => (
        <span className="">
          {row.getValue('date')
            ? format(new Date(row.getValue('date')), 'yyyy-MM-dd HH:mm:dd')
            : '-'}
        </span>
      ),      
    },
    {
      accessorKey: "action",
      header: "ABSENSI",
      cell: ({ row }: any) => {
        const existingAttendance = absen?.attendances.find(
          (item) => item.studentId === userPayload?.me.id
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
    const present = studentsInClass.filter((item) => item.status === 'PRESENT') || []
    const permit = studentsInClass.filter((item) => item.status === 'PERMIT') || []
    const sick = studentsInClass.filter((item) => item.status === 'SICK') || []
    const bolos = studentsInClass.filter((item) => item.status === 'ABSENT') || []
  return (
    <div className="min-h-screen">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        <div className="col-span-1 border-2 rounded-lg justify-items-center content-center py-2 bg-white">
          <div className="grid grid-cols-2 pl-2 md:ml-2 md:grid-cols-4 gap-2 ">
            <div className="col-span-1 bg-green-100 border-green-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <CalendarCheck2 className="w-9 h-9 text-green-400" />
            </div>

            <div className="col-span-3 grid content-center">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-sm text-stone-400">Kehadiran</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base font-bold">{present.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 pl-2 rounded-lg justify-items-center content-center py-2 bg-white">
          <div className="grid grid-cols-2 md:ml-2 md:grid-cols-4 gap-2">
            <div className="col-span-1 bg-orange-100 border-orange-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <Hourglass className="w-9 h-9 text-orange-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-sm text-stone-400">Izin</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base font-bold">{permit.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 pl-2 rounded-lg justify-items-center content-center py-2 bg-white">
          <div className="grid grid-cols-2 md:ml-2 md:grid-cols-4 gap-2">
            <div className="col-span-1 bg-orange-100 border-orange-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <Thermometer className="w-9 h-9 text-orange-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-sm text-stone-400">Sakit</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base font-bold">{sick.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 pl-2 rounded-lg justify-items-center content-center py-2 bg-white">
          <div className="grid grid-cols-2 md:ml-2 md:grid-cols-4 gap-2">
            <div className="col-span-1 bg-red-100 border-red-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <CalendarOff className="w-9 h-9 text-red-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-sm text-stone-400">Tidak Hadir</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base font-bold">{bolos.length}</p>
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
          filterName="date"
          hideSearch
          filterPlaceholder="Cari Tanggal.."
        />
      </div>
    </div>
  );
}
