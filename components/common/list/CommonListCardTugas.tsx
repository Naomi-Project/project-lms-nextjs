"use client";
/* eslint-disable */
import ButtonDelete from "@/components/ui/buttonDelete";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardFooter, CardDescription, CardTitle } from "@/components/ui/card";
import { useDeleteAssignmentMutation, useGetAssignmentsQuery, useGetClassroomsQuery } from "@/graphql/generated";
import { format } from "date-fns";
import { Book, Calendar, EllipsisVertical, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";

interface ListTypes {
  canDelete?: boolean;
  role?: string;
  search?: string;
  filter?: string;
}

const ListCardTugas = ({ canDelete = true, role = "student", search, filter }: ListTypes) => {
  const { data } = useGetAssignmentsQuery();
  const { data: classRoom } = useGetClassroomsQuery();

  // Gunakan useMemo agar rawData tidak berubah terus-menerus
  const rawData = useMemo(() => data?.assignments || [], [data?.assignments]);
  const [tugas, setTugas] = useState(rawData);

  useEffect(() => {
    setTugas(
      search && search.trim() !== ""
        ? rawData.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
        : rawData
    );
  }, [search, rawData]);

  useEffect(() => {
    setTugas(
      filter && filter.trim() !== ""
        ? rawData.filter((item) => item.subject.id.includes(filter.toLowerCase()))
        : rawData
    );
  }, [filter, rawData]);

  useEffect(() => {
    console.log(tugas)
    console.log(classRoom)
  }, [tugas, classRoom])

  const [deleteAssignments, { loading }] = useDeleteAssignmentMutation();

  return (
    <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-4 mt-2">
      {tugas.map((data, index: number) => (
        <div className="col-span-1" key={index}>
          <Link href={`/managements/${role}/tasks-detail/${data.id}`}>
            <Card>
              <CardHeader className="flex gap-3">
                <div className="flex flex-row gap-4 justify-between items-center">
                  <div className="flex flex-wrap gap-4">
                    <CardTitle
                      className={`fontligh text-xs py-1 w-auto px-3 rounded-full text-center font-bold ${
                        data.submissions?.length > 0 ? "bg-blue-100 text-blue-400" : "bg-red-100 text-red-400"
                      }`}
                    >
                      {data.submissions?.length > 0 ? "Sudah Dikerjakan" : "Belum Dikerjakan"}
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
                        <DropdownMenuItem className="hover:bg-red-100">
                          <ButtonDelete
                            noBg={true}
                            id={data.id}
                            customClassNoBg="bg-transparent text-white bg-red-500 w-full hover:bg-red-600 shadow-none"
                            mutation={deleteAssignments}
                            loading={loading}
                          />
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </div>
                <CardDescription className="font-bold text-base text-black">{data.title}</CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-wrap gap-4">
                <CardDescription className="flex text-xs items-end gap-2 pr-8">
                  <Calendar className="text-primary w-5 h-5" />{" "}
                  <p>
                    {data.dueDate ? format(new Date(data.dueDate), "yyyy-MM-dd HH:mm:ss") : "Tidak Ada Deadline"}
                  </p>
                </CardDescription>
                <CardDescription className="flex text-xs items-end gap-2 pr-8">
                  <User className="text-primary w-5 h-5" /> <p>{"Pa Budi"}</p>
                </CardDescription>
                <CardDescription className="flex text-xs gap-2">
                  <Book className="text-primary w-5 h-5" /> <p>{data.subject.name}</p>
                </CardDescription>
              </CardFooter>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListCardTugas;
