'use client'
/*eslint-disable*/
import { User2Icon } from "lucide-react";
import React from "react";
import StudentInTeacherTable from "./datatable";
import { useGetClassroomsQuery, useUserPayloadQuery } from "@/graphql/generated";




export default function ClassTeacher() {
  const { data } = useGetClassroomsQuery();
  const { data: userPayload } = useUserPayloadQuery()
  const filteringDataGuardian: unknown[] = data?.classrooms.filter((item: any) => item.guardian.id === userPayload?.me.id) || [];
  const dataStudentInTeacher: any[] = (filteringDataGuardian[0] as { students: any[] })?.students || [];
  return (
    <div className="min-h-screen">
      <div className="md:grid grid-cols-2 gap-4">
        <div className="col-span-1 border-2 bg-white rounded-lg p-5">
          <div className="grid grid-rows-2 gap-4">
            <div className="row-span-1">
              <div className="flex justify-between">
                <div className="">
                  <h1 className="font-bold text-base">Kelas 7A</h1>
                </div>

                <div className="p-2 bg-blue-100 rounded-lg">
                  <p className="text-blue-500 text-xs">Kelas Awal</p>
                </div>
              </div>
            </div>

            <div className="row-span-1">
              <div className="w-3/12">
                <div className="grid grid-cols-2">
                  <div className="col-span-1">
                    <User2Icon className="h-5 w-5 text-slate-400" />
                  </div>

                  <div className="col-span-1">
                    <p className="text-sm text-slate-400">Demi He</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mt-0 mt-3 col-span-1 border-2 bg-white rounded-lg p-5">
          <h1 className="text-slate-400 text-base">Jumlah Murid Dikelas</h1>

          <p className="text-3xl font-bold mt-6">{dataStudentInTeacher.length}</p>
        </div>
      </div>

      <div className="border-2 rounded-lg bg-white p-5 mt-10">
          <StudentInTeacherTable />
      </div>
    </div>
  );
}
