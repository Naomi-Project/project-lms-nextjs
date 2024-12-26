import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import user from "../../../../image/user.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function ProfileStudent() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-start">
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            className="bg-blue-100 border-blue-100 rounded-lg"
          >
            <Link href="/managements/student/profile">
              <p className="text-sm text-blue-500">Profileku</p>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="italic"
            aria-label="Toggle italic"
            className="bg-white"
          >
            <Link href="/managements/student/profile-presence">
              <p className="text-sm text-slate-400">Laporan Presensi</p>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
            className="bg-white"
          >
            <Link href="/managements/student/profile-value">
              <p className="text-sm text-slate-400">Laporan Nilai</p>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
            className="bg-white"
          >
            <Link href="/managements/student/profile-payment">
              <p className="text-sm text-slate-400">Pembayaran SPP</p>
            </Link>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="border-2 rounded-lg mt-8 bg-white">
        <div className="grid grid-cols-12 p-4">
          <div className="col-span-1">
            <Image
              src={user}
              alt="user"
              className="w-16 h-16 rounded-lg mx-auto"
              priority={true}
            />
          </div>

          <div className="col-span-11 my-auto">
            <h1 className="font-bold text-sm">Muhammad Zulfikri</h1>
            <p className="w-7 text-center mt-1 bg-blue-100 text-blue-400 p-1 border-blue-100 rounded-lg text-xs">
              7A
            </p>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg mt-4 p-4 bg-white">
        <h1 className="text-base font-bold">Data Siswa</h1>

        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="col-span-1">
            <div className="">
              <p className="text-sm text-slate-400">Nama Lengkap</p>

              <p className="text-sm">Muhammad Zulfikri</p>
            </div>

            <div className="mt-3">
              <p className="text-sm text-slate-400">NIK</p>

              <p className="text-sm">210950921512</p>
            </div>

            <div className="mt-3">
              <p className="text-sm text-slate-400">Nama Orang Tua / Wali</p>

              <p className="text-sm">Daniel Alexander</p>
            </div>
          </div>

          <div className="col-span-1">
            <div className="">
              <p className="text-sm text-slate-400">NISN</p>

              <p className="text-sm">18657981265871</p>
            </div>

            <div className="mt-3">
              <p className="text-sm text-slate-400">
                No. Telfon Orang Tua / Wali
              </p>

              <p className="text-sm">+628123456789</p>
            </div>

            <div className="mt-3">
              <p className="text-sm text-slate-400">Alamat Tinggal</p>

              <p className="text-sm">Sidoarjo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
