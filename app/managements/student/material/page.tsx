/* eslint-disable @next/next/no-img-element */


import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import React from "react";
import ListCardMateri from "../../../../components/common/list/CommonListCardMateri";
import ListCardTugas from "@/components/common/list/CommonListCardTugas";

export default function MaterialStudent() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center">
        <div className="bg-white rounded-lg">
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
        <div className="relative bg-white">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Cari Materi" className="pl-8 w-full" />
        </div>
      </div>

      <h1 className="mt-5">Materi</h1>
      <ListCardMateri canDelete={false} />
    </div>
  );
}
