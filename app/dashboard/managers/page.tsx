"use client";
/* eslint-disable */
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TrendingDown } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetClassroomsQuery, useGetEnrollmentsQuery, useGetGradesQuery, useGetPaymentsQuery, useGetSchoolsQuery, useGetUsersQuery } from "@/graphql/generated";
import { parseISO } from "date-fns";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

const chartConfig = {
  payment: {
    label: "Pemasukan Dalam Rp : ",
    color: "hsl(var(--chart-2))",
  },
  student: {
    label: "Total Siswa/I : ",
    color: "hsl(var(--chart-2))",
  },
  month: {
    label: "Bulan : ",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export default function ManagerDashboard() {
  // widget tagihan spp
  const { data } = useGetEnrollmentsQuery();
  const { data: schools } = useGetSchoolsQuery();

  // widget total guru dan murid
  const { data: userLoad } = useGetUsersQuery()
  const student = userLoad?.users.filter((item) => item.role === 'STUDENT') || []
  const teacher = userLoad?.users.filter((item) => item.role === 'TEACHER') || []

  const studentsPaid = data?.enrollments.filter((item) => item?.payment?.status === 'SUCCESS')
  const studentsNotPaid = data?.enrollments.filter((item) => item?.payment?.status === 'PENDING')
  // Hitung total semua SPP yang belum terbayar
  const totalSppSudahTerbayar = studentsPaid?.reduce((total, item) => {
    return total + (item.payment?.pricing?.amount ?? 0); // Jika tidak ada amount, gunakan 0 sebagai default
  }, 0);
  const monthOptionDatePricing = Array.from(
    new Set(
      studentsPaid
        ?.map((item) => new Date(item.payment?.paidDate).getMonth().toString())
    )
  )?.map((item) => ({
    label: item,
    value: item,
  }))

  const totalSppBelumTerbayar = studentsNotPaid?.reduce((total, item) => {
    return total + (item.payment?.pricing?.amount ?? 0); // Jika tidak ada amount, gunakan 0 sebagai default
  }, 0);

  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>("semua_tahun");
  const [selectedSchoolStudent, setSelectedSchoolStudent] = useState<string | null>(null);
  const [selectedYearStudent, setSelectedYearStudent] = useState<string>("semua_tahun");
  
  const [paymentData, setPaymentData] = useState<any>([])
  const [studentData, setStudentData] = useState<any>([])
  const findSuccessPayment = data?.enrollments.filter((item) => item.payment?.status === "SUCCESS")
  const optionYear = Array.from(
    new Set(
      findSuccessPayment
        ?.map((item) => new Date(item.payment?.paidDate).getFullYear().toString())
    )
  ).map((year) => ({
    label: year,
    value: year,
  }));

  const optionYear2 = Array.from(
    new Set(
      student
        ?.map((item) => new Date(item.dateOfBirth).getFullYear().toString())
    )
  ).map((year) => ({
    label: year,
    value: year,
  }));
  
  const filteredData = useMemo(() => {
    // if (!findSuccessPayment) return
    return findSuccessPayment?.filter((item) => {
      const paymentYear = new Date(item.payment?.paidDate).getFullYear().toString();
      const schoolId = item.student?.school?.id;
  
      // Filter sekolah (jika ada pilihan sekolah)
      if (selectedSchool && schoolId !== selectedSchool) {
        return false;
      }
  
      // Filter tahun (jika tidak memilih semua tahun)
      if (selectedYear !== "semua_tahun" && paymentYear !== selectedYear) {
        return false;
      }
  
      return true;
    }).map((item) => ({
      month: format(new Date(item.payment?.paidDate), "MMMM"), // Format bulan
      payment: item.payment?.pricing?.amount || 0,
    }));
  }, [findSuccessPayment, selectedSchool, selectedYear]);

  const filteredStudent = useMemo(() => {
    if (!student) return [];
  
    const monthlyCounts: { [key: string]: number } = {};
  
    student.forEach(item => {
      const dateOfBirth = item.createdAt;
      if (dateOfBirth) {
        const date = new Date(parseInt(dateOfBirth)); // Parse Unix timestamp
        const month = format(date, "MMMM"); // Get month name
        monthlyCounts[month] = (monthlyCounts[month] || 0) + 1;
      }
    });
  
    // Convert the object to an array of objects for easier use in a chart
    const result = Object.entries(monthlyCounts).map(([month, count]) => ({
      month,
      student: count,
    }));
  
    return result;
  }, [student]);
  

  const resetFilters = () => {
    setSelectedSchool(null);
    setSelectedYear("semua_tahun");
    setSelectedSchoolStudent(null);
    setSelectedYearStudent("semua_tahun");
  };  

  // **Perbarui state hanya jika data benar-benar berubah**
  useEffect(() => {
    if (JSON.stringify(paymentData) !== JSON.stringify(filteredData)) {
      setPaymentData(filteredData);
    }
    if (JSON.stringify(studentData) !== JSON.stringify(filteredStudent)) {
      setStudentData(filteredStudent);
      console.log(student)
    }
  }, [filteredData, filteredStudent]);

  const groupByMonthYear = (users: any) => {
    return users?.reduce((acc: any, user: any) => {
      if (!user.createdAt) return acc;
  
      // Ubah tanggal ke format "YYYY-MM"
    const createdAtDate = new Date(user.createdAt);

    // Ubah tanggal ke format "YYYY-MM"
    const monthYear = format(createdAtDate, "yyyy-MM");
  
      // Jika bulan sudah ada, tambahkan 1, jika tidak, set ke 1
      acc[monthYear] = (acc[monthYear] || 0) + 1;
  
      return acc;
    }, {});
  };
  
  // Hitung jumlah siswa/guru per bulan
  const studentTrends = groupByMonthYear(student);
  const teacherTrends = groupByMonthYear(teacher);

  const calculateTrend = (trends: any) => {
    const months = Object.keys(trends).sort(); // Urutkan bulan secara kronologis
    const latestMonth = months[months.length - 1]; // Bulan terbaru
    const prevMonth = months[months.length - 2]; // Bulan sebelumnya
  
    if (!latestMonth || !prevMonth) return { change: 0, percent: 0 }; // Jika data kurang dari 2 bulan, return 0
  
    const latestCount = trends[latestMonth] || 0;
    const prevCount = trends[prevMonth] || 0;
  
    const change = latestCount - prevCount;
    const percent = prevCount > 0 ? ((change / prevCount) * 100).toFixed(2) : 100;
  
    return { change, percent };
  };
  
  // Hitung tren siswa dan guru
  const studentTrendData = calculateTrend(studentTrends);
  const teacherTrendData = calculateTrend(teacherTrends);
  
  // widget total angkatan dan kelas
  const { data: grade } = useGetGradesQuery()
  const { data: classrooms } = useGetClassroomsQuery()

  return (
    <div className="min-h-screen overflow-x-hidden">
      <>
      {/* <div className="flex justify-between rounded-lg bg-white p-4">
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
      </div> */}
      </>

      <div className="md:grid grid-cols-2 gap-4 mt-6">
        <div className="col-span-1 bg-white rounded-lg p-4">
          <p className="text-base text-slate-400">Pemasukan</p>

          <p className="font-bold text-3xl mt-2">Rp. {totalSppSudahTerbayar?.toLocaleString("id-ID")}</p>

          <div className="w-8/12 mt-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <Select defaultValue="januari">
                  <SelectTrigger className="w-full">
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
                  <SelectTrigger className="w-full">
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
            Rp. {totalSppBelumTerbayar?.toLocaleString("id-ID")}
          </p>

          <p className="text-sm mt-6">{studentsNotPaid?.length} Siswa</p>
        </div>
      </div>

      <div className="md:grid grid-cols-2 gap-4 mt-6">
            <div className="col-span-1">
              <div className="grid grid-cols-2 gap-4 h-full">
              <div className="col-span-1 bg-white p-5 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                <div className="col-span-2 my-auto">
                  <p className="text-base">Total Siswa</p>
                </div>

                <div className={`w-auto overflow-hidden rounded-lg p-2 border-2 ${studentTrendData.change >= 0 ? "border-green-500 bg-green-100" : "border-red-500 bg-red-100"}`}>
                  <div className="flex gap-1 items-center w-auto">
                    <div className="">
                      {studentTrendData.change >= 0 ? (
                        <TrendingUp className="text-green-500" />
                      ) : (
                        <TrendingDown className="text-red-500" />
                      )}
                    </div>

                    <div className="">
                      <p className={`text-xs  ${studentTrendData.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                        {studentTrendData.percent}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-3xl font-bold">{student?.length}</p>
              <p className="text-slate-400 text-sm">Siswa</p>

              <p className="text-slate-400 text-sm mt-3">
                {studentTrendData.change >= 0
                  ? `Naik lebih banyak ${studentTrendData.change} siswa dari bulan lalu`
                  : `Turun ${Math.abs(studentTrendData.change)} siswa dari bulan lalu`}
              </p>
              </div>


              <div className="col-span-1 bg-white p-5 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                <div className="col-span-2 my-auto">
                  <p className="text-base">Total Guru</p>
                </div>

                <div className={`w-auto rounded-lg p-2 border-2 ${teacherTrendData.change >= 0 ? "border-green-500 bg-green-100" : "border-red-500 bg-red-100"}`}>
                  <div className="flex gap-1 items-center w-auto">
                    <div className="">
                      {teacherTrendData.change >= 0 ? (
                        <TrendingUp className="text-green-500" />
                      ) : (
                        <TrendingDown className="text-red-500" />
                      )}
                    </div>

                    <div className="">
                      <p className={`text-xs ${teacherTrendData.change >= 0 ? "text-green-500" : "text-red-500"}`}>
                        {teacherTrendData.percent}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-3xl font-bold">{teacher?.length}</p>
              <p className="text-slate-400 text-sm">Guru</p>

              <p className="text-slate-400 text-sm mt-3">
                {teacherTrendData.change >= 0
                  ? `Naik lebih banyak ${teacherTrendData.change} guru dari bulan lalu`
                  : `Turun ${Math.abs(teacherTrendData.change)} guru dari bulan lalu`}
              </p>
              </div>

          </div>
        </div>

        <div className="md:mt-0 mt-4 col-span-1">
          <div className="grid grid-rows-2 gap-4">
            <div className="row-span-1 bg-white p-2 rounded-lg">
              <p className="text-base">Total Angkatan</p>

              <p className="font-bold text-3xl mt-2">{grade?.grades.length}</p>
            </div>

            <div className="row-span-1 bg-white p-2 rounded-lg">
              <p className="text-base">Total Kelas</p>

              <p className="font-bold text-3xl mt-2">{classrooms?.classrooms.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-white mt-10">
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <div className="flex gap-5">
              <div className="">
                <CardTitle>
                  <Select onValueChange={setSelectedSchool} value={selectedSchool ?? 'Histori Total Pemasukan'}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Histori Total Pemasukan" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='Histori Total Pemasukan'>
                          Histori Total Pemasukan
                        </SelectItem>
                      {
                        schools && schools?.schools.map((item, index) => (
                        <SelectItem key={index} value={item.id}>
                          {item.name}
                        </SelectItem>
                        ))
                      }
                    </SelectContent>
                  </Select>
                </CardTitle>
                <CardDescription className="mt-2">
                  Histori dari semua pemasukan cabang setiap bulan
                </CardDescription>
              </div>
              <div className="">
                <Select onValueChange={setSelectedYear} value={selectedYear} defaultValue={selectedYear}>
                  <SelectTrigger className="w-full font-bold">
                    <SelectValue placeholder="Semua Tahun" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="semua_tahun">Semua Tahun</SelectItem>
                    {
                      optionYear && optionYear.map((item, index) => (
                        <SelectItem value={item.value} key={index}>{item.label}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
              </div>
              </div>
              <div>
              <Button onClick={resetFilters} variant="outline">
                Reset Filter
              </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="h-96">
            <ChartContainer config={chartConfig} className="w-full h-full">
              <LineChart
                accessibilityLayer
                data={paymentData}
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
                  dataKey="payment"
                  type="linear"
                  stroke="var(--color-payment)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <div className="rounded-lg bg-white mt-10">
        <Card>
          <CardHeader>
            <div className="flex justify-between">
              <div className="flex gap-5">
              <div className="">
                <CardTitle>
                  <Select onValueChange={setSelectedSchoolStudent} value={selectedSchoolStudent ?? 'Histori Total Siswa/I'}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Histori Total Siswa/I" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='Histori Total Siswa/I'>
                          Histori Total Siswa/I
                        </SelectItem>
                      {
                        schools && schools?.schools.map((item, index) => (
                        <SelectItem key={index} value={item.id}>
                          {item.name}
                        </SelectItem>
                        ))
                      }
                    </SelectContent>
                  </Select>
                </CardTitle>
                <CardDescription className="mt-2">
                  Histori dari semua pemasukan data siswa setiap bulan
                </CardDescription>
              </div>
              <div className="">
                <Select onValueChange={setSelectedYearStudent} value={selectedYearStudent} defaultValue={selectedYearStudent}>
                  <SelectTrigger className="w-full font-bold">
                    <SelectValue placeholder="Semua Tahun" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="semua_tahun">Semua Tahun</SelectItem>
                    {
                      optionYear2 && optionYear2.map((item, index) => (
                        <SelectItem value={item.value} key={index}>{item.label}</SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>
              </div>
              </div>
              <div>
              <Button onClick={resetFilters} variant="outline">
                Reset Filter
              </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="h-96">
            <ChartContainer config={chartConfig} className="w-full h-full">
              <LineChart
                accessibilityLayer
                data={studentData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={true} />
                <XAxis
                  dataKey="student"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  // tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Line
                  dataKey="student"
                  type="linear"
                  stroke="var(--color-payment)"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  dataKey="month"
                  type="linear"
                  stroke="var(--color-payment)"
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
