import { Toggle } from "@/components/ui/toggle";
import Image from "next/image";
import React from "react";
import user from "../../../../image/user.jpeg";

export default function ProfileTeacher() {
  return (
    <div className="min-h-screen">
      <Toggle
        value="bold"
        aria-label="Toggle bold"
        className="bg-blue-100 border-blue-100 rounded-lg"
      >
        <p className="text-sm text-blue-500">Profileku</p>
      </Toggle>

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
            <h1 className="font-bold text-sm">Jonathan Lian Li</h1>
            <p className="w-10 text-center mt-1 bg-blue-100 text-blue-400 p-1 border-blue-100 rounded-lg text-xs">
              Guru
            </p>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg bg-white p-5 mt-10">
        <h1 className="text-base font-bold">Data Guru</h1>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="col-span-1">
            <div className="">
              <p className="text-slate-400 text-sm">Nama Lengkap</p>

              <p className="text-sm">Jonathan Lian Li</p>
            </div>

            <div className="mt-3">
              <p className="text-slate-400 text-sm">NIK</p>

              <p className="text-sm">210950921512</p>
            </div>

            <div className="mt-3">
              <p className="text-slate-400 text-sm">Tempat Tgl Lahir</p>

              <p className="text-sm">Surabaya, 12 Maret 1934</p>
            </div>

            <div className="mt-3">
              <p className="text-slate-400 text-sm">Referensi Pekerjaan</p>

              <p className="text-sm">
                SMP Negeri 5,Jakarta; SMA Negeri 2 Jakarta
              </p>
            </div>

            <div className="mt-3">
              <p className="text-slate-400 text-sm">Nama Suami/Istri</p>

              <p className="text-sm">Maria Gabriella Sari</p>
            </div>

            <div className="mt-3">
              <p className="text-slate-400 text-sm">Data Keluarga</p>

              <p className="text-sm">Budi Saputra (Anak), Rina Saputra(Anak)</p>
            </div>
          </div>

          <div className="col-span-1">
            <div className="">
              <p className="text-slate-400 text-sm">Jabatan</p>

              <p className="text-sm">Guru</p>
            </div>

            <div className="mt-3">
              <p className="text-slate-400 text-sm">NUPTK</p>

              <p className="text-sm">6201287489175</p>
            </div>

            <div className="mt-3">
              <p className="text-slate-400 text-sm">Pendidikan</p>

              <p className="text-sm">Sarjana</p>
            </div>

            <div className="mt-3">
              <p className="text-slate-400 text-sm">Status Pegawai</p>

              <p className="text-sm">Pegawai Tetap</p>
            </div>

            <div className="mt-3">
              <p className="text-slate-400 text-sm">Pekerjaan Suami/Istri</p>

              <p className="text-sm">Konsultan Keuangan</p>
            </div>

            <div className="mt-3">
              <p className="text-slate-400 text-sm">Alamat Tinggal</p>

              <p className="text-sm">
                Jl. Jend. Sudirman No. 12, Kebayoran Baru, Jakarta Selatan,
                12190, Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
