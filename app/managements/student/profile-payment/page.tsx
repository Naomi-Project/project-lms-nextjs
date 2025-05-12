'use client'
/* eslint-disable */
import React, { useEffect, useMemo, useState } from "react";
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
import { useCreateCheckoutPaymentMutation, useGetCheckPaymentQuery, useGetEnrollmentsQuery, useGetUsersQuery, useUpdatePaymentMutation, useUserPayloadQuery } from "@/graphql/generated";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox";
import { isThisMonth } from "date-fns";
import Swal from "sweetalert2";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function StudentProfilePayment() {
    const { data: userPayload } = useUserPayloadQuery();
    const { data: allUser } = useGetUsersQuery();
    const userFind = allUser?.users.find((item) => item.id === userPayload?.me.id)
    const { data } = useGetEnrollmentsQuery();
    const dataPayment: any[] = data?.enrollments || [];
    console.log(dataPayment)
    // const paymenttThisMonth = enrollment?.enrollment?.payments?.find((item) => isThisMonth(new Date(parseInt(item.createdAt)))) 
    
    const enrollmentThisUser = dataPayment.filter((item: any) => item.student.nisn === userFind?.nisn)
    
    const invoices = enrollmentThisUser[0]?.payments?.filter((item: any) => item.updatedAt && isThisMonth(new Date(parseInt(item.updatedAt))) && item.status === 'PAID').map((item: any) => ({
      ...item,
      invoice: item.pricing.name,
      status: item.status,
      amount: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(item.pricing?.amount ?? 0),
    }));
    
    const invoicesNonPaid = enrollmentThisUser[0]?.payments?.filter((item: any) => item.updatedAt && isThisMonth(new Date(parseInt(item.updatedAt))) && item.status === 'PENDING' || item.status === 'FAILED').map((item: any) => ({
      ...item,
      name: item.pricing?.name,
      enrollmentId: item.id,
      paymentId: item.id,
      status: item.status,
      amount: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(item.pricing?.amount ?? 0),
    }));

    const [checkoutData, setCheckoutData] = useState<string[]>([]);

    const setCheckout = (paymentId: string, isChecked: boolean) => {
      if (isChecked) {
        setCheckoutData(prev => [...prev, paymentId]);
      } else {
        setCheckoutData(prev => prev.filter(id => id !== paymentId));
      }
    }

    const isChecked = (paymentId: string) => {
      return checkoutData.includes(paymentId);
    }

    const [createCheckoutPayment] = useCreateCheckoutPaymentMutation()
    const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);
    const [paymentUrl, setPaymentUrl] = useState("");
    const [invoiceNumber, setInvoiceNumber] = useState("");
    const checkoutSpp = async (enrollmentId: string) => {
      try {
        if (checkoutData.length == 0) {
            Swal.fire({
              title: "Perhatian!",
              text: "Silakan pilih tagihan terlebih dahulu.",
              icon: "warning",
              timer: 2000,
              showConfirmButton: false,
              timerProgressBar: true,
            });
            return
        }

        // Tampilkan loading
        Swal.fire({
          title: "Memproses...",
          text: "Sedang membuat invoice pembayaran",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          }
        });

        const res = await createCheckoutPayment({
          variables: {
            data: {
              enrollmentId: enrollmentId.toString(),
              paymentIds: checkoutData
            }
          }
        })

        if (!res?.data?.createCheckoutPayment) {
          Swal.fire({
            title: "Error!",
            text: "Gagal membuat pembayaran online. Silakan coba lagi.",
            icon: "error",
          });
          throw new Error("Gagal membuat pembayaran");
        }

        if (res) {
          console.log(res)
          
          Swal.close();
          // Set URL pembayaran dan buka dialog
          setPaymentUrl(res.data.createCheckoutPayment.url ?? "");
          setIsPaymentDialogOpen(true);
          setInvoiceNumber(res.data.createCheckoutPayment.invoiceNumber ?? "");

          const updatePromises = checkoutData.map(paymentId => 
            updateUrlAndInvoicePayment(
              paymentId, 
              res?.data?.createCheckoutPayment.url ?? "", 
              res?.data?.createCheckoutPayment.invoiceNumber ?? ''
            )
          );
           
          await Promise.all(updatePromises);

          // disini saya mau buka dialog confirm pembayaran
          setTimeout(() => {
              const urlDoku = res.data?.createCheckoutPayment.url
              window.open(urlDoku)
          }, 800);

          return
        }
      } catch (e) {
        console.error(e)
        Swal.fire({
          title: "Error!",
          icon: "error",
          text: "Gagal membuat pembayaran. Silakan coba lagi.",
        });
      }
    }

    const [updatePayment] = useUpdatePaymentMutation()
    const updateUrlAndInvoicePayment = async (id: string, url: string, invoice: string) => {
      try {
        const res = await updatePayment({
          variables: {
            data: {
              id,
              url,
              invoice
            }
          }
        })

        if (res) {
          return true
        }

      } catch (e) {
        alert(e)
        console.error(e)
      }
    }

    const studentsNotPaid = data?.enrollments.find((item) => item.studentId === userPayload?.me?.id && item?.payments?.some((item) => item.status === 'PENDING'))
    
      const akumulateTagihanSpp = useMemo(() => {
        return studentsNotPaid?.payments?.filter((item) => item.status === "PENDING" || item.status === "FAILED").reduce((total, item) => {
          return total + (item.pricing?.amount ?? 0); // Jika tidak ada amount, gunakan 0 sebagai default
        }, 0);
      }, [studentsNotPaid]);

    const handleClickAdmin = () => {
      const nomorAdmin = "6287774487198"
      window.open("https://wa.me/" + nomorAdmin)
    }

    const { data: checkPayment } = useGetCheckPaymentQuery({
        variables: {
          data: invoiceNumber
        }
    })

    const handleConfirmPayment = async () => {
      try {
        // Tampilkan loading
        Swal.fire({
          title: "Memeriksa Pembayaran...",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          }
        });

        // Tutup loading
        Swal.close();
        
        // Panggil API check payment
        window.location.href = '/managements/student/profile-payment/payments/' + invoiceNumber
      } catch (error) {
        console.error("Error checking payment:", error);
        Swal.fire({
          title: "Error",
          text: "Gagal memverifikasi pembayaran",
          icon: "error",
        });
      }
    };
    
    
  return (
    <div className="min-h-screen">
      <div className="border-2 rounded-lg p-4 mt-6 bg-white">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <h1 className="text-base text-slate-400">Tagihan Akumulasi SPP</h1>

            <p className="text-2xl font-bold">Rp. {akumulateTagihanSpp?.toLocaleString("id-ID") ?? 0}</p>
          </div>

          {/* <div className="col-span-1 flex justify-end">
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
          </div> */}
        </div>
        
        {/* dialog confirm payment gateaway */}
        <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Konfirmasi Pembayaran</DialogTitle>
              <DialogDescription>
                Pembayaran Online telah dibuat, silakan selesaikan dan klik button konfirmasi ketika sudah menyelesaikan pembayaran.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button type="submit" className="w-full" onClick={() => handleConfirmPayment()}>Konfirmasi Pembayaran</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        {/* dialog confirm payment gateaway */}
        <div className="flex gap-2 mt-2">
          <div className="">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default">
                <Wallet />
                <span>Bayar Tagihan</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[320px] rounded-lg md:w-[425px] h-[400px] md:h-[500px] overflow-y-scroll">
              <DialogHeader>
                <DialogTitle>Pembayaran Tagihan SPP</DialogTitle>
                <DialogDescription>
                  Pilih tagihan SPP yang belum terbayar
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-4">
                {invoicesNonPaid && invoicesNonPaid.length > 0 ? invoicesNonPaid.map((invoice: any, index: number) => (
                      <div className=" border py-5 px-3 rounded-md border-gray-300 flex items-start space-x-2" key={index}>
                        <Checkbox id="terms" className="" 
                          checked={isChecked(invoice.paymentId)}
                          onCheckedChange={(checked) => 
                            setCheckout(invoice.paymentId, checked as boolean)
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
                            {invoice.amount}
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
                <Button type="button" onClick={() => checkoutSpp(dataPayment?.find((item: any) => item.student.nisn === userFind?.nisn).id)} className="w-full">Continue</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          </div>

          <div className="">
            <Button variant="outline" onClick={() => handleClickAdmin()}>Hubungi Admin</Button>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full mt-5 border-t-2">
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex justify-center">
              Lihat Rincian Tagihan
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-slate-400">Rincian</p>
              <div>
                {invoicesNonPaid && invoicesNonPaid.length > 0 ? invoicesNonPaid.map((invoice: any, index: number) => (
                  <div className="grid grid-cols-2 gap-4 border-b pb-2 mt-2" key={index}>
                    <div className="col-span-1">
                      <p>{invoice.name}</p>
                    </div>

                    <div className="col-span-1 text-right">
                      <p>{invoice.amount}</p>
                    </div>
                  </div>
                )) : (
                  <div className="w-full text- py-5">
                    Belum ada tagihan.
                  </div>
                )}
              </div>
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
            {invoices && invoices.length > 0 ? invoices.map((invoice: any, index: number) => (
              <TableRow key={index}>
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
