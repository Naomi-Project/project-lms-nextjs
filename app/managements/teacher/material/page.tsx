/* eslint-disable @next/next/no-img-element */


import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import ListCardMateri from "../../../../components/common/list/CommonListCardMateri";
import ListCardTugas from "@/components/common/list/CommonListCardTugas";

export default function MaterialTeacher() {
  return (
    <div className="min-h-screen">
      <div className="md:flex justify-between items-center">
        <div className="">
          <Link href="/managements/teacher/curiculum-create">
            <Button className="gap-2 mx-2">
              <Plus className="h-4 w-4" /> Buat Kurikulum
            </Button>
          </Link>
          <Link href="/managements/teacher/subject-create">
            <Button className="gap-2 mx-2">
              <Plus className="h-4 w-4" /> Buat Mata pelajaran
            </Button>
          </Link>
          <Link href="/managements/teacher/material/create">
            <Button className="gap-2">
              <Plus className="h-4 w-4" /> Buat Materi
            </Button>
          </Link>
          <Link href="/managements/teacher/tasks-create">
            <Button className="gap-2 mx-2">
              <Plus className="h-4 w-4" /> Buat Soal
            </Button>
          </Link>
        </div>

        <div className="md:mt-0 mt-3 grid grid-cols-3 gap-4">
          <div className="col-span-1 bg-white rounded-lg">
            <Select defaultValue="global">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="global">Global</SelectItem>
                <SelectItem value="matematika">Matematika</SelectItem>
                <SelectItem value="bahasa">Bahasa Indonesia</SelectItem>
                <SelectItem value="fisika">Fisika</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2 relative bg-white rounded-lg">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Cari Tugas" className="pl-8 w-full" />
          </div>
        </div>
      </div>

      <h1 className="mt-10 mb-5">Materi</h1>
      {/* card loop materi dari view  */}
      <ListCardMateri role="teacher" />
      {/* card loop materi dari view  */}
      <hr className="my-5" />
      <h1 className="mt-10 mb-5">Tugas</h1>
      {/* card loop tugas dari view  */}
      <ListCardTugas role="teacher" />
      {/* card loop tugas dari view  */}

    </div>
  );
}