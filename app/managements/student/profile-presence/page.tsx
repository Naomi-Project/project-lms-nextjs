"use client";

import React from "react";
import {
  CalendarCheck2,
  CalendarIcon,
  CalendarOff,
  Hourglass,
  Thermometer,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import Link from "next/link";

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

export default function StudentProfilePresence() {
  const [date, setDate] = React.useState<Date>();

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

      <div className="md:grid grid-cols-4 gap-4 mt-6">
        <div className="col-span-1 md:w-full w-6/12 border-2 rounded-lg py-2 bg-white">
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

        <div className="col-span-1 md:w-full w-6/12 md:mt-0 mt-3 border-2 rounded-lg py-2 bg-white">
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

        <div className="col-span-1 md:w-full w-6/12 md:mt-0 mt-3 border-2 rounded-lg py-2 bg-white">
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

        <div className="col-span-1 md:w-full w-6/12 md:mt-0 mt-3 border-2 rounded-lg py-2 bg-white">
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
        <div className="grid grid-cols-10 gap-4 p-4">
          <div className="md:col-span-8 col-span-7">
            <h1 className="text-base font-bold">Tanpa Keterangan</h1>
            <p>Riwayat Absen Siswa Tanpa Keterangan Selama Setahun</p>
          </div>
          <div className="md:col-span-2 col-span-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "md:w-[130px] w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
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
