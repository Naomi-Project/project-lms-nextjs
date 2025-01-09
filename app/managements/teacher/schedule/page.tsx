import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BadgePlus } from "lucide-react";
import React from "react";

export default function ScheduleTeacher() {
  return (
    <div className="min-h-screen">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
        <div className="col-span-1 border-2 rounded-lg p-8 bg-white">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold">Senin</h1>

            <Select>
              <SelectTrigger className="w-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="ubah">Ubah Jadwal</SelectItem>
                  <SelectItem value="tambah">Tambah Mata Pelajaran</SelectItem>
                  <SelectItem value="hapus" className="text-red-500">
                    Hapus Jadwal
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-3">
            <div className="grid grid-rows-5 gap-4">
              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg p-8 bg-white">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold">Selasa</h1>

            <Select>
              <SelectTrigger className="w-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="ubah">Ubah Jadwal</SelectItem>
                  <SelectItem value="tambah">Tambah Mata Pelajaran</SelectItem>
                  <SelectItem value="hapus" className="text-red-500">
                    Hapus Jadwal
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-3">
            <div className="grid grid-rows-5 gap-4">
              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg p-8 bg-white">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold">Rabu</h1>

            <Select>
              <SelectTrigger className="w-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="ubah">Ubah Jadwal</SelectItem>
                  <SelectItem value="tambah">Tambah Mata Pelajaran</SelectItem>
                  <SelectItem value="hapus" className="text-red-500">
                    Hapus Jadwal
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-3">
            <div className="grid grid-rows-5 gap-4">
              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg p-8 bg-white">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold">Kamis</h1>

            <Select>
              <SelectTrigger className="w-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="ubah">Ubah Jadwal</SelectItem>
                  <SelectItem value="tambah">Tambah Mata Pelajaran</SelectItem>
                  <SelectItem value="hapus" className="text-red-500">
                    Hapus Jadwal
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-3">
            <div className="grid grid-rows-5 gap-4">
              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg p-8 bg-white">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold">Jumat</h1>

            <Select>
              <SelectTrigger className="w-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="ubah">Ubah Jadwal</SelectItem>
                  <SelectItem value="tambah">Tambah Mata Pelajaran</SelectItem>
                  <SelectItem value="hapus" className="text-red-500">
                    Hapus Jadwal
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-3">
            <div className="grid grid-rows-5 gap-4">
              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg p-8 bg-white">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold">Sabtu</h1>

            <Select>
              <SelectTrigger className="w-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="ubah">Ubah Jadwal</SelectItem>
                  <SelectItem value="tambah">Tambah Mata Pelajaran</SelectItem>
                  <SelectItem value="hapus" className="text-red-500">
                    Hapus Jadwal
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-3">
            <div className="grid grid-rows-5 gap-4">
              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-10">
                  <div className="col-span-1 flex justify-center items-center">
                    <BadgePlus className="w-5 h-5 text-blue-400" />
                  </div>

                  <div className="col-span-9">
                    <p className="text-sm">Bahasa Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
