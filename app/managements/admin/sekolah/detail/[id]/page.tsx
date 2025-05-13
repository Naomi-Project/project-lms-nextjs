"use client";
/* eslint-disable */
import {
  useGetClassroomsQuery,
  useGetEnrollmentsQuery,
  useGetGradesQuery,
  useGetSchoolQuery,
  useGetSchoolsQuery,
  useGetUsersQuery,
  useUserPayloadQuery,
} from "@/graphql/generated";
import { useParams } from "next/navigation";
import { format, isThisMonth } from "date-fns";
import { useMemo, useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, CartesianGrid, XAxis, Line, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import PaymentTable from "./datatableLunas";
import PaymentTablePending from "./datatableBelumLunas";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ButtonAdd from "@/components/ui/buttonAdd";
import StudentTable from "./datatableSiswa";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@radix-ui/react-checkbox";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Input } from "@/components/ui/input";
import { TrendingUp, TrendingDown } from "lucide-react";
import TeacherTable from "./datatableGuru";

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

const DetailPage = () => {
  const params = useParams();
  const { id } = params;
  const { data: schools } = useGetSchoolsQuery();
  const { data: school, loading: loadShool, error } = useGetSchoolQuery({
    variables: {
      data: id as string,
    },
    skip: !id,
  });

  // dashboard logic
  const { data: classrooms } = useGetClassroomsQuery()
  const { data } = useGetEnrollmentsQuery();
  const { data: payload, loading } = useUserPayloadQuery();
  const { data: userLoad, loading: userLoading } = useGetUsersQuery()
  const student = userLoad?.users.filter((item) => item.role === 'STUDENT' && item.schoolId === id) || []
  const teacher = userLoad?.users.filter((item) => item.role === 'TEACHER' && item.schoolId === id) || []  
  const classroomLength = classrooms?.classrooms.filter((item) => item.school.id === id).length ?? 0

  const enrollmentThisSchool = useMemo(() => {
    return data?.enrollments.filter((item) => item?.student?.schoolId === (id ?? ''))
  }, [data?.enrollments, id])
  
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

  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>("semua_tahun");
  const [selectedSchoolStudent, setSelectedSchoolStudent] = useState<string | null>(null);
  const [selectedYearStudent, setSelectedYearStudent] = useState<string>("semua_tahun");

  const [paymentData, setPaymentData] = useState<any>([])
  const [studentData, setStudentData] = useState<any>([])
  const findSuccessPayment = useMemo(() => {
    return enrollmentsThisMonth.filter((item) =>
      item.payments?.some((payment) => payment?.status === "PAID")
    );
  }, [enrollmentsThisMonth]);

  const optionYear = useMemo(() => {
    return Array.from(
      new Set(
        findSuccessPayment
          ?.flatMap((item) =>
            item.payments
              ?.filter((payment) => payment?.status === 'PAID')
              .map((payment) => new Date(payment.createdAt).getFullYear().toString())
          )
      )
    ).map((year) => ({
      label: year,
      value: year,
    }));
  }, [findSuccessPayment]);

  const optionYear2 = useMemo(() => {
    return Array.from(
      new Set(
        student
          ?.map((item) => new Date(item.dateOfBirth).getFullYear().toString())
      )
    ).map((year) => ({
      label: year,
      value: year,
    }));
  }, [student]);

  const filteredData = useMemo(() => {
    return findSuccessPayment?.filter((item) => {
      const successfulPayment = item.payments?.find((payment) => payment?.status === 'PAID');
      if (!successfulPayment?.createdAt) return false;
      const paymentYear = new Date(successfulPayment.createdAt).getFullYear().toString();
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
    }).map((item) => {
      const successfulPayment = item.payments?.find((payment) => payment?.status === 'PAID');
      return ({
        month: format(new Date(successfulPayment?.createdAt), "MMMM"), // Format bulan
        payment: successfulPayment?.pricing?.amount || 0,
      });
    });
  }, [findSuccessPayment, selectedSchool, selectedYear]);

  const filteredStudent = useMemo(() => {
    if (!student) return [];

    const monthlyCounts: { [key: string]: number } = {};

    student.forEach(item => {
      const createdAtDate = item.createdAt;
      if (createdAtDate && isThisMonth(new Date(parseInt(createdAtDate)))) { // Filter siswa yang dibuat bulan ini
        const date = new Date(parseInt(createdAtDate)); // Parse Unix timestamp
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
    }
  }, [filteredData, filteredStudent]);

  const groupByMonthYear = (users: any) => {
    return users?.reduce((acc: any, user: any) => {
      if (!user.createdAt) return acc; // Filter berdasarkan bulan ini

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
  const gradeThisSchool = grade?.grades.map((item) => item.classrooms.filter((cls) => cls.school.id === id)).length
  
  if (loading) return 'loading..'
  if (userLoading) return 'loading..'
  if (loadShool) return <p>Loading...</p>;
  if (error) return (
    <div>
      <p>Ups sekolah tidak ditemukan..</p>
    </div>
  );

  const fixData = { ...school?.school, foundAt: format(new Date(school?.school.foundAt), "yyyy-MM-dd") }

  return (
    <div>
      <div>
        <h1 className="font-bold">Data Sekolah {fixData.name}</h1>
      </div>
      {/* dashboard ui */}
      <div>
          <div className="min-h-screen overflow-x-hidden">
      
            <div className="md:grid grid-cols-2 gap-4 mt-6">
              <div className="col-span-1 bg-white rounded-lg p-4">
                <p className="text-base text-slate-400">Pemasukan</p>
      
                <p className="font-bold text-3xl mt-2">Rp. {totalSppSudahTerbayar?.toLocaleString("id-ID") ?? '0'}</p>
      
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
                  Rp. {totalSppBelumTerbayar?.toLocaleString("id-ID") ?? '0'}
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
                  <div className="row-span-1 bg-white p-4 rounded-lg">
                    <p className="text-base">Total Angkatan</p>
      
                    <p className="font-bold text-3xl mt-2">{gradeThisSchool ?? 0}</p>
                  </div>
      
                  <div className="row-span-1 bg-white p-4 rounded-lg">
                    <p className="text-base">Total Kelas</p>
      
                    <p className="font-bold text-3xl mt-2">{classroomLength ?? 0}</p>
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
          </div>
      </div>
      {/* dashboard ui */}

      {/* data keuangan ui */}
      <div className="mt-10">
        <h1 className="font-bold">Data Keuangan</h1>
        <div className="pb-10">
          <div className="border-2 rounded-lg bg-white p-5 mt-5">
            <Tabs defaultValue="belum" className="w-full">
              <TabsList className="w-full flex justify-between bg-white">
                <div className="bg-slate-200 rounded-lg">
                  <TabsTrigger value="belum">Belum Lunas</TabsTrigger>
                  <TabsTrigger value="lunas">Lunas</TabsTrigger>
                </div>
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
      </div>
      {/* data keuangan ui */}

      {/* data siswa ui */}
      <div className="">
      <h1 className="font-bold">Data Siswa</h1>
      <div className="">
        <div className="border-2 rounded-lg bg-white p-5 mt-5">
          <Tabs defaultValue="aktif" className="w-full">
            <TabsContent value="aktif" className=" rounded-lg mt-4">
              {/* new data table */}
                <StudentTable />
              {/* new data table */}
            </TabsContent>
            <TabsContent value="nonAktif" className=" rounded-lg mt-4">
              {/* new data table */}
                <StudentTable />
              {/* new data table */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      </div>
      {/* data siswa ui */}

      {/* data guru ui */}
      <div className="mt-10">
      <h1 className="font-bold">Data Guru</h1>
      <div className="pt-5">
        <div className="border-2 rounded-lg bg-white p-5 pt-0">
          <Tabs defaultValue="aktif" className="w-full">
            <TabsList className="w-full flex justify-between bg-white">
            </TabsList>
            <TabsContent value="aktif" className=" rounded-lg mt-4">
              <TeacherTable />
            </TabsContent>
            <TabsContent value="nonAktif" className=" rounded-lg mt-4">
              <TeacherTable />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      </div>
      {/* data guru ui */}
    </div>
  );
};

export default DetailPage;
