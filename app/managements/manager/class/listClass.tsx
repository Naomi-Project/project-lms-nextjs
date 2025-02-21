"use client";

import { useGetClassroomQuery, useGetClassroomsQuery } from "@/graphql/generated";
import { Link, UserRound, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ListProps<T extends Record<any, any>> {
  title: any;
}

function ListClass<T extends Record<any, any>>(
  props: ListProps<T>
) {
  const { data, loading } = useGetClassroomsQuery();
  if (loading) return "loading.."
  
  return (
    <>
    {data && data.classrooms.map((dt: any, index: number) => (
    <div className="col-span-1" key={index}>
    <Link href="/managements/manager/class-detail">
      <Button className="w-full h-full border-0">
        <div className="w-full h-full p-2">
          <div className="flex justify-between">
            <h1 className="text-base font-bold">Kelas {dt.name}</h1>

            <div className="w-20 rounded-lg flex items-center justify-center bg-blue-100 p-1">
              <p className="text-xs text-blue-500">Kelas Awal</p>
            </div>
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
      </Button>
    </Link>
  </div>
    ))}
    </>
  );
};

export default ListClass;