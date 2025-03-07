"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useDeleteUserMutation, useGetUsersQuery } from "@/graphql/generated";

type Staff = {
    id: string;
    name?: string | null;
    username: string;
    gender: string;
    nik?: string | null; // Bisa null atau undefined
    nisn?: string | null;
    nuptk?: string | null;
    createdAt?: string | null;
    role: string;
    address: string;
    phone: string;
  };
  
  
export default function StaffTable() {
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
        header: "NAME DISPLAY",
        cell: ({ row }: any) => <span>{row.getValue("name")}</span>,
      },
      {
        accessorKey: "username",
        header: "USERNAME",
        cell: ({ row }: any) => <span>{row.getValue("username")}</span>,
      },
      // {
      //   accessorKey: "nuptk",
      //   header: "NUPTK",
      //   cell: ({ row }: any) => <span>{row.getValue("nuptk") ?? '-'}</span>,
      //   // cell: ({ row }: any) => <span>7A</span>,
      // },
      {
        accessorKey: "school",
        header: "SEKOLAH",
        cell: ({ row }: any) => <span>{row.original.school?.name || "-"}</span>
      },
      {
        accessorKey: "phone",
        header: "PHONE",
        cell: ({ row }: any) => <span>{row.getValue("phone")}</span>,
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
         <ButtonEdit endpoint="/managements/manager/setting-admin/edit/" id={row.original.id} />
         <ButtonDelete mutation={deleteUser} loading={loading} id={row.original.id} />
        </div>,
      },
    ];

  const dataStaff: Staff[] = data?.users.filter(user => user.role === "ADMIN" || user.role === "STAFF" || user.role === 'PRINCIPAL') || [];

  return (
    <DataTable
      columns={columns}
      data={dataStaff}
      filterName="name"
      filterPlaceholder="Cari Staff.."
    />
  );
}
