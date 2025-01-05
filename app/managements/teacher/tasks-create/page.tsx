"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Search, User } from "lucide-react";
import React from "react";

export default function TeacherTasksCreate() {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="min-h-screen">
      <div className="border-2 rounded-lg bg-white p-5">
        <Label htmlFor="title">Judul Tugas</Label>
        <Input
          type="title"
          id="title"
          placeholder="Isi Judul Tugas"
          className="mt-2"
        />

        <div className="md:grid grid-cols-5 gap-4 mt-3">
          <div className="col-span-1 md:border-r-2 border-r-0 ">
            <div className="md:w-10/12 w-full">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="text-black" />
                    {date ? (
                      format(date, "PPP")
                    ) : (
                      <span className="text-black">Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="col-span-1 md:border-r-2 border-r-0 md:mt-0 mt-3">
            <div className="md:w-10/12 w-full">
              <div className="grid md:grid-cols-5 grid-cols-12 gap-4">
                <div className="col-span-1">
                  <User className="text-slate-400 w-6 h-6" />
                </div>

                <div className="md:col-span-4 col-span-11 content-end">
                  <p className="text-slate-400 text-sm">Mochtar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:border-r-2 border-r-0 md:mt-0 mt-3">
            <div className="md:w-10/12 w-full">
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

          <div className="col-span-1 md:border-r-2 border-r-0 md:mt-0 mt-3">
            <div className="md:w-10/12 w-full">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Semester</SelectLabel>
                    <SelectItem value="semester1">Semester 1</SelectItem>
                    <SelectItem value="semester2">Semester 2</SelectItem>
                    <SelectItem value="semester3">Semester 3</SelectItem>
                    <SelectItem value="semester4">Semester 4</SelectItem>
                    <SelectItem value="semester5">Semester 5</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="col-span-1 md:mt-0 mt-3">
            <div className="md:w-10/12 w-full">
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
        <Label htmlFor="title">Deskripsi Tugas</Label>
        <Textarea placeholder="Isi Deskripsi Disini" />
      </div>

      <div className="border-2 rounded-lg bg-white p-5 mt-8">
        <Label htmlFor="title">Referensi Tugas</Label>

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
        <Label htmlFor="title">Referensi Dari Materi</Label>
        <div className="relative mt-2">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Cari Tugas" className="pl-8 w-full" />
        </div>
      </div>

      <div className="border-2 rounded-lg bg-white p-5 mt-8">
        <Label htmlFor="title">Referensi Dari Perpustakaan</Label>
        <div className="relative mt-2">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Cari E-Book" className="pl-8 w-full" />
        </div>
      </div>

      <div className="border-2 rounded-lg bg-white p-5 mt-8">
        <Label htmlFor="title">Pertanyaan</Label>
        <Input
          type="title"
          id="title"
          placeholder="Berapa 2 x 2 ?"
          className="mt-2"
        />

        <div className="mt-3">
          <RadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="6" id="r1" />
              <Label htmlFor="r1">6</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="4" id="r2" />
              <Label htmlFor="r2">4</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="8" id="r3" />
              <Label htmlFor="r3">8</Label>
            </div>
          </RadioGroup>
        </div>

        <Button variant="default" className="mt-3">
          + Buat Jawaban Baru
        </Button>
      </div>

      <div className="flex justify-center mt-3">
        <Button variant="default" className="w-3/12">
          Selesai
        </Button>
      </div>
    </div>
  );
}
