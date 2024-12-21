import {
  CalendarCheck2,
  CalendarOff,
  Hourglass,
  Thermometer,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const invoices = [
  {
    invoice: "Sabtu, 28 maret 2024",
    paymentStatus: "Hadir",
  },
  {
    invoice: "Sabtu, 28 maret 2024",
    paymentStatus: "Hadir",
  },
  {
    invoice: "Sabtu, 28 maret 2024",
    paymentStatus: "Hadir",
  },
  {
    invoice: "Sabtu, 28 maret 2024",
    paymentStatus: "Hadir",
  },
  {
    invoice: "Sabtu, 28 maret 2024",
    paymentStatus: "Hadir",
  },
  {
    invoice: "Sabtu, 28 maret 2024",
    paymentStatus: "Hadir",
  },
  {
    invoice: "Sabtu, 28 maret 2024",
    paymentStatus: "Hadir",
  },
];

export default function PresenceStudent() {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 border-2 rounded-lg justify-items-center content-center py-2">
          <div className="grid grid-cols-4 gap-2 ">
            <div className="col-span-1 bg-green-100 border-green-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <CalendarCheck2 className="w-9 h-9 text-green-400" />
            </div>

            <div className="col-span-3 grid content-center">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-base text-stone-400">Kehadiran</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base">8</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg justify-items-center content-center py-2">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1 bg-orange-100 border-orange-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <Hourglass className="w-9 h-9 text-orange-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-base text-stone-400">Izin</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base">24</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg justify-items-center content-center py-2">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1 bg-orange-100 border-orange-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <Thermometer className="w-9 h-9 text-orange-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-base text-stone-400">Sakit</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base">12</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg justify-items-center content-center py-2">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1 bg-red-100 border-red-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <CalendarOff className="w-9 h-9 text-red-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-base text-stone-400">Absen</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base">2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Table className="mt-10 border-2 rounded-md">
        <TableHeader className="bg-slate-200">
          <TableRow>
            <TableHead className="w-10/12 font-bold text-black">
              RIWAYAT ABSENSI
            </TableHead>
            <TableHead className="font-bold text-black border-l-2 border-slate-300">
              STATUS
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell>{invoice.invoice}</TableCell>
              <TableCell className="text-green-400 border-l-2">
                {invoice.paymentStatus}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
