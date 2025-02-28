"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useDeleteTermMutation, useDeleteUserMutation, useGetTermsQuery, useGetUsersQuery } from "@/graphql/generated";
import { format } from "date-fns";

  
  
export default function TermTable() {
    const { data } = useGetTermsQuery()
    const [deleteTerm, { loading }] = useDeleteTermMutation();
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
        header: "NAMA SEMESTER",
        cell: ({ row }: any) => <span>{row.getValue('name')}</span>,
      },
      {
        accessorKey: "schoolId",
        header: "NAMA SEKOLAH",
        // cell: ({ row }: any) => <span>{row.getValue('schoolId')}</span>,
        cell: ({ row }: any) => <span>SMP YAPENDIK 1</span>,
      },
      {
        accessorKey: "startDate",
        header: "SEMESTER DIMULAI",
        cell: ({ row }: any) => <span>{format(row.getValue('startDate'), 'yyyy-MM-dd')}</span>,
      },
      {
        accessorKey: "endDate",
        header: "SEMESTER BERAKHIR",
        cell: ({ row }: any) => <span>{format(row.getValue('endDate'), 'yyyy-MM-dd')}</span>,
      },
      {
        accessorKey: "action",
        header: "ACTION",
        cell: ({ row }: any) => <div className="flex gap-3">
         <ButtonEdit endpoint="/managements/manager/semester/edit/" id={row.original.id} />
         <ButtonDelete mutation={deleteTerm} loading={loading} id={row.original.id} />
        </div>,
      },
    ];

  const dataTerm: unknown[] = data?.terms || [];
  console.log(dataTerm)

  return (
    <DataTable
      columns={columns}
      data={dataTerm}
      filterName="name"
      filterPlaceholder="Cari Siswa.."
    />
  );
}
