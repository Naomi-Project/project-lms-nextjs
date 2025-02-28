"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useDeleteUserMutation, useGetUsersQuery } from "@/graphql/generated";

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
        accessorKey: "address",
        header: "ALAMAT",
        cell: ({ row }: any) => <span>{row.getValue("address")}</span>,
      },
      {
        accessorKey: "phone",
        header: "PHONE",
        cell: ({ row }: any) => <span>{row.getValue("phone")}</span>,
      },
      {
        accessorKey: "gender",
        header: "GENDER",
        cell: ({ row }: any) => <span>{row.getValue("gender")}</span>,
      },
      {
        accessorKey: "role",
        header: "ROLE",
        cell: ({ row }: any) => <span>{row.getValue("role")}</span>,
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

  const dataTeacher: Teacher[] = data?.users.filter(user => user.role === "TEACHER") || [];
  console.log(dataTeacher)

  return (
    <DataTable
      columns={columns}
      data={dataTeacher}
      filterName="username"
      filterPlaceholder="Cari Guru.."
    />
  );
}
