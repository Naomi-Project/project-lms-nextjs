"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useGetUserQuery, useGetUsersQuery, useUserPayloadQuery } from "@/graphql/generated";
import { useDeleteUserMutation } from "@/src/graphql/generated";

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
    const { data, loading: loadUser, error } = useGetUsersQuery();
    const { data: user } = useUserPayloadQuery(); 
    const { data: findUser, loading: loadFindUser } = useGetUserQuery({
      variables: {
        data: user?.me.id ?? ''
      },
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
      //   cell: ({ row }: any) => <span>{row.getValue("nuptk")}</span>,
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
        </div>,
      },
    ];
    
  
    
    if (loadUser) {
      return (
        <p>oading..</p>
      )
    }

    if (error) {
        console.log(error.message)
    }

  const dataStaffGlobe: any[] = data?.users?.filter(user => (user.role === "ADMIN" || user.role === "STAFF" || user.role === 'PRINCIPAL')) || [];
  const dataStaff: any[] = data?.users?.filter(usr => (usr.role === "ADMIN" || usr.role === "STAFF" || usr.role === 'PRINCIPAL') && usr.schoolId === user?.me.schoolId) || [];

  return (
    <DataTable
      columns={columns}
      data={user?.me.role === "STAFF" ? dataStaff : dataStaffGlobe}
      filterName="name"
      filterPlaceholder="Cari Staff.."
    />
  );
}
