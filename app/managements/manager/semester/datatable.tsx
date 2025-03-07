"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useDeleteTermMutation, useDeleteUserMutation, useGetSchoolsQuery, useGetTermsQuery, useGetUsersQuery } from "@/graphql/generated";
import { format } from "date-fns";

  
  
export default function TermTable() {
    const { data } = useGetTermsQuery()
    const { data: schools, loading: loadschools } = useGetSchoolsQuery()
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
        accessorKey: "schoolName",
        header: "NAMA SEKOLAH",
        cell: ({ row }: any) => <span>{row.getValue('schoolName')}</span>,
        // cell: ({ row }: any) => <span>SMP YAPENDIK 1</span>,
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

    // const findSchool = schools?.schools.find
    let dataTerm: any[] = data?.terms || [];

    dataTerm = dataTerm.map((item) => ({
      ...item,
      schoolName: schools?.schools.find((sc) => sc.id === item.schoolId)?.name ?? ''
    }));
    console.log(dataTerm)

    if (loadschools) return ''
  return (
    <DataTable
      columns={columns}
      data={dataTerm}
      filterName="name"
      filterPlaceholder="Cari Siswa.."
    />
  );
}
