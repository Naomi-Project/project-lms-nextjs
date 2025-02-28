"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useDeleteAnnouncementMutation, useGetAttendancesQuery, useGetMaterialsQuery, useGetUsersQuery } from "@/graphql/generated";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

  
  
export default function AttendancesTable() {
    const { data } = useGetUsersQuery()
    // const { data } = useGetMaterialsQuery()
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
        accessorKey: "name",
        header: "NAMA MURID",
        cell: ({ row }: any) => <span className="">{row.getValue('name')}</span>,
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
                <SelectItem value="PRESENT" className=""><span className="text-green-500">Hadir</span></SelectItem>
                <SelectItem value="PERMIT" className=""><span className="text-yellow-500">Izin</span></SelectItem>
                <SelectItem value="SICK"><span className="text-indigo-500">Sakit</span></SelectItem>
                <SelectItem value="ABSENT"><span className="text-red-500">Tidak Hadir</span></SelectItem>
              </SelectContent>
          </Select>
         {/* <ButtonEdit endpoint="/managements/manager/presence/edit/" id={row.original.id} />
         <ButtonDelete mutation={deleteAttendance} loading={loading} id={row.original.id} /> */}
        </div>,
      },
    ];

  // const dataAttendances: unknown[] = data?.attendances || [];
  const dataAttendances: unknown[] = data?.users.filter((item) => item.role === "STUDENT") || [];
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
