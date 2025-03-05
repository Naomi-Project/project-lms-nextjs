"use client";









import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";




import PaymentTable from "./datatableLunas";
import PaymentTablePending from "./datatableBelumLunas";
import { useGetEnrollmentsQuery } from "@/graphql/generated";



export default function ManagerKeuangan() {
  const { data } = useGetEnrollmentsQuery();
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
