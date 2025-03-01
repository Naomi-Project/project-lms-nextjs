"use client";

/* eslint-disable */
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookText,
  ClipboardList,
  Fence,
  Plus,
  Search,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";


import ListCardTugas from "@/components/common/list/CommonListCardTugas";
import { useGetAssignmentsQuery, useGetMaterialsQuery, useGetSubjectsQuery } from "@/graphql/generated";

interface dataSelectTypes {
  label: string;
  value: string;
}

export default function DashboardTeacher() {
  const { data: tugas, error } = useGetAssignmentsQuery()
  const { data: materi } = useGetMaterialsQuery()
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
  if (error) {
    console.log(error)
  }
  return (
    <div className="h-auto">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
        <div className="col-span-1 bg-white border-2 rounded-lg justify-items-center content-center py-4">
          <div className="grid grid-cols-4 gap-2 ">
            <div className="col-span-1 p-2 rounded-lg bg-orange-50 flex items-center justify-center">
              <BookText className="w-9 h-9 text-orange-400" />
            </div>

            <div className="col-span-3 grid content-center">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-sm text-stone-400">Belum Diselesaikan</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base font-bold">{assignmentNotFinishLength ? assignmentNotFinishLength + " Tugas" : ""}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white border-2 rounded-lg justify-items-center content-center py-2">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1 p-2 rounded-lg bg-green-50 flex items-center justify-center">
              <ClipboardList className="w-9 h-9 text-green-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-sm text-stone-400">Tugas</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base font-bold">{assignmentLength ? assignmentLength + " Materi" : ""}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white border-2 rounded-lg justify-items-center content-center py-2">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1 bg-blue-50 p-2 rounded-lg flex items-center justify-center">
              <Fence className="w-9 h-9 text-blue-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-sm text-stone-400">Materi</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base font-bold">{materialLength ? materialLength + " Materi" : ""}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex justify-between items-center mt-6">
        <div className="">
          <Link href="/managements/teacher/tasks-create">
            <Button className="gap-2 mx-2">
              <Plus className="h-4 w-4" /> Buat tugas
            </Button>
          </Link>
        </div>

        <div className="flex gap-4 md:mt-0 mt-3">
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
      </div>

      
      <h1 className="mt-10 mb-5">Tugas</h1>
      {/* card loop tugas dari view  */}
      <ListCardTugas search={search} filter={filter} role="teacher" />
      {/* card loop tugas dari view  */}
      {/* <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-10">
        <div className="col-span-1">
          <Link href="/managements/teacher/tasks">
            <Card>
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
          <Link href="/managements/teacher/tasks">
            <Card>
              <Image
                src={poster}
                alt="matematika"
                className="rounded-lg w-full h-full"
              />
              <CardHeader>
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-28 rounded-full text-center text-slate-400">
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
          <Link href="/managements/teacher/tasks">
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
          <Link href="/managements/teacher/tasks">
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
          <Link href="/managements/teacher/tasks">
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
          <Link href="/managements/teacher/tasks">
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
          <Link href="/managements/teacher/tasks">
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
          <Link href="/managements/teacher/tasks">
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
