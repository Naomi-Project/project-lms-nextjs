import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CalendarDays, Wallet } from "lucide-react";

const invoices = [
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

export default function StudentProfilePayment() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-start">
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <p className="text-sm text-slate-400">Profileku</p>
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <p className="text-sm text-slate-400">Laporan Presensi</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
          >
            <p className="text-sm text-slate-400">Laporan Nilai</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
            className="bg-blue-100 border-blue-100 rounded-lg"
          >
            <p className="text-sm text-blue-400">Pembayaran SPP</p>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="border-2 rounded-lg p-4 mt-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <h1 className="text-base text-slate-400">Tagihan SPP Bulan Ini</h1>

            <p className="text-2xl font-bold">Rp. 6.000.000</p>
          </div>

          <div className="col-span-1 flex justify-end">
            <div className="border-2 rounded-lg p-2">
              <div className="grid grid-cols-5 gap-2 ml-5">
                <div className="col-span-1 bg-red-100 p-2 rounded-lg flex items-center justify-center">
                  <CalendarDays className="w-9 h-9 text-red-400" />
                </div>
                <div className="col-span-4 grid content-center">
                  <p className="text-xs text-stone-400">Jatuh Tempo</p>
                  <p className="text-sm">25 Agustus 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-4 mt-2">
          <div className="col-span-1">
            <Button variant="default">
              <Wallet />
              <span>Bayar Tagihan</span>
            </Button>
          </div>

          <div className="col-span-7">
            <Button variant="destructive">Hubungi Admin</Button>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full mt-5 border-t-2">
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex justify-center">
              Lihat Rincian
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-slate-400">Rincian</p>

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

      <Table className="mt-10 border-2 rounded-md">
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
          {invoices.map((invoice) => (
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
  );
}
