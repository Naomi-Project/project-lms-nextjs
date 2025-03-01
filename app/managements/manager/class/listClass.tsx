"use client";
/* eslint-disable */
import { useDeleteClassroomMutation, useGetClassroomsQuery } from "@/graphql/generated";
import { EllipsisVertical, GraduationCap, UserRound, UsersRound } from "lucide-react";
import Link from "next/link";
import ButtonDelete from "@/components/ui/buttonDelete";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface ListProps<T extends Record<any, any>> {
  title: string;
}

function ListClass<T extends Record<any, any>>(
  props?: ListProps<T>
) {
  const [deleteClassroom] = useDeleteClassroomMutation();
  const { data, loading, error } = useGetClassroomsQuery();
  const cleanData = data?.classrooms || [];
  
  if (loading) return "loading.."
  if (error) return <p>Error while fetch classroom: {error.message}</p>
  console.log(data)
  
  return (
    <>
    {cleanData && cleanData.map((dt: any, index: number) => (
    <div className="col-span-1 mt-4" key={index}>
      <Link href="#">
        <div className="w-full h-full shadow rounded-md bg-white">
          <div className="w-full h-full p-4">
            <div className="flex justify-between">
              <h1 className="text-base font-bold">Kelas {dt.name}</h1>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="">
                    <EllipsisVertical className="cursor-pointer" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem className="hover:bg-red-100">
                    <ButtonDelete
                      noBg={true}
                      id={dt.id}
                      customClassNoBg="bg-transparent text-white bg-red-500 w-full hover:bg-red-600 shadow-none"
                      mutation={deleteClassroom}
                      loading={loading}
                    />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="w-9/12 mt-5">
              <div className="grid grid-cols-1 gap-4">
                <div className="col-span-1">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1">
                      <UserRound className="text-slate-400 w-5 h-5" />
                    </div>

                    <div className="col-span-2">
                      <p className="text-slate-400 text-sm">{dt.guardian.name}</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="grid grid-cols-3">
                    <div className="col-span-1">
                      <GraduationCap className="text-slate-400 w-5 h-5" />
                    </div>

                    <div className="col-span-2">
                      <p className="text-slate-400 text-sm">{dt.students.length} Siswa/i</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
    ))}
    </>
  );
};

export default ListClass;