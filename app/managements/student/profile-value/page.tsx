import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function StudentProfileValue() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-start">
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            className="bg-white"
          >
            <Link href="/managements/student/profile">
              <p className="text-sm text-slate-400">Profileku</p>
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
            className="bg-blue-100 border-blue-100 rounded-lg"
          >
            <Link href="/managements/student/profile-value">
              <p className="text-sm text-blue-500">Laporan Nilai</p>
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

      <div className="w-3/12">
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="col-span-1 bg-white rounded-lg">
            <Select defaultValue="semester1">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="semester1">Semester 1</SelectItem>
                <SelectItem value="semester2">Semester 2</SelectItem>
                <SelectItem value="semester3">Semester 3</SelectItem>
                <SelectItem value="semester4">Semester 4</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-1 bg-white rounded-lg">
            <Select defaultValue="2024">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="mt-4 border-2 rounded-lg p-4 bg-white">
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-1 grid justify-items-center border-r-2 border-slate-400">
            <div className="p-2 border-2 rounded-full border-slate-400">
              <BookOpen />
            </div>
          </div>

          <div className="col-span-8 my-auto">
            <h2 className="text-lg">Rata - Rata Nilai Tugas</h2>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 mt-6">
          <div className="col-span-1">
            <p className="text-sm text-slate-400">Matematika</p>

            <p>79,9</p>
          </div>

          <div className="col-span-1">
            <p className="text-sm text-slate-400">Bahasa Inggris</p>

            <p>79,9</p>
          </div>

          <div className="col-span-1">
            <p className="text-sm text-slate-400">Bahasa Indonesia</p>

            <p>79,9</p>
          </div>

          <div className="col-span-1">
            <p className="text-sm text-slate-400">Kimia</p>

            <p>79,9</p>
          </div>

          <div className="col-span-1">
            <p className="text-sm text-slate-400">Fisika</p>

            <p>79,9</p>
          </div>
        </div>
      </div>

      <div className="mt-4 border-2 rounded-lg p-4 bg-white">
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-1 grid justify-items-center border-r-2 border-slate-400">
            <div className="p-2 border-2 rounded-full border-slate-400">
              <BookOpen />
            </div>
          </div>

          <div className="col-span-8 my-auto">
            <h2 className="text-lg">Nilai UTS</h2>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 mt-6">
          <div className="col-span-1">
            <p className="text-sm text-slate-400">Matematika</p>

            <p>79,9</p>
          </div>

          <div className="col-span-1">
            <p className="text-sm text-slate-400">Bahasa Inggris</p>

            <p>79,9</p>
          </div>

          <div className="col-span-1">
            <p className="text-sm text-slate-400">Bahasa Indonesia</p>

            <p>79,9</p>
          </div>

          <div className="col-span-1">
            <p className="text-sm text-slate-400">Kimia</p>

            <p>79,9</p>
          </div>

          <div className="col-span-1">
            <p className="text-sm text-slate-400">Fisika</p>

            <p>79,9</p>
          </div>
        </div>
      </div>

      <div className="mt-4 border-2 rounded-lg p-4 bg-white">
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-1 grid justify-items-center border-r-2 border-slate-400">
            <div className="p-2 border-2 rounded-full border-slate-400">
              <BookOpen />
            </div>
          </div>

          <div className="col-span-8 my-auto">
            <h2 className="text-lg">Nilai UAS</h2>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 mt-6">
          <div className="col-span-1">
            <p className="text-sm text-slate-400">Matematika</p>

            <p>79,9</p>
          </div>

          <div className="col-span-1">
            <p className="text-sm text-slate-400">Bahasa Inggris</p>

            <p>79,9</p>
          </div>

          <div className="col-span-1">
            <p className="text-sm text-slate-400">Bahasa Indonesia</p>

            <p>79,9</p>
          </div>

          <div className="col-span-1">
            <p className="text-sm text-slate-400">Kimia</p>

            <p>79,9</p>
          </div>

          <div className="col-span-1">
            <p className="text-sm text-slate-400">Fisika</p>

            <p>79,9</p>
          </div>
        </div>
      </div>
    </div>
  );
}
