/* eslint-disable */
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import TeacherTable from "./datatable";
import ButtonAdd from "@/components/ui/buttonAdd";

const data1 = [
  {
    no: "1",
    name: "Dan Heng",
    nik: "224151623213",
    kompetensi: "Bahasa Inggris | Matematika | PPKN",
    status: "Pegawai Tetap",
    contact: "08212384823",
  },
  {
    no: "2",
    name: "Dan Heng",
    nik: "224151623213",
    kompetensi: "Bahasa Inggris | Matematika | PPKN",
    status: "Pegawai Tetap",
    contact: "08212384823",
  },
  {
    no: "3",
    name: "Dan Heng",
    nik: "224151623213",
    kompetensi: "Bahasa Inggris | Matematika | PPKN",
    status: "Pegawai Tetap",
    contact: "08212384823",
  },
  {
    no: "4",
    name: "Dan Heng",
    nik: "224151623213",
    kompetensi: "Bahasa Inggris | Matematika | PPKN",
    status: "Pegawai Tetap",
    contact: "08212384823",
  },
  {
    no: "5",
    name: "Dan Heng",
    nik: "224151623213",
    kompetensi: "Bahasa Inggris | Matematika | PPKN",
    status: "Pegawai Tetap",
    contact: "08212384823",
  },
  {
    no: "6",
    name: "Dan Heng",
    nik: "224151623213",
    kompetensi: "Bahasa Inggris | Matematika | PPKN",
    status: "Pegawai Tetap",
    contact: "08212384823",
  },
  {
    no: "7",
    name: "Dan Heng",
    nik: "224151623213",
    kompetensi: "Bahasa Inggris | Matematika | PPKN",
    status: "Pegawai Tetap",
    contact: "08212384823",
  },
];

const data2 = [
  {
    no: "1",
    name: "Ko He Jin",
    nik: "224151623213",
    kompetensi: "Bahasa Inggris | Matematika | PPKN",
    status: "Pegawai Tetap",
    contact: "08212384823",
  },
  {
    no: "2",
    name: "Ko He Jin",
    nik: "224151623213",
    kompetensi: "Bahasa Inggris | Matematika | PPKN",
    status: "Pegawai Tetap",
    contact: "08212384823",
  },
  {
    no: "3",
    name: "Ko He Jin",
    nik: "224151623213",
    kompetensi: "Bahasa Inggris | Matematika | PPKN",
    status: "Pegawai Tetap",
    contact: "08212384823",
  },
  {
    no: "4",
    name: "Ko He Jin",
    nik: "224151623213",
    kompetensi: "Bahasa Inggris | Matematika | PPKN",
    status: "Pegawai Tetap",
    contact: "08212384823",
  },
  {
    no: "5",
    name: "Ko He Jin",
    nik: "224151623213",
    kompetensi: "Bahasa Inggris | Matematika | PPKN",
    status: "Pegawai Tetap",
    contact: "08212384823",
  },
  {
    no: "6",
    name: "Ko He Jin",
    nik: "224151623213",
    kompetensi: "Bahasa Inggris | Matematika | PPKN",
    status: "Pegawai Tetap",
    contact: "08212384823",
  },
  {
    no: "7",
    name: "Ko He Jin",
    nik: "224151623213",
    kompetensi: "Bahasa Inggris | Matematika | PPKN",
    status: "Pegawai Tetap",
    contact: "08212384823",
  },
];

export default function ManagerTeacher() {
  return (
    <div className="min-h-screen">
      <div className="border-2 rounded-lg bg-white p-5 mt-10">
        <Tabs defaultValue="aktif" className="w-full">
          <TabsList className="w-full flex justify-between bg-white">
            <div className="bg-slate-200 rounded-lg">
              <Dialog>
                <DialogTrigger asChild>
                  <ButtonAdd endpoint="/managements/manager/teacher/create" label="Tambah Guru" />
                </DialogTrigger>
                <DialogContent className="md:w-4/12 w-96 rounded-lg">
                  <ScrollArea className="h-96">
                    <DialogHeader>
                      <DialogTitle className="text-center">
                        Tambah Guru
                      </DialogTitle>
                    </DialogHeader>
                    <div className="">
                      <Label htmlFor="name" className="text-right">
                        Nama Lengkap
                      </Label>
                      <Input type="text" placeholder="Nama Lengkap Siswa" />
                    </div>

                    <div className="mt-3">
                      <Label htmlFor="name" className="text-right">
                        NIK
                      </Label>
                      <Input type="text" placeholder="NIK" />
                    </div>

                    <div className="mt-3">
                      <Label htmlFor="name" className="text-right">
                        Kompetensi
                      </Label>
                      <Input type="text" placeholder="Kompetensi" />
                    </div>

                    <div className="mt-3">
                      <Label htmlFor="name" className="text-right">
                        Status
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="pegawai">
                              Pegawai Tetap
                            </SelectItem>
                            <SelectItem value="honorer">Honorer</SelectItem>
                            <SelectItem value="magang">Magang</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="mt-3">
                      <Label htmlFor="name" className="text-right">
                        Kontak
                      </Label>
                      <Input type="text" placeholder="+62xxxxxxxxx" />
                    </div>

                    <div className="mt-3">
                      <Checkbox id="terms" />
                      <label htmlFor="terms" className="ml-2 text-sm">
                        Guru Pindahaan
                      </label>
                    </div>
                  </ScrollArea>
                  <DialogFooter className="mt-5">
                    <Button type="submit" variant="default" className="w-full">
                      Selesai
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="col-span-1 ml-1">
                <div className="w-[132px] bg-slate-200 rounded-lg">
                  <TabsTrigger value="aktif">Aktif</TabsTrigger>
                  <TabsTrigger value="nonAktif">Non Aktif</TabsTrigger>
                </div>
              </div>

              {/* <div className="col-span-1 relative">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Cari Siswa" className="pl-8 w-full" />
              </div> */}
            </div>
          </TabsList>
          <TabsContent value="aktif" className=" rounded-lg mt-4">
            <TeacherTable />
          </TabsContent>
          <TabsContent value="nonAktif" className=" rounded-lg mt-4">
            <TeacherTable />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
