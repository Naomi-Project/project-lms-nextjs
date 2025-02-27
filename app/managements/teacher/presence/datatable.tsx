"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useDeleteAnnouncementMutation, useDeleteAttendanceQuery, useGetAttendancesQuery, useGetMaterialsQuery, useGetUsersQuery } from "@/graphql/generated";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

  
  
export default function AttendancesTable() {
    // const { data } = useGetAttendancesQuery()
    const { data } = useGetMaterialsQuery()
    // });
    const [deleteAttendance, { loading }] = useDeleteAnnouncementMutation();
    const columns = [
      {
        accessorKey: "id",
        header: "No.",
        enableHiding: false,
        enableSorting: true,
        cell: ({ row }: any) => <span>{row.index + 1}</span>,
      },
      {
        accessorKey: "title",
        header: "NAMA MURID",
        cell: ({ row }: any) => <span>{row.getValue('title')}</span>,
      },
      {
        accessorKey: "action",
        header: "ABSENSI",
        cell: ({ row }: any) => <div className="flex gap-3">
            <Select defaultValue="PRESENT">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PRESENT"><span className="text-primary">Hadir</span></SelectItem>
                <SelectItem value="SICK"><span className="text-warning">Sakit</span></SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
          </Select>
         {/* <ButtonEdit endpoint="/managements/manager/presence/edit/" id={row.original.id} />
         <ButtonDelete mutation={deleteAttendance} loading={loading} id={row.original.id} /> */}
        </div>,
      },
    ];

  // const dataAttendances: unknown[] = data?.attendances || [];
  const dataAttendances: unknown[] = data?.materials || [];
  console.log(dataAttendances)

  return (
    <DataTable
      columns={columns}
      data={dataAttendances}
      filterName="name"
      filterPlaceholder="Cari Siswa.."
    />
  );
}
