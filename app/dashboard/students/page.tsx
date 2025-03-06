"use client";
/* eslint-disable */
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  CalendarOff,
  Fence,
  ClipboardList,
  BookText,
  User,
  Shield,
  Contact,
} from "lucide-react";
import ListCardTugas from "@/components/common/list/CommonListCardTugas";
import { useGetAssignmentsQuery, useGetAttendancesQuery, useGetClassroomsQuery, useGetMaterialsQuery, useGetSubjectsQuery, useUserPayloadQuery } from "@/graphql/generated";
import { useState } from "react";

interface dataSelectTypes {
  label: string;
  value: string;
}

export default function DashboardStudent() {
  const { data: tugas } = useGetAssignmentsQuery()
  const { data: materi } = useGetMaterialsQuery()
  const { data: classrooms, loading: loadClass } = useGetClassroomsQuery()
  const { data: userPayload } = useUserPayloadQuery()
  const { data: absen, loading } = useGetAttendancesQuery()
  const assignmentNotFinishLength = tugas?.assignments.filter((item) => item.submissions?.length == 0).length ?? "loading.."
  const assignmentLength = tugas?.assignments.length ?? "loading.."
  const materialLength = materi?.materials.length ?? "loading.."

  const [search, setSearch] = useState<string>('')
  const [filter, setFilter] = useState<string>('')
  const { data: firstData } = useGetSubjectsQuery()
  const dataSubject: dataSelectTypes[] = firstData?.subjects.map((data) => ({
    label: data.name,
    value: data.id,
  })) || []

  
  const findClass: any = classrooms?.classrooms.find((item) => item.students.some((item) => item.id === userPayload?.me.id)) || []
  const absensi: any[] = absen?.attendances.filter((item) => item.studentId === userPayload?.me.id) || []
  
  if (loadClass || loading) return 'loading..'
  
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="col-span-1 bg-white border-2 rounded-lg justify-items-center content-center py-4">
          <div className="grid grid-cols-4 gap-2 pl-2 ">
            <div className="col-span-1 bg-purple-100 border-purple-50 border-2 p-2 rounded-lg flex items-center justify-center">
              <User className="w-9 h-9 text-purple-400" />
            </div>

            <div className="col-span-3 grid content-center">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-base text-stone-400">Profile Murid</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base">{(userPayload?.me?.name?.charAt(0).toUpperCase() || '') + (userPayload?.me?.name?.slice(1) || '') || ""} - Kelas {findClass?.name ?? ''}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-white border-2 rounded-lg justify-items-center content-center py-4">
          <div className="grid grid-cols-4 gap-2 pl-2 ">
            <div className="col-span-1 bg-teal-100 border-teal-50 border-2 p-2 rounded-lg flex items-center justify-center">
              <Contact className="w-9 h-9 text-teal-400" />
            </div>

            <div className="col-span-3 grid content-center">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-base text-stone-400">Wali Kelas</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base">{findClass?.guardian?.name ?? "Belum Ada"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
        <div className="col-span-1 bg-white border-2 rounded-lg justify-items-center content-center py-4">
          <div className="grid grid-cols-4 gap-2 pl-2 ">
            <div className="col-span-1 bg-orange-100 border-orange-50 border-2 p-2 rounded-lg flex items-center justify-center">
              <BookText className="w-9 h-9 text-orange-400" />
            </div>

            <div className="col-span-3 grid content-center">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-base text-stone-400">Belum Diselesaikan</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base">{assignmentNotFinishLength ? assignmentNotFinishLength + " Tugas" : "0"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white border-2 rounded-lg justify-items-center content-center py-4">
          <div className="grid grid-cols-4 gap-2 pl-2">
            <div className="col-span-1 bg-green-100 border-green-50 border-2 p-2 rounded-lg flex items-center justify-center">
              <ClipboardList className="w-9 h-9 text-green-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-base text-stone-400">Tugas</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base">{assignmentLength ? assignmentLength + " Materi" : "0"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white border-2 rounded-lg justify-items-center content-center py-4">
          <div className="grid grid-cols-4 gap-2 pl-2">
            <div className="col-span-1 bg-blue-100 border-blue-50 border-2 p-2 rounded-lg flex items-center justify-center">
              <Fence className="w-9 h-9 text-blue-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-base text-stone-400">Materi</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base">{materialLength ? materialLength + " Materi" : "0"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white border-2 rounded-lg justify-items-center content-center py-4">
          <div className="grid grid-cols-4 gap-2 pl-2">
            <div className="col-span-1 bg-red-100 border-red-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <CalendarOff className="w-9 h-9 text-red-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-base text-stone-400">Absen</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base">{absensi.length || '0'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-5 flex-col md:flex-row">
        <div className="bg-white rounded-lg">
          <Select defaultValue="" onValueChange={(value) => setFilter(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Pilih Mata Pelajaran" />
            </SelectTrigger>
            <SelectContent>
              {
                dataSubject && dataSubject.map((item, index) => (
                  <SelectItem key={index} value={item.value}>{item.label}</SelectItem>
                ))
              }
            </SelectContent>
          </Select>
        </div>
        <div className="relative bg-white rounded-lg">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={search} onChange={(e: any) => setSearch(e.target.value)} placeholder="Cari Tugas" className="pl-8 w-full" />
        </div>
      </div>

      
      <h1 className="mt-10 mb-5">Tugas</h1>
      {/* card loop tugas dari view  */}
      <ListCardTugas filter={filter} search={search} canDelete={false} role="student" />
      {/* card loop tugas dari view  */}

      {/* <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-10">
        <div className="col-span-1">
          <Link href="/managements/student/tasks">
            <Card>
              <Image
                src={poster}
                alt="matematika"
                className="rounded-lg w-full h-full"
              />
              <CardHeader>
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Matematika
                </CardTitle>
                <CardDescription>
                  <p className="font-bold text-sm text-black">
                    Selesaikan 5 soal persamaan kuadrat dengan metode
                    faktorisasi.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="grid grid-cols-7">
                  <div className="col-span-1">
                    <CalendarRange className="w-5 h-5 text-blue-500" />
                  </div>

                  <div className="col-span-3">
                    <p className="text-xs text-slate-400">
                      Kumpulkan 3 Hari Lagi
                    </p>
                  </div>

                  <div className="col-span-3">
                    <p className="text-xs text-blue-500">24 Oktober 2025</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Link>
        </div>

        <div className="col-span-1">
          <Link href="/managements/student/tasks">
            <Card>
              <Image
                src={poster}
                alt="matematika"
                className="rounded-lg w-full h-full"
              />
              <CardHeader>
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-2 rounded-full text-center text-slate-400">
                  Bahasa Indonesia
                </CardTitle>
                <CardDescription>
                  <p className="font-bold text-sm text-black">
                    Buatlah sebuah teks deskripsi tentang tempat wisata yang
                    pernah kamu kunjungi.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="grid grid-cols-7">
                  <div className="col-span-1">
                    <CalendarRange className="w-5 h-5 text-blue-500" />
                  </div>

                  <div className="col-span-3">
                    <p className="text-xs text-slate-400">
                      Kumpulkan 3 Hari Lagi
                    </p>
                  </div>

                  <div className="col-span-3">
                    <p className="text-xs text-blue-500">24 Oktober 2025</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Link>
        </div>

        <div className="col-span-1">
          <Link href="/managements/student/tasks">
            <Card>
              <Image
                src={poster}
                alt="matematika"
                className="rounded-lg w-full h-full"
              />
              <CardHeader>
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Fisika
                </CardTitle>
                <CardDescription>
                  <p className="font-bold text-sm text-black">
                    Jelaskan aplikasi Hukum Newton dalam kehidupan sehari-hari
                    dan berikan contoh.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="grid grid-cols-7">
                  <div className="col-span-1">
                    <CalendarRange className="w-5 h-5 text-blue-500" />
                  </div>

                  <div className="col-span-3">
                    <p className="text-xs text-slate-400">
                      Kumpulkan 3 Hari Lagi
                    </p>
                  </div>

                  <div className="col-span-3">
                    <p className="text-xs text-blue-500">24 Oktober 2025</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Link>
        </div>

        <div className="col-span-1">
          <Link href="/managements/student/tasks">
            <Card>
              <Image
                src={poster}
                alt="matematika"
                className="rounded-lg w-full h-full"
              />
              <CardHeader>
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Sejarah
                </CardTitle>
                <CardDescription>
                  <p className="font-bold text-sm text-black">
                    Buatlah esai singkat mengenai peristiwa Proklamasi
                    Kemerdekaan Indonesia.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="grid grid-cols-7">
                  <div className="col-span-1">
                    <CalendarRange className="w-5 h-5 text-blue-500" />
                  </div>

                  <div className="col-span-3">
                    <p className="text-xs text-slate-400">
                      Kumpulkan 3 Hari Lagi
                    </p>
                  </div>

                  <div className="col-span-3">
                    <p className="text-xs text-blue-500">24 Oktober 2025</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Link>
        </div>

        <div className="col-span-1">
          <Link href="/managements/student/tasks">
            <Card>
              <Image
                src={poster}
                alt="matematika"
                className="rounded-lg w-full h-full"
              />
              <CardHeader>
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Ekonomi
                </CardTitle>
                <CardDescription>
                  <p className="font-bold text-sm text-black">
                    Berikan contoh nyata dari hukum permintaan dan penawaran
                    yang terjadi di pasar Indonesia.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="grid grid-cols-7">
                  <div className="col-span-1">
                    <CalendarRange className="w-5 h-5 text-blue-500" />
                  </div>

                  <div className="col-span-3">
                    <p className="text-xs text-slate-400">
                      Kumpulkan 3 Hari Lagi
                    </p>
                  </div>

                  <div className="col-span-3">
                    <p className="text-xs text-blue-500">24 Oktober 2025</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Link>
        </div>

        <div className="col-span-1">
          <Link href="/managements/student/tasks">
            <Card>
              <Image
                src={poster}
                alt="matematika"
                className="rounded-lg w-full h-full"
              />
              <CardHeader>
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  PPKN
                </CardTitle>
                <CardDescription>
                  <p className="font-bold text-sm text-black">
                    Jelaskan bagaimana penerapan nilai-nilai Demokrasi Pancasila
                    dalam sistem pemerintahan Indonesia.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="grid grid-cols-7">
                  <div className="col-span-1">
                    <CalendarRange className="w-5 h-5 text-blue-500" />
                  </div>

                  <div className="col-span-3">
                    <p className="text-xs text-slate-400">
                      Kumpulkan 3 Hari Lagi
                    </p>
                  </div>

                  <div className="col-span-3">
                    <p className="text-xs text-blue-500">24 Oktober 2025</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Link>
        </div>

        <div className="col-span-1">
          <Link href="/managements/student/tasks">
            <Card>
              <Image
                src={poster}
                alt="matematika"
                className="rounded-lg w-full h-full"
              />
              <CardHeader>
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Geografi
                </CardTitle>
                <CardDescription>
                  <p className="font-bold text-sm text-black">
                    Jelaskan jenis-jenis bencana alam di Indonesia dan faktor
                    penyebabnya.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="grid grid-cols-7">
                  <div className="col-span-1">
                    <CalendarRange className="w-5 h-5 text-blue-500" />
                  </div>

                  <div className="col-span-3">
                    <p className="text-xs text-slate-400">
                      Kumpulkan 3 Hari Lagi
                    </p>
                  </div>

                  <div className="col-span-3">
                    <p className="text-xs text-blue-500">24 Oktober 2025</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Link>
        </div>

        <div className="col-span-1">
          <Link href="/managements/student/tasks">
            <Card>
              <Image
                src={poster}
                alt="matematika"
                className="rounded-lg w-full h-full"
              />
              <CardHeader>
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Biologi
                </CardTitle>
                <CardDescription>
                  <p className="font-bold text-sm text-black">
                    Gambarkan dan jelaskan fungsi organ-organ dalam sistem
                    pencernaan manusia.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="grid grid-cols-7">
                  <div className="col-span-1">
                    <CalendarRange className="w-5 h-5 text-blue-500" />
                  </div>

                  <div className="col-span-3">
                    <p className="text-xs text-slate-400">
                      Kumpulkan 3 Hari Lagi
                    </p>
                  </div>

                  <div className="col-span-3">
                    <p className="text-xs text-blue-500">24 Oktober 2025</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </div> */}
    </div>
  );
}
