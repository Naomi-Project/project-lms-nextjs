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
import PaymentTable from "./datatableLunas";
import PaymentTablePending from "./datatableBelumLunas";
import { useGetEnrollmentsQuery } from "@/graphql/generated";


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
  const { data } = useGetEnrollmentsQuery();
  const dataPayment: unknown[] = data?.enrollments || [];
  const studentsPaid = data?.enrollments.filter((item) => item?.payment?.status === 'SUCCESS')
  const studentsNotPaid = data?.enrollments.filter((item) => item?.payment?.status === 'PENDING')
  // Hitung total semua SPP yang belum terbayar
  const totalSppSudahTerbayar = studentsPaid?.reduce((total, item) => {
    return total + (item.payment?.pricing?.amount ?? 0); // Jika tidak ada amount, gunakan 0 sebagai default
  }, 0);
  const totalSppBelumTerbayar = studentsNotPaid?.reduce((total, item) => {
    return total + (item.payment?.pricing?.amount ?? 0); // Jika tidak ada amount, gunakan 0 sebagai default
  }, 0);
  console.log(data)

  return (
    <div className="min-h-screen">
      <div className="md:grid grid-cols-2 gap-4">
        <div className="col-span-1 bg-white rounded-lg p-4">
          <p className="text-base text-slate-400">Pemasukan</p>

          <p className="font-bold text-3xl mt-2">{totalSppSudahTerbayar?.toLocaleString("id-ID")}</p>

          <p className="text-sm mt-6">{studentsPaid?.length} Siswa sudah membayar</p>
          {/* <div className="w-8/12 mt-7">
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
          </div> */}
        </div>

        <div className="md:mt-0 mt-4 col-span-1 bg-white rounded-lg p-4">
          <p className="text-base text-slate-400">SPP Belum Terbayar</p>

          <p className="font-bold text-3xl text-red-500 mt-2">
            {totalSppBelumTerbayar?.toLocaleString("id-ID")}
          </p>

          <p className="text-sm mt-6">{studentsNotPaid?.length} Siswa belum membayar</p>
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
            <PaymentTable />
          </TabsContent>

          {/* TABLE BELUM LUNAS */}
          <TabsContent value="belum">
            <PaymentTablePending />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
