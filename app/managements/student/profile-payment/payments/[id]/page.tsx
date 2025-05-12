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
import { CalendarDays, Check, CheckCircle, Wallet, XCircle } from "lucide-react";
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
import { useParams } from "next/navigation";
import { id } from "date-fns/locale";

export default function StudentProfilePayment() {
    const { data: userPayload } = useUserPayloadQuery();
    const { data: allUser } = useGetUsersQuery();
    const userFind = allUser?.users.find((item) => item.id === userPayload?.me.id)
    const { data } = useGetEnrollmentsQuery();
    const dataPayment: any[] = data?.enrollments || [];
    const [isPaid, setIsPaid] = useState(false)
    const [isPending, setIsPending] = useState(false)
    const [url, setUrl] = useState("")
    const [paymentDate, setPaymentDate] = useState("")
    
    const params = useParams();
    const { id } = params
    const { data: dataCheckPayment } = useGetCheckPaymentQuery({
      variables: {
        data: id as string
      }
    })
    const amountAll = dataCheckPayment?.checkPayment?.reduce((item, data) => {
      return item + (data.amount ?? 0);
    }, 0); // Ditambahkan nilai awal 0

    useEffect(() => {
      const timestamp = dataCheckPayment?.checkPayment[0].updatedAt;
      const thisDate = new Date(timestamp);

      const day = thisDate.getDate();
      const month = thisDate.getMonth() + 1; // Bulan dimulai dari 0
      const year = thisDate.getFullYear();
      const hours = thisDate.getHours();
      const minutes = thisDate.getMinutes();
      const seconds = thisDate.getSeconds();

      const formattedDay = day < 10 ? '0' + day : day;
      const formattedMonth = month < 10 ? '0' + month : month;
      const formattedHours = hours < 10 ? '0' + hours : hours;
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

      const formattedDateTime = `${formattedDay}-${formattedMonth}-${year} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

      setPaymentDate(formattedDateTime.toString())
      setUrl(dataCheckPayment?.checkPayment[0]?.url ?? "")
      if (dataCheckPayment?.checkPayment[0].status === "PAID") {
        setIsPaid(true)
      } else if (dataCheckPayment?.checkPayment[0].status === "PENDING") {
        setIsPending(true)
      }
    }, [dataCheckPayment])
    
    
    
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      {
        isPaid && (
          <div className="w-[90%] md:w-[65%] h-auto py-10 px-5 md:px-20 bg-white flex items-center justify-center text-center flex-col shadow-sm rounded-lg">
            <h1 className="font-bold text-blue-500">Pembayaran SPP Berhasil</h1>
            <p className="text-sm text-gray-400 mt-1">Nomor Invoice #{id}</p>
            <CheckCircle size={50} className="text-blue-500 mt-5" />
            <p className="text-sm text-gray-600 mt-5">Berhasil melakukan pembayaran SPP sebesar <b>Rp{amountAll?.toLocaleString('id-ID')}</b> ke siswa/i <b>{dataCheckPayment?.checkPayment[0].enrollment?.student?.name}</b> pada tanggal {paymentDate}. <a className="text-blue-600" href="/managements/student/profile-payment">kembali.</a></p>
            
          </div>
        )
      }
      {
        isPending && (
          <div className="w-[90%] md:w-[65%] h-auto py-10 px-5 md:px-20 bg-white flex items-center justify-center text-center flex-col shadow-sm rounded-lg">
            <h1 className="font-bold text-red-500">Pembayaran SPP Gagal</h1>
            <p className="text-sm text-gray-400 mt-1">Nomor Invoice #{id}</p>
            <XCircle size={50} className="text-red-500 mt-5" />
            <div className="text-sm text-gray-600 mt-5">Gagal melakukan pembayaran SPP sebesar <b>Rp{amountAll?.toLocaleString('id-ID')}</b> ke siswa/i <b>{dataCheckPayment?.checkPayment[0].enrollment?.student?.name}</b> pada tanggal {paymentDate}. <div className="text-blue-600 cursor-pointer" onClick={() => window.open(url)}>coba lagi atau refresh.</div></div>
            
          </div>
        )
      }
      {
        !isPending && !isPaid && (
          <div className="w-[90%] md:w-[65%] h-auto py-10 px-5 md:px-20 bg-white flex items-center justify-center text-center flex-col shadow-sm rounded-lg">
            <h1 className="font-bold text-red-500">Pembayaran Tidak Ditemukan</h1>
            <p className="text-sm text-gray-400 mt-1">Nomor Invoice #{id}</p>
            <XCircle size={50} className="text-red-500 mt-5" />
            <p className="text-sm text-gray-600 mt-5">Nomor invoice tidak ditemukan dalam pembayaran. <a className="text-blue-600" href="/managements/student/profile-payment">kembali.</a></p>
          </div>
        )
      }
    </div>
  );
}
