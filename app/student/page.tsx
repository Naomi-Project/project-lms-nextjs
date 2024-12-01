"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Task {
    id: string;
    lesson: string;
    title: string;
    date: string;
}

export default function TeacherHomePage() {
  const [Task] = useState<Task[]>([
      {
        id: "1",
        lesson: "Matematika",
        title: "Selesaikan 5 soal persamaan kuadrat dengan metode faktorisasi.",
        date: "05 Desember 2024"
      },
      {
        id: "2",
        lesson: "Bahasa Indonesia",
        title: "Buatlah sebuah teks deskripsi tentang tempat wisata yang pernah kamu kunjungi.",
        date: "05 Desember 2024"
      },
      {
        id: "3",
        lesson: "Fisika",
        title: "Jelaskan aplikasi Hukum Newton dalam kehidupan sehari-hari dan berikan contoh.",
        date: "05 Desember 2024"
      }
  ]);

  return (
    <div className="min-h-screen">
        <div className="grid gap-4 md:grid-cols-3">
            {Task.map((item) => (
                <Card key={item.id}>
                    <CardHeader>
                        <CardTitle>{item.lesson}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{item.title}</p>
                    </CardContent>
                    <CardContent>
                        <p>{item.date}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
  );
}
