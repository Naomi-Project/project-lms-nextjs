"use client";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, CalendarIcon, Search, Wallet } from "lucide-react";
import Image from "next/image";
import React from "react";
import user from "../../../../image/user.jpeg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const data1 = [
  {
    no: "1",
    name: "Fu Xuan",
    nisn: "676678",
    class: "7A",
    bill: "Rp 100.000.000",
  },
  {
    no: "2",
    name: "Fu Xuan",
    nisn: "676678",
    class: "7A",
    bill: "Rp 100.000.000",
  },
  {
    no: "3",
    name: "Fu Xuan",
    nisn: "676678",
    class: "7A",
    bill: "Rp 100.000.000",
  },
  {
    no: "4",
    name: "Fu Xuan",
    nisn: "676678",
    class: "7A",
    bill: "Rp 100.000.000",
  },
  {
    no: "5",
    name: "Fu Xuan",
    nisn: "676678",
    class: "7A",
    bill: "Rp 100.000.000",
  },
  {
    no: "6",
    name: "Fu Xuan",
    nisn: "676678",
    class: "7A",
    bill: "Rp 100.000.000",
  },
  {
    no: "7",
    name: "Fu Xuan",
    nisn: "676678",
    class: "7A",
    bill: "Rp 100.000.000",
  },
];

const data2 = [
  {
    no: "1",
    name: "Fulan",
    nisn: "676678",
    class: "7A",
    bill: "Rp 100.000.000",
  },
  {
    no: "2",
    name: "Fulan",
    nisn: "676678",
    class: "7A",
    bill: "Rp 100.000.000",
  },
  {
    no: "3",
    name: "Fulan",
    nisn: "676678",
    class: "7A",
    bill: "Rp 100.000.000",
  },
  {
    no: "4",
    name: "Fulan",
    nisn: "676678",
    class: "7A",
    bill: "Rp 100.000.000",
  },
  {
    no: "5",
    name: "Fulan",
    nisn: "676678",
    class: "7A",
    bill: "Rp 100.000.000",
  },
  {
    no: "6",
    name: "Fulan",
    nisn: "676678",
    class: "7A",
    bill: "Rp 100.000.000",
  },
  {
    no: "7",
    name: "Fulan",
    nisn: "676678",
    class: "7A",
    bill: "Rp 100.000.000",
  },
];

const payments = [
  {
    invoice: "Sabtu, 28 maret 2024",
    status: "Berhasil",
    amount: "Rp. 1.000.000",
  },
  {
    invoice: "Sabtu, 28 maret 2024",
    status: "Berhasil",
    amount: "Rp. 1.000.000",
  },
  {
    invoice: "Sabtu, 28 maret 2024",
    status: "Berhasil",
    amount: "Rp. 1.000.000",
  },
  {
    invoice: "Sabtu, 28 maret 2024",
    status: "Berhasil",
    amount: "Rp. 1.000.000",
  },
  {
    invoice: "Sabtu, 28 maret 2024",
    status: "Berhasil",
    amount: "Rp. 1.000.000",
  },
  {
    invoice: "Sabtu, 28 maret 2024",
    status: "Berhasil",
    amount: "Rp. 1.000.000",
  },
  {
    invoice: "Sabtu, 28 maret 2024",
    status: "Berhasil",
    amount: "Rp. 1.000.000",
  },
];

export default function ManagerKeuangan() {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="min-h-screen">
      <div className="md:grid grid-cols-2 gap-4">
        <div className="col-span-1 bg-white rounded-lg p-4">
          <p className="text-base text-slate-400">Pemasukan</p>

          <p className="font-bold text-3xl mt-2">Rp. 150.000.000</p>

          <div className="w-8/12 mt-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
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

              <div className="col-span-1">
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
        </div>

        <div className="md:mt-0 mt-4 col-span-1 bg-white rounded-lg p-4">
          <p className="text-base text-slate-400">SPP Belum Terbayar</p>

          <p className="font-bold text-3xl text-red-500 mt-2">
            Rp. -21.000.000
          </p>

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

            <div className="relative border-2 rounded-lg">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Cari Siswa" className="pl-8 w-full" />
            </div>
          </TabsList>
          <TabsContent value="lunas">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">No.</TableHead>
                  <TableHead className="font-bold">NAMA SISWA</TableHead>
                  <TableHead className="font-bold">NISN</TableHead>
                  <TableHead className="font-bold">KELAS</TableHead>
                  <TableHead className="font-bold">JUMLAH TAGIHAN</TableHead>
                  <TableHead className="font-bold"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data1.map((invoice) => (
                  <TableRow key={invoice.no}>
                    <TableCell>{invoice.no}</TableCell>
                    <TableCell>{invoice.name}</TableCell>
                    <TableCell>{invoice.nisn}</TableCell>
                    <TableCell>{invoice.class}</TableCell>
                    <TableCell>{invoice.bill}</TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="default">Detail Tagihan</Button>
                        </DialogTrigger>
                        <DialogContent className="w-10/12 md:h-[600px] h-[530px] rounded-lg">
                          <DialogHeader>
                            <DialogTitle className="text-center">
                              Detail Tagihan
                            </DialogTitle>
                          </DialogHeader>
                          <ScrollArea className="h-96 w-full">
                            <div className="border-2 rounded-lg">
                              <div className="grid grid-cols-12 p-4">
                                <div className="col-span-2">
                                  <Image
                                    src={user}
                                    alt="user"
                                    className="w-16 h-16 rounded-lg mx-auto"
                                    priority={true}
                                  />
                                </div>

                                <div className="col-span-10 pl-3 my-auto">
                                  <h1 className="font-bold text-sm">
                                    Muhammad Zulfikri
                                  </h1>
                                  <p className="w-7 text-center mt-1 bg-blue-100 text-blue-400 p-1 border-blue-100 rounded-lg text-xs">
                                    7A
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="border-2 rounded-lg p-4 mt-6">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-1">
                                  <h1 className="text-base text-slate-400">
                                    Tagihan SPP Bulan Ini
                                  </h1>

                                  <p className="text-2xl font-bold">
                                    Rp. 6.000.000
                                  </p>
                                </div>

                                <div className="col-span-1 flex justify-end">
                                  <div className="border-2 rounded-lg p-2">
                                    <div className="grid grid-cols-5 mx-auto">
                                      <div className="col-span-2 flex items-center justify-center">
                                        <div className="bg-red-100 p-2 rounded-lg flex items-center justify-center w-9/12">
                                          <CalendarDays className="w-6 h-6 text-red-400" />
                                        </div>
                                      </div>
                                      <div className="col-span-3 grid content-center">
                                        <p className="text-xs text-stone-400">
                                          Jatuh Tempo
                                        </p>
                                        <p className="text-sm">
                                          25 Agustus 2024
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-2">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="default">
                                      <Wallet />
                                      <span>Bayar Manual</span>
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="md:w-3/12 rounded-lg">
                                    <DialogHeader>
                                      <DialogTitle className="text-center">
                                        Detail Tagihan
                                      </DialogTitle>
                                    </DialogHeader>
                                    <div className="border-2 rounded-lg p-5">
                                      <h1 className="text-base text-slate-400">
                                        Total Tagihan
                                      </h1>

                                      <p className="text-2xl font-bold mt-3">
                                        Rp 6.000.000
                                      </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 mt-4">
                                      <div className="col-span-1">
                                        <Label
                                          htmlFor="name"
                                          className="text-right"
                                        >
                                          Tanggal Pembayaran
                                        </Label>

                                        <div className="">
                                          <Popover>
                                            <PopoverTrigger asChild>
                                              <Button
                                                variant={"outline"}
                                                className={cn(
                                                  "w-full justify-start text-left font-normal",
                                                  !date &&
                                                    "text-muted-foreground"
                                                )}
                                              >
                                                <CalendarIcon />
                                                {date ? (
                                                  format(date, "PPP")
                                                ) : (
                                                  <span>Pick a date</span>
                                                )}
                                              </Button>
                                            </PopoverTrigger>
                                            <PopoverContent
                                              className="w-auto p-0"
                                              align="start"
                                            >
                                              <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                initialFocus
                                              />
                                            </PopoverContent>
                                          </Popover>
                                        </div>
                                      </div>

                                      <div className="col-span-1">
                                        <Label
                                          htmlFor="name"
                                          className="text-right"
                                        >
                                          Nominal Pembayaran
                                        </Label>

                                        <Input
                                          type="text"
                                          placeholder="Jumlah Pembayaran"
                                        />
                                      </div>
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
                              </div>

                              <Accordion
                                type="single"
                                collapsible
                                className="w-full mt-5 border-t-2"
                              >
                                <AccordionItem value="item-1">
                                  <AccordionTrigger className="flex justify-center">
                                    Lihat Rincian
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <p className="text-sm text-slate-400">
                                      Rincian
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 border-b-2 mt-3">
                                      <div className="col-span-1">
                                        <p>SPP Bulan Juni</p>
                                      </div>

                                      <div className="col-span-1 text-right">
                                        <p>Rp. 0</p>
                                      </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 border-b-2 mt-3">
                                      <div className="col-span-1">
                                        <p>SPP Bulan Agustus</p>
                                      </div>

                                      <div className="col-span-1 text-right">
                                        <p>Rp. 500.000</p>
                                      </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 border-b-2 mt-3">
                                      <div className="col-span-1">
                                        <p>SPP Bulan September</p>
                                      </div>

                                      <div className="col-span-1 text-right">
                                        <p>Rp. 6.000.000</p>
                                      </div>
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>

                            <div className="border-2 rounded-lg mt-10">
                              <Table>
                                <TableHeader className="bg-slate-200">
                                  <TableRow>
                                    <TableHead className="w-6/12 font-bold text-black">
                                      RIWAYAT PEMBAYARAN
                                    </TableHead>
                                    <TableHead className="w-2/12 font-bold text-black border-l-2 border-slate-300">
                                      STATUS
                                    </TableHead>
                                    <TableHead className="w-4/12 font-bold text-black border-l-2 border-slate-300">
                                      JUMLAH PEMBAYARAN
                                    </TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {payments.map((invoice) => (
                                    <TableRow key={invoice.invoice}>
                                      <TableCell>{invoice.invoice}</TableCell>
                                      <TableCell className="text-green-400 border-l-2">
                                        {invoice.status}
                                      </TableCell>
                                      <TableCell>{invoice.amount}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          </ScrollArea>
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

          {/* TABLE BELUM LUNAK */}
          <TabsContent value="belum">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">No.</TableHead>
                  <TableHead className="font-bold">NAMA SISWA</TableHead>
                  <TableHead className="font-bold">NISN</TableHead>
                  <TableHead className="font-bold">KELAS</TableHead>
                  <TableHead className="font-bold">JUMLAH TAGIHAN</TableHead>
                  <TableHead className="font-bold"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data2.map((invoice) => (
                  <TableRow key={invoice.no}>
                    <TableCell>{invoice.no}</TableCell>
                    <TableCell>{invoice.name}</TableCell>
                    <TableCell>{invoice.nisn}</TableCell>
                    <TableCell>{invoice.class}</TableCell>
                    <TableCell>{invoice.bill}</TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="default">Detail Tagihan</Button>
                        </DialogTrigger>
                        <DialogContent className="w-10/12 md:h-[600px] h-[530px] rounded-lg">
                          <DialogHeader>
                            <DialogTitle className="text-center">
                              Detail Tagihan
                            </DialogTitle>
                          </DialogHeader>
                          <ScrollArea className="h-96 w-full">
                            <div className="border-2 rounded-lg">
                              <div className="grid grid-cols-12 p-4">
                                <div className="col-span-2">
                                  <Image
                                    src={user}
                                    alt="user"
                                    className="w-16 h-16 rounded-lg mx-auto"
                                    priority={true}
                                  />
                                </div>

                                <div className="col-span-10 pl-3 my-auto">
                                  <h1 className="font-bold text-sm">
                                    Muhammad Zulfikri
                                  </h1>
                                  <p className="w-7 text-center mt-1 bg-blue-100 text-blue-400 p-1 border-blue-100 rounded-lg text-xs">
                                    7A
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="border-2 rounded-lg p-4 mt-6">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-1">
                                  <h1 className="text-base text-slate-400">
                                    Tagihan SPP Bulan Ini
                                  </h1>

                                  <p className="text-2xl font-bold">
                                    Rp. 6.000.000
                                  </p>
                                </div>

                                <div className="col-span-1 flex justify-end">
                                  <div className="border-2 rounded-lg p-2">
                                    <div className="grid grid-cols-5 mx-auto">
                                      <div className="col-span-2 flex items-center justify-center">
                                        <div className="bg-red-100 p-2 rounded-lg flex items-center justify-center w-9/12">
                                          <CalendarDays className="w-6 h-6 text-red-400" />
                                        </div>
                                      </div>
                                      <div className="col-span-3 grid content-center">
                                        <p className="text-xs text-stone-400">
                                          Jatuh Tempo
                                        </p>
                                        <p className="text-sm">
                                          25 Agustus 2024
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-2">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="default">
                                      <Wallet />
                                      <span>Bayar Manual</span>
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="md:w-3/12 rounded-lg">
                                    <DialogHeader>
                                      <DialogTitle className="text-center">
                                        Detail Tagihan
                                      </DialogTitle>
                                    </DialogHeader>
                                    <div className="border-2 rounded-lg p-5">
                                      <h1 className="text-base text-slate-400">
                                        Total Tagihan
                                      </h1>

                                      <p className="text-2xl font-bold mt-3">
                                        Rp 6.000.000
                                      </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2 mt-4">
                                      <div className="col-span-1">
                                        <Label
                                          htmlFor="name"
                                          className="text-right"
                                        >
                                          Tanggal Pembayaran
                                        </Label>

                                        <div className="">
                                          <Popover>
                                            <PopoverTrigger asChild>
                                              <Button
                                                variant={"outline"}
                                                className={cn(
                                                  "w-full justify-start text-left font-normal",
                                                  !date &&
                                                    "text-muted-foreground"
                                                )}
                                              >
                                                <CalendarIcon />
                                                {date ? (
                                                  format(date, "PPP")
                                                ) : (
                                                  <span>Pick a date</span>
                                                )}
                                              </Button>
                                            </PopoverTrigger>
                                            <PopoverContent
                                              className="w-auto p-0"
                                              align="start"
                                            >
                                              <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                initialFocus
                                              />
                                            </PopoverContent>
                                          </Popover>
                                        </div>
                                      </div>

                                      <div className="col-span-1">
                                        <Label
                                          htmlFor="name"
                                          className="text-right"
                                        >
                                          Nominal Pembayaran
                                        </Label>

                                        <Input
                                          type="text"
                                          placeholder="Jumlah Pembayaran"
                                        />
                                      </div>
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
                              </div>

                              <Accordion
                                type="single"
                                collapsible
                                className="w-full mt-5 border-t-2"
                              >
                                <AccordionItem value="item-1">
                                  <AccordionTrigger className="flex justify-center">
                                    Lihat Rincian
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <p className="text-sm text-slate-400">
                                      Rincian
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 border-b-2 mt-3">
                                      <div className="col-span-1">
                                        <p>SPP Bulan Juni</p>
                                      </div>

                                      <div className="col-span-1 text-right">
                                        <p>Rp. 0</p>
                                      </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 border-b-2 mt-3">
                                      <div className="col-span-1">
                                        <p>SPP Bulan Agustus</p>
                                      </div>

                                      <div className="col-span-1 text-right">
                                        <p>Rp. 500.000</p>
                                      </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 border-b-2 mt-3">
                                      <div className="col-span-1">
                                        <p>SPP Bulan September</p>
                                      </div>

                                      <div className="col-span-1 text-right">
                                        <p>Rp. 6.000.000</p>
                                      </div>
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>

                            <div className="border-2 rounded-lg mt-10">
                              <Table>
                                <TableHeader className="bg-slate-200">
                                  <TableRow>
                                    <TableHead className="w-6/12 font-bold text-black">
                                      RIWAYAT PEMBAYARAN
                                    </TableHead>
                                    <TableHead className="w-2/12 font-bold text-black border-l-2 border-slate-300">
                                      STATUS
                                    </TableHead>
                                    <TableHead className="w-4/12 font-bold text-black border-l-2 border-slate-300">
                                      JUMLAH PEMBAYARAN
                                    </TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  {payments.map((invoice) => (
                                    <TableRow key={invoice.invoice}>
                                      <TableCell>{invoice.invoice}</TableCell>
                                      <TableCell className="text-green-400 border-l-2">
                                        {invoice.status}
                                      </TableCell>
                                      <TableCell>{invoice.amount}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </div>
                          </ScrollArea>
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
