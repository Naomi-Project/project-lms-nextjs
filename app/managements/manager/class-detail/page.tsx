import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
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
import { Search, User2Icon } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const data1 = [
  {
    no: "1",
    name: "Fu Xuan",
    nisn: "676678",
    contact: "0821293124",
  },
  {
    no: "2",
    name: "Fu Xuan",
    nisn: "676678",
    contact: "0821293124",
  },
  {
    no: "3",
    name: "Fu Xuan",
    nisn: "676678",
    contact: "0821293124",
  },
  {
    no: "4",
    name: "Fu Xuan",
    nisn: "676678",
    contact: "0821293124",
  },
  {
    no: "5",
    name: "Fu Xuan",
    nisn: "676678",
    contact: "0821293124",
  },
  {
    no: "6",
    name: "Fu Xuan",
    nisn: "676678",
    contact: "0821293124",
  },
  {
    no: "7",
    name: "Fu Xuan",
    nisn: "676678",
    contact: "0821293124",
  },
];

const data2 = [
  {
    no: "1",
    name: "Fulan",
    nisn: "676678",
    contact: "0821293124",
  },
  {
    no: "2",
    name: "Fulan",
    nisn: "676678",
    contact: "0821293124",
  },
  {
    no: "3",
    name: "Fulan",
    nisn: "676678",
    contact: "0821293124",
  },
  {
    no: "4",
    name: "Fulan",
    nisn: "676678",
    contact: "0821293124",
  },
  {
    no: "5",
    name: "Fulan",
    nisn: "676678",
    contact: "0821293124",
  },
  {
    no: "6",
    name: "Fulan",
    nisn: "676678",
    contact: "0821293124",
  },
  {
    no: "7",
    name: "Fulan",
    nisn: "676678",
    contact: "0821293124",
  },
];

export default function ManagerClassDetail() {
  return (
    <div className="min-h-screenb">
      <div className="flex justify-start">
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            className="bg-blue-100 border-blue-100 rounded-lg"
          >
            <Link href="/managements/manager/class">
              <p className="text-sm text-blue-500">Kelas</p>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="italic"
            aria-label="Toggle italic"
            className="bg-white"
          >
            <Link href="/managements/manager/class-management">
              <p className="text-sm text-slate-400">Manajemen Kelas Siswa</p>
            </Link>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="Md:grid grid-cols-2 gap-4 mt-8">
        <div className="col-span-1 border-2 bg-white rounded-lg p-5">
          <div className="grid grid-rows-2 gap-4">
            <div className="row-span-1">
              <div className="flex justify-between">
                <div className="">
                  <h1 className="font-bold text-base">Kelas 7A</h1>
                </div>

                <div className="p-2 bg-blue-100 rounded-lg">
                  <p className="text-blue-500 text-xs">Kelas Awal</p>
                </div>
              </div>
            </div>

            <div className="row-span-1">
              <div className="w-2/12">
                <div className="grid grid-cols-3">
                  <div className="col-span-1">
                    <User2Icon className="h-5 w-5 text-slate-400" />
                  </div>

                  <div className="col-span-2">
                    <p className="text-sm text-slate-400">Demi He</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mt-0 mt-4 col-span-1 border-2 bg-white rounded-lg p-5">
          <h1 className="text-slate-400 text-base">Nilai Rata-Rata Kelas</h1>

          <p className="text-3xl font-bold mt-6">70</p>
        </div>
      </div>

      <div className="border-2 rounded-lg bg-white p-5 mt-10">
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="w-full flex justify-between bg-white">
            <div className="bg-slate-200 rounded-lg">
              <TabsTrigger value="active">Aktif</TabsTrigger>
              <TabsTrigger value="absent">Tidal Aktif</TabsTrigger>
            </div>

            <div className="relative bg-white">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Cari Siswa" className="pl-8 w-full" />
            </div>
          </TabsList>
          <TabsContent value="active">
            <Table>
              <TableHeader className="bg-slate-100">
                <TableRow>
                  <TableHead className="font-bold">No.</TableHead>
                  <TableHead className="font-bold w-10">NAMA SISWA</TableHead>
                  <TableHead className="font-bold">NISN</TableHead>
                  <TableHead className="font-bold">KONTAK</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data1.map((invoice) => (
                  <TableRow key={invoice.no}>
                    <TableCell>{invoice.no}</TableCell>
                    <TableCell>{invoice.name}</TableCell>
                    <TableCell>{invoice.nisn}</TableCell>
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
          <TabsContent value="absent">
            <Table>
              <TableHeader className="bg-slate-100">
                <TableRow>
                  <TableHead className="font-bold">No.</TableHead>
                  <TableHead className="font-bold">NAMA SISWA</TableHead>
                  <TableHead className="font-bold">NISN</TableHead>
                  <TableHead className="font-bold">KONTAK</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data2.map((invoice) => (
                  <TableRow key={invoice.no}>
                    <TableCell>{invoice.no}</TableCell>
                    <TableCell>{invoice.name}</TableCell>
                    <TableCell>{invoice.nisn}</TableCell>
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
