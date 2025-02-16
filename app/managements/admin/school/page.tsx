import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Search } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const data = [
  {
    no: "1",
    nameSchool: "SMP Negeri 1 Jakarta",
    sumStudent: "125",
    sumTeacher: "34",
    latePaid: "15",
    income: "Rp 100.000.000",
  },
  {
    no: "2",
    nameSchool: "SMP Negeri 1 Jakarta",
    sumStudent: "125",
    sumTeacher: "34",
    latePaid: "15",
    income: "Rp 100.000.000",
  },
  {
    no: "3",
    nameSchool: "SMP Negeri 1 Jakarta",
    sumStudent: "125",
    sumTeacher: "34",
    latePaid: "15",
    income: "Rp 100.000.000",
  },
  {
    no: "4",
    nameSchool: "SMP Negeri 1 Jakarta",
    sumStudent: "125",
    sumTeacher: "34",
    latePaid: "15",
    income: "Rp 100.000.000",
  },
  {
    no: "5",
    nameSchool: "SMP Negeri 1 Jakarta",
    sumStudent: "125",
    sumTeacher: "34",
    latePaid: "15",
    income: "Rp 100.000.000",
  },
  {
    no: "6",
    nameSchool: "SMP Negeri 1 Jakarta",
    sumStudent: "125",
    sumTeacher: "34",
    latePaid: "15",
    income: "Rp 100.000.000",
  },
  {
    no: "7",
    nameSchool: "SMP Negeri 1 Jakarta",
    sumStudent: "125",
    sumTeacher: "34",
    latePaid: "15",
    income: "Rp 100.000.000",
  },
  {
    no: "8",
    nameSchool: "SMP Negeri 1 Jakarta",
    sumStudent: "125",
    sumTeacher: "34",
    latePaid: "15",
    income: "Rp 100.000.000",
  },
];

export default function SchooldAdmin() {
  return (
    <div className="min-h-screen">
      <div className="bg-white rounded-lg p-5">
        <div className="flex justify-between items-center">
          <div className="rounded-lg bg-white">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default">
                  <Plus className="h-4 w-4" /> Buat Sekolah
                </Button>
              </DialogTrigger>
              <DialogContent className="md:w-4/12 w-96 rounded-lg">
                <DialogHeader>
                  <DialogTitle className="text-center">
                    Buat Sekolah
                  </DialogTitle>
                </DialogHeader>
                <div className="">
                  <Label htmlFor="title">Nama Sekolah</Label>
                  <Input
                    type="title"
                    id="title"
                    placeholder="Nama Lengkap Sekolah"
                  />
                </div>

                <div className="">
                  <Label htmlFor="title">Cabang Sekolah</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Cabang Jakarta" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="jakarta">Cabang Jakarta</SelectItem>
                        <SelectItem value="surabaya">
                          Cabang Surabaya
                        </SelectItem>
                        <SelectItem value="bandung">Cabang Bandung</SelectItem>
                        <SelectItem value="malang">Cabang Malang</SelectItem>
                        <SelectItem value="bogor">Cabang Bogor</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="">
                  <Label htmlFor="title">Tingkatan Sekolah</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Sekolah Dasar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="sd">Sekolah Dasar</SelectItem>
                        <SelectItem value="smp">
                          Sekolah Menengah Pertama
                        </SelectItem>
                        <SelectItem value="sma">
                          Sekolah Menengah Atas
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="">
                  <Label htmlFor="title">Akreditasi Sekolah</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="A" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="a">A</SelectItem>
                        <SelectItem value="ab">AB</SelectItem>
                        <SelectItem value="b">B</SelectItem>
                        <SelectItem value="bc">BC</SelectItem>
                        <SelectItem value="c">C</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="">
                  <Label htmlFor="title">Alamat Sekolah</Label>
                  <Input type="title" id="title" placeholder="Alamat" />
                </div>
                <DialogFooter>
                  <Button
                    type="reset"
                    variant="destructive"
                    className="md:mt-0 mt-2"
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 rounded-lg bg-white">
              <Select defaultValue="sekolah">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sekolah">Sekolah</SelectItem>
                  <SelectItem value="sd">Sekolah Dasar</SelectItem>
                  <SelectItem value="smp">Sekolah Menengah Pertama</SelectItem>
                  <SelectItem value="sma">Sekolah Menengah Atas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-2 relative rounded-lg bg-white">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Cari Sekolah" className="pl-8 w-full" />
            </div>
          </div>
        </div>

        <div className="border-2 rounded-lg bg-white mt-10">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-black">No.</TableHead>
                <TableHead className="font-bold text-black">
                  NAMA SEKOLAH
                </TableHead>
                <TableHead className="font-bold text-black">
                  TOTAL SISWA
                </TableHead>
                <TableHead className="font-bold text-black">
                  TOTAL GURU
                </TableHead>
                <TableHead className="font-bold text-black">
                  SISWA TELAT BAYAR
                </TableHead>
                <TableHead className="font-bold text-black">
                  PEMASUKAN
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((invoice) => (
                <TableRow key={invoice.no}>
                  <TableCell>{invoice.no}</TableCell>
                  <TableCell>{invoice.nameSchool}</TableCell>
                  <TableCell>{invoice.sumStudent}</TableCell>
                  <TableCell>{invoice.sumTeacher}</TableCell>
                  <TableCell>{invoice.latePaid}</TableCell>
                  <TableCell>{invoice.income}</TableCell>
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
        </div>
      </div>
    </div>
  );
}
