"use client"
import { Button } from "@/components/ui/button";
import ButtonAdd from "@/components/ui/buttonAdd";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Building2, Plus, UserRound, UsersRound } from "lucide-react";
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
      <div className="mt-4">
        <ButtonAdd endpoint="/managements/manager/class/induk/create" label="Buat Induk Kelas" />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <ListGrade title={"list grade"} />
      </div>

      <div className="mt-4">
       <ButtonAdd endpoint="/managements/manager/class/cabang/create" label="Buat Cabang Kelas" />
      </div>

      <div className="md:grid grid-cols-4 gap-4 mt-8">
        <ListClass title={"list class"} />
      </div>
    </div>
  );
}
