import RowStudentGet from "@/components/managerStudent/GetStudent";
import ButtonAdd from "@/components/ui/buttonAdd";
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
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, TrendingDown, TrendingUp } from "lucide-react";


export default function ManagerStudent() {
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
          <TabsList className="w-full flex justify-between bg-white">
            {/* direct to page */}
            <ButtonAdd endpoint="/managements/manager/student/create" />
            {/* direct to page */}
            <div className="grid grid-cols-2 md:gap-4">
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
                    NAMA SISWA
                  </TableHead>
                  <TableHead className="font-bold text-black">KELAS</TableHead>
                  <TableHead className="font-bold text-black">ALAMAT</TableHead>
                  <TableHead className="font-bold text-black">Nomor</TableHead>
                  <TableHead className="font-bold text-black">AKSI</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* get student in row table */}
                <RowStudentGet />
                {/* get student in row table */}
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
                  <TableHead className="font-bold text-black">NAMA SISWA</TableHead>
                  <TableHead className="font-bold text-black">KELAS</TableHead>
                  <TableHead className="font-bold text-black">Alamat</TableHead>
                  <TableHead className="font-bold text-black">KONTAK</TableHead>
                </TableRow>
              </TableHeader>

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
