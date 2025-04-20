'use client'
/* eslint-disable */
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
import { CalendarDays, Wallet } from "lucide-react";
import { useGetEnrollmentsQuery, useGetUsersQuery, useUserPayloadQuery } from "@/graphql/generated";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox";

// const invoices = [
//   {
//     invoice: "Sabtu, 28 maret 2024",
//     status: "Berhasil",
//     amount: "Rp. 1.000.000",
//   },
// ];

export default function StudentProfilePayment() {
    const { data: userPayload } = useUserPayloadQuery();
    const { data: allUser } = useGetUsersQuery();
    const userFind = allUser?.users.find((item) => item.id === userPayload?.me.id)
    const { data } = useGetEnrollmentsQuery();
    const dataPayment: unknown[] = data?.enrollments || [];
    // const inovoicesPaid = dataPayment.filter((item) => item?.payment?.status === "SUCCESS")
    const invoices = dataPayment.filter((item: any) => item.student.nisn === userFind?.nisn && item.payment.status === 'SUCCESS').map((item: any) => ({
      ...item,
      invoice: item.payment.paidDate,
      status: item.payment.status,
      amount: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(item.payment.pricing?.amount ?? 0),
    }));
    const invoicesNonPaid = dataPayment.filter((item: any) => item.student.nisn === userFind?.nisn && (item.payment.status === 'PENDING' || item.payment.status === 'FAILED')).map((item: any) => ({
      ...item,
      name: item.payment.pricing.name,
      status: item.payment.status,
      amount: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(item.payment.pricing?.amount ?? 0),
    }));
    // const reminderInvoice = dataPayment.filter((item) => item.payment.dueDate)
    // console.log(inovoicesPaid)
  return (
    <div className="min-h-screen">
      <div className="border-2 rounded-lg p-4 mt-6 bg-white">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <h1 className="text-base text-slate-400">Tagihan SPP Bulan Ini</h1>

            <p className="text-2xl font-bold">Rp. 6.000.000</p>
          </div>

          <div className="col-span-1 flex justify-end">
            <div className="border-2 rounded-lg p-2">
              <div className="grid grid-cols-5 gap-2 ml-5">
                <div className="col-span-1 bg-red-100 md:p-2 p-1 rounded-lg flex items-center justify-center">
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

        <div className="flex gap-2 mt-2">
          <div className="">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default">
                <Wallet />
                <span>Bayar Tagihan</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Pembayaran Tagihan SPP</DialogTitle>
                <DialogDescription>
                  Pilih tagihan SPP yang belum terbayar
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                <div className=" border py-5 px-3 rounded-md border-gray-300 flex items-start space-x-2">
                  <Checkbox id="terms" className="" />
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="terms"
                      className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Maret
                    </label>
                    <label className="text-sm text-gray-500">
                      Rp 500.000
                    </label>

                  </div>
                </div>
                <div className=" border py-5 px-3 rounded-md border-gray-300 flex items-start space-x-2">
                  <Checkbox id="terms" className="" />
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="terms"
                      className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Maret
                    </label>
                    <label className="text-sm text-gray-500">
                      Rp 500.000
                    </label>

                  </div>
                </div>
                <div className=" border py-5 px-3 rounded-md border-gray-300 flex items-start space-x-2">
                  <Checkbox id="terms" className="" />
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="terms"
                      className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Maret
                    </label>
                    <label className="text-sm text-gray-500">
                      Rp 500.000
                    </label>

                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full">Continue</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          </div>

          <div className="">
            <Button variant="outline">Hubungi Admin</Button>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full mt-5 border-t-2">
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex justify-center">
              Lihat Rincian
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-slate-400">Rincian</p>

              {invoicesNonPaid.length > 0 ? invoicesNonPaid.map((invoice) => (
                <div className="grid grid-cols-2 gap-4 border-b-2 mt-3">
                  <div className="col-span-1">
                    <p>{invoice.name}</p>
                  </div>

                  <div className="col-span-1 text-right">
                    <p>Rp. {invoice.amount}</p>
                  </div>
                </div>
              )) : (
                <div className="w-full text- py-5">
                  Belum ada riwayat.
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="border-2 rounded-lg bg-white mt-10">
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
            {invoices.length > 0 ? invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell>{invoice.invoice}</TableCell>
                <TableCell className="text-green-400 border-l-2">
                  {invoice.status}
                </TableCell>
                <TableCell>{invoice.amount}</TableCell>
              </TableRow>
            )) : (
              <TableRow>
                <TableCell>{'Belum ada riwayat.'}</TableCell>
                {/* <TableCell className="text-green-400 border-l-2">
                  {invoice.status}
                </TableCell>
                <TableCell>{invoice.amount}</TableCell> */}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
