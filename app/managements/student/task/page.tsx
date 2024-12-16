import { Button } from "@/components/ui/button";
import {
  BookIcon,
  BookOpen,
  BrickWall,
  CalendarCheck,
  DatabaseIcon,
  Link2Icon,
  PenBox,
  TableRowsSplit,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function TaskStudent() {
  return (
    <div className="min-h-screen">
      <div className="border-2 rounded-lg py-5 px-10">
        <div className="w-40 text-center bg-red-200 rounded-lg px-2 py-2 mb-5">
          <p className="text-sm text-red-600">Belum diselesaikan</p>
        </div>

        <h1 className="text-xl font-bold">Tugas Matematika Perkalian Ganda</h1>

        <div className="w-7/12 mt-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1 border-r-2 border-slate-700">
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-1 grid justify-items-end">
                  <CalendarCheck className="h-4 w-4" />
                </div>

                <div className="col-span-4">
                  <p className="text-sm">1 July 2024</p>
                </div>
              </div>
            </div>

            <div className="col-span-1 border-r-2 border-slate-700">
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-1 grid justify-items-end">
                  <User2Icon className="h-4 w-4" />
                </div>

                <div className="col-span-4">
                  <p className="text-sm">Demi He</p>
                </div>
              </div>
            </div>

            <div className="col-span-1 border-r-2 border-slate-700">
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-1 grid justify-items-end">
                  <DatabaseIcon className="h-4 w-4" />
                </div>

                <div className="col-span-4">
                  <p className="text-sm">Matematika</p>
                </div>
              </div>
            </div>

            <div className="col-span-1 border-r-2 border-slate-700">
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-1 grid justify-items-end">
                  <DatabaseIcon className="h-4 w-4" />
                </div>

                <div className="col-span-4">
                  <p className="text-sm">Semester 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg py-5 px-10 mt-10">
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
            menyederhanakan, dan mengoperasikan pecahan dalam berbagai konteks.
          </p>
        </div>

        <h2 className="text-lg mt-5 mb-3">Referensi</h2>

        <div className="grid grid-cols-4 gap-6">
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
                <Link href="/managements/student/task-detail">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-1">
                      <PenBox />
                    </div>

                    <div className="col-span-2">
                      <p>Kerjakan</p>
                    </div>
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg py-5 px-10 mt-10">
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-1 grid justify-items-center border-r-2 border-slate-700">
            <div className="p-2 border-2 rounded-full">
              <BrickWall />
            </div>
          </div>

          <div className="col-span-8 my-auto">
            <h2 className="text-lg">Referensi Materi</h2>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-5">
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
      </div>

      <div className="border-2 rounded-lg py-5 px-10 mt-10 mb-20">
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-1 grid justify-items-center border-r-2 border-slate-700">
            <div className="p-2 border-2 rounded-full">
              <BookOpen />
            </div>
          </div>

          <div className="col-span-8 my-auto">
            <h2 className="text-lg">Referensi Perpusatakan Digital</h2>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-5">
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
      </div>
    </div>
  );
}
