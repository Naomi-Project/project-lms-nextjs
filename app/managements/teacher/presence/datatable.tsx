"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useCreateAttendanceMutation, useDeleteAnnouncementMutation, useGetAttendancesQuery, useGetClassroomsQuery, useGetMaterialsQuery, useGetUsersQuery, useUserPayloadQuery } from "@/graphql/generated";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import * as React from 'react'

  
  
export default function AttendancesTable() {
    const { data } = useGetClassroomsQuery()
    const { data: userPayload } = useUserPayloadQuery()
    const [deleteAttendance, { loading }] = useDeleteAnnouncementMutation();
    const [attendanceStatus, setAttendanceStatus] = React.useState<{ [key: string]: string }>({});

    
    const handleStatusChange = (studentId: string, status: string) => {
      setAttendanceStatus((prev) => ({
        ...prev,
        [studentId]: status,
      }));
    };

    const columns = [
      // {
      //   accessorKey: "id",
      //   header: "No.",
      //   enableHiding: false,
      //   enableSorting: true,
      //   cell: ({ row }: any) => <span>{row.index + 1}</span>,
      // },
      {
        accessorKey: "name",
        header: "NAMA MURID",
        cell: ({ row }: any) => <span className="">{row.getValue('name')}</span>,
      },
      {
        accessorKey: "action",
        header: "ABSENSI",
        cell: ({ row }: any) => <div className="flex gap-3">
            <Select defaultValue="PRESENT" 
              value={attendanceStatus[row.original.id] || "PRESENT"}
              onValueChange={(value) => handleStatusChange(row.original.id, value)}
              >
              <SelectTrigger className="md:w-[180px] lg:w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PRESENT" className=""><span className="text-primary">Hadir</span></SelectItem>
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

  // const dataAttendances: unknown[] = data?.classrooms || [];
  const filteringDataGuardian: unknown[] = data?.classrooms.filter((item: any) => item.guardian.id === userPayload?.me.id) || [];
  // const dataAttendances = filteringDataGuardian[0].students || []
  const dataAttendances: any[] = (filteringDataGuardian[0] as { students: any[] })?.students || [];
  console.log(dataAttendances)
  const [createAttendance] = useCreateAttendanceMutation()
  const handleAttendanceSubmit = async (selectedStudents: any[]) => {
    try {
      selectedStudents.map((item) => {
        console.log(attendanceStatus.length)
        // console.log(attendanceStatus[1] || "PRESENT")
        console.log(attendanceStatus)
        // await createAttendance({
        //   variables: {
        //     data: {
        //       scheduleId: "1",
        //       studentId: item.id,
        //       date: new Date('2025-02-27'),
        //       status: attendanceStatus[item.id] || "PRESENT", ,
        //     }
        //   }
        // })
        console.log("Melakukan absensi untuk siswa:", item);
      })
    } catch {
      console.error('Something wrong..')
      alert('silakan coba lain waktu.')
    }
  };
  return (
    <>
    <div className="flex justify-between flex-wrap gap-10 border-2 bg-white rounded-lg px-10 py-10">
        <h1 className="text-3xl font-bold">Absensi Hari Ini</h1>
        <Button variant="default" onClick={() => handleAttendanceSubmit(dataAttendances)}>
          Lakukan Absensi
        </Button>
      </div>

      <div className="bg-white mt-10 border rounded-md p-5 ">
        <DataTable
          isAttendance={true}
          columns={columns}
          data={dataAttendances}
          filterName="name"
          onBulkAction={handleAttendanceSubmit}
          filterPlaceholder="Cari Siswa.."
        />
      </div>
    </>
  );
}
