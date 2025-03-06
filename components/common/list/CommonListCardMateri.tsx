"use client";
import ButtonDelete from "@/components/ui/buttonDelete";
/* eslint-disabled */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { useDeleteMaterialMutation, useGetMaterialsQuery } from "@/graphql/generated";
import Link from "next/link";
import { Calendar, EllipsisVertical } from "lucide-react";
import { format } from "date-fns";
import { useState, useEffect, useMemo } from "react";
import CommonEmpptyData from "../detail/CommonEmpptyData";

interface ListTypes {
  canDelete?: boolean;
  role?: string;
  search?: string;
  filter?: string;
}

const ListCardMateri = ({ canDelete = true, role = "student", search, filter }: ListTypes) => {
  const { data } = useGetMaterialsQuery();
  
  
  // Gunakan useMemo untuk mencegah re-rendering terus-menerus
  const rawData = useMemo(() => data?.materials || [], [data?.materials]);

  const [materi, setMateri] = useState(rawData);

  useEffect(() => {
    setMateri(
      search && search.trim() !== ""
        ? rawData.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
        : rawData
    );
  }, [search, rawData]);

  useEffect(() => {
    setMateri(
      filter && filter.trim() !== ""
        ? rawData.filter((item) => item.subject.id.includes(filter.toLowerCase()))
        : rawData
    );
  }, [filter, rawData]);

  const [deleteMaterial, { loading }] = useDeleteMaterialMutation();

  return (
    <div className={`grid gap-4 ${materi.length > 0 ? 'md:grid-cols-3 grid-cols-2' : 'md:grid-cols-1 grid-cols-1'}`}>
      {materi.length > 0 ? materi.map((data, index: number) => (
        <div className="col-span-1" key={index}>
          <Link href={`/managements/${role}/material/detail/${data.id}`}>
            <Card className="w-full h-[230px] sm:w-full">
              <CardHeader className="flex gap-3">
                <div className="flex justify-between items-center">
                  <div className="w-full flex gap-3">
                    <CardTitle className="font-bold text-xs py-2 px-4 bg-orange-100 w-auto rounded-md text-center text-orange-400">
                      {data.subject.name}
                    </CardTitle>
                    <CardTitle className="font-bold text-xs py-2 px-4 bg-blue-100 w-auto rounded-md text-center text-blue-400">
                      Kurikulum {data.curriculum.name}
                    </CardTitle>
                  </div>
                  {canDelete && (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="">
                          <EllipsisVertical className="cursor-pointer" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuItem className="flex flex-col">
                          {/* <ButtonEdit customClass="w-full bg-orange-400 hover:bg-orange-500" id={data.id} endpoint={`/managements/${role}/material/detail/`} /> */}
                          <ButtonDelete
                            noBg={true}
                            id={data.id}
                            customClassNoBg="bg-transparent text-white bg-red-500 w-full hover:bg-red-600 shadow-none"
                            mutation={deleteMaterial}
                            loading={loading}
                          />
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>
                <CardDescription className="font-bold text-base text-black">
                  {data.title}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <CardDescription className="flex items-end gap-2">
                  <Calendar className="text-primary" /> {" "}
                  <p>Dibuat pada {format(new Date(data.createdAt), "yyyy-MM-dd")}</p>
                </CardDescription>
              </CardFooter>
            </Card>
          </Link>
        </div>
      )) : (
        <CommonEmpptyData />
      )}
    </div>
  );
};

export default ListCardMateri;
