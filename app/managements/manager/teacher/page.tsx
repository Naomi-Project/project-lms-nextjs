import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Search } from "lucide-react";
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
                  <Button variant="default">
                    <Plus /> Tambah Guru
                  </Button>
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

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 ml-1">
                <div className="w-[132px] bg-slate-200 rounded-lg">
                  <TabsTrigger value="aktif">Aktif</TabsTrigger>
                  <TabsTrigger value="nonAktif">Non Aktif</TabsTrigger>
                </div>
              </div>

              <div className="col-span-1 relative">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Cari Siswa" className="pl-8 w-full" />
              </div>
            </div>
          </TabsList>
          <TabsContent value="aktif" className="border-2 rounded-lg mt-4">
            <Table>
              <TableHeader className="bg-slate-100">
                <TableRow>
                  <TableHead className="font-bold text-black">No.</TableHead>
                  <TableHead className="font-bold text-black">
                    NAMA GURU
                  </TableHead>
                  <TableHead className="font-bold text-black">NIK</TableHead>
                  <TableHead className="font-bold text-black">
                    KOMPETENSI
                  </TableHead>
                  <TableHead className="font-bold text-black">STATUS</TableHead>
                  <TableHead className="font-bold text-black">KONTAK</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data1.map((invoice) => (
                  <TableRow key={invoice.no}>
                    <TableCell>{invoice.no}</TableCell>
                    <TableCell>{invoice.name}</TableCell>
                    <TableCell>{invoice.nik}</TableCell>
                    <TableCell className="text-blue-500 p-2">
                      {invoice.kompetensi}
                    </TableCell>
                    <TableCell>{invoice.status}</TableCell>
                    <TableCell>{invoice.contact}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow className="bg-white">
                  <TableCell colSpan={3}></TableCell>
                  <TableCell className="">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#" isActive>
                            2
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationNext href="#" />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TabsContent>
          <TabsContent value="nonAktif" className="border-2 rounded-lg mt-4">
            <Table>
              <TableHeader className="bg-slate-100">
                <TableRow>
                  <TableHead className="font-bold text-black">No.</TableHead>
                  <TableHead className="font-bold text-black">
                    NAMA GURU
                  </TableHead>
                  <TableHead className="font-bold text-black">NIK</TableHead>
                  <TableHead className="font-bold text-black">
                    KOMPETENSI
                  </TableHead>
                  <TableHead className="font-bold text-black">STATUS</TableHead>
                  <TableHead className="font-bold text-black">KONTAK</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data2.map((invoice) => (
                  <TableRow key={invoice.no}>
                    <TableCell>{invoice.no}</TableCell>
                    <TableCell>{invoice.name}</TableCell>
                    <TableCell>{invoice.nik}</TableCell>
                    <TableCell className="text-blue-500 p-2">
                      {invoice.kompetensi}
                    </TableCell>
                    <TableCell>{invoice.status}</TableCell>
                    <TableCell>{invoice.contact}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow className="bg-white">
                  <TableCell colSpan={3}></TableCell>
                  <TableCell className="">
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#" isActive>
                            2
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationNext href="#" />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
