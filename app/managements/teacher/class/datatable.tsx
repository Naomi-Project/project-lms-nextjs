"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useDeleteUserMutation, useGetClassroomsQuery, useGetUsersQuery, useUserPayloadQuery } from "@/graphql/generated";

type StudentInTeacher = {
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
  
  
export default function StudentInTeacherTable() {
    const { data } = useGetClassroomsQuery();
    const { data: userPayload } = useUserPayloadQuery()
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
        header: "NAMA SISWA",
        cell: ({ row }: any) => <span>{row.getValue("name")}</span>,
      },
      {
        accessorKey: "nisn",
        header: "NISN",
        cell: ({ row }: any) => <span>{row.getValue("nisn")}</span>,
      },
      {
        accessorKey: "phone",
        header: "PHONE",
        cell: ({ row }: any) => <span>{row.getValue("phone") ?? "-"}</span>,
      },
    ];

  const filteringDataGuardian: unknown[] = data?.classrooms.filter((item: any) => item.guardian.id === userPayload?.me.id) || [];
  const dataStudentInTeacher: any[] = (filteringDataGuardian[0] as { students: any[] })?.students || [];
  console.log(dataStudentInTeacher)

  return (
    <DataTable
      columns={columns}
      data={dataStudentInTeacher}
      filterName="name"
      filterPlaceholder="Cari Siswa/i.."
    />
  );
}
