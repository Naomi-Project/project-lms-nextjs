"use client";

import React from "react";
import {
  CalendarCheck2,
  CalendarOff,
  Hourglass,
  Thermometer,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", absent: 12 },
  { month: "February", absent: 8 },
  { month: "March", absent: 4 },
  { month: "April", absent: 2 },
  { month: "May", absent: 14 },
  { month: "June", absent: 21 },
];
const chartConfig = {
  absent: {
    label: "Tanpa Keterangan: ",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function StudentProfilePresence() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-start">
        <ToggleGroup type="multiple" variant="outline">
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle bold"
            className="bg-white"
          >
            <Link href="/managements/student/profile">
              <p className="text-sm text-slate-400">Profileku</p>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="italic"
            aria-label="Toggle italic"
            className="bg-blue-100 border-blue-100 rounded-lg"
          >
            <Link href="/managements/student/profile-presence">
              <p className="text-sm text-blue-500">Laporan Presensi</p>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
            className="bg-white"
          >
            <Link href="/managements/student/profile-value">
              <p className="text-sm text-slate-400">Laporan Nilai</p>
            </Link>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
            className="bg-white"
          >
            <Link href="/managements/student/profile-payment">
              <p className="text-sm text-slate-400">Pembayaran SPP</p>
            </Link>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-6">
        <div className="col-span-1 border-2 rounded-lg py-2 bg-white">
          <div className="grid grid-cols-5 gap-2 ml-5">
            <div className="col-span-1 bg-green-100 p-2 rounded-lg flex items-center justify-center">
              <CalendarCheck2 className="w-9 h-9 text-green-400" />
            </div>
            <div className="col-span-4">
              <p className="text-sm text-stone-400">Kehadiran</p>
              <p className="text-base font-bold">8</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg py-2 bg-white">
          <div className="grid grid-cols-5 gap-2 ml-5">
            <div className="col-span-1 bg-orange-100 rounded-lg flex items-center justify-center">
              <Hourglass className="w-9 h-9 text-orange-400" />
            </div>
            <div className="col-span-1">
              <p className="text-sm text-stone-400">Izin</p>
              <p className="text-base font-bold">24</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg py-2 bg-white">
          <div className="grid grid-cols-5 gap-2 ml-5">
            <div className="col-span-1 bg-orange-100 p-2 rounded-lg flex items-center justify-center">
              <Thermometer className="w-9 h-9 text-orange-400" />
            </div>
            <div className="col-span-4">
              <p className="text-sm text-stone-400">Sakit</p>
              <p className="text-base font-bold">12</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg py-2 bg-white">
          <div className="grid grid-cols-5 gap-2 ml-5">
            <div className="col-span-1 bg-red-100 p-2 rounded-lg flex items-center justify-center">
              <CalendarOff className="w-9 h-9 text-red-400" />
            </div>
            <div className="col-span-4">
              <p className="text-sm text-stone-400">Absen</p>
              <p className="text-base font-bold">2</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg mt-10 bg-white">
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <div className="">
                <CardTitle>Tanpa Keterangan</CardTitle>
                <CardDescription className="mt-2">
                  Histori Absen Siswa Tanpa Keterangan Dalam Setahun
                </CardDescription>
              </div>

              <div className="">
                <Select>
                  <SelectTrigger className="w-full font-bold">
                    <SelectValue placeholder="2025" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent className="h-96">
            <ChartContainer config={chartConfig} className="w-full h-full">
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={true} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Line
                  dataKey="absent"
                  type="linear"
                  stroke="var(--color-absent)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
