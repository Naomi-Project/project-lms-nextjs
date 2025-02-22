"use client";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { getValueByPath } from "@/lib/getter";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, CalendarIcon, Search, Wallet } from "lucide-react";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CommonSectionField<T extends Record<any, any>> {
  key: keyof T & string;
  label: string;
  emptyValue?: string;
}

export interface CommonDetailSection<T extends Record<any, any>> {
  label: string;
  fields: CommonSectionField<T>[];
}

export interface CommonDetailProps<T extends Record<any, any>> {
  title: string;
  image: string;
  name: string;
  tagihan: string;
  jatuhTempo: string;
  ricianTagihan: any;
  riwayatPembayaran: any;
  class: string;
  data: T;
  sections: CommonDetailSection<T>[];
}

export function CommonDetail<T extends Record<any, any>>(
  props: CommonDetailProps<T>
) {
  const [date, setDate] = React.useState<Date>();

  return (
    <>
      <Toggle
        value="bold"
        aria-label="Toggle bold"
        className="bg-blue-100 border-blue-100 rounded-lg"
      >
        <p className="text-sm text-blue-500">{props.title}</p>
      </Toggle>
      <div className="border-2 rounded-lg flex row items-center relative mt-8 bg-white">
        <div className="grid grid-cols-12 gap-4 p-4">
          <div className="md:col-span-1 col-span-2">
            <Image
              src={props.image || ""}
              width={150}
              height={150}
              alt="user"
              className="w-20 h-20 object-cover rounded-lg mx-auto"
              priority={true}
            />
          </div>

          <div className="md:col-span-11 col-span-10 my-auto">
            <h1 className="font-bold text-sm">{props.name}</h1>
            <p className="w-10 text-center mt-1 bg-blue-100 text-blue-400 p-1 border-blue-100 rounded-lg text-xs">
              {props.class}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="border-2 rounded-lg bg-white p-5 mt-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <h1 className="text-base text-slate-400">
                Tagihan SPP Bulan Ini
              </h1>

              <p className="text-2xl font-bold">Rp. {props.tagihan}</p>
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
                    <p className="text-xs text-stone-400">Jatuh Tempo</p>
                    <p className="text-sm">{props.jatuhTempo}</p>
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
                  <h1 className="text-base text-slate-400">Total Tagihan</h1>

                  <p className="text-2xl font-bold mt-3">Rp {props.tagihan}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="col-span-1">
                    <Label htmlFor="name" className="text-right">
                      Tanggal Pembayaran
                    </Label>

                    <div className="">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
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
                        <PopoverContent className="w-auto p-0" align="start">
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
                    <Label htmlFor="name" className="text-right">
                      Nominal Pembayaran
                    </Label>

                    <Input type="text" placeholder="Jumlah Pembayaran" />
                  </div>
                </div>
                <DialogFooter className="mt-5">
                  <Button type="submit" variant="default" className="w-full">
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
              <AccordionTrigger className="flex mt-5 w-full text-center justify-center">
                Lihat Rincian
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm mt-5 text-slate-400">Rincian</p>
                {
                    props.ricianTagihan.map((data: any, index: number) => (
                    <div key={index} className="grid grid-cols-2 gap-4 border-b-2 mt-3">
                    <div className="col-span-1">
                        <p>{data.name}</p>
                    </div>

                    <div className="col-span-1 text-right">
                        <p>Rp. {data.harga}</p>
                    </div>
                    </div>
                    ))
                }
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="border-2 rounded-lg bg-white p-5 mt-10">
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
              {props.riwayatPembayaran.map((invoice: any, index: number) => (
                <TableRow key={index}>
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
      </div>
    </>
  );
}
