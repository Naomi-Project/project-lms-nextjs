"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import {
  useDeleteUserMutation,
  useGetClassroomsQuery,
  useGetEnrollmentsQuery,
  useGetUserQuery,
  useGetUsersQuery,
  useUpdateEnrollmentMutation,
  useUserPayloadQuery,
} from "@/graphql/generated";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";

type Student = {
  id: string;
  name?: string | null;
  username: string;
  gender: string;
  nik?: string | null;
  nisn?: string | null;
  nuptk?: string | null;
  classrom?: any | undefined;
  role: string;
  address: string;
  phone: string; // Ubah number ke string agar cocok dengan GraphQL
};

export default function StudentTable() {
  const { data, error } = useGetUsersQuery();
  const { data: classrooms, loading: classLoading } = useGetClassroomsQuery();
  const { data: enrollments } = useGetEnrollmentsQuery();
  const [deleteUser, { loading }] = useDeleteUserMutation();
  const { data: user } = useUserPayloadQuery(); 
  const { data: findUser, loading: loadFindUser } = useGetUserQuery({
    variables: {
      data: user?.me.id ?? ''
    }, 
    skip: !user?.me.id
  })
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [dataDialog, setDataDialog] = useState({})
  const columns = [
    {
      accessorKey: "id",
      header: "No.",
      enableHiding: false,
      enableSorting: true,
      cell: ({ row }: any) => <span>{row.index + 1}</span>,
    },
    {
      accessorKey: "name",
      header: "NAMA SISWA",
      cell: ({ row }: any) => <span>{row.getValue("name")}</span>,
    },
    {
      accessorKey: "nisn",
      header: "NISN",
      cell: ({ row }: any) => <span>{row.getValue("nisn")}</span>,
      // cell: () => <span>7A</span>,
    },
    {
      accessorKey: "phone",
      header: "PHONE",
      cell: ({ row }: any) => <span>{row.getValue("phone")}</span>,
    },
    {
      accessorKey: "school",
      header: "SEKOLAH",
      cell: ({ row }: any) => <span>{row.original.school ?? "-"}</span>,
    },
    {
      accessorKey: "class",
      sortable: true,
      header: "KELAS",
      cell: ({ row }: any) => <span>{row.getValue("class")}</span>,
    },
    {
      accessorKey: "action",
      header: "ACTION",
      cell: ({ row }: any) => (
        <div className="flex gap-3">
          <Button className="bg-orange-500 hover:bg-orange-600 shadow-none text-white" onClick={() => {
            setDataDialog({
              enrollmentId: row.original.enrollment.id,
              studentId: row.original.id,
              termId: row.original.enrollment.termId
            })
            setIsOpenDialog(!isOpenDialog)
          }}><MoveLeft /> Pindah Kelas</Button>
          <ButtonEdit
            endpoint="/managements/manager/student/edit/"
            id={row.original.id}
          />
          <ButtonDelete
            mutation={deleteUser}
            loading={loading}
            id={row.original.id}
          />
        </div>
      ),
    },
  ];

  const classroomsData = classrooms?.classrooms || [];

  let dataStudent: any[] =
    data?.users
      .filter((user) => user.role === "STUDENT" && user.schoolId === findUser?.user.school?.id)
      .map((student) => {
        const classFind = classroomsData.filter((sub) =>
          sub.students.some((t) => t.id === student.id)
        );

        const enrolFind = enrollments?.enrollments.find((sub) =>
          sub.studentId === student.id
        );

        // Gabungkan data student dengan subjects yang ditemukan
        return {
          ...student,
          school: student?.school?.name || "-",
          enrollment: enrolFind,
          class: classFind.map((sub) => sub.name).join(" | ") || "-",
        };
      }) || [];
  return (
    <DataTable
      columns={columns}
      data={dataStudent}
      isMoveClass={true}
      isOpenDialog={isOpenDialog}
      setIsOpenDialog={setIsOpenDialog}
      dataDialog={dataDialog}
      classrooms={classrooms}
      filterName="name"
      filterPlaceholder="Cari Siswa.."
    />
  );
}
