"use client";
/* eslint-disable */
import { useDeleteClassroomMutation, useGetClassroomsQuery } from "@/graphql/generated";
import { UserRound, UsersRound } from "lucide-react";
import Link from "next/link";
import ButtonDelete from "@/components/ui/buttonDelete";

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

              {/* <div className="w-20 rounded-lg flex items-center justify-center bg-blue-100 p-1">
                <p className="text-xs text-blue-500">Kelas Awal</p>
              </div> */}
              <ButtonDelete id={dt.id} mutation={deleteClassroom} loading={loading} />
            </div>

            <div className="w-9/12 mt-5">
              <div className="grid grid-cols-2 gap-8">
                <div className="col-span-1">
                  <div className="grid grid-cols-3">
                    <div className="col-span-1">
                      <UserRound className="text-slate-400 w-5 h-5" />
                    </div>

                    <div className="col-span-2">
                      <p className="text-slate-400 text-sm">Demi He</p>
                    </div>
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="grid grid-cols-3">
                    <div className="col-span-1">
                      <UsersRound className="text-slate-400 w-5 h-5" />
                    </div>

                    <div className="col-span-2">
                      <p className="text-slate-400 text-sm">20 Siswa</p>
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