"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  CalendarRange,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import poster from "../../../image/poster-materi.jpeg";

export default function DashboardStudent() {
  return (
    <div className="space-y-6 h-full">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        <div className="col-span-1 bg-white border-2 rounded-lg justify-items-center content-center py-2">
          <div className="grid grid-cols-4 gap-2 ">
            <div className="col-span-1 bg-orange-100 border-orange-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <BookText className="w-9 h-9 text-orange-400" />
            </div>

            <div className="col-span-3 grid content-center">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-base text-stone-400">Belum Diselesaikan</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base">8 Tugas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white border-2 rounded-lg justify-items-center content-center py-2">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1 bg-green-100 border-green-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <ClipboardList className="w-9 h-9 text-green-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-base text-stone-400">Tugas</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base">24</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white border-2 rounded-lg justify-items-center content-center py-2">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1 bg-blue-100 border-blue-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <Fence className="w-9 h-9 text-blue-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-base text-stone-400">Materi</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base">18 Materi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white border-2 rounded-lg justify-items-center content-center py-2">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1 bg-red-100 border-red-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <CalendarOff className="w-9 h-9 text-red-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-base text-stone-400">Absen</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base">2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="bg-white rounded-lg">
          <Select defaultValue="global">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="global">Global</SelectItem>
              <SelectItem value="matematika">Matematika</SelectItem>
              <SelectItem value="bahasa">Bahasa Indonesia</SelectItem>
              <SelectItem value="fisika">Fisika</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="relative bg-white rounded-lg">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Cari Tugas" className="pl-8 w-full" />
        </div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-10">
        <div className="col-span-1">
          <Link href="/managements/student/material-detail">
            <Card className="w-full h-[230px]">
              <CardHeader className="flex gap-3">
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Matematika
                </CardTitle>
                <CardDescription className="font-bold text-base text-black">
                  Selesaikan 5 Soal Persamaan kuadrat dengan motede faktorisasi
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <CardDescription className="flex gap-2">
                  <Calendar /> {' '}
                  <p>
                  Kumpulkan 3 hari lagi - 24 Okt 2025
                  </p>
                </CardDescription>
              </CardFooter>
            </Card>
          </Link>
        </div>
        <div className="col-span-1">
          <Link href="/managements/student/material-detail">
            <Card className="w-full h-[230px]">
              <CardHeader className="flex gap-3">
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Matematika
                </CardTitle>
                <CardDescription className="font-bold text-base text-black">
                  Selesaikan 5 Soal Persamaan kuadrat dengan motede faktorisasi
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <CardDescription className="flex gap-2">
                  <Calendar /> {' '}
                  <p>
                  Kumpulkan 3 hari lagi - 24 Okt 2025
                  </p>
                </CardDescription>
              </CardFooter>
            </Card>
          </Link>
        </div>
        <div className="col-span-1">
          <Link href="/managements/student/material-detail">
            <Card className="w-full h-[230px]">
              <CardHeader className="flex gap-3">
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Matematika
                </CardTitle>
                <CardDescription className="font-bold text-base text-black">
                  Selesaikan 5 Soal Persamaan kuadrat dengan motede faktorisasi
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <CardDescription className="flex gap-2">
                  <Calendar /> {' '}
                  <p>
                  Kumpulkan 3 hari lagi - 24 Okt 2025
                  </p>
                </CardDescription>
              </CardFooter>
            </Card>
          </Link>
        </div>
        <div className="col-span-1">
          <Link href="/managements/student/material-detail">
            <Card className="w-full h-[230px]">
              <CardHeader className="flex gap-3">
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Matematika
                </CardTitle>
                <CardDescription className="font-bold text-base text-black">
                  Selesaikan 5 Soal Persamaan kuadrat dengan motede faktorisasi
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <CardDescription className="flex gap-2">
                  <Calendar /> {' '}
                  <p>
                  Kumpulkan 3 hari lagi - 24 Okt 2025
                  </p>
                </CardDescription>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-10">
        <div className="col-span-1">
          <Link href="/managements/student/material-detail">
            <Card className="w-full h-[230px]">
              <CardHeader className="flex gap-3">
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Matematika
                </CardTitle>
                <CardDescription className="font-bold text-base text-black">
                  Selesaikan 5 Soal Persamaan kuadrat dengan motede faktorisasi
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <CardDescription className="flex gap-2">
                  <Calendar /> {' '}
                  <p>
                  Kumpulkan 3 hari lagi - 24 Okt 2025
                  </p>
                </CardDescription>
              </CardFooter>
            </Card>
          </Link>
        </div>
        <div className="col-span-1">
          <Link href="/managements/student/material-detail">
            <Card className="w-full h-[230px]">
              <CardHeader className="flex gap-3">
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Matematika
                </CardTitle>
                <CardDescription className="font-bold text-base text-black">
                  Selesaikan 5 Soal Persamaan kuadrat dengan motede faktorisasi
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <CardDescription className="flex gap-2">
                  <Calendar /> {' '}
                  <p>
                  Kumpulkan 3 hari lagi - 24 Okt 2025
                  </p>
                </CardDescription>
              </CardFooter>
            </Card>
          </Link>
        </div>
        <div className="col-span-1">
          <Link href="/managements/student/material-detail">
            <Card className="w-full h-[230px]">
              <CardHeader className="flex gap-3">
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Matematika
                </CardTitle>
                <CardDescription className="font-bold text-base text-black">
                  Selesaikan 5 Soal Persamaan kuadrat dengan motede faktorisasi
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <CardDescription className="flex gap-2">
                  <Calendar /> {' '}
                  <p>
                  Kumpulkan 3 hari lagi - 24 Okt 2025
                  </p>
                </CardDescription>
              </CardFooter>
            </Card>
          </Link>
        </div>
        <div className="col-span-1">
          <Link href="/managements/student/material-detail">
            <Card className="w-full h-[230px]">
              <CardHeader className="flex gap-3">
                <CardTitle className="font-light text-xs p-1 bg-slate-100 w-20 rounded-full text-center text-slate-400">
                  Matematika
                </CardTitle>
                <CardDescription className="font-bold text-base text-black">
                  Selesaikan 5 Soal Persamaan kuadrat dengan motede faktorisasi
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <CardDescription className="flex gap-2">
                  <Calendar /> {' '}
                  <p>
                  Kumpulkan 3 hari lagi - 24 Okt 2025
                  </p>
                </CardDescription>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
