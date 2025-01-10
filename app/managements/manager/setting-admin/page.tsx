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
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const data1 = [
  {
    no: "1",
    name: "Dan Heng",
    username: "danheng123",
    password: "dan123456",
    contact: "08212384823",
  },
  {
    no: "2",
    name: "Dan Heng",
    username: "danheng123",
    password: "dan123456",
    contact: "08212384823",
  },
  {
    no: "3",
    name: "Dan Heng",
    username: "danheng123",
    password: "dan123456",
    contact: "08212384823",
  },
  {
    no: "4",
    name: "Dan Heng",
    username: "danheng123",
    password: "dan123456",
    contact: "08212384823",
  },
  {
    no: "5",
    name: "Dan Heng",
    username: "danheng123",
    password: "dan123456",
    contact: "08212384823",
  },
  {
    no: "6",
    name: "Dan Heng",
    username: "danheng123",
    password: "dan123456",
    contact: "08212384823",
  },
  {
    no: "7",
    name: "Dan Heng",
    username: "danheng123",
    password: "dan123456",
    contact: "08212384823",
  },
];

const data2 = [
  {
    no: "1",
    name: "Ko He Jin",
    username: "kohejin123",
    password: "kohe123456",
    contact: "08212384823",
  },
  {
    no: "2",
    name: "Ko He Jin",
    username: "kohejin123",
    password: "kohe123456",
    contact: "08212384823",
  },
  {
    no: "3",
    name: "Ko He Jin",
    username: "kohejin123",
    password: "kohe123456",
    contact: "08212384823",
  },
  {
    no: "4",
    name: "Ko He Jin",
    username: "kohejin123",
    password: "kohe123456",
    contact: "08212384823",
  },
  {
    no: "5",
    name: "Ko He Jin",
    username: "kohejin123",
    password: "kohe123456",
    contact: "08212384823",
  },
  {
    no: "6",
    name: "Ko He Jin",
    username: "kohejin123",
    password: "kohe123456",
    contact: "08212384823",
  },
  {
    no: "7",
    name: "Ko He Jin",
    username: "kohejin123",
    password: "kohe123456",
    contact: "08212384823",
  },
];

export default function ManagerSettingAdmin() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-start">
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            className="bg-blue-100 border-blue-100 rounded-lg"
          >
            <Link href="/managements/manager/setting-admin">
              <p className="text-sm text-blue-500">Manajemen Admin</p>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="italic"
            aria-label="Toggle italic"
            className="bg-white"
          >
            <Link href="/managements/manager/setting-payment">
              <p className="text-sm text-slate-400">Pembayaran Sekolah</p>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
            className="bg-white"
          >
            <Link href="/managements/manager/profile">
              <p className="text-sm text-slate-400">Profile Sekolah</p>
            </Link>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="col-span-1 border-2 rounded-lg bg-white p-5">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-slate-400 text-base">Pengurus Cabang</h1>

              <p className="font-bold text-3xl mt-3">Johan</p>

              <p className="text-base mt-1">+62812764828</p>
            </div>

            <div className="">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default">Edit</Button>
                </DialogTrigger>
                <DialogContent className="md:w-3/12 w-96 rounded-lg">
                  <DialogHeader>
                    <DialogTitle className="text-center">
                      Edit Pengurus Cabang
                    </DialogTitle>
                  </DialogHeader>
                  <div className="">
                    <Label htmlFor="name" className="text-right">
                      Nama Pengurus Cabang
                    </Label>
                    <Input type="text" placeholder="Nama" />
                  </div>

                  <div className="mt-3">
                    <Label htmlFor="name" className="text-right">
                      No. Telfon
                    </Label>
                    <Input type="text" placeholder="+62xxxxxxxxxxx" />
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
        </div>

        <div className="col-span-1 border-2 rounded-lg bg-white p-5">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-slate-400 text-base">Kepala Sekolah</h1>

              <p className="font-bold text-3xl mt-3">-</p>

              <p className="text-base mt-1">-</p>
            </div>

            <div className="">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default">Edit</Button>
                </DialogTrigger>
                <DialogContent className="md:w-3/12 w-96 rounded-lg">
                  <DialogHeader>
                    <DialogTitle className="text-center">
                      Edit Kepala Sekolah
                    </DialogTitle>
                  </DialogHeader>
                  <div className="">
                    <Label htmlFor="name" className="text-right">
                      Nama Kepala Sekolah
                    </Label>
                    <Input type="text" placeholder="Nama" />
                  </div>

                  <div className="mt-3">
                    <Label htmlFor="name" className="text-right">
                      No. Telfon
                    </Label>
                    <Input type="text" placeholder="+62xxxxxxxxxxx" />
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
        </div>
      </div>

      <div className="border-2 rounded-lg bg-white p-5 mt-10">
        <Tabs defaultValue="aktif" className="w-full">
          <TabsList className="w-full flex justify-between bg-white">
            <div className="bg-slate-200 rounded-lg">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default">
                    <Plus /> Buat Administrasi
                  </Button>
                </DialogTrigger>
                <DialogContent className="md:w-3/12 w-96 rounded-lg">
                  <DialogHeader>
                    <DialogTitle className="text-center">
                      Buat Administrasi
                    </DialogTitle>
                  </DialogHeader>
                  <div className="">
                    <Label htmlFor="name" className="text-right">
                      Nama Admin
                    </Label>
                    <Input type="text" placeholder="Nama Lengkap Siswa" />
                  </div>

                  <div className="mt-3">
                    <Label htmlFor="name" className="text-right">
                      Username
                    </Label>
                    <Input type="text" placeholder="Username" />
                  </div>

                  <div className="mt-3">
                    <Label htmlFor="name" className="text-right">
                      Password
                    </Label>
                    <Input type="password" placeholder="Password" />
                  </div>

                  <div className="mt-3">
                    <Label htmlFor="name" className="text-right">
                      Kontak
                    </Label>
                    <Input type="text" placeholder="+62xxxxxxxxx" />
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
              <div className="ml-1 col-span-1">
                <div className="w-[132px] bg-slate-200 rounded-lg">
                  <TabsTrigger value="aktif">Aktif</TabsTrigger>
                  <TabsTrigger value="nonAktif">Non Aktif</TabsTrigger>
                </div>
              </div>

              <div className="col-span-1 relative">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Cari Admin" className="pl-8 w-full" />
              </div>
            </div>
          </TabsList>
          <TabsContent value="aktif" className="border-2 rounded-lg mt-4">
            <Table>
              <TableHeader className="bg-slate-100">
                <TableRow>
                  <TableHead className="font-bold text-black">No.</TableHead>
                  <TableHead className="font-bold text-black">
                    NAMA KARYAWAN
                  </TableHead>
                  <TableHead className="font-bold text-black">
                    USERNAME
                  </TableHead>
                  <TableHead className="font-bold text-black">
                    PASSWORD
                  </TableHead>
                  <TableHead className="font-bold text-black">KONTAK</TableHead>
                  <TableHead className="font-bold text-black"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data1.map((invoice) => (
                  <TableRow key={invoice.no}>
                    <TableCell>{invoice.no}</TableCell>
                    <TableCell>{invoice.name}</TableCell>
                    <TableCell>{invoice.username}</TableCell>
                    <TableCell className="text-blue-500 p-2">
                      {invoice.password}
                    </TableCell>
                    <TableCell>{invoice.contact}</TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="default">Edit</Button>
                        </DialogTrigger>
                        <DialogContent className="md:w-4/12 w-96 rounded-lg">
                          <DialogHeader>
                            <DialogTitle className="text-center">
                              Buat Administrasi
                            </DialogTitle>
                          </DialogHeader>
                          <div className="">
                            <Label htmlFor="name" className="text-right">
                              Nama Admin
                            </Label>
                            <Input
                              type="text"
                              placeholder="Nama Lengkap Siswa"
                            />
                          </div>

                          <div className="mt-3">
                            <Label htmlFor="name" className="text-right">
                              Username
                            </Label>
                            <Input type="text" placeholder="Username" />
                          </div>

                          <div className="mt-3">
                            <Label htmlFor="name" className="text-right">
                              Password Baru
                            </Label>
                            <Input type="password" placeholder="Password" />
                          </div>

                          <div className="mt-3">
                            <Label htmlFor="name" className="text-right">
                              Kontak
                            </Label>
                            <Input type="text" placeholder="+62xxxxxxxxx" />
                          </div>
                          <DialogFooter className="mt-5">
                            <Button
                              type="submit"
                              variant="default"
                              className="w-full"
                            >
                              Selesai
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
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
          </TabsContent>
          <TabsContent value="nonAktif" className="border-2 rounded-lg mt-4">
            <Table>
              <TableHeader className="bg-slate-100">
                <TableRow>
                  <TableHead className="font-bold text-black">No.</TableHead>
                  <TableHead className="font-bold text-black">
                    NAMA KARYAWAN
                  </TableHead>
                  <TableHead className="font-bold text-black">
                    USERNAME
                  </TableHead>
                  <TableHead className="font-bold text-black">
                    PASSWORD
                  </TableHead>
                  <TableHead className="font-bold text-black">KONTAK</TableHead>
                  <TableHead className="font-bold text-black"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data2.map((invoice) => (
                  <TableRow key={invoice.no}>
                    <TableCell>{invoice.no}</TableCell>
                    <TableCell>{invoice.name}</TableCell>
                    <TableCell>{invoice.username}</TableCell>
                    <TableCell className="text-blue-500 p-2">
                      {invoice.password}
                    </TableCell>
                    <TableCell>{invoice.contact}</TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="default">Edit</Button>
                        </DialogTrigger>
                        <DialogContent className="md:w-4/12 w-96 rounded-lg">
                          <DialogHeader>
                            <DialogTitle className="text-center">
                              Buat Administrasi
                            </DialogTitle>
                          </DialogHeader>
                          <div className="">
                            <Label htmlFor="name" className="text-right">
                              Nama Admin
                            </Label>
                            <Input
                              type="text"
                              placeholder="Nama Lengkap Siswa"
                            />
                          </div>

                          <div className="mt-3">
                            <Label htmlFor="name" className="text-right">
                              Username
                            </Label>
                            <Input type="text" placeholder="Username" />
                          </div>

                          <div className="mt-3">
                            <Label htmlFor="name" className="text-right">
                              Password Baru
                            </Label>
                            <Input type="password" placeholder="Password" />
                          </div>

                          <div className="mt-3">
                            <Label htmlFor="name" className="text-right">
                              Kontak
                            </Label>
                            <Input type="text" placeholder="+62xxxxxxxxx" />
                          </div>
                          <DialogFooter className="mt-5">
                            <Button
                              type="submit"
                              variant="default"
                              className="w-full"
                            >
                              Selesai
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
