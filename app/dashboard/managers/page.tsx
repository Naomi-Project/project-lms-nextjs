"use client";

import { Button } from "@/components/ui/button";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  dekstop: {
    label: "Dekstop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function ManagerDashboard() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-between rounded-lg bg-white p-4">
        <div className="">
          <h1 className="text-slate-400 text-base">Tahun Akademik</h1>

          <p className="font-bold text-3xl mt-2">2024/2025</p>

          <p className="text-blue-500 text-sm mt-2">Juli 2024 - Juni 2025</p>
        </div>

        <div className="">
          <Dialog>
            <div className="md:mr-0 flex items-center h-full mr-4">
              <DialogTrigger asChild>
                <Button variant="default">
                  <Plus /> Buat Tahun Akademik
                </Button>
              </DialogTrigger>
            </div>
            <DialogContent className="md:w-3/12 w-96 rounded-lg">
              <DialogHeader>
                <DialogTitle className="text-center">
                  Buat Tahun Akademik
                </DialogTitle>
              </DialogHeader>
              <div className="">
                <Label htmlFor="name" className="text-right">
                  Mulai Tahun Akademik Baru
                </Label>

                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Bulan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <ScrollArea className="h-40">
                        <SelectItem value="januari">Januari</SelectItem>
                        <SelectItem value="februari">Februari</SelectItem>
                        <SelectItem value="maret">Maret</SelectItem>
                        <SelectItem value="april">April</SelectItem>
                        <SelectItem value="mei">Mei</SelectItem>
                        <SelectItem value="juni">Juni</SelectItem>
                        <SelectItem value="juli">Juli</SelectItem>
                        <SelectItem value="agustus">Agustus</SelectItem>
                        <SelectItem value="september">September</SelectItem>
                        <SelectItem value="oktober">Oktober</SelectItem>
                        <SelectItem value="november">November</SelectItem>
                        <SelectItem value="desember">Desember</SelectItem>
                      </ScrollArea>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="">
                <Label htmlFor="name" className="text-right">
                  Akhir Tahun Akademik Baru
                </Label>

                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Bulan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <ScrollArea className="h-40">
                        <SelectItem value="januari">Januari</SelectItem>
                        <SelectItem value="februari">Februari</SelectItem>
                        <SelectItem value="maret">Maret</SelectItem>
                        <SelectItem value="april">April</SelectItem>
                        <SelectItem value="mei">Mei</SelectItem>
                        <SelectItem value="juni">Juni</SelectItem>
                        <SelectItem value="juli">Juli</SelectItem>
                        <SelectItem value="agustus">Agustus</SelectItem>
                        <SelectItem value="september">September</SelectItem>
                        <SelectItem value="oktober">Oktober</SelectItem>
                        <SelectItem value="november">November</SelectItem>
                        <SelectItem value="desember">Desember</SelectItem>
                      </ScrollArea>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <DialogFooter className="mt-5">
                <Button type="submit" variant="default" className="w-full">
                  Selesai
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="md:grid grid-cols-2 gap-4 mt-6">
        <div className="col-span-1 bg-white rounded-lg p-4">
          <p className="text-base text-slate-400">Pemasukan</p>

          <p className="font-bold text-3xl mt-2">Rp. 150.000.000</p>

          <div className="w-8/12 mt-7">
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
          </div>
        </div>

        <div className="md:mt-0 col-span-1 bg-white rounded-lg p-4 mt-4">
          <p className="text-base text-slate-400">SPP Belum Terbayar</p>

          <p className="font-bold text-3xl text-red-500 mt-2">
            Rp. -21.000.000
          </p>

          <p className="text-sm mt-6">123 Siswa</p>
        </div>
      </div>

      <div className="md:grid grid-cols-2 gap-4 mt-6">
        <div className="col-span-1">
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="col-span-1 bg-white p-2 rounded-lg">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 my-auto">
                  <p className="text-base">Total Siswa</p>
                </div>

                <div className="col-span-1 rounded-lg p-2 border-green-500 bg-green-100 border-2">
                  <div className="grid grid-cols-2">
                    <div className="col-span-1">
                      <TrendingUp className="text-green-500" />
                    </div>

                    <div className="col-span-1 my-auto">
                      <p className="text-xs text-green-500">4.49%</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-3xl font-bold">900</p>
              <p className="text-slate-400 text-sm">Siswa</p>

              <p className="text-slate-400 text-sm mt-3">
                Naik lebih banyak 18 siswa dari tahun lalu
              </p>
            </div>

            <div className="col-span-1 bg-white p-2 rounded-lg">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 my-auto">
                  <p className="text-base">Total Siswa</p>
                </div>

                <div className="col-span-1 rounded-lg p-2 border-red-500 bg-red-100 border-2">
                  <div className="grid grid-cols-2">
                    <div className="col-span-1">
                      <TrendingDown className="text-red-500" />
                    </div>

                    <div className="col-span-1 my-auto">
                      <p className="text-xs text-red-500">2%</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-3xl font-bold">314</p>
              <p className="text-slate-400 text-sm">Siswa</p>

              <p className="text-slate-400 text-sm mt-3">
                Turun lebih sedikit 12 siswa dari tahun lalu
              </p>
            </div>
          </div>
        </div>

        <div className="md:mt-0 mt-4 col-span-1">
          <div className="grid grid-rows-2 gap-4">
            <div className="row-span-1 bg-white p-2 rounded-lg">
              <p className="text-base">Siswa Lulus Tahun Ini</p>

              <p className="font-bold text-3xl mt-2">120</p>
            </div>

            <div className="row-span-1 bg-white p-2 rounded-lg">
              <p className="text-base">Siswa Dikeluarkan Tahun Ini</p>

              <p className="font-bold text-3xl mt-2">12</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-white mt-10">
        <ChartContainer config={chartConfig} className="w-full h-80">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
