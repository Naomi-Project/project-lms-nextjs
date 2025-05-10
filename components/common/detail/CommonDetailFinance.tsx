"use client";
/* eslint-disable */
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";


import { CalendarDays, Wallet } from "lucide-react";
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { PaymentMethod, PaymentStatus, useCreateCheckoutPaymentMutation, useUpdatePaymentMutation } from "@/graphql/generated";
import { Checkbox } from "@/components/ui/checkbox";
import Swal from "sweetalert2";
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

interface CheckoutItem {
  invoice: string;
  paymentId: string;
  amount: number; // atau string jika amount berupa string
}

export interface CommonDetailProps<T extends Record<any, any>> {
  title: string;
  image: string;
  name: string;
  tagihan: string;
  jatuhTempo?: string;
  payStatus?: string;
  enrollmentId: string;
  studentId: string;
  classroomId: string;
  paymentId: string;
  pricingId: string;
  termId: string;
  ricianTagihan: any;
  riwayatPembayaran: any;
  class: string;
  data: T;
  sections: CommonDetailSection<T>[];
}

export function CommonDetail<T extends Record<any, any>>(
  props: CommonDetailProps<T>
) {
  const [paymentMethod, setPaymentMethod] = React.useState("");
  const [paymentAmount, setPaymentAmount] = React.useState("");
  const [updatePayment] = useUpdatePaymentMutation()
  
  const [checkoutData, setCheckoutData] = React.useState<CheckoutItem[]>([]);

  const setCheckout = (invoice: string, paymentId: string, amount: number, isChecked: boolean) => {
    if (isChecked) {
      setCheckoutData(prev => [...prev, { invoice, paymentId, amount }]);
    } else {
      setCheckoutData(prev => prev.filter(item => item.paymentId !== paymentId));
    }
  }

  const isChecked = (paymentId: string) => {
    return checkoutData.some(item => item.paymentId === paymentId);
  }

  const checkoutSpp = async () => {
    try {
      if (checkoutData.length == 0) {
          Swal.fire({
            title: "Perhatian!",
            text: "Silakan pilih tagihan terlebih dahulu.",
            icon: "warning",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
          return
      }
      const updatePromises = checkoutData.map(item => 
        updatePayment({
          variables: {
            data: {
              id: item.paymentId,
              amount: item.amount,
              status: PaymentStatus.Paid,
              invoice: item.invoice,
              url: "",
              method: PaymentMethod.Cash,
            }
          }
        })
      );
    
      const results = await Promise.all(updatePromises);

      if (results) {
        Swal.fire({
          title: "Berhasil!",
          text: `Berhasil membayar ${checkoutData.length} spp siswa/i dengan metode CASH.`,
          icon: "success",
          timer: 3000,
          timerProgressBar: true,
        }).then((result) => {
          if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
            location.reload();
          }
        });
        return
      }
    
    
    } catch (e: any) {
      console.error(e)
      Swal.fire({
        title: "Error!",
        text: "Gagal membuat pembayaran. Silakan coba lagi. error: " + e?.message,
        icon: "error",
      });
    }
  }
  
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
            <Badge className="font-light bg-transparent hover:text-white shadow-none text-primary bg-blue-100">
              {props.class}
            </Badge>
          </div>
        </div>
      </div>
      <div>
        <div className="border-2 rounded-lg bg-white p-5 mt-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <h1 className="text-base text-slate-400">
                Tagihan Akumulasi SPP
              </h1>
              {/* <h1 className="text-base text-slate-400">
                Tagihan SPP Bulan Ini
              </h1> */}

              <p className="text-2xl font-bold">Rp. {props.tagihan ?? 'loading..'}</p>
            </div>

            <div className={`col-span-1 flex justify-end mt-2 ${props.payStatus === 'SUCCESS' ? 'hidden' : ''}`}>
              {/* <div className="border-2 rounded-lg p-2">
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
              </div> */}
            </div>
            <div className={`col-span-1 flex justify-end mt-2 ${props.payStatus === 'SUCCESS' ? '' : 'hidden'}`}>
              <Badge variant='outline' className="bg-blue-100 text-primary">Telah Lunas</Badge>
            </div>
          </div>

          <div className={`mt-2 ${props.payStatus === 'SUCCESS' ? 'hidden' : ''}`}>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default">
                  <Wallet />
                  <span>Bayar {props.data.payMethod ?? "Manual"}</span>
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
                  {props.ricianTagihan.length > 0 ? props.ricianTagihan.map((invoice: any, index: number) => (
                        <div className=" border py-5 px-3 rounded-md border-gray-300 flex items-start space-x-2" key={index}>
                          <Checkbox id="terms" className="" 
                            checked={isChecked(invoice.paymentId)}
                            onCheckedChange={(checked) => 
                              setCheckout(invoice.name, invoice.paymentId, invoice.amount, checked as boolean)
                            }
                            />
                          <div className="flex flex-col gap-1">
                            <label
                              htmlFor="terms"
                              className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {invoice.name}
                            </label>
                            <label className="text-sm text-gray-500">
                              {invoice.harga}
                            </label>
  
                          </div>
                        </div>
                    )) : (
                      <div className="w-full text- py-5">
                        Belum ada tagihan.
                      </div>
                    )}
                </div>
                <DialogFooter>
                  <Button type="button" onClick={() => checkoutSpp()} className="w-full">Continue</Button>
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
                Lihat Rincian Tagihan
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm mt-5 text-slate-400">Rincian</p>
                {
                  props.ricianTagihan.length > 0 ?
                    props.ricianTagihan.map((data: any, index: number) => (
                    <div key={index} className="grid grid-cols-2 gap-4 border-b-2 mt-3">
                    <div className="col-span-1">
                        <p>{data.name}</p>
                    </div>

                    <div className="col-span-1 text-right">
                        <p>{data.harga}</p>
                    </div>
                    </div>
                    )) : (
                      'Belum ada tagihan pembayaran.'
                    )
                }
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="border-2 rounded-lg bg-white p-5 mt-10">
          <Table>
            <TableHeader className="bg-slate-200">
              <TableRow>
                <TableHead className="w-4/12 font-bold text-black">
                  RIWAYAT PEMBAYARAN
                </TableHead>
                <TableHead className="w-4/12 font-bold text-black border-l-2 border-slate-300">
                  STATUS
                </TableHead>
                <TableHead className="w-4/12 font-bold text-black border-l-2 border-slate-300">
                  JUMLAH PEMBAYARAN
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {props.riwayatPembayaran.length > 0 ? props.riwayatPembayaran.map((invoice: any, index: number) => (
                <TableRow key={index}>
                  <TableCell>{invoice.invoice.toString() ?? '-'}</TableCell>
                  <TableCell className={`${invoice.status === 'PENDING' ? 'text-orange-400' : invoice.status === 'PAID' ? 'text-green-600' : 'text-red-600'} font-semibold border-l-2`}>
                    {invoice.status}
                  </TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                </TableRow>
              )) : (
                <TableRow>
                  <TableCell>Belum Ada Riwayat Pembayaran.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
