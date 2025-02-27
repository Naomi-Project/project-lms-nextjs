"use client"
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
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ListCardMateri from "../../../../components/common/list/CommonListCardMateri";
import { useGetAssignmentsQuery, useGetMaterialsQuery, useGetSubjectsQuery } from "@/graphql/generated";
import { dataSelectTypes } from "@/helpers/static/FormClass";

export default function MaterialTeacher() {
  const [search, setSearch] = useState<string>('')
  const [filter, setFilter] = useState<string>('')
  const { data: firstData } = useGetSubjectsQuery()
  const dataSubject: dataSelectTypes[] = firstData?.subjects.map((data) => ({
    label: data.name,
    value: data.id,
  })) || []
  return (
    <div className="min-h-screen">
      <div className="md:flex justify-between items-center">
        <div className="flex flex-wrap gap-3 justify-start items-start">
          <Link href="/managements/teacher/material/create">
            <Button className="gap-2 mx-2">
              <Plus className="h-4 w-4" /> Buat Materi
            </Button>
          </Link>
        </div>

        <div className="md:mt-0 mt-3 grid grid-cols-3 gap-4">
          <div className="col-span-1 bg-white rounded-lg">
            <Select defaultValue="" onValueChange={(value) => setFilter(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pilih Mata Pelajaran" />
              </SelectTrigger>
              <SelectContent>
                {
                  dataSubject && dataSubject.map((item, index) => (
                    <SelectItem key={index} value={item.value}>{item.label}</SelectItem>
                  ))
                }
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2 relative bg-white rounded-lg">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={search} onChange={(e: any) => setSearch(e.target.value)} placeholder="Cari Materi" className="pl-8 w-full" />
          </div>
        </div>
      </div>

      <h1 className="mt-10 mb-5">Materi</h1>
      {/* card loop materi dari view  */}
      <ListCardMateri search={search} filter={filter} role="teacher" />
      {/* card loop materi dari view  */}
      <hr className="my-5" />

    </div>
  );
}