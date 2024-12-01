"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TrendingDown, TrendingUp } from "lucide-react";

export default function DashboardAdmin() {
  const [month, setMonth] = useState("Februari");
  const [year, setYear] = useState("2024");

  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const years = ["2024", "2023", "2022"];

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {/* Income Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pemasukan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp.150.000.000</div>
            <div className="flex gap-2 mt-4">
              <Select value={month} onValueChange={setMonth}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((m) => (
                    <SelectItem key={m} value={m}>
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((y) => (
                    <SelectItem key={y} value={y}>
                      {y}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Unpaid SPP Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              SPP Belum Terbayar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">
              Rp.-21.000.000
            </div>
            <div className="text-sm text-muted-foreground mt-2">123 Siswa</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Total Students Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Siswa
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <TrendingUp className="w-4 h-4 mr-1" />
                4.99%
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">900</div>
            <p className="text-xs text-muted-foreground mt-2">
              Naik lebih banyak 18 siswa dari tahun lalu
            </p>
          </CardContent>
        </Card>

        {/* New Students Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Siswa Baru
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                <TrendingDown className="w-4 h-4 mr-1" />
                2%
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">314</div>
            <p className="text-xs text-muted-foreground mt-2">
              Turun lebih sedikit 12 siswa dari tahun lalu
            </p>
          </CardContent>
        </Card>

        {/* Student Statistics Card */}
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium">Siswa Lulus Tahun ini</h3>
                <div className="text-2xl font-bold">120</div>
              </div>
              <div>
                <h3 className="text-sm font-medium">
                  Siswa Dikeluarkan Tahun ini
                </h3>
                <div className="text-2xl font-bold">12</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
