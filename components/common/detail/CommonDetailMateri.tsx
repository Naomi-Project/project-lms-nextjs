"use client";
/* eslint-disable */
import React from "react";
import { BookOpen, DatabaseIcon, LibraryBig, Link2Icon, User2Icon } from "lucide-react";

// 🔹 Definisikan tipe `Props`
interface MaterialDetailProps {
  name: string;
  subject: string;
  semester: string;
  guru?: string | null;
//   description?: string | null;
  code: string;
}

export default function MaterialDetail({ name, code = "", subject, semester, guru = "" }: MaterialDetailProps) {
  return (
    <div className="min-h-screen">
      {/* 🔹 Nama Materi */}
      <div className="border-2 rounded-lg py-5 px-10 bg-white">
        <h1 className="text-xl font-bold">{name}</h1>

        {/* 🔹 Info Tambahan */}
        <div className="md:w-5/12 w-full mt-4">
          <div className="grid grid-cols-3 gap-4">
            {/* 🔹 Nama Guru */}
            <div className="col-span-1 border-r-2 border-slate-400">
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-1 grid justify-items-end">
                  <User2Icon className="h-4 w-4 text-slate-400" />
                </div>
                <div className="col-span-4">
                  <p className="text-sm text-slate-400">
                    {guru}
                  </p>
                </div>
              </div>
            </div>

            {/* 🔹 Mata Pelajaran */}
            <div className="col-span-1 border-r-2 border-slate-400">
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-1 grid justify-items-end">
                  <DatabaseIcon className="h-4 w-4 text-slate-400" />
                </div>
                <div className="col-span-4">
                  <p className="text-sm text-slate-400">{subject}</p>
                </div>
              </div>
            </div>

            {/* 🔹 Semester */}
            <div className="col-span-1">
              <div className="grid grid-cols-5 gap-2">
                <div className="col-span-1 grid justify-items-end">
                  <DatabaseIcon className="h-4 w-4 text-slate-400" />
                </div>
                <div className="col-span-4">
                  <p className="text-sm text-slate-400">{semester}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Deskripsi Materi */}
      <div className="border-2 rounded-lg py-5 px-10 mt-10 bg-white">
        <div className="grid grid-cols-10 gap-4">
          <div className="md:col-span-1 col-span-2 grid justify-items-center border-r-2 border-slate-400">
            <div className="p-2 border-2 rounded-full border-slate-400">
              <BookOpen />
            </div>
          </div>

          <div className="md:col-span-9 col-span-8 my-auto">
            <h2 className="text-lg">Isi Materi</h2>
          </div>
        </div>

        {/* 🔹 Render Materi (HTML) */}
        <div className="mt-5 border-t pt-3">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: code }}
          />
        </div>
      </div>

      {/* 🔹 Referensi */}
      {/* <div className="border-2 rounded-lg py-5 px-10 mt-10 bg-white">
        <div className="grid grid-cols-10 gap-4">
          <div className="md:col-span-1 col-span-2 grid justify-items-center border-r-2 border-slate-400">
            <div className="p-2 border-2 rounded-full border-slate-400">
              <LibraryBig />
            </div>
          </div>

          <div className="md:col-span-9 col-span-8 my-auto">
            <h2 className="text-lg">Referensi Perpustakaan Digital</h2>
          </div>
        </div>

        <div className="md:grid grid-cols-4 gap-6 mt-5">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="col-span-1 border px-3 rounded-md bg-slate-100">
              <div className="grid grid-cols-4 gap-2">
                <div className="col-span-3 grid justify-items-center">
                  <p>Referensi {index + 1}</p>
                </div>
                <div className="col-span-1 grid justify-items-end">
                  <Link2Icon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
