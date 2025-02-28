"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useDeleteSchoolMutation, useDeleteUserMutation, useGetSchoolsQuery, useGetUsersQuery } from "@/graphql/generated";
import { format } from "date-fns";

  
  
export default function SchoolTable() {
    const { data } = useGetSchoolsQuery()
    const [deleteSchool, { loading }] = useDeleteSchoolMutation();
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
        header: "NAMA SEKOLAH",
        cell: ({ row }: any) => <span>{row.getValue('name')}</span>,
      },
      {
        accessorKey: "npsn",
        header: "NPSN",
        cell: ({ row }: any) => <span>{row.getValue('npsn')}</span>,
      },
      {
        accessorKey: "accreditation",
        header: "ACCREDITATION",
        cell: ({ row }: any) => <span>{row.getValue('accreditation')}</span>,
      },
      {
        accessorKey: "address",
        header: "ALAMAT",
        cell: ({ row }: any) => <span>{row.getValue('address')}</span>,
      },
      {
        accessorKey: "phone",
        header: "PHONE",
        cell: ({ row }: any) => <span>{row.getValue('phone')}</span>,
      },
      {
        accessorKey: "action",
        header: "ACTION",
        cell: ({ row }: any) => <div className="flex gap-3">
         <ButtonEdit endpoint="/managements/admin/sekolah/edit/" id={row.original.id} />
         <ButtonDelete mutation={deleteSchool} loading={loading} id={row.original.id} />
        </div>,
      },
    ];

  const dataSchool: unknown[] = data?.schools || [];
  console.log(dataSchool)

  return (
    <DataTable
      columns={columns}
      data={dataSchool}
      filterName="name"
      filterPlaceholder="Cari Siswa.."
    />
  );
}
