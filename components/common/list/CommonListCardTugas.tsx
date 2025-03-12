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
import { useDeleteAssignmentMutation, useGetAssignmentsQuery, useGetClassroomsQuery, useUserPayloadQuery } from "@/graphql/generated";
import { format } from "date-fns";
import { Book, Calendar, EllipsisVertical, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import ButtonEdit from "@/components/ui/buttonEdit";
import CommonEmpptyData from "../detail/CommonEmpptyData";

interface ListTypes {
  canDelete?: boolean;
  role?: string;
  search?: string;
  filter?: string;
}

const ListCardTugas = ({ canDelete = true, role = "student", search, filter }: ListTypes) => {
  const { data } = useGetAssignmentsQuery();
  const { data: userPayload } = useUserPayloadQuery();

  // Gunakan useMemo agar rawData tidak berubah terus-menerus
  const userId = userPayload?.me?.id;
  const userRole = userPayload?.me?.role;

  // Filter tugas berdasarkan kelas siswa yang login
  const rawData = useMemo(() => {
    if (userRole === "STUDENT" && role === 'student') {
      return data?.assignments.filter((assignment) =>
        assignment.classrooms.some((cls) =>
          cls.students.some((student) => student.id === userId)
        )
      ) || [];
    } else if (userRole === "TEACHER" && role === 'teacher') {
      return data?.assignments.filter((assignment) =>
        assignment.classrooms.some((cls) =>
          cls.guardian.id === userId
        )
      ) || [];
    }
    return data?.assignments || [];
  }, [data?.assignments, userId, userRole]);

  // Menambahkan informasi kelas dan nama wali kelas (guardian)
  const tugasDenganKelas = rawData.map((assignment) => {
    const kelasDitemukan = assignment.classrooms.find((cls) =>
      cls.students.some((student) => student.id === userId) || cls.guardian.id === userId
    );
    

    return {
      ...assignment,
      kelasNama: kelasDitemukan?.name || "Tidak Diketahui",
      waliKelas: kelasDitemukan?.guardian?.name || "Tidak Diketahui",
    };
  });
  // 

  // Filter tugas berdasarkan pencarian atau filter subject
  const tugas = useMemo(() => {
    let filteredTugas = [...tugasDenganKelas];

    if (search && search.trim() !== "") {
      filteredTugas = filteredTugas.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filter && filter.trim() !== "") {
      filteredTugas = filteredTugas.filter((item) =>
        item.subject.id.includes(filter.toLowerCase())
      );
    }

    return filteredTugas;
  }, [search, filter, tugasDenganKelas]);

  const [deleteAssignments, { loading }] = useDeleteAssignmentMutation();
  console.log(tugas)
  // const isDone = tugas.find((item => item.submissions))

  return (
    <div className={`w-full grid  gap-4 mt-2 ${tugas.length > 0 ? 'md:grid-cols-4 grid-cols-1' : 'md:grid-cols-1 grid-cols-1'}`}>
      {tugas.length > 0 ? tugas?.map((data, index: number) => (
        <div className="col-span-1" key={index}>
          <Link href={`/managements/${role}/tasks-detail/${data.id}`}>
            <Card>
              <CardHeader className="flex gap-3">
                <div className="flex flex-row gap-4 justify-between items-center">
                  <div className="flex flex-wrap gap-4">
                    <CardTitle
                      className={`fontligh text-xs py-1 w-auto px-3 rounded-full text-center font-bold ${
                        data?.submissions?.find((item) => item?.studentId === userId) ? "bg-blue-100 text-blue-400 hidden" : "bg-red-100 text-red-400"
                      }`}
                    >
                      {data.submissions.find((item) => item.studentId === userId) ? "Sudah Dikerjakan" : "Belum Dikerjakan"}
                    </CardTitle>
                    <CardTitle
                      className={`fontligh text-xs py-1 w-auto px-3 rounded-full text-center font-bold ${
                        data?.submissions?.find((item) => item?.studentId === userId) ? "bg-blue-100 text-blue-400" : "hidden"
                      }`}
                    >
                      {data.submissions.find((item) => item.studentId === userId) ? 'Nilai Mu ' + data.submissions.find((item) => item.studentId === userId)?.score?.value + '' : "Tidak ada Nilai"}
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
              <CardFooter className="flex flex-col items-start gap-4">
                <CardDescription className="flex text-xs items-end gap-2 pr-8">
                  <Calendar className="text-primary w-5 h-5" />{" "}
                  <p>
                    {data.dueDate ? format(new Date(data.dueDate), "yyyy-MM-dd HH:mm:ss") : "Tidak Ada Deadline"}
                  </p>
                </CardDescription>
                <CardDescription className="flex text-xs items-end gap-2 pr-8">
                  <User className="text-primary w-5 h-5" /> <p>{data.waliKelas ?? "Tidak Diketahui"}</p>
                </CardDescription>
                <CardDescription className="flex text-xs gap-2">
                  <Book className="text-primary w-5 h-5" /> <p>{data.subject.name}</p>
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

export default ListCardTugas;
