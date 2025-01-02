import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { MousePointer, Search, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import React from "react";

const data = [
  {
    no: "1",
    name: "Fu Xuan",
    nisn: "676678",
    class: "Kelas 7",
  },
  {
    no: "2",
    name: "Fu Xuan",
    nisn: "676678",
    class: "Kelas 8",
  },
  {
    no: "3",
    name: "Fu Xuan",
    nisn: "676678",
    class: "Kelas 9",
  },
  {
    no: "4",
    name: "Fu Xuan",
    nisn: "676678",
    class: "Kelas 7",
  },
  {
    no: "5",
    name: "Fu Xuan",
    nisn: "676678",
    class: "Kelas 9",
  },
  {
    no: "6",
    name: "Fu Xuan",
    nisn: "676678",
    class: "Kelas 8",
  },
  {
    no: "7",
    name: "Fu Xuan",
    nisn: "676678",
    class: "Kelas 7",
  },
];

export default function ManagerClassManagement() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-start">
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            className="bg-white"
          >
            <Link href="/managements/manager/class">
              <p className="text-sm text-slate-400">Kelas</p>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="italic"
            aria-label="Toggle italic"
            className="bg-blue-100 border-blue-100 rounded-lg"
          >
            <Link href="/managements/manager/class-management">
              <p className="text-sm text-blue-500">Manajemen Kelas Siswa</p>
            </Link>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="mt-6 bg-white rounded-lg p-5">
        <div className="md:flex justify-between">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <Button variant="outline">
                <MousePointer /> Tentukan Kelas
              </Button>
            </div>

            <div className="col-span-1">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <SlidersHorizontal /> Pindah Kelas
                  </Button>
                </DialogTrigger>
                <DialogContent className="md:w-5/12 w-96 rounded-lg">
                  <DialogHeader>
                    <DialogTitle className="text-center">
                      Buat Cabang Kelas
                    </DialogTitle>
                  </DialogHeader>
                  <div className="">
                    <Label htmlFor="name" className="text-right">
                      Cabang Kelas
                    </Label>

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

                  <div className="">
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
                            <SelectValue placeholder="Pilih Cabang Kelas" />
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

                  <DialogFooter className="mt-5">
                    <Button type="submit" variant="default" className="w-full">
                      Selesai
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="md:mt-0 mt-2 grid grid-cols-2 gap-4">
            <div className="col-span-1 bg-white rounded-lg">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Kelas" />
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

            <div className="col-span-1 relative rounded-lg bg-white">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Cari Siswa" className="pl-8 w-full" />
            </div>
          </div>
        </div>

        <div className="mt-4 border-2 rounded-lg">
          <Table>
            <TableHeader className="bg-slate-100">
              <TableRow>
                <TableHead className="font-bold">No.</TableHead>
                <TableHead className="font-bold">NAMA SISWA</TableHead>
                <TableHead className="font-bold">NISN</TableHead>
                <TableHead className="font-bold">KELAS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((invoice) => (
                <TableRow key={invoice.no}>
                  <TableCell>{invoice.no}</TableCell>
                  <TableCell>{invoice.name}</TableCell>
                  <TableCell>{invoice.nisn}</TableCell>
                  <TableCell>{invoice.class}</TableCell>
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
