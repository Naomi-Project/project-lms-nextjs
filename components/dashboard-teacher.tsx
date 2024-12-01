"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  BookOpen,
  GraduationCap,
  Clock,
  Plus,
  Search,
  BarChart,
} from "lucide-react";

interface Class {
  id: number;
  name: string;
  totalStudents: number;
  averageScore: number;
  nextLesson: string;
}

export default function TeacherDashboard() {
  const [classes, setClasses] = useState<Class[]>([
    {
      id: 1,
      name: "Kelas 7A",
      totalStudents: 32,
      averageScore: 85.5,
      nextLesson: "Senin, 08:00",
    },
    {
      id: 2,
      name: "Kelas 7B",
      totalStudents: 30,
      averageScore: 82.3,
      nextLesson: "Selasa, 10:00",
    },
    // Add more classes as needed
  ]);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Siswa</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">248</div>
            <p className="text-xs text-muted-foreground mt-1">
              Across all classes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Materi</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">Active lessons</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Rata-rata Nilai
            </CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">83.7</div>
            <p className="text-xs text-muted-foreground mt-1">
              All classes average
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Jam Mengajar</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground mt-1">Hours per week</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center">
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> Buat Materi
        </Button>
        <div className="flex gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter Kelas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Kelas</SelectItem>
              <SelectItem value="7a">Kelas 7A</SelectItem>
              <SelectItem value="7b">Kelas 7B</SelectItem>
              <SelectItem value="7c">Kelas 7C</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Cari Kelas" className="pl-8 w-[300px]" />
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {classes.map((class_) => (
          <Card key={class_.id}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold mb-4">{class_.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{class_.totalStudents} siswa</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <BarChart className="h-4 w-4" />
                      <span>Rata-rata nilai: {class_.averageScore}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Pelajaran berikutnya: {class_.nextLesson}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Detail
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
