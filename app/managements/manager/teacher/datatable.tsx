"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useDeleteUserMutation, useGetClassroomsQuery, useGetSubjectsQuery, useGetUserQuery, useGetUsersQuery, useUserPayloadQuery } from "@/graphql/generated";

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
    const { data: classrooms } = useGetClassroomsQuery();
    const [deleteUser, { loading }] = useDeleteUserMutation();
    const { data: user } = useUserPayloadQuery(); 
    const { data: findUser, loading: loadFindUser } = useGetUserQuery({
      variables: {
        data: user?.me.id ?? ''
      }, 
      skip: !user?.me.id
    })
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
        accessorKey: "guardian",
        header: "WALI KELAS",
        cell: ({ row }: any) => <span>{row.getValue("guardian")}</span>,
      },
      {
        accessorKey: "school",
        header: "SEKOLAH",
        cell: ({ row }: any) => <span>{row.original.school ?? '-'}</span>,
      },
      {
        accessorKey: "action",
        header: "ACTION",
        cell: ({ row }: any) => <div className="flex gap-3">
         <ButtonEdit endpoint="/managements/manager/teacher/edit/" id={row.original.id} />
         <ButtonDelete mutation={deleteUser} loading={loading} id={row.original.id} />
        </div>,
      },
    ];
  // Ambil semua subjects
const subjectsData = subject?.subjects || [];
const classroomsData = classrooms?.classrooms || [];

// Proses data teachers dengan subjects
const dataTeacher: any[] = data?.users
  .filter(user => user.role === "TEACHER" && user.schoolId === findUser?.user.school?.id)
  .map(teacher => {
    // Cari subjects yang memiliki teacher.id yang sesuai
    const teacherSubjects = subjectsData.filter(sub =>
      sub.teachers?.some(t => t.id === teacher.id)
    );
    const guardianFind = classroomsData.filter(sub =>
      sub.guardian?.id === teacher.id
    );

    // Gabungkan data teacher dengan subjects yang ditemukan
    return {
      ...teacher,
      school: teacher.school?.name || "-",
      subjects: teacherSubjects.map(sub => sub.name).join(" | ") || "-",
      guardian: guardianFind.map(cls => cls.name).join(" | ") || "-",
    };
  }) || [];

  console.log(dataTeacher)
  return (
    <DataTable
      columns={columns}
      data={dataTeacher}
      filterName="name"
      filterPlaceholder="Cari Guru.."
    />
  );
}
