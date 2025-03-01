"use client"
/* eslint-disable */
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { ScrollArea } from "@/components/ui/scroll-area";
import { BadgeAlert, BadgePlus, ChevronDown, Ellipsis, Info, Trash } from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDeleteScheduleMutation, useGetClassroomQuery, useGetClassroomsQuery, useGetSchedulesQuery, useUserPayloadQuery } from "@/graphql/generated";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import CommonAddSubject from "@/components/common/form/CommonAddSubject";
import ButtonDelete from "@/components/ui/buttonDelete";
import Swal from "sweetalert2";

export default function ScheduleTeacher() {
  const { data, loading, error } = useGetClassroomsQuery()
  if (error) {
    alert('upps ada yang error..')
    console.log(error)
  }
  const [deleteSchedule] = useDeleteScheduleMutation()
  // cari data class yang menunjukan walikelas adalah user yang sedang login
  const { data: userPayload } = useUserPayloadQuery()
  const filteringDataGuardian: any[] = data?.classrooms.filter((item: any) => item.guardian.id === userPayload?.me.id) || [];

  console.log(filteringDataGuardian)
  const monday = filteringDataGuardian[0]?.schedules.filter((item: any) => item?.day === "MONDAY") || []
  const tuesday = filteringDataGuardian[0]?.schedules.filter((item: any) => item?.day === "TUESDAY") || []
  const wednesday = filteringDataGuardian[0]?.schedules.filter((item: any) => item?.day === "WEDNESDAY") || []
  const thursday = filteringDataGuardian[0]?.schedules.filter((item: any) => item?.day === "THURSDAY") || []
  const friday = filteringDataGuardian[0]?.schedules.filter((item: any) => item?.day === "FRIDAY") || []
  const saturday = filteringDataGuardian[0]?.schedules.filter((item: any) => item?.day === "SATURDAY") || []
  // console.log('senin', monday)
  const [open, setOpen] = useState(false);

  const removeAllSchedule = async (day: any) => {
    try {
      await Promise.all(
        // day = day 
        day.map(async (item: any) => {
          try {
            await deleteSchedule({
              variables: {
                data: item.id
              }
            })
            
            Swal.fire({
              title: "Berhasil!",
              text: `${day.length} mapel di jadwal berhasil dihapus.`,
              icon: "success",
              timer: 2500,
              timerProgressBar: true,
            }).then(() => {
              location.reload(); // Refresh halaman untuk update data
            });
          } catch (e) {
            console.log(e)
            alert('error remove 1')
          }
        })
      )
    } catch (e) {
      console.log(e)
      alert('error saat reset jadwal')
    }
  }
  return (
    <div className="min-h-screen">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <div className="col-span-1 border-2 rounded-lg p-8 bg-white">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-bold">Senin</h1>
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-slate-100 px-2 py-1 rounded-sm">
                <Ellipsis className="text-primary" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {/* <DropdownMenuLabel className="font-light">
                  Ubah Jadwal
                </DropdownMenuLabel> */}
                <DropdownMenuLabel>
                <div className="w-full flex justify-start items-center">
                {/* Trigger Button */}
                <CommonAddSubject day="MONDAY" classroomId={filteringDataGuardian[0]?.id} />
              </div>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="text-red-500 font-light cursor-pointer" onClick={() => removeAllSchedule(monday)}>
                  Reset Jadwal
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
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

                    <div className="col-span-1 flex justify-center items-center ">
                      <ButtonDelete id={item.id} hideLable={true} customClassNoBg="bg-transparent hover:bg-red-500 hover:text-white w-6 h-6 shadow-none text-red-400 p-0" noBg={true} mutation={deleteSchedule}  />
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
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-slate-100 px-2 py-1 rounded-sm">
                <Ellipsis className="text-primary" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {/* <DropdownMenuLabel className="font-light">
                  Ubah Jadwal
                </DropdownMenuLabel> */}
                <DropdownMenuLabel>
                <div className="w-full flex justify-start items-center">
                {/* Trigger Button */}
                <CommonAddSubject day="TUESDAY" classroomId={filteringDataGuardian[0]?.id} />
              </div>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="text-red-500 font-light cursor-pointer" onClick={() => removeAllSchedule(tuesday)}>
                  Reset Jadwal
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
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

                    <div className="col-span-1 flex justify-center items-center ">
                      <ButtonDelete id={item.id} hideLable={true} customClassNoBg="bg-transparent hover:bg-red-500 hover:text-white w-6 h-6 shadow-none text-red-400 p-0" noBg={true} mutation={deleteSchedule}  />
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
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-slate-100 px-2 py-1 rounded-sm">
                <Ellipsis className="text-primary" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {/* <DropdownMenuLabel className="font-light">
                  Ubah Jadwal
                </DropdownMenuLabel> */}
                <DropdownMenuLabel>
                <div className="w-full flex justify-start items-center">
                {/* Trigger Button */}
                <CommonAddSubject day="WEDNESDAY" classroomId={filteringDataGuardian[0]?.id} />
              </div>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="text-red-500 font-light cursor-pointer" onClick={() => removeAllSchedule(wednesday)}>
                  Reset Jadwal
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
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

                    <div className="col-span-1 flex justify-center items-center ">
                      <ButtonDelete id={item.id} hideLable={true} customClassNoBg="bg-transparent hover:bg-red-500 hover:text-white w-6 h-6 shadow-none text-red-400 p-0" noBg={true} mutation={deleteSchedule}  />
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
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-slate-100 px-2 py-1 rounded-sm">
                <Ellipsis className="text-primary" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {/* <DropdownMenuLabel className="font-light">
                  Ubah Jadwal
                </DropdownMenuLabel> */}
                <DropdownMenuLabel>
                <div className="w-full flex justify-start items-center">
                {/* Trigger Button */}
                <CommonAddSubject day="THURSDAY" classroomId={filteringDataGuardian[0]?.id} />
              </div>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="text-red-500 font-light cursor-pointer" onClick={() => removeAllSchedule(thursday)}>
                  Reset Jadwal
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
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

                    <div className="col-span-1 flex justify-center items-center ">
                      <ButtonDelete id={item.id} hideLable={true} customClassNoBg="bg-transparent hover:bg-red-500 hover:text-white w-6 h-6 shadow-none text-red-400 p-0" noBg={true} mutation={deleteSchedule}  />
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
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-slate-100 px-2 py-1 rounded-sm">
                <Ellipsis className="text-primary" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {/* <DropdownMenuLabel className="font-light">
                  Ubah Jadwal
                </DropdownMenuLabel> */}
                <DropdownMenuLabel>
                <div className="w-full flex justify-start items-center">
                {/* Trigger Button */}
                <CommonAddSubject day="FRIDAY" classroomId={filteringDataGuardian[0]?.id} />
              </div>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="text-red-500 font-light cursor-pointer" onClick={() => removeAllSchedule(friday)}>
                  Reset Jadwal
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
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

                    <div className="col-span-1 flex justify-center items-center ">
                      <ButtonDelete id={item.id} hideLable={true} customClassNoBg="bg-transparent hover:bg-red-500 hover:text-white w-6 h-6 shadow-none text-red-400 p-0" noBg={true} mutation={deleteSchedule}  />
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
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-slate-100 px-2 py-1 rounded-sm">
                <Ellipsis className="text-primary" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {/* <DropdownMenuLabel className="font-light">
                  Ubah Jadwal
                </DropdownMenuLabel> */}
                <DropdownMenuLabel>
                <div className="w-full flex justify-start items-center">
                {/* Trigger Button */}
                <CommonAddSubject day="SATURDAY" classroomId={filteringDataGuardian[0]?.id} />
              </div>
                </DropdownMenuLabel>
                <DropdownMenuLabel className="text-red-500 font-light cursor-pointer" onClick={() => removeAllSchedule(saturday)}>
                  Reset Jadwal
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
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

                    <div className="col-span-1 flex justify-center items-center ">
                      <ButtonDelete id={item.id} hideLable={true} customClassNoBg="bg-transparent hover:bg-red-500 hover:text-white w-6 h-6 shadow-none text-red-400 p-0" noBg={true} mutation={deleteSchedule}  />
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
