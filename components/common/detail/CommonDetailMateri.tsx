"use client";
/* eslint-disable */
import React from "react";
import { BookOpen, Calendar, DatabaseIcon, LibraryBig, Link2Icon, User2Icon } from "lucide-react";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge";


// 🔹 Definisikan tipe `Props`
interface MaterialDetailProps {
  data?: any;
  name: string;
  subject: string;
  semester?: string;
  createdAt?: string;
  guru?: string | null;
//   description?: string | null;
  code: string;
}

export default function MaterialDetail({ data, name, code = "", subject, semester, createdAt, guru = "" }: MaterialDetailProps) {
  // return
  return (
    <div className="min-h-screen">
      {/* 🔹 Nama Materi */}
      <div className="border-2 rounded-lg py-5 px-5 bg-white">
        <h1 className="text-xl font-bold">{name}</h1>

        {/* 🔹 Info Tambahan */}
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <div className="flex gap-2">
            <User2Icon className="h-4 w-4 text-slate-400" />
            <p className="text-slate-400">{guru ?? 'Tidak Diketahui'}</p>
          </div>
          <div className="flex gap-2">
            <DatabaseIcon className="h-4 w-4 text-slate-400" />
            <p className="text-slate-400">{subject ?? 'Tidak Diketahui'}</p>
          </div>
          <div className="flex gap-2">
            <Calendar className="h-4 w-4 text-slate-400" />
            <p className="text-slate-400">{format(createdAt ?? '', 'yyyy-MM-dd')}</p>
          </div>
        </div>
      </div>

      {/* 🔹 Deskripsi Materi */}
      <div className="border-2 rounded-lg py-5 px-5 mt-10 bg-white">
        <div className="grid grid-cols-10 gap-4">
          <div className="md:col-span-1 col-span-2 grid justify-items-center border-r-2 border-slate-400">
            <div className="p-2  rounded-full border-slate-400">
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
      <div className="border-2 rounded-lg py-5 px-5 mt-10 bg-white">
        <div className="grid grid-cols-10 gap-4">
          <div className="md:col-span-1 col-span-2 grid justify-items-center border-r-2 border-slate-400">
            <div className="p-2 rounded-full border-slate-400">
              <LibraryBig />
            </div>
          </div>

          <div className="md:col-span-9 col-span-8 my-auto">
            <h2 className="text-lg">Referensi Materi</h2>
          </div>
        </div>

        <div className="md:grid grid-cols-4 gap-6 mt-5">
          {data.references.length > 0 && data.references.map((dt: any, index: number) => (
            <div key={index} className="col-span-1 border px-3 rounded-md bg-slate-100">
              <div className="grid grid-cols-2 gap-2 py-2">
                  <Dialog>
                  <DialogTrigger>
                    <div className="col-span-3 grid justify-items-center">
                      <p>{"Referensi " + (index + 1)}</p>
                    </div>
                  </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{dt.title}</DialogTitle>
                        <DialogDescription>
                          <div
                            className="prose max-w-none"
                            dangerouslySetInnerHTML={{ __html: dt.description ?? "" }}
                          />
                          <div>
                          {dt.tags.map((tag: string, index: number) => (
                            <Badge key={index} className="mr-1">{tag}</Badge>
                          ))}
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                </Dialog>
                <div className="col-span-1 grid cursor-pointer justify-items-end" onClick={() => window.open(dt.url)}>
                  <Link2Icon className="text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
