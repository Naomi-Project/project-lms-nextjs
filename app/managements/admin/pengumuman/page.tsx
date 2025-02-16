import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import {
  Plus,
  Search,
  SlidersHorizontal,
  SquareArrowOutUpRight,
} from "lucide-react";
import React from "react";

const data = [
  {
    no: "1",
    title: "Pengumuman Libur Natal",
    tanggal: "25 Desember 2024",
    target: "Siswa dan Pegawai",
  },
  {
    no: "2",
    title: "Pengumuman Libur Natal",
    tanggal: "25 Desember 2024",
    target: "Siswa dan Pegawai",
  },
  {
    no: "3",
    title: "Pengumuman Libur Natal",
    tanggal: "25 Desember 2024",
    target: "Siswa dan Pegawai",
  },
  {
    no: "4",
    title: "Pengumuman Libur Natal",
    tanggal: "25 Desember 2024",
    target: "Siswa dan Pegawai",
  },
  {
    no: "5",
    title: "Pengumuman Libur Natal",
    tanggal: "25 Desember 2024",
    target: "Siswa dan Pegawai",
  },
  {
    no: "6",
    title: "Pengumuman Libur Natal",
    tanggal: "25 Desember 2024",
    target: "Siswa dan Pegawai",
  },
  {
    no: "7",
    title: "Pengumuman Libur Natal",
    tanggal: "25 Desember 2024",
    target: "Siswa dan Pegawai",
  },
];

export default function PengumumanAdmin() {
  return (
    <div className="min-h-screen">
      <div className="bg-white rounded-lg p-5">
        <div className="md:flex justify-between items-center">
          <div className="rounded-lg bg-white">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default">
                  <Plus className="h-4 w-4" /> Buat Pengumuman
                </Button>
              </DialogTrigger>
              <DialogContent className="md:w-4/12 w-96 rounded-lg">
                <DialogHeader>
                  <DialogTitle className="text-center">
                    Buat Pengumuman
                  </DialogTitle>
                </DialogHeader>
                <div className="">
                  <Label htmlFor="title">Judul Pengumuman</Label>
                  <Input type="text" id="title" placeholder="judul" />
                </div>

                <div className="">
                  <Label htmlFor="title">Tanggal Diumumkan</Label>
                  <Input type="date" id="title" placeholder="tanggal" />
                </div>

                <div className="">
                  <Label htmlFor="title">Target</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Target" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="guru">Guru</SelectItem>
                        <SelectItem value="pegawai">Pegawai</SelectItem>
                        <SelectItem value="siswa">Siswa</SelectItem>
                        <SelectItem value="all">
                          Guru || Pegawai || Siswa
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
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

          <div className="md:mt-0 mt-3 grid grid-cols-3 gap-4">
            <div className="col-span-1 rounded-lg bg-white">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={<SlidersHorizontal />} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sd">Sekolah Dasar</SelectItem>
                  <SelectItem value="smp">Sekolah Menengah Pertama</SelectItem>
                  <SelectItem value="sma">Sekolah Menengah Atas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="col-span-2 relative rounded-lg bg-white">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Cari Pengumuman" className="pl-8 w-full" />
            </div>
          </div>
        </div>

        <div className="border-2 rounded-lg bg-white mt-10 p-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-black">No.</TableHead>
                <TableHead className="font-bold text-black">
                  JUDUL PENGUMUMAN
                </TableHead>
                <TableHead className="font-bold text-black">
                  TANGGAL DIUMUMKAN
                </TableHead>
                <TableHead className="font-bold text-black">TARGET</TableHead>
                <TableHead className="font-bold text-black"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((invoice) => (
                <TableRow key={invoice.no}>
                  <TableCell>{invoice.no}</TableCell>
                  <TableCell>{invoice.title}</TableCell>
                  <TableCell>{invoice.tanggal}</TableCell>
                  <TableCell>{invoice.target}</TableCell>
                  <TableCell>
                    <SquareArrowOutUpRight />
                  </TableCell>
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
