import React from "react";
import { Plus, TrendingDown, TrendingUp } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Search } from "lucide-react";
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

const data1 = [
  {
    no: "1",
    name: "Fu Xuan",
    nisn: "676678",
    class: "7A",
    guardian: "Johan",
    contact: "08212384823",
  },
  {
    no: "2",
    name: "Fu Xuan",
    nisn: "676678",
    class: "7A",
    guardian: "Johan",
    contact: "08212384823",
  },
  {
    no: "3",
    name: "Fu Xuan",
    nisn: "676678",
    class: "7A",
    guardian: "Johan",
    contact: "08212384823",
  },
  {
    no: "4",
    name: "Fu Xuan",
    nisn: "676678",
    class: "7A",
    guardian: "Johan",
    contact: "08212384823",
  },
  {
    no: "5",
    name: "Fu Xuan",
    nisn: "676678",
    class: "7A",
    guardian: "Johan",
    contact: "08212384823",
  },
  {
    no: "6",
    name: "Fu Xuan",
    nisn: "676678",
    class: "7A",
    guardian: "Johan",
    contact: "08212384823",
  },
  {
    no: "7",
    name: "Fu Xuan",
    nisn: "676678",
    class: "7A",
    guardian: "Johan",
    contact: "08212384823",
  },
];

const data2 = [
  {
    no: "1",
    name: "Fulan",
    nisn: "676678",
    class: "7A",
    guardian: "Johan",
    contact: "08212384823",
  },
  {
    no: "2",
    name: "Fulan",
    nisn: "676678",
    class: "7A",
    guardian: "Johan",
    contact: "08212384823",
  },
  {
    no: "3",
    name: "Fulan",
    nisn: "676678",
    class: "7A",
    guardian: "Johan",
    contact: "08212384823",
  },
  {
    no: "4",
    name: "Fulan",
    nisn: "676678",
    class: "7A",
    guardian: "Johan",
    contact: "08212384823",
  },
  {
    no: "5",
    name: "Fulan",
    nisn: "676678",
    class: "7A",
    guardian: "Johan",
    contact: "08212384823",
  },
  {
    no: "6",
    name: "Fulan",
    nisn: "676678",
    class: "7A",
    guardian: "Johan",
    contact: "08212384823",
  },
  {
    no: "7",
    name: "Fulan",
    nisn: "676678",
    class: "7A",
    guardian: "Johan",
    contact: "08212384823",
  },
];

export default function ManagerStudent() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="col-span-1">
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="col-span-1 bg-white p-2 rounded-lg">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 my-auto">
                  <p className="text-base">Total Siswa</p>
                </div>

                <div className="col-span-1 rounded-lg p-2 border-green-500 bg-green-100 border-2">
                  <div className="grid grid-cols-2">
                    <div className="col-span-1">
                      <TrendingUp className="text-green-500" />
                    </div>

                    <div className="col-span-1 my-auto">
                      <p className="text-xs text-green-500">4.49%</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-3xl font-bold">900</p>
              <p className="text-slate-400 text-sm">Siswa</p>

              <p className="text-slate-400 text-sm mt-3">
                Naik lebih banyak 18 siswa dari tahun lalu
              </p>
            </div>

            <div className="col-span-1 bg-white p-2 rounded-lg">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 my-auto">
                  <p className="text-base">Total Siswa</p>
                </div>

                <div className="col-span-1 rounded-lg p-2 border-red-500 bg-red-100 border-2">
                  <div className="grid grid-cols-2">
                    <div className="col-span-1">
                      <TrendingDown className="text-red-500" />
                    </div>

                    <div className="col-span-1 my-auto">
                      <p className="text-xs text-red-500">2%</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-3xl font-bold">314</p>
              <p className="text-slate-400 text-sm">Siswa</p>

              <p className="text-slate-400 text-sm mt-3">
                Turun lebih sedikit 12 siswa dari tahun lalu
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="grid grid-rows-2 gap-4">
            <div className="row-span-1 bg-white p-2 rounded-lg">
              <p className="text-base">Siswa Lulus Tahun Ini</p>

              <p className="font-bold text-3xl mt-2">120</p>
            </div>

            <div className="row-span-1 bg-white p-2 rounded-lg">
              <p className="text-base">Siswa Dikeluarkan Tahun Ini</p>

              <p className="font-bold text-3xl mt-2">12</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg bg-white p-5 mt-10">
        <Tabs defaultValue="aktif" className="w-full">
          <TabsList className="w-full flex justify-between bg-white">
            <div className="bg-slate-200 rounded-lg">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default">
                    <Plus /> Tambah Siswa
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-center">
                      Tambah Siswa
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
                      NISN
                    </Label>
                    <Input type="text" placeholder="NISN" />
                  </div>

                  <div className="mt-3">
                    <Label htmlFor="name" className="text-right">
                      Nama Orang Tua/Wali
                    </Label>
                    <Input type="text" placeholder="Nama Orang Tua/Wali" />
                  </div>

                  <div className="mt-3">
                    <Label htmlFor="name" className="text-right">
                      No. Telfon Orang Tua/Wali
                    </Label>
                    <Input type="text" placeholder="+62xxxxxxxxxxx" />
                  </div>

                  <div className="mt-3">
                    <Label htmlFor="name" className="text-right">
                      Alamat Tempat Tinggal
                    </Label>
                    <Input type="text" placeholder="Alamat" />
                  </div>

                  <div className="mt-3">
                    <Label htmlFor="name" className="text-right">
                      Pilih Kelas Tujuan
                    </Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-1">
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Pilih Induk Kelas" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="kelas7">Kelas 7</SelectItem>
                              <SelectItem value="kelas8">Kelas 8</SelectItem>
                              <SelectItem value="kelas9">Kelas 9</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="col-span-1">
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Cabang Kelas" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="kelas7a">Kelas 7A</SelectItem>
                              <SelectItem value="kelas7b">Kelas 7B</SelectItem>
                              <SelectItem value="kelas7c">Kelas 7C</SelectItem>
                              <SelectItem value="kelas7d">Kelas 7D</SelectItem>
                              <SelectItem value="kelas7e">Kelas 7E</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="ml-2 text-sm">
                      Siswa Pindahaan
                    </label>
                  </div>
                  <DialogFooter className="mt-5">
                    <Button type="submit" variant="default" className="w-full">
                      Selesai
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1 flex justify-end">
                <div className="w-8/12">
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
                    NAMA SISWA
                  </TableHead>
                  <TableHead className="font-bold text-black">NISN</TableHead>
                  <TableHead className="font-bold text-black">KELAS</TableHead>
                  <TableHead className="font-bold text-black">WALI</TableHead>
                  <TableHead className="font-bold text-black">KONTAK</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data1.map((invoice) => (
                  <TableRow key={invoice.no}>
                    <TableCell>{invoice.no}</TableCell>
                    <TableCell>{invoice.name}</TableCell>
                    <TableCell>{invoice.nisn}</TableCell>
                    <TableCell>{invoice.class}</TableCell>
                    <TableCell>{invoice.guardian}</TableCell>
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
                    NAMA SISWA
                  </TableHead>
                  <TableHead className="font-bold text-black">NISN</TableHead>
                  <TableHead className="font-bold text-black">KELAS</TableHead>
                  <TableHead className="font-bold text-black">WALI</TableHead>
                  <TableHead className="font-bold text-black">KONTAK</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data2.map((invoice) => (
                  <TableRow key={invoice.no}>
                    <TableCell>{invoice.no}</TableCell>
                    <TableCell>{invoice.name}</TableCell>
                    <TableCell>{invoice.nisn}</TableCell>
                    <TableCell>{invoice.class}</TableCell>
                    <TableCell>{invoice.guardian}</TableCell>
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
