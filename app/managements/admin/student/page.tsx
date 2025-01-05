import { TrendingDown, TrendingUp } from "lucide-react";
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

export default function StudentAdmin() {
  return (
    <div className="min-h-screen">
      <div className="md:grid grid-cols-2 gap-4 mt-6">
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

        <div className="md:mt-0 mt-4 col-span-1">
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
          <TabsList className="w-full md:flex justify-between grid grid-rows-2 gap-4 bg-white">
            <div className="bg-slate-200 rounded-lg row-span-1 w-[131.5px]">
              <TabsTrigger value="aktif">Aktif</TabsTrigger>
              <TabsTrigger value="nonAktif">Non Aktif</TabsTrigger>
            </div>

            <div className="grid grid-cols-2 gap-4 row-span-1 md:mt-0 mt-12">
              <div className="col-span-1">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Yapendik Jakarta" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="jakarta">Yapendik Jakarta</SelectItem>
                      <SelectItem value="surabaya">
                        Yapendik Surabaya
                      </SelectItem>
                      <SelectItem value="bandung">Yapendik Bandung</SelectItem>
                      <SelectItem value="malang">Yapendik Malang</SelectItem>
                      <SelectItem value="bogor">Yapendik Bogor</SelectItem>
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
          <TabsContent
            value="aktif"
            className="md:mt-4 mt-16 border-2 rounded-lg"
          >
            <Table>
              <TableHeader>
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
          <TabsContent
            value="nonAktif"
            className="md:mt-4 mt-16 border-2 rounded-lg"
          >
            <Table>
              <TableHeader>
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
