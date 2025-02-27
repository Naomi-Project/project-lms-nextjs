"use client";
/* eslint-disable */
import React from "react";
import { Book, BookOpen, Calendar, DatabaseIcon, LibraryBig, Link2Icon, Paperclip, User2Icon } from "lucide-react";
import { title } from "process";
import FormHelpersEdit from "@/helpers/dynamic/FormTugasEdit";
import FormHelpersAdd from "@/helpers/dynamic/FormSubsmission";

// 🔹 Definisikan tipe `Props`
interface TasksDetailProps {
  idAssignment?: string | undefined;
  dataDefault?: any | undefined;
  title: string;
  role: string;
  subject: string;
  dueDate: string;
  // guru?: string | null;
  description?: string | null;
  typeTugas?: string | null;
  extendedData?: string;
}

export default function TasksDetail({ role = "teacher", dataDefault, idAssignment, title, extendedData = "", typeTugas = "", subject, dueDate, description = "" }: TasksDetailProps) {
  return (
    <div className="min-h-screen">
      {/* 🔹 Nama Tugas */}
      <div className="border-2 rounded-lg py-5 px-10 bg-white">
        <h1 className="text-xl font-bold">{title}</h1>

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
                    {"asep"}
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
                  <p className="text-sm text-slate-400">Tanggal Pengumpulan {dueDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 deskripsi soal */}
      <div className={`border-2 rounded-lg py-5 px-10 mt-10 bg-white ${role === "teacher" ? "hidden" : ""}`}>
        <div className="grid grid-cols-10 gap-4">
          <div className="md:col-span-1 col-span-2 grid justify-items-center border-r-2 border-slate-400">
            <div className="p-2 border-2 rounded-full border-slate-400">
              <BookOpen />
            </div>
          </div>

          <div className="md:col-span-9 col-span-8 my-auto">
            <h2 className="text-lg">Deskripsi Tugas</h2>
          </div>
        </div>

        {/* 🔹 Mapping soal */}
        <div className="mt-5 border-t pt-3">
          {
            role === "teacher" ? (
              <>
                {/* form edit soal utk teacher */}
                  <FormHelpersEdit />
                {/* form edit soal utk teacher */}
              </>
            ) : (
              <>
                {/* mapping soal utk student */}
                <div className="w-full flex flex-col">
                  <div className="w-full">
                    <div
                      className="prose max-w-none"
                      dangerouslySetInnerHTML={{ __html: description ?? "" }}
                    />
                  </div>
                  <div className="flex mt-5 flex-wrap justify-between ">
                    <div className="flex flex-wrap gap-2 items-end">
                      <Calendar className="text-primary" />
                      <div className="flex flex-col">
                        <span>{dueDate}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 items-end">
                      <Paperclip className="text-primary" />
                      <div className="flex flex-col">
                        <span>{typeTugas}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 items-end">
                      <Book className="text-primary" />
                      <div className="flex flex-col">
                        <span>{subject}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* mapping soal utk student */}
              </>
            )
          }
        </div>
      </div>

      {/* 🔹 isi soal */}
      <div className="border-2 rounded-lg py-5 px-10 mt-10 bg-white">
        <div className="grid grid-cols-10 gap-4">
          <div className="md:col-span-1 col-span-2 grid justify-items-center border-r-2 border-slate-400">
            <div className="p-2 border-2 rounded-full border-slate-400">
              <BookOpen />
            </div>
          </div>

          <div className="md:col-span-9 col-span-8 my-auto">
            <h2 className="text-lg">{role === "teacher" ? "Detail dan Edit" : "Kerjakan"} Tugas</h2>
          </div>
        </div>

        {/* 🔹 Mapping soal */}
        <div className={`border-t ${role === "teacher" ? "mt-5 pt-3" : ""}`}>
          {
            role === "teacher" ? (
              <>
                {/* form edit soal utk teacher */}
                  <FormHelpersEdit />
                {/* form edit soal utk teacher */}
              </>
            ) : (
              <>
                {/* mapping soal utk student */}
                  <FormHelpersAdd dataDefault={dataDefault} idAssignment={idAssignment} />
                {/* mapping soal utk student */}
              </>
            )
          }
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
