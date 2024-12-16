"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  CheckCircle,
  Clock,
  AlertCircle,
  Plus,
  Search,
  Calendar,
  GraduationCap,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface Assignment {
  id: number;
  subject: string;
  title: string;
  dueDate: string;
  status: "pending" | "completed" | "overdue";
}

interface Exam {
  id: number;
  subject: string;
  date: string;
  time: string;
}

export default function DashboardStudent() {
  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: 1,
      subject: "Matematika",
      title: "Selesaikan 5 Soal Persamaan Kuadrat Dengan Metode Faktor",
      dueDate: "24 Oktober 2024",
      status: "pending",
    },
    {
      id: 2,
      subject: "Bahasa Indonesia",
      title: "Buatlah Sebuah Teks Deskripsi Tentang Tempat Wisata",
      dueDate: "24 Oktober 2024",
      status: "completed",
    },
    {
      id: 3,
      subject: "Fisika",
      title: "Jelaskan Aplikasi Hukum Newton Dalam Kehidupan Sehari-hari",
      dueDate: "22 Oktober 2024",
      status: "overdue",
    },
    {
      id: 4,
      subject: "Sejarah",
      title: "Buatlah Esai Singkat Mengenai Peristiwa Proklamasi Kemerdekaan",
      dueDate: "26 Oktober 2024",
      status: "pending",
    },
  ]);

  const [exams, setExams] = useState<Exam[]>([
    {
      id: 1,
      subject: "Matematika",
      date: "30 Oktober 2024",
      time: "08:00 - 10:00",
    },
    {
      id: 2,
      subject: "Bahasa Indonesia",
      date: "1 November 2024",
      time: "10:30 - 12:30",
    },
    {
      id: 3,
      subject: "Fisika",
      date: "3 November 2024",
      time: "13:00 - 15:00",
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Belum Diselesaikan
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8 Tugas</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Selesai</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24 Tugas</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Materi</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18 Materi</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Absen</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Progres Belajar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Matematika</span>
              <span className="text-sm text-muted-foreground">75%</span>
            </div>
            <Progress value={75} className="h-2" />
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Bahasa Indonesia</span>
              <span className="text-sm text-muted-foreground">60%</span>
            </div>
            <Progress value={60} className="h-2" />
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Fisika</span>
              <span className="text-sm text-muted-foreground">90%</span>
            </div>
            <Progress value={90} className="h-2" />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="assignments" className="space-y-4">
        <TabsList>
          <TabsTrigger value="assignments">Tugas</TabsTrigger>
          <TabsTrigger value="exams">Ujian</TabsTrigger>
        </TabsList>
        <TabsContent value="assignments" className="space-y-4">
          <div className="flex justify-between items-center">
            <Select defaultValue="global">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="global">Global</SelectItem>
                <SelectItem value="matematika">Matematika</SelectItem>
                <SelectItem value="bahasa">Bahasa Indonesia</SelectItem>
                <SelectItem value="fisika">Fisika</SelectItem>
              </SelectContent>
            </Select>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Cari Tugas" className="pl-8 w-[300px]" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {assignments.map((assignment) => (
              <Card key={assignment.id}>
                <Link href="/managements/student/task">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <Badge
                          variant={
                            assignment.status === "completed"
                              ? "default"
                              : assignment.status === "pending"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {assignment.status === "completed"
                            ? "Selesai"
                            : assignment.status === "pending"
                            ? "Pending"
                            : "Terlambat"}
                        </Badge>
                        <h3 className="font-semibold mt-2 mb-1">
                          {assignment.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {assignment.subject}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>
                            Kumpulkan 3 hari lagi • {assignment.dueDate}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="exams" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {exams.map((exam) => (
              <Card key={exam.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">{exam.subject}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exam.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{exam.time}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Persiapan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Pencapaian Terbaru</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <div>
                <h4 className="font-semibold">Nilai Tertinggi di Kelas</h4>
                <p className="text-sm text-muted-foreground">
                  Matematika - Ujian Tengah Semester
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <BookOpen className="h-8 w-8 text-primary" />
              <div>
                <h4 className="font-semibold">100% Kehadiran</h4>
                <p className="text-sm text-muted-foreground">Bulan September</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
