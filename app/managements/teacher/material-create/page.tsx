import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, User } from "lucide-react";
import React from "react";

export default function TeacherMaterialCreate() {
  return (
    <div className="min-h-screen">
      <div className="border-2 rounded-lg bg-white p-5">
        <Label htmlFor="title" className="font-bold">
          Judul Materi
        </Label>
        <Input
          type="title"
          id="title"
          placeholder="Isi Judul Materi"
          className="mt-2"
        />

        <div className="grid grid-cols-3 gap-4 mt-3">
          <div className="col-span-1 border-r-2">
            <div className="w-10/12">
              <div className="grid grid-cols-5 gap-4">
                <div className="col-span-1">
                  <User className="text-slate-400 w-6 h-6" />
                </div>

                <div className="col-span-4 my-auto">
                  <p className="text-slate-400 text-sm">Mochtar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 border-r-2">
            <div className="w-10/12">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Mata Pelajaran" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Mata Pelajaran</SelectLabel>
                    <SelectItem value="matematika">Matematika</SelectItem>
                    <SelectItem value="indonesia">Bahasa Indonesia</SelectItem>
                    <SelectItem value="inggris">Bahasa Inggris</SelectItem>
                    <SelectItem value="fisika">Fisika</SelectItem>
                    <SelectItem value="kimia">Kimia</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="col-span-1">
            <div className="w-10/12">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Kelas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Kelas</SelectLabel>
                    <SelectItem value="kelas7A">Kelas 7A</SelectItem>
                    <SelectItem value="kelas7B">Kelas 7B</SelectItem>
                    <SelectItem value="kelas7C">Kelas 7C</SelectItem>
                    <SelectItem value="kelas7D">Kelas 7D</SelectItem>
                    <SelectItem value="kelas7E">Kelas 7E</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg bg-white p-5 mt-8">
        <Label htmlFor="title" className="font-bold">
          Deskripsi Materi
        </Label>
        <Input
          type="title"
          id="title"
          placeholder="Isi Deskripsi"
          className="mt-2"
        />
      </div>

      <div className="border-2 rounded-lg bg-white p-5 mt-8">
        <Label htmlFor="title" className="font-bold">
          Referensi Materi
        </Label>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <Input
              type="title"
              id="title"
              placeholder="Judul Referensi"
              className="mt-2"
            />
          </div>

          <div className="col-span-1">
            <Input
              type="title"
              id="title"
              placeholder="Link Referensi"
              className="mt-2"
            />
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg bg-white p-5 mt-8">
        <Label htmlFor="title" className="font-bold">
          Referensi Dari Perpustakaan
        </Label>
        <div className="relative mt-2">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Cari E-Book" className="pl-8 w-full" />
        </div>
      </div>

      <div className="z-50 flex justify-center">
        <Button variant="default" className="mt-3">
          Selesai
        </Button>
      </div>
    </div>
  );
}
