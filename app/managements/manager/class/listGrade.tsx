"use client";

import { Button } from "@/components/ui/button";
import { useGetGradesQuery } from "@/graphql/generated";
import { Building2, Link, UserRound, UsersRound } from "lucide-react";

export interface ListProps<T extends Record<any, any>> {
  title: any;
}

function ListGrade<T extends Record<any, any>>(
  props: ListProps<T>
) {
  const { data, loading } = useGetGradesQuery();
  if (loading) return "loading.."
  console.log(data)
  return (
    <>
    {data?.grades.map((dt: any, index: number) => (
    <div className="col-span-1" key={index}>
    <Button className="w-full h-full border-0" variant="outline">
      <div className="w-full h-full p-2">
        <div className="md:flex justify-between">
          <h1 className="md:text-lg text-base text-left font-bold">
            Kelas {dt.name} 
          </h1>

          <div className="md:mt-0 mt-1 w-20 rounded-lg flex items-center justify-center bg-blue-100 p-1">
            <p className="text-xs text-blue-500">Kelas Awal</p>
          </div>
        </div>

        <div className="w-2/12 mt-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-1">
              <Building2 className="text-slate-400 w-6 h-6" />
            </div>

            <div className="col-span-2 my-auto">
              <p className="text-slate-400 text-sm">8 Kelas</p>
            </div>
          </div>
        </div>
      </div>
    </Button>
  </div>

    ))}
    </>
  );
};

export default ListGrade;