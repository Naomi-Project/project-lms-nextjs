import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookIcon,
  BrickWall,
  CalendarCheck,
  Check,
  DatabaseIcon,
  Link2Icon,
  ListChecks,
  PenBox,
  Pencil,
  TableRowsSplit,
  User2Icon,
  X,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import user from "../../../../image/user.jpeg";
import Image from "next/image";

export default function TaksTeacher() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-10 gap-4 border-2 rounded-lg py-5 px-10 bg-white">
        <div className="col-span-9">
          <h1 className="text-xl font-bold">
            Tugas Matematika Perkalian Ganda
          </h1>

          <div className="w-7/12 mt-4">
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-1 border-r-2 border-slate-400">
                <div className="grid grid-cols-5 gap-2">
                  <div className="col-span-1 grid justify-items-end">
                    <CalendarCheck className="h-4 w-4 text-slate-400" />
                  </div>

                  <div className="col-span-4">
                    <p className="text-sm text-slate-400">1 July 2024</p>
                  </div>
                </div>
              </div>

              <div className="col-span-1 border-r-2 border-slate-400">
                <div className="grid grid-cols-5 gap-2">
                  <div className="col-span-1 grid justify-items-end">
                    <User2Icon className="h-4 w-4 text-slate-400" />
                  </div>

                  <div className="col-span-4">
                    <p className="text-sm text-slate-400">Demi He</p>
                  </div>
                </div>
              </div>

              <div className="col-span-1 border-r-2 border-slate-400">
                <div className="grid grid-cols-5 gap-2">
                  <div className="col-span-1 grid justify-items-end">
                    <DatabaseIcon className="h-4 w-4 text-slate-400" />
                  </div>

                  <div className="col-span-4">
                    <p className="text-sm text-slate-400">Matematika</p>
                  </div>
                </div>
              </div>

              <div className="col-span-1 border-r-2 border-slate-400">
                <div className="grid grid-cols-5 gap-2">
                  <div className="col-span-1 grid justify-items-end">
                    <DatabaseIcon className="h-4 w-4 text-slate-400" />
                  </div>

                  <div className="col-span-4">
                    <p className="text-sm text-slate-400">Semester 1</p>
                  </div>
                </div>
              </div>

              <div className="col-span-1 border-r-2 border-slate-400">
                <div className="grid grid-cols-5 gap-2">
                  <div className="col-span-1 grid justify-items-end">
                    <DatabaseIcon className="h-4 w-4 text-slate-400" />
                  </div>

                  <div className="col-span-4">
                    <p className="text-sm text-slate-400">Kelas 7A</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 content-center">
          <Button variant="default">
            <Link href="#">
              <div className="grid grid-cols-4 gap-2">
                <div className="col-span-1">
                  <Pencil />
                </div>

                <div className="col-span-3">
                  <p>Edit</p>
                </div>
              </div>
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-8">
        <div className="col-span-9 border-2 rounded-lg bg-white py-5 px-10">
          <div className="grid grid-cols-10 gap-4">
            <div className="col-span-1 grid justify-items-center border-r-2 border-slate-700">
              <div className="p-2 border-2 rounded-full">
                <BookIcon />
              </div>
            </div>

            <div className="col-span-8 my-auto">
              <h2 className="text-lg">Deskripsi Tugas</h2>
            </div>
          </div>

          <div className="mt-5">
            <p>
              Dalam tugas ini, siswa diminta untuk mengeksplorasi dan memahami
              konsep pecahan melalui berbagai aktivitas dan soal latihan. Tujuan
              dari tugas ini adalah untuk membantu siswa mengembangkan pemahaman
              yang mendalam tentang pecahan, termasuk bagaimana membandingkan,
              menyederhanakan, dan mengoperasikan pecahan dalam berbagai
              konteks.
            </p>
          </div>

          <h2 className="text-lg mt-5 mb-3">Referensi</h2>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1 border px-3 rounded-md bg-slate-200">
              <div className="grid grid-cols-4 gap-2">
                <div className="col-span-3 grid justify-items-center">
                  <p>You Tube 1</p>
                </div>

                <div className="col-span-1 grid justify-items-end">
                  <Link2Icon />
                </div>
              </div>
            </div>

            <div className="col-span-1 border px-3 rounded-md bg-slate-200">
              <div className="grid grid-cols-4 gap-2">
                <div className="col-span-3 grid justify-items-center">
                  <p>You Tube 1</p>
                </div>

                <div className="col-span-1 grid justify-items-end">
                  <Link2Icon />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1 border px-3 rounded-md bg-slate-200">
              <div className="grid grid-cols-4 gap-2">
                <div className="col-span-3 grid justify-items-center">
                  <p>You Tube 1</p>
                </div>

                <div className="col-span-1 grid justify-items-end">
                  <Link2Icon />
                </div>
              </div>
            </div>

            <div className="col-span-1 border px-3 rounded-md bg-slate-200">
              <div className="grid grid-cols-4 gap-2">
                <div className="col-span-3 grid justify-items-center">
                  <p>You Tube 1</p>
                </div>

                <div className="col-span-1 grid justify-items-end">
                  <Link2Icon />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 border-2 rounded-md bg-slate-200">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-1 my-auto grid justify-items-end">
                <TableRowsSplit />
              </div>

              <div className="col-span-9 my-auto">
                <p>Soal Pilihan Ganda</p>
              </div>

              <div className="col-span-2 grid justify-items-end">
                <Button variant="default">
                  <Link href="/managements/student/tasks-detail">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="col-span-1">
                        <PenBox />
                      </div>

                      <div className="col-span-2">
                        <p>Edit</p>
                      </div>
                    </div>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 border-2 rounded-lg bg-white p-5">
          <div className="grid grid-cols-5 gap-4 mb-5">
            <div className="col-span-1">
              <div className="border-2 rounded-full w-10 h-10 grid justify-items-center content-center">
                <ListChecks className="w-6 h-6" />
              </div>
            </div>

            <div className="col-span-4 border-l-2 my-auto pl-3">
              <h1 className="text-xl text-center">Tracking</h1>
            </div>
          </div>

          <Tabs defaultValue="belum" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="belum">Belum Selesai</TabsTrigger>
              <TabsTrigger value="selesai">Selesai</TabsTrigger>
            </TabsList>
            <TabsContent value="belum">
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-1">
                  <Image
                    src={user}
                    alt="user"
                    className="w-10 h-10 rounded-full"
                  />
                </div>

                <div className="col-span-3 my-auto">
                  <p className="text-sm">Michel</p>
                </div>

                <div className="col-span-1 my-auto">
                  <div className="rounded-full bg-yellow-200">
                    <X className="text-red-600 w-4 h-4 mx-auto" />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="selesai">
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-1">
                  <Image
                    src={user}
                    alt="user"
                    className="w-10 h-10 rounded-full"
                  />
                </div>

                <div className="col-span-3 my-auto">
                  <p className="text-sm">Michel</p>
                </div>

                <div className="col-span-1 my-auto">
                  <div className="rounded-full bg-yellow-200">
                    <Check className="text-red-600 w-4 h-4 mx-auto" />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="border-2 rounded-lg py-5 px-10 mt-10 w-9/12 bg-white">
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-1 grid justify-items-center border-r-2 border-slate-700">
            <div className="p-2 border-2 rounded-full">
              <BrickWall />
            </div>
          </div>

          <div className="col-span-9 my-auto">
            <h2 className="text-lg">Referensi Materi</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="col-span-1 border px-3 rounded-md bg-slate-200">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-3 grid justify-items-center">
                <p>Matematika Dasar</p>
              </div>

              <div className="col-span-1 grid justify-items-end">
                <Link2Icon />
              </div>
            </div>
          </div>

          <div className="col-span-1 border px-3 rounded-md bg-slate-200">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-3 grid justify-items-center">
                <p>Matematika Dasar</p>
              </div>

              <div className="col-span-1 grid justify-items-end">
                <Link2Icon />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="col-span-1 border px-3 rounded-md bg-slate-200">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-3 grid justify-items-center">
                <p>Matematika Dasar</p>
              </div>

              <div className="col-span-1 grid justify-items-end">
                <Link2Icon />
              </div>
            </div>
          </div>

          <div className="col-span-1 border px-3 rounded-md bg-slate-200">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-3 grid justify-items-center">
                <p>Matematika Dasar</p>
              </div>

              <div className="col-span-1 grid justify-items-end">
                <Link2Icon />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 border-2 rounded-md bg-slate-200">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-1 my-auto grid justify-items-end">
              <TableRowsSplit />
            </div>

            <div className="col-span-9 my-auto">
              <p>Matematika Dasar</p>
            </div>

            <div className="col-span-2 grid justify-items-end">
              <Button variant="default">
                <Link href="/managements/student/tasks-detail">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1">
                      <PenBox />
                    </div>

                    <div className="col-span-2">
                      <p>Edit</p>
                    </div>
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
