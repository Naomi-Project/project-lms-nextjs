"use client";

import { useDeleteClassroomMutation, useGetClassroomQuery, useGetClassroomsQuery } from "@/graphql/generated";
import { Delete, Trash, UserRound, UsersRound } from "lucide-react";
import Link from "next/link";
import ButtonDelete from "@/components/ui/buttonDelete";
import { Button } from "@/components/ui/button";

export interface ListProps<T extends Record<any, any>> {
  title: any;
}

function ListClass<T extends Record<any, any>>(
  props: ListProps<T>
) {
  const [deleteClassroom] = useDeleteClassroomMutation();
  const { data, loading } = useGetClassroomsQuery();
  const cleanData = data?.classrooms.slice().sort((a: any, b: any) => {
    // Ambil angka di depan (misal "7" dari "7a")
    const numA = parseInt(a.name.match(/\d+/)[0]); 
    const numB = parseInt(b.name.match(/\d+/)[0]);
  
    // Ambil huruf di belakang (misal "a" dari "7a")
    const letterA = a.name.match(/[a-zA-Z]+/)[0];
    const letterB = b.name.match(/[a-zA-Z]+/)[0];
  
    // Urutkan berdasarkan angka dulu
    if (numA !== numB) {
      return numA - numB;
    }
  
    // Jika angka sama, urutkan berdasarkan huruf
    return letterA.localeCompare(letterB);
  }) || [];
  
  console.log(data)
  if (loading) return "loading.."
  
  return (
    <>
    {cleanData && cleanData.map((dt: any, index: number) => (
    <div className="col-span-1" key={index}>
    <Link href="/managements/manager/class-detail">
      <div className="w-full h-full shadow rounded-md bg-white">
        <div className="w-full h-full p-2">
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