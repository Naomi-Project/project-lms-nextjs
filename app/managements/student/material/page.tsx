/* eslint-disable */
"use client"

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import React, { useState } from "react";
import ListCardMateri from "../../../../components/common/list/CommonListCardMateri";
import { useGetSubjectsQuery } from "@/graphql/generated";
import { dataSelectTypes } from "@/helpers/static/FormClass";

export default function MaterialStudent() {
  const [search, setSearch] = useState<string>('')
  const [filter, setFilter] = useState<string>('')
  const { data: firstData } = useGetSubjectsQuery()
  const dataSubject: dataSelectTypes[] = firstData?.subjects.map((data) => ({
    label: data.name,
    value: data.id,
  })) || []
  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center">
        <div className="bg-white rounded-lg">
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
        <div className="relative bg-white">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={search} onChange={(e: any) => setSearch(e.target.value)} placeholder="Cari Materi" className="pl-8 w-full" />
        </div>
      </div>

      <h1 className="mt-5">Materi</h1>
      <ListCardMateri filter={filter} search={search} canDelete={false} />
    </div>
  );
}
