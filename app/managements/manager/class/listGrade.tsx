"use client";
/* eslint-disable */
import { Button } from "@/components/ui/button";
import ButtonDelete from "@/components/ui/buttonDelete";
import { useDeleteGradeMutation, useGetGradesQuery } from "@/graphql/generated";
import { Building2, EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface ListProps<T extends Record<any, any>> {
  title: any;
}

function ListGrade<T extends Record<any, any>>(
  props: ListProps<T>
) {
  const { data, loading } = useGetGradesQuery();
    const [deleteGrade] = useDeleteGradeMutation();
  const cleanData = data?.grades.slice().sort((a: any, b: any) => {
    const numA = parseInt(a.name.match(/\d+/)?.[0] || "0"); 
    const numB = parseInt(b.name.match(/\d+/)?.[0] || "0");
  
    return numA - numB; // Urutkan berdasarkan angka saja  
  }) || [];
  if (loading) return "loading.."
  console.log(data)
  return (
    <>
    {cleanData && cleanData.map((dt: any, index: number) => (
    <div className="col-span-1 mt-4" key={index}>
    <div className="w-full h-full border-0 bg-white p-3 rounded-md">
      <div className="w-full h-full p-2">
        <div className="md:flex justify-between">
          <h1 className="md:text-lg text-base text-left font-bold">
            Kelas {dt.name} 
          </h1>

          <div className="md:mt-0 mt-1 w-20 rounded-lg flex items-center justify-center bg-blue-100 p-1">
            <p className="text-xs text-blue-500">Kelas Awal</p>
          </div>
        </div>

        <div className="flex justify-between pt-5">
          <div className="w-2/12 mt-4">
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-1">
                <Building2 className="text-slate-400 w-6 h-6" />
              </div>
              <div className="col-span-2 my-auto">
                <p className="text-slate-400 text-sm text-nowrap">{dt.classrooms.length > 0 ? dt.classrooms.length + " kelas" : "Belum ada sub kelas"}</p>
              </div>

            </div>
          </div>
          <div>
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
                    mutation={deleteGrade}
                    loading={loading}
                  />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  </div>

    ))}
    </>
  );
};

export default ListGrade;