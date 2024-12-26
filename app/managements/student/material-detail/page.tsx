import {
  BookOpen,
  BookText,
  DatabaseIcon,
  LibraryBig,
  Link2Icon,
  User2Icon,
} from "lucide-react";
import React from "react";

export default function StudentMaterialDetail() {
  return (
    <div className="min-h-screen">
      <div className="border-2 rounded-lg py-5 px-10 bg-white">
        <h1 className="text-xl font-bold">
          Materi Matematika Faktorial dan Aljabar
        </h1>

        <div className="w-4/12 mt-4">
          <div className="grid grid-cols-3 gap-4">
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
                  <BookText className="h-4 w-4 text-slate-400" />
                </div>

                <div className="col-span-4">
                  <p className="text-sm text-slate-400">Matematika</p>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-1 grid justify-items-end">
                  <DatabaseIcon className="h-4 w-4 text-slate-400" />
                </div>

                <div className="col-span-4">
                  <p className="text-sm text-slate-400">Semester 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg py-5 px-10 mt-10 bg-white">
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-1 grid justify-items-center border-r-2 border-slate-400">
            <div className="p-2 border-2 rounded-full border-slate-400">
              <BookOpen />
            </div>
          </div>

          <div className="col-span-8 my-auto">
            <h2 className="text-lg">Deskripsi Materi</h2>
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
          <div className="col-span-1 border px-3 rounded-md bg-slate-100">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-3 grid justify-items-center">
                <p>You Tube 1</p>
              </div>

              <div className="col-span-1 grid justify-items-end">
                <Link2Icon />
              </div>
            </div>
          </div>

          <div className="col-span-1 border px-3 rounded-md bg-slate-100">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-3 grid justify-items-center">
                <p>You Tube 1</p>
              </div>

              <div className="col-span-1 grid justify-items-end">
                <Link2Icon />
              </div>
            </div>
          </div>

          <div className="col-span-1 border px-3 rounded-md bg-slate-100">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-3 grid justify-items-center">
                <p>You Tube 1</p>
              </div>

              <div className="col-span-1 grid justify-items-end">
                <Link2Icon />
              </div>
            </div>
          </div>

          <div className="col-span-1 border px-3 rounded-md bg-slate-100">
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
      </div>

      <div className="border-2 rounded-lg py-5 px-10 mt-10 mb-20 bg-white">
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-1 grid justify-items-center border-r-2 border-slate-400">
            <div className="p-2 border-2 rounded-full border-slate-400">
              <LibraryBig />
            </div>
          </div>

          <div className="col-span-8 my-auto">
            <h2 className="text-lg">Referensi Perpusatakan Digital</h2>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mt-5">
          <div className="col-span-1 border px-3 rounded-md bg-slate-100">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-3 grid justify-items-center">
                <p>Matematika Dasar</p>
              </div>

              <div className="col-span-1 grid justify-items-end">
                <Link2Icon />
              </div>
            </div>
          </div>

          <div className="col-span-1 border px-3 rounded-md bg-slate-100">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-3 grid justify-items-center">
                <p>Matematika Dasar</p>
              </div>

              <div className="col-span-1 grid justify-items-end">
                <Link2Icon />
              </div>
            </div>
          </div>

          <div className="col-span-1 border px-3 rounded-md bg-slate-100">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-3 grid justify-items-center">
                <p>Matematika Dasar</p>
              </div>

              <div className="col-span-1 grid justify-items-end">
                <Link2Icon />
              </div>
            </div>
          </div>

          <div className="col-span-1 border px-3 rounded-md bg-slate-100">
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
