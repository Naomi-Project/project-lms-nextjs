"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useDeleteAssignmentMutation, useDeleteSubjectMutation, useDeleteUserMutation, useGetAssignmentsQuery, useGetSubjectsQuery, useGetUsersQuery } from "@/graphql/generated";
import { format } from "date-fns";

  
  
export default function SubjectTable() {
    const { data } = useGetSubjectsQuery()
    const [deleteSubject, { loading }] = useDeleteSubjectMutation();
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
        header: "MATA PELAJARAN",
        cell: ({ row }: any) => <span>{row.getValue('name')}</span>,
      },
      {
        accessorKey: "code",
        header: "KODE PELAJARAN",
        cell: ({ row }: any) => <span>{row.getValue('code')}</span>,
      },
      {
        accessorKey: "description",
        header: "DESKRIPSI PELAJARAN",
        cell: ({ row }: any) => <span>{row.getValue('description')}</span>,
      },
      {
        accessorKey: "action",
        header: "ACTION",
        cell: ({ row }: any) => <div className="flex gap-3">
         {/* <ButtonEdit endpoint="/managements/manager/mata-pelajaran/edit/" id={row.original.id} /> */}
         <ButtonDelete mutation={deleteSubject} loading={loading} id={row.original.id} />
        </div>,
      },
    ];

  const dataSubjects: unknown[] = data?.subjects || [];
  console.log(dataSubjects)

  return (
    <DataTable
      columns={columns}
      data={dataSubjects}
      filterName="name"
      filterPlaceholder="Cari Pelajaran.."
    />
  );
}
