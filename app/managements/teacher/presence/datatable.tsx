"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { AttendanceStatus, useCreateAttendanceMutation, useDeleteAnnouncementMutation, useDeleteAttendanceMutation, useGetAttendancesQuery, useGetClassroomsQuery, useGetMaterialsQuery, useGetUsersQuery, useUserPayloadQuery } from "@/graphql/generated";
import { endOfDay, format, startOfDay } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import * as React from 'react'
import { Badge } from "@/components/ui/badge";
import Swal from "sweetalert2";

  
  
export default function AttendancesTable() {
    const { data } = useGetClassroomsQuery()
    const { data: absen } = useGetAttendancesQuery()
    const { data: userPayload } = useUserPayloadQuery()
    const [deleteAttendance, { loading }] = useDeleteAttendanceMutation();
    const [attendanceStatus, setAttendanceStatus] = React.useState<{ [key: string]: string }>({});
    const [selectedStudents, setSelectedStudents] = React.useState<any[]>([])
    console.log(absen)

    const columns = [
      {
        accessorKey: "name",
        header: "NAMA MURID",
        cell: ({ row }: any) => <span className="">{row.getValue('name')}</span>,
      },
      {
        accessorKey: "action",
        header: "ABSENSI",
        cell: ({ row }: any) => {
          const existingAttendance = absen?.attendances.find(
            (item) => item.studentId === row.original.id
          );
    
          // Jika sudah absen, tampilkan status
          if (existingAttendance) {
            if (existingAttendance.status === 'PRESENT') {
              return (
               <Badge className="bg-green-100 text-green-700 shadow-none hover:bg-opaci  cursor-pointer py-1">Hadir</Badge>
              );
            } else if (existingAttendance.status === 'PERMIT') {
              return (
               <Badge className="bg-yellow-100 text-yellow-700 shadow-none hover:bg-opaci  cursor-pointer py-1">Izin</Badge>
              );
            } else if (existingAttendance.status === 'SICK') {
              return (
               <Badge className="bg-orange-100 text-orange-700 shadow-none hover:bg-opaci  cursor-pointer py-1">Sakit</Badge>
              );
            } else if (existingAttendance.status === 'ABSENT') {
              return (
               <Badge className="bg-red-100 text-red-700 shadow-none hover:bg-opaci  cursor-pointer py-1">Tidak Hadir</Badge>
              );
            }
          }
    
          // Jika belum absen, tampilkan dropdown untuk absensi
          return (
            <div className="flex gap-3">
              <Select
                value={attendanceStatus[row.original.id] || "PRESENT"}
                onValueChange={(value) => handleStatusChange(row.original.id, value)}
              >
                <SelectTrigger className="md:w-[180px] lg:w-[180px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PRESENT" className="">
                    <span className="text-primary">Hadir</span>
                  </SelectItem>
                  <SelectItem value="PERMIT" className="">
                    <span className="text-yellow-500">Izin</span>
                  </SelectItem>
                  <SelectItem value="SICK">
                    <span className="text-indigo-500">Sakit</span>
                  </SelectItem>
                  <SelectItem value="ABSENT">
                    <span className="text-red-500">Tidak Hadir</span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          );
        },
      },
    ];    
    
  
  const handleStatusChange = (studentId: string, status: string) => {
    setAttendanceStatus((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

  // cari data class yang menunjukan walikelas adalah user yang sedang login
  const filteringDataGuardian: unknown[] = data?.classrooms.filter((item: any) => item.guardian.id === userPayload?.me.id) || [];
  const studentsInClass: any[] = (filteringDataGuardian[0] as { students: any[] })?.students || [];

  React.useEffect(() => {
    if (studentsInClass.length > 0) {
      // Inisialisasi attendanceStatus untuk semua siswa
      const defaultStatus: { [key: string]: string } = {};
      studentsInClass.forEach((student) => {
        defaultStatus[student.id] = "PRESENT"; // Set semua siswa ke PRESENT
      });
      setAttendanceStatus(defaultStatus);
    }
  }, [studentsInClass]); // Hanya dijalankan saat daftar siswa berubah
  

  const [createAttendance] = useCreateAttendanceMutation()
  const handleAttendanceSubmit = async (selectedStudents: any[]) => {
    try {
      if (selectedStudents.length === 0) {
        Swal.fire({
          title: "Pilih Siswa!",
          text: "Silakan pilih minimal satu siswa untuk diabsen.",
          icon: "warning",
          timer: 2000,
          timerProgressBar: true,
        });
        return;
      }
  
      // ✅ Filter siswa yang SUDAH absen
      const startOfToday = startOfDay(new Date()).getTime(); // Awal hari ini dalam timestamp
      const endOfToday = endOfDay(new Date()).getTime(); // Akhir hari ini dalam timestamp
      const alreadyAbsentStudents = selectedStudents.filter((student) =>
        absen?.attendances.some(
          (exItem) =>
            exItem.studentId === student.id &&
            exItem.date >= startOfToday && // Harus lebih besar dari awal hari ini
            exItem.date <= endOfToday // Harus lebih kecil dari akhir hari ini
        )
      );
  
      // ✅ Filter siswa yang BELUM absen
      const studentsToBeAbsent = selectedStudents.filter(
        (student) => !alreadyAbsentStudents.includes(student)
      );
  
      // Jika semua siswa yang dipilih sudah absen, hentikan proses
      if (studentsToBeAbsent.length === 0) {
        Swal.fire({
          title: "Gagal Absen!",
          text: "Siswa yang dipilih sudah diabsen hari ini.",
          icon: "error",
          timer: 2500,
          timerProgressBar: true,
        });
        return;
      }
  
      // Tampilkan peringatan jika ada siswa yang sudah absen
      if (alreadyAbsentStudents.length > 0) {
        Swal.fire({
          title: "Beberapa Siswa Sudah Absen!",
          text: `${alreadyAbsentStudents.length} siswa sudah absen hari ini. Sisa ${studentsToBeAbsent.length} siswa akan tetap diabsen.`,
          icon: "warning",
          timer: 2500,
          timerProgressBar: true,
        });
      }
  
      // ✅ Lakukan Absensi untuk yang belum absen
      await Promise.all(
        studentsToBeAbsent.map(async (item) => {
          // console.log(item)
          // return
          try {
            const statusEnum = attendanceStatus[item.id] as AttendanceStatus;
            await createAttendance({
              variables: {
                data: {
                  classroomId: item.classroom.id,
                  studentId: item.id,
                  date: new Date(),
                  status: statusEnum,
                },
              },
            });
          } catch (error) {
            console.error("Error saat absen:", error);
          }
        })
      );
  
      // ✅ Notifikasi sukses setelah semua yang belum absen berhasil
      Swal.fire({
        title: "Absensi Berhasil!",
        text: `${studentsToBeAbsent.length} siswa berhasil diabsen.`,
        icon: "success",
        timer: 2500,
        timerProgressBar: true,
      }).then(() => {
        location.reload(); // Refresh halaman untuk update data
      });
  
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      Swal.fire({
        title: "Gagal!",
        text: "Terjadi kesalahan saat melakukan absensi.",
        icon: "error",
        timer: 2500,
        timerProgressBar: true,
      });
    }
  };
  
  const deleteAllAttendance = () => {
    absen?.attendances.map(async(item) => {
      try {
        // console.log(item.id)
        await deleteAttendance({
          variables: {
            data: item.id
          }
        })
      } catch (error) {
        console.log(error)
      }
    })
  }
  return (
    <>
    <div className="flex justify-between flex-wrap gap-10 border-2 bg-white rounded-lg px-10 py-10">
        <h1 className="text-3xl font-bold">Absensi Hari Ini</h1>
        <Button variant="default" onClick={() => deleteAllAttendance()}>
          Delete All Absensi
        </Button>
        <Button variant="default" onClick={() => handleAttendanceSubmit(selectedStudents)}>
          Lakukan Absensi
        </Button>
      </div>

      <div className="bg-white mt-10 border rounded-md p-5 ">
        <DataTable
          isAttendance={true}
          columns={columns}
          setSelectedStudents={setSelectedStudents}
          data={studentsInClass}
          filterName="name"
          onBulkAction={handleAttendanceSubmit}
          filterPlaceholder="Cari Siswa.."
        />
      </div>
    </>
  );
}
