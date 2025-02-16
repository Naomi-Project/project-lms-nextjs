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

export default function TeacherAdmin() {
  return (
    <div className="min-h-screen">
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
                <Input placeholder="Cari Guru" className="pl-8 w-full" />
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
