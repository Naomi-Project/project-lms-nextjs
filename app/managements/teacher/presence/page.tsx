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
          <div className="col-span-1 mx-auto">
            <Image src={user} alt="user" className="w-10 h-10 rounded-full" />
          </div>

          <div className="col-span-6 my-auto">
            <p className="text-base">Andreass</p>
          </div>
          <div className="col-span-1 bg-green-100 border-green-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-green-500">Hadir</p>
          </div>
          <div className="col-span-1 bg-orange-100 border-orange-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-orange-500">Izin</p>
          </div>
          <div className="col-span-1 bg-red-100 border-red-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-red-500">Sakit</p>
          </div>
          <div className="col-span-2 bg-slate-100 border-slate-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-slate-500">Tanpa Keterangan</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-4">
          <div className="col-span-1 mx-auto">
            <Image src={user} alt="user" className="w-10 h-10 rounded-full" />
          </div>

          <div className="col-span-6 my-auto">
            <p className="text-base">Andreass</p>
          </div>
          <div className="col-span-1 bg-green-100 border-green-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-green-500">Hadir</p>
          </div>
          <div className="col-span-1 bg-orange-100 border-orange-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-orange-500">Izin</p>
          </div>
          <div className="col-span-1 bg-red-100 border-red-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-red-500">Sakit</p>
          </div>
          <div className="col-span-2 bg-slate-100 border-slate-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-slate-500">Tanpa Keterangan</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-4">
          <div className="col-span-1 mx-auto">
            <Image src={user} alt="user" className="w-10 h-10 rounded-full" />
          </div>

          <div className="col-span-6 my-auto">
            <p className="text-base">Andreass</p>
          </div>
          <div className="col-span-1 bg-green-100 border-green-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-green-500">Hadir</p>
          </div>
          <div className="col-span-1 bg-orange-100 border-orange-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-orange-500">Izin</p>
          </div>
          <div className="col-span-1 bg-red-100 border-red-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-red-500">Sakit</p>
          </div>
          <div className="col-span-2 bg-slate-100 border-slate-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-slate-500">Tanpa Keterangan</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-4">
          <div className="col-span-1 mx-auto">
            <Image src={user} alt="user" className="w-10 h-10 rounded-full" />
          </div>

          <div className="col-span-6 my-auto">
            <p className="text-base">Andreass</p>
          </div>
          <div className="col-span-1 bg-green-100 border-green-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-green-500">Hadir</p>
          </div>
          <div className="col-span-1 bg-orange-100 border-orange-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-orange-500">Izin</p>
          </div>
          <div className="col-span-1 bg-red-100 border-red-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-red-500">Sakit</p>
          </div>
          <div className="col-span-2 bg-slate-100 border-slate-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-slate-500">Tanpa Keterangan</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-4">
          <div className="col-span-1 mx-auto">
            <Image src={user} alt="user" className="w-10 h-10 rounded-full" />
          </div>

          <div className="col-span-6 my-auto">
            <p className="text-base">Andreass</p>
          </div>
          <div className="col-span-1 bg-green-100 border-green-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-green-500">Hadir</p>
          </div>
          <div className="col-span-1 bg-orange-100 border-orange-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-orange-500">Izin</p>
          </div>
          <div className="col-span-1 bg-red-100 border-red-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-red-500">Sakit</p>
          </div>
          <div className="col-span-2 bg-slate-100 border-slate-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-slate-500">Tanpa Keterangan</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-4">
          <div className="col-span-1 mx-auto">
            <Image src={user} alt="user" className="w-10 h-10 rounded-full" />
          </div>

          <div className="col-span-6 my-auto">
            <p className="text-base">Andreass</p>
          </div>
          <div className="col-span-1 bg-green-100 border-green-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-green-500">Hadir</p>
          </div>
          <div className="col-span-1 bg-orange-100 border-orange-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-orange-500">Izin</p>
          </div>
          <div className="col-span-1 bg-red-100 border-red-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-red-500">Sakit</p>
          </div>
          <div className="col-span-2 bg-slate-100 border-slate-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-slate-500">Tanpa Keterangan</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-4">
          <div className="col-span-1 mx-auto">
            <Image src={user} alt="user" className="w-10 h-10 rounded-full" />
          </div>

          <div className="col-span-6 my-auto">
            <p className="text-base">Andreass</p>
          </div>
          <div className="col-span-1 bg-green-100 border-green-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-green-500">Hadir</p>
          </div>
          <div className="col-span-1 bg-orange-100 border-orange-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-orange-500">Izin</p>
          </div>
          <div className="col-span-1 bg-red-100 border-red-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-red-500">Sakit</p>
          </div>
          <div className="col-span-2 bg-slate-100 border-slate-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-slate-500">Tanpa Keterangan</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-4">
          <div className="col-span-1 mx-auto">
            <Image src={user} alt="user" className="w-10 h-10 rounded-full" />
          </div>

          <div className="col-span-6 my-auto">
            <p className="text-base">Andreass</p>
          </div>
          <div className="col-span-1 bg-green-100 border-green-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-green-500">Hadir</p>
          </div>
          <div className="col-span-1 bg-orange-100 border-orange-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-orange-500">Izin</p>
          </div>
          <div className="col-span-1 bg-red-100 border-red-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-red-500">Sakit</p>
          </div>
          <div className="col-span-2 bg-slate-100 border-slate-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-slate-500">Tanpa Keterangan</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2 mt-4">
          <div className="col-span-1 mx-auto">
            <Image src={user} alt="user" className="w-10 h-10 rounded-full" />
          </div>

          <div className="col-span-6 my-auto">
            <p className="text-base">Andreass</p>
          </div>
          <div className="col-span-1 bg-green-100 border-green-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-green-500">Hadir</p>
          </div>
          <div className="col-span-1 bg-orange-100 border-orange-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-orange-500">Izin</p>
          </div>
          <div className="col-span-1 bg-red-100 border-red-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-red-500">Sakit</p>
          </div>
          <div className="col-span-2 bg-slate-100 border-slate-500 border-2 rounded-lg grid justify-items-center content-center">
            <p className="text-base text-slate-500">Tanpa Keterangan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
