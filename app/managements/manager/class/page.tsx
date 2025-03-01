"use client"
import ButtonAdd from "@/components/ui/buttonAdd";




import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Link from "next/link";
import React from "react";
import ListClass from "./listClass";
import ListGrade from "./listGrade";

export default function ClassManager() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-start">
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            className="bg-blue-100 border-blue-100 rounded-lg"
          >
            <Link href="/managements/manager/class">
              <p className="text-sm text-blue-500">Kelas</p>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="italic"
            aria-label="Toggle italic"
            className="bg-white"
          >
            <Link href="/managements/manager/class-management">
              <p className="text-sm text-slate-400">Manajemen Kelas Siswa</p>
            </Link>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="mt-5 border-b pb-5">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Induk/Angkatan</h1>
          <ButtonAdd endpoint="/managements/manager/class/induk/create" label="Buat Induk Kelas" />
        </div>

        <div className="md:grid grid-cols-3 gap-4">
          <ListGrade title={"list grade"} />
        </div>
      </div>

      <div className="mt-5">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Cabang/Sub Kelas</h1>
        <ButtonAdd endpoint="/managements/manager/class/cabang/create" label="Buat Cabang/Sub Kelas" />
        </div>

        <div className="md:grid grid-cols-4 gap-4">
          <ListClass title={"list class"} />
        </div>
      </div>
    </div>
  );
}
