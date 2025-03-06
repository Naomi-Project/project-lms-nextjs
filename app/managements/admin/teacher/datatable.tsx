"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useDeleteUserMutation, useGetSubjectsQuery, useGetUsersQuery } from "@/graphql/generated";

type Teacher = {
    id: string;
    name?: string | null;
    username: string;
    gender: string;
    nik?: string | null; // Bisa null atau undefined
    nisn?: string | null;
    nuptk?: string | null;
    role: string;
    address: string;
    phone: string;
  };
  
  
export default function TeacherTable() {
    const { data } = useGetUsersQuery();
    const { data: subject } = useGetSubjectsQuery();
    const [deleteUser, { loading }] = useDeleteUserMutation();
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
        header: "NAMA GURU",
        cell: ({ row }: any) => <span>{row.getValue("name")}</span>,
      },
      {
        accessorKey: "nuptk",
        header: "NUPTK",
        cell: ({ row }: any) => <span>{row.getValue("nuptk")}</span>,
        // cell: ({ row }: any) => <span>7A</span>,
      },
      {
        accessorKey: "subjects",
        header: "KOMPETENSI",
        cell: ({ row }: any) => <span>{row.getValue("subjects")}</span>,
      },
      {
        accessorKey: "phone",
        header: "PHONE",
        cell: ({ row }: any) => <span>{row.getValue("phone")}</span>,
      },
      {
        accessorKey: "school",
        header: "SEKOLAH",
        cell: ({ row }: any) => <span>{row.original.school.name}</span>,
      },
    ];
  // Ambil semua subjects
const subjectsData = subject?.subjects || [];

// Proses data teachers dengan subjects
const dataTeacher: any[] = data?.users
  .filter(user => user.role === "TEACHER")
  .map(teacher => {
    // Cari subjects yang memiliki teacher.id yang sesuai
    const teacherSubjects = subjectsData.filter(sub =>
      sub.teachers.some(t => t.id === teacher.id)
    );

    // Gabungkan data teacher dengan subjects yang ditemukan
    return {
      ...teacher,
      subjects: teacherSubjects.map(sub => sub.name).join(" | ") || "-", // Ambil nama subject
    };
  }) || [];

  return (
    <DataTable
      columns={columns}
      data={dataTeacher}
      filterName="name"
      filterPlaceholder="Cari Guru.."
    />
  );
}
