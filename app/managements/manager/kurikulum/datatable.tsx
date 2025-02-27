"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useDeleteCurriculumMutation, useDeleteUserMutation, useGetCurriculumsQuery, useGetUsersQuery } from "@/graphql/generated";
import { format } from "date-fns";

  
  
export default function CurriculumTable() {
    const { data } = useGetCurriculumsQuery()
    // const { data } = useGetUsersQuery({
    //   variables: {
    //     role: "Curriculum" as string
    //   }
    // });
    const [deleteCurriculum, { loading }] = useDeleteCurriculumMutation();
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
        header: "NAMA KURIKULUM",
        cell: ({ row }: any) => <span>{row.getValue('name')}</span>,
      },
      {
        accessorKey: "createdAt",
        header: "DIBUAT",
        cell: ({ row }: any) => <span>{format(row.getValue('createdAt'), 'yyyy-MM-dd')}</span>,
      },
      {
        accessorKey: "updatedAt",
        header: "TERAKHIR UPDATE",
        // cell: ({ row }: any) => <span>{row.getValue('updatedAt')}</span>,
        cell: ({ row }: any) => <span>{format(row.getValue('updatedAt'), 'yyyy-MM-dd')}</span>,
      },
      {
        accessorKey: "action",
        header: "ACTION",
        cell: ({ row }: any) => <div className="flex gap-3">
         <ButtonEdit endpoint="/managements/manager/kurikulum/edit/" id={row.original.id} />
         <ButtonDelete mutation={deleteCurriculum} loading={loading} id={row.original.id} />
        </div>,
      },
    ];

  const dataCurriculum: unknown[] = data?.curriculums || [];
  console.log(dataCurriculum)

  return (
    <DataTable
      columns={columns}
      data={dataCurriculum}
      filterName="name"
      filterPlaceholder="Cari Siswa.."
    />
  );
}
