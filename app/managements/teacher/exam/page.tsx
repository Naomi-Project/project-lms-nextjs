import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
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
import { PencilLine } from "lucide-react";

const data1 = [
  {
    no: "1",
    name: "Fu Xuan",
    semester1: "Sudah Diisi",
    semester2: "Belum Diisi",
  },
  {
    no: "2",
    name: "Fu Xuan",
    semester1: "Sudah Diisi",
    semester2: "Belum Diisi",
  },
  {
    no: "3",
    name: "Fu Xuan",
    semester1: "Sudah Diisi",
    semester2: "Belum Diisi",
  },
  {
    no: "4",
    name: "Fu Xuan",
    semester1: "Sudah Diisi",
    semester2: "Belum Diisi",
  },
  {
    no: "5",
    name: "Fu Xuan",
    semester1: "Sudah Diisi",
    semester2: "Belum Diisi",
  },
  {
    no: "6",
    name: "Fu Xuan",
    semester1: "Sudah Diisi",
    semester2: "Belum Diisi",
  },
  {
    no: "7",
    name: "Fu Xuan",
    semester1: "Sudah Diisi",
    semester2: "Belum Diisi",
  },
];

export default function ExamTeacher() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-between">
        <div className="bg-white rounded-lg">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="PTS" />
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

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 bg-white rounded-lg">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Kelas Berapa" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Kelas</SelectLabel>
                  <SelectItem value="kelas7">Kelas 7</SelectItem>
                  <SelectItem value="kelas8">Kelas 8</SelectItem>
                  <SelectItem value="kelas9">Kelas 9</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-1 bg-white rounded-lg">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Jenis Kelas" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Kelas Jenis</SelectLabel>
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

      <div className="border-2 rounded-lg bg-white mt-10 p-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">No.</TableHead>
              <TableHead className="font-bold">NAMA SISWA</TableHead>
              <TableHead className="font-bold">SEMESTER 1</TableHead>
              <TableHead className="font-bold">SEMESTER 2</TableHead>
              <TableHead className="font-bold"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data1.map((invoice) => (
              <TableRow key={invoice.no}>
                <TableCell>{invoice.no}</TableCell>
                <TableCell>{invoice.name}</TableCell>
                <TableCell className="text-green-500">
                  {invoice.semester1}
                </TableCell>
                <TableCell className="text-red-500">
                  {invoice.semester2}
                </TableCell>
                <TableCell>
                  <PencilLine />
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
  );
}
