"use client"
/* eslint-disable */
import CommonAddSubject from "@/components/common/form/CommonAddSubject";
import ButtonDelete from "@/components/ui/buttonDelete";
import { useGetClassroomsQuery, useGetUsersQuery, useUserPayloadQuery } from "@/graphql/generated";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { Ellipsis, Info } from "lucide-react";
import React from "react";

export default function ScheduleStudent() {
  const { data, loading, error } = useGetUsersQuery()
  if (error) {
    alert('upps ada yang error..')
    console.log(error)
  }

  // cari data class yang menunjukan walikelas adalah user yang sedang login
  const { data: userPayload } = useUserPayloadQuery()
  const filteringDataStudent: any[] = data?.users.filter((item: any) => item.id === userPayload?.me.id && item.role === "STUDENT") || [];
  // console.log(data)
  // console.log(data?.classrooms[0].students.filter((item) => item.id === 'fdba356f-d443-4a3b-9ee3-a056cab6983f'))

  const monday = filteringDataStudent[0]?.classroom?.schedules.filter((item: any) => item?.day === "MONDAY") || []
  const tuesday = filteringDataStudent[0]?.classroom?.schedules.filter((item: any) => item?.day === "TUESDAY") || []
  const wednesday = filteringDataStudent[0]?.classroom?.schedules.filter((item: any) => item?.day === "WEDNESDAY") || []
  const thursday = filteringDataStudent[0]?.classroom?.schedules.filter((item: any) => item?.day === "THURSDAY") || []
  const friday = filteringDataStudent[0]?.classroom?.schedules.filter((item: any) => item?.day === "FRIDAY") || []
  const saturday = filteringDataStudent[0]?.classroom?.schedules.filter((item: any) => item?.day === "SATURDAY") || []
  // console.log(monday)
  // return ""
  return (
    <div className="min-h-screen">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <div className="col-span-1 border-2 rounded-lg p-8 bg-white">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold">Senin</h1>
          </div>

          <div className="mt-3">
            <div className="grid grid-rows-1 gap-4">
              {
                // <div>{monday.name}</div>
                monday.length > 0 ? monday.map((item: any, index: number) => (
                <div className="row-span-1 " key={index}>
                  <div className="grid grid-cols-10 items-center hover:bg-gray-50 rounded-sm">
                    <div className="col-span-9">
                      <p className="text-sm">{item.subject.name}</p>
                    </div>
                  </div>
                </div>
                )) : (
                  <div className="w-full h-[200px] flex-col gap-3 flex items-center justify-center text-sm">
                    <Info className="text-primary" />
                    <span>Belum Ada Pelajaran Di Jadwal ini.</span>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className="col-span-1 border-2 rounded-lg p-8 bg-white">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold">Selasa</h1>
          </div>

          <div className="mt-3">
            <div className="grid grid-rows-1 gap-4">
              {
                // <div>{tuesday.name}</div>
                tuesday.length > 0 ? tuesday.map((item: any, index: number) => (
                <div className="row-span-1 " key={index}>
                  <div className="grid grid-cols-10 items-center hover:bg-gray-50 rounded-sm">
                    <div className="col-span-9">
                      <p className="text-sm">{item.subject.name}</p>
                    </div>
                  </div>
                </div>
                )) : (
                  <div className="w-full h-[200px] flex-col gap-3 flex items-center justify-center text-sm">
                    <Info className="text-primary" />
                    <span>Belum Ada Pelajaran Di Jadwal ini.</span>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className="col-span-1 border-2 rounded-lg p-8 bg-white">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold">Rabu</h1>
          </div>

          <div className="mt-3">
            <div className="grid grid-rows-1 gap-4">
              {
                // <div>{wednesday.name}</div>
                wednesday.length > 0 ? wednesday.map((item: any, index: number) => (
                <div className="row-span-1 " key={index}>
                  <div className="grid grid-cols-10 items-center hover:bg-gray-50 rounded-sm">
                    <div className="col-span-9">
                      <p className="text-sm">{item.subject.name}</p>
                    </div>
                  </div>
                </div>
                )) : (
                  <div className="w-full h-[200px] flex-col gap-3 flex items-center justify-center text-sm">
                    <Info className="text-primary" />
                    <span>Belum Ada Pelajaran Di Jadwal ini.</span>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className="col-span-1 border-2 rounded-lg p-8 bg-white">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold">Kamis</h1>
          </div>

          <div className="mt-3">
            <div className="grid grid-rows-1 gap-4">
              {
                // <div>{thursday.name}</div>
                thursday.length > 0 ? thursday.map((item: any, index: number) => (
                <div className="row-span-1 " key={index}>
                  <div className="grid grid-cols-10 items-center hover:bg-gray-50 rounded-sm">
                    <div className="col-span-9">
                      <p className="text-sm">{item.subject.name}</p>
                    </div>
                  </div>
                </div>
                )) : (
                  <div className="w-full h-[200px] flex-col gap-3 flex items-center justify-center text-sm">
                    <Info className="text-primary" />
                    <span>Belum Ada Pelajaran Di Jadwal ini.</span>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className="col-span-1 border-2 rounded-lg p-8 bg-white">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold">Jum`at</h1>
          </div>

          <div className="mt-3">
            <div className="grid grid-rows-1 gap-4">
              {
                // <div>{friday.name}</div>
                friday.length > 0 ? friday.map((item: any, index: number) => (
                <div className="row-span-1 " key={index}>
                  <div className="grid grid-cols-10 items-center hover:bg-gray-50 rounded-sm">
                    <div className="col-span-9">
                      <p className="text-sm">{item.subject.name}</p>
                    </div>
                  </div>
                </div>
                )) : (
                  <div className="w-full h-[200px] flex-col gap-3 flex items-center justify-center text-sm">
                    <Info className="text-primary" />
                    <span>Belum Ada Pelajaran Di Jadwal ini.</span>
                  </div>
                )
              }
            </div>
          </div>
        </div>
        <div className="col-span-1 border-2 rounded-lg p-8 bg-white">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold">Sabtu</h1>
          </div>

          <div className="mt-3">
            <div className="grid grid-rows-1 gap-4">
              {
                // <div>{saturday.name}</div>
                saturday.length > 0 ? saturday.map((item: any, index: number) => (
                <div className="row-span-1 " key={index}>
                  <div className="grid grid-cols-10 items-center hover:bg-gray-50 rounded-sm">
                    <div className="col-span-9">
                      <p className="text-sm">{item.subject.name}</p>
                    </div>
                  </div>
                </div>
                )) : (
                  <div className="w-full h-[200px] flex-col gap-3 flex items-center justify-center text-sm">
                    <Info className="text-primary" />
                    <span>Belum Ada Pelajaran Di Jadwal ini.</span>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
