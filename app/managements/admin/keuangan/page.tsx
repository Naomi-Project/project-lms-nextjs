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
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const data1 = [
  {
    no: "1",
    name: "Fu Xuan",
    nisn: "676678",
    school: "SMP Negeri 1 Jakarta",
    bill: "Rp 100.000.000",
  },
  {
    no: "2",
    name: "Fu Xuan",
    nisn: "676678",
    school: "SMP Negeri 1 Jakarta",
    bill: "Rp 100.000.000",
  },
  {
    no: "3",
    name: "Fu Xuan",
    nisn: "676678",
    school: "SMP Negeri 1 Jakarta",
    bill: "Rp 100.000.000",
  },
  {
    no: "4",
    name: "Fu Xuan",
    nisn: "676678",
    school: "SMP Negeri 1 Jakarta",
    bill: "Rp 100.000.000",
  },
  {
    no: "5",
    name: "Fu Xuan",
    nisn: "676678",
    school: "SMP Negeri 1 Jakarta",
    bill: "Rp 100.000.000",
  },
  {
    no: "6",
    name: "Fu Xuan",
    nisn: "676678",
    school: "SMP Negeri 1 Jakarta",
    bill: "Rp 100.000.000",
  },
  {
    no: "7",
    name: "Fu Xuan",
    nisn: "676678",
    school: "SMP Negeri 1 Jakarta",
    bill: "Rp 100.000.000",
  },
];

const data2 = [
  {
    no: "1",
    name: "Fulan",
    nisn: "676678",
    school: "SMP Negeri 1 Jakarta",
    bill: "Rp 100.000.000",
  },
  {
    no: "2",
    name: "Fulan",
    nisn: "676678",
    school: "SMP Negeri 1 Jakarta",
    bill: "Rp 100.000.000",
  },
  {
    no: "3",
    name: "Fulan",
    nisn: "676678",
    school: "SMP Negeri 1 Jakarta",
    bill: "Rp 100.000.000",
  },
  {
    no: "4",
    name: "Fulan",
    nisn: "676678",
    school: "SMP Negeri 1 Jakarta",
    bill: "Rp 100.000.000",
  },
  {
    no: "5",
    name: "Fulan",
    nisn: "676678",
    school: "SMP Negeri 1 Jakarta",
    bill: "Rp 100.000.000",
  },
  {
    no: "6",
    name: "Fulan",
    nisn: "676678",
    school: "SMP Negeri 1 Jakarta",
    bill: "Rp 100.000.000",
  },
  {
    no: "7",
    name: "Fulan",
    nisn: "676678",
    school: "SMP Negeri 1 Jakarta",
    bill: "Rp 100.000.000",
  },
];

export default function KeuanganAdmin() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 bg-white rounded-lg p-4">
          <p className="text-base text-slate-400">Pemasukan</p>

          <p className="font-bold text-3xl mt-2">Rp. 150.000.000</p>

          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="col-span-2">
              <Select defaultValue="januari">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="januari">Januari</SelectItem>
                  <SelectItem value="februari">Februari</SelectItem>
                  <SelectItem value="maret">Maret</SelectItem>
                  <SelectItem value="april">April</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-2">
              <Select defaultValue="2024">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white rounded-lg p-4">
          <p className="text-base text-slate-400">SPP Belum Terbayar</p>

          <p className="font-bold text-3xl text-red-500 mt-2">Rp. 21.000.000</p>

          <p className="text-sm mt-6">123 Siswa</p>
        </div>
      </div>

      <div className="border-2 rounded-lg bg-white p-5 mt-10">
        <Tabs defaultValue="lunas" className="w-full">
          <TabsList className="w-full flex justify-between bg-white">
            <div className="bg-slate-200 rounded-lg">
              <TabsTrigger value="lunas">Lunas</TabsTrigger>
              <TabsTrigger value="belum">Belum Lunas</TabsTrigger>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Cabang Jakarta" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="jakarta">Cabang Jakarta</SelectItem>
                      <SelectItem value="surabaya">Cabang Surabaya</SelectItem>
                      <SelectItem value="bandung">Cabang Bandung</SelectItem>
                      <SelectItem value="malang">Cabang Malang</SelectItem>
                      <SelectItem value="bogor">Cabang Bogor</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="col-span-1">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Global" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="sd">Sekolah Dasar</SelectItem>
                      <SelectItem value="smp">
                        Sekolah Menengah Pertama
                      </SelectItem>
                      <SelectItem value="sma">Sekolah Menengah Atas</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="col-span-1 relative">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Cari Siswa" className="pl-8 w-full" />
              </div>
            </div>
          </TabsList>
          <TabsContent value="lunas">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">No.</TableHead>
                  <TableHead className="font-bold">NAMA SISWA</TableHead>
                  <TableHead className="font-bold">NISN</TableHead>
                  <TableHead className="font-bold">SEKOLAH</TableHead>
                  <TableHead className="font-bold">JUMLAH TAGIHAN</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data1.map((invoice) => (
                  <TableRow key={invoice.no}>
                    <TableCell>{invoice.no}</TableCell>
                    <TableCell>{invoice.name}</TableCell>
                    <TableCell>{invoice.nisn}</TableCell>
                    <TableCell>{invoice.school}</TableCell>
                    <TableCell>{invoice.bill}</TableCell>
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
          <TabsContent value="belum">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">No.</TableHead>
                  <TableHead className="font-bold">NAMA SISWA</TableHead>
                  <TableHead className="font-bold">NISN</TableHead>
                  <TableHead className="font-bold">SEKOLAH</TableHead>
                  <TableHead className="font-bold">JUMLAH TAGIHAN</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data2.map((invoice) => (
                  <TableRow key={invoice.no}>
                    <TableCell>{invoice.no}</TableCell>
                    <TableCell>{invoice.name}</TableCell>
                    <TableCell>{invoice.nisn}</TableCell>
                    <TableCell>{invoice.school}</TableCell>
                    <TableCell>{invoice.bill}</TableCell>
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
