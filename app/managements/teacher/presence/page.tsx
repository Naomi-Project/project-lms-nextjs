import { Button } from "@/components/ui/button";
import React from "react";
import user from "../../../../image/user.jpeg";
import Image from "next/image";

export default function PresenceTeacher() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-between border-2 bg-white rounded-lg p-5">
        <h1 className="text-3xl font-bold">Absensi Hari Ini</h1>

        <Button variant="default">Selesai</Button>
      </div>

      <div className="border-2 bg-white rounded-lg p-5 mt-10">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-1 content-center justify-items-center">
            <Image
              src={user}
              alt="user"
              className="md:w-10 md:h-10 w-8 h-8 rounded-full"
            />
          </div>

          <div className="md:col-span-6 col-span-3 my-auto">
            <p className="md:text-base text-sm">Andreass</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-green-100 border-green-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-green-500">Hadir</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-orange-100 border-orange-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-orange-500">Izin</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-red-100 border-red-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-red-500">Sakit</p>
          </div>
          <div className="col-span-2 bg-slate-100 border-slate-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-slate-500 text-center">
              Tanpa Keterangan
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-4">
          <div className="col-span-1 content-center justify-items-center">
            <Image
              src={user}
              alt="user"
              className="md:w-10 md:h-10 w-8 h-8 rounded-full"
            />
          </div>

          <div className="md:col-span-6 col-span-3 my-auto">
            <p className="md:text-base text-sm">Andreass</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-green-100 border-green-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-green-500">Hadir</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-orange-100 border-orange-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-orange-500">Izin</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-red-100 border-red-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-red-500">Sakit</p>
          </div>
          <div className="col-span-2 bg-slate-100 border-slate-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-slate-500 text-center">
              Tanpa Keterangan
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-4">
          <div className="col-span-1 content-center justify-items-center">
            <Image
              src={user}
              alt="user"
              className="md:w-10 md:h-10 w-8 h-8 rounded-full"
            />
          </div>

          <div className="md:col-span-6 col-span-3 my-auto">
            <p className="md:text-base text-sm">Andreass</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-green-100 border-green-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-green-500">Hadir</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-orange-100 border-orange-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-orange-500">Izin</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-red-100 border-red-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-red-500">Sakit</p>
          </div>
          <div className="col-span-2 bg-slate-100 border-slate-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-slate-500 text-center">
              Tanpa Keterangan
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-4">
          <div className="col-span-1 content-center justify-items-center">
            <Image
              src={user}
              alt="user"
              className="md:w-10 md:h-10 w-8 h-8 rounded-full"
            />
          </div>

          <div className="md:col-span-6 col-span-3 my-auto">
            <p className="md:text-base text-sm">Andreass</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-green-100 border-green-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-green-500">Hadir</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-orange-100 border-orange-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-orange-500">Izin</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-red-100 border-red-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-red-500">Sakit</p>
          </div>
          <div className="col-span-2 bg-slate-100 border-slate-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-slate-500 text-center">
              Tanpa Keterangan
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-4">
          <div className="col-span-1 content-center justify-items-center">
            <Image
              src={user}
              alt="user"
              className="md:w-10 md:h-10 w-8 h-8 rounded-full"
            />
          </div>

          <div className="md:col-span-6 col-span-3 my-auto">
            <p className="md:text-base text-sm">Andreass</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-green-100 border-green-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-green-500">Hadir</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-orange-100 border-orange-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-orange-500">Izin</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-red-100 border-red-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-red-500">Sakit</p>
          </div>
          <div className="col-span-2 bg-slate-100 border-slate-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-slate-500 text-center">
              Tanpa Keterangan
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-4">
          <div className="col-span-1 content-center justify-items-center">
            <Image
              src={user}
              alt="user"
              className="md:w-10 md:h-10 w-8 h-8 rounded-full"
            />
          </div>

          <div className="md:col-span-6 col-span-3 my-auto">
            <p className="md:text-base text-sm">Andreass</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-green-100 border-green-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-green-500">Hadir</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-orange-100 border-orange-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-orange-500">Izin</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-red-100 border-red-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-red-500">Sakit</p>
          </div>
          <div className="col-span-2 bg-slate-100 border-slate-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-slate-500 text-center">
              Tanpa Keterangan
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-4">
          <div className="col-span-1 content-center justify-items-center">
            <Image
              src={user}
              alt="user"
              className="md:w-10 md:h-10 w-8 h-8 rounded-full"
            />
          </div>

          <div className="md:col-span-6 col-span-3 my-auto">
            <p className="md:text-base text-sm">Andreass</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-green-100 border-green-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-green-500">Hadir</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-orange-100 border-orange-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-orange-500">Izin</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-red-100 border-red-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-red-500">Sakit</p>
          </div>
          <div className="col-span-2 bg-slate-100 border-slate-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-slate-500 text-center">
              Tanpa Keterangan
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-4">
          <div className="col-span-1 content-center justify-items-center">
            <Image
              src={user}
              alt="user"
              className="md:w-10 md:h-10 w-8 h-8 rounded-full"
            />
          </div>

          <div className="md:col-span-6 col-span-3 my-auto">
            <p className="md:text-base text-sm">Andreass</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-green-100 border-green-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-green-500">Hadir</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-orange-100 border-orange-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-orange-500">Izin</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-red-100 border-red-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-red-500">Sakit</p>
          </div>
          <div className="col-span-2 bg-slate-100 border-slate-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-slate-500 text-center">
              Tanpa Keterangan
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-4">
          <div className="col-span-1 content-center justify-items-center">
            <Image
              src={user}
              alt="user"
              className="md:w-10 md:h-10 w-8 h-8 rounded-full"
            />
          </div>

          <div className="md:col-span-6 col-span-3 my-auto">
            <p className="md:text-base text-sm">Andreass</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-green-100 border-green-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-green-500">Hadir</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-orange-100 border-orange-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-orange-500">Izin</p>
          </div>
          <div className="md:col-span-1 col-span-2 bg-red-100 border-red-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-red-500">Sakit</p>
          </div>
          <div className="col-span-2 bg-slate-100 border-slate-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="md:text-base text-xs text-slate-500 text-center">
              Tanpa Keterangan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
