import {
  CalendarCheck2,
  CalendarOff,
  Hourglass,
  Thermometer,
} from "lucide-react";
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
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
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <p className="text-sm text-slate-400">Profileku</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="italic"
            aria-label="Toggle italic"
            className="bg-blue-100 border-blue-100 rounded-lg"
          >
            <p className="text-sm text-blue-400">Laporan Presensi</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
          >
            <p className="text-sm text-slate-400">Laporan Nilai</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
          >
            <p className="text-sm text-slate-400">Pembayaran SPP</p>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4">
        <div className="col-span-1 border-2 rounded-lg justify-items-center content-center py-2">
          <div className="grid grid-cols-4 gap-2 ">
            <div className="col-span-1 bg-green-100 border-green-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <CalendarCheck2 className="w-9 h-9 text-green-400" />
            </div>

            <div className="col-span-3 grid content-center">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-base text-stone-400">Kehadiran</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base">8</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg justify-items-center content-center py-2">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1 bg-orange-100 border-orange-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <Hourglass className="w-9 h-9 text-orange-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-base text-stone-400">Izin</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base">24</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg justify-items-center content-center py-2">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1 bg-orange-100 border-orange-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <Thermometer className="w-9 h-9 text-orange-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-base text-stone-400">Sakit</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base">12</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 border-2 rounded-lg justify-items-center content-center py-2">
          <div className="grid grid-cols-4 gap-2">
            <div className="col-span-1 bg-red-100 border-red-100 border-2 p-2 rounded-lg flex items-center justify-center">
              <CalendarOff className="w-9 h-9 text-red-400" />
            </div>

            <div className="col-span-3">
              <div className="grid grid-rows-2">
                <div className="row-span-1">
                  <p className="text-base text-stone-400">Absen</p>
                </div>

                <div className="row-span-1">
                  <p className="text-base">2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 rounded-lg mt-6">
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-8">
            <h1 className="text-base font-bold">Tanpa Keterangan</h1>

            <p>Riwayat Absen Siswa Tanpa Keterangan Selama Setahun</p>
          </div>

          <div className="col-span-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
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

        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
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
