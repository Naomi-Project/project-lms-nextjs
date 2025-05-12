"use client";
/* eslint-disable */
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useMemo } from "react";




import PaymentTable from "./datatableLunas";
import PaymentTablePending from "./datatableBelumLunas";
import { useGetEnrollmentsQuery, useGetUsersQuery, useUserPayloadQuery } from "@/graphql/generated";



export default function ManagerKeuangan() {
  const { data } = useGetEnrollmentsQuery();
  const { data: payload, loading } = useUserPayloadQuery();
  const { data: userLoad, loading: userLoading } = useGetUsersQuery()
  const schoolId = userLoad?.users.find((item) => item.id === payload?.me?.id)

  const enrollmentThisSchool = useMemo(() => {
    return data?.enrollments.filter((item) => item?.student?.schoolId === schoolId?.schoolId)
  }, [data?.enrollments, userLoad?.users])

  const enrollmentsThisMonth = useMemo(() => {
    return enrollmentThisSchool?.map(enrollment => ({
      ...enrollment,
      payments: enrollment.payments || [],
    })) || [];
  }, [data?.enrollments]);
  
  const studentsPaid = useMemo(() => {
    return enrollmentsThisMonth.filter((item: any) =>
      item?.payments?.some((payment: any) => payment?.status === 'PAID')
    );
  }, [enrollmentsThisMonth]);

  const studentsNotPaid = useMemo(() => {
    return enrollmentsThisMonth.filter((item: any) =>
      item?.payments?.find((payment: any) => payment?.status === 'PENDING')
    );
  }, [enrollmentsThisMonth]);
  // Hitung total semua SPP yang sudah terbayar bulan ini
  const totalSppSudahTerbayar = useMemo(() => {
    return studentsPaid?.reduce((total: any, student: any) => {
      // Hitung semua pembayaran PAID untuk student ini
      const paidAmount = student.payments?.reduce((studentTotal: any, payment: any) => {
        return payment.status === 'PAID' 
          ? studentTotal + (payment.amount || 0) 
          : studentTotal;
      }, 0) || 0;
      
      return total + paidAmount;
    }, 0) || 0;
  }, [studentsPaid]);

  const totalSppBelumTerbayar = useMemo(() => {
    return studentsNotPaid?.reduce((total: any, student: any) => {
      // Hitung total pembayaran pending untuk setiap student
      const studentPendingPayments = student.payments?.reduce((studentTotal: any, payment: any) => {
        return payment.status === 'PENDING' 
          ? studentTotal + (payment.amount || 0) 
          : studentTotal;
      }, 0) || 0;
      
      return total + studentPendingPayments;
    }, 0) || 0;
  }, [studentsNotPaid]);

  
  if (loading) return 'loading..'
  if (userLoading) return 'loading..'

  return (
    <div className="min-h-screen">
      <div className="md:grid grid-cols-2 gap-4">
        <div className="col-span-1 bg-white rounded-lg p-4">
          <p className="text-base text-slate-400">Pemasukan</p>

          <p className="font-bold text-3xl mt-2">{totalSppSudahTerbayar?.toLocaleString("id-ID")}</p>

          <p className="text-sm mt-6">{studentsPaid?.length} Siswa sudah membayar</p>
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
        <Tabs defaultValue="belum" className="w-full">
          <TabsList className="w-full flex justify-between bg-white">
            <div className="bg-slate-200 rounded-lg">
              <TabsTrigger value="belum">Belum Lunas</TabsTrigger>
              <TabsTrigger value="lunas">Lunas</TabsTrigger>
            </div>

            {/* <div className="relative border-2 rounded-lg">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Cari Siswa" className="pl-8 w-full" />
            </div> */}
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
