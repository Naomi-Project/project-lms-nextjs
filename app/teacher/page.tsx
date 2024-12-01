"use client";

import { useState } from "react";
import AppDialogForm, { Field } from "@/components/app-dialog-form";
// import AppTable, { Column } from "@/components/app-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";

interface Task {
    id: string;
    lesson: string;
    title: string;
    date: string;
}

export default function TeacherHomePage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [Task, setTask] = useState<Task[]>([
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

  const [initialValues, setInitialValues] = useState<Task>({
      id: "",
      lesson: "",
      title: "",
      date: ""
  });

  const fields: Field<Task>[] = [
    {
        name: "lesson",
        label: "Mata Pelajaran",
        placeholder: "Masukkan mata pelajaran",
        type: "select",
        options: [
            {
                value: "Matematika",
                label: "Matematika"
            },
            {
                value: "Bahasa Indonesia",
                label: "Bahasa Indonesia"
            },
            {
                value: "Fisika",
                label: "Fisika"
            },
            {
                value: "Sejarah",
                label: "Sejarah"
            },
            {
                value: "Ekonomi",
                label: "Ekonomi"
            },
            {
                value: "PPKN",
                label: "PPKN"
            },
            {
                value: "Biologi",
                label: "Biologi"
            },
            {
                value: "Geologi",
                label: "Geologi"
            },
            {
                value: "Seni Budaya",
                label: "Seni Budaya"
            },
            {
                value: "Bahasa Inggris",
                label: "Bahasa Inggris"
            }
        ]
    },
    {
        name: "title",
        label: "Judul Soal",
        placeholder: "Masukkan judul soal",
        type: "text",
    },
    {
        name: "date",
        label: "Tanggal Deadline",
        placeholder: "Masukkan tanggal",
        type: "text",
    }
  ];

//   const columns: Column<Task>[] = [
//     { label: "Mata Pelajaran", key: "lesson" },
//     { label: "Judul", key: "title" },
//     { label: "Tanggal", key: "date" },
//   ];

  const handleAdd = () => {
    setInitialValues({ id: "", lesson: "", title: "", date: "" });
    setDialogOpen(true);
  };

  const handleSubmit = (data: Task) => {
    setTask((prev) => {
      const index = prev.findIndex((Task) => Task.id === data.id);
      if (index !== -1) {
        // Edit existing entry
        const updatedStudents = [...prev];
        updatedStudents[index] = data;
        return updatedStudents;
      } else {
        // Add new entry
        return [...prev, { ...data, id: (prev.length + 1).toString() }];
      }
    });
    setDialogOpen(false);
  };

//   const handleEdit = (row: Task) => {
//     setInitialValues(row); // Set initial values to the selected row
//     setDialogOpen(true);
//   };

//   const handleDelete = (id: string) => {
//     setTask((prev) => prev.filter((Task) => Task.id !== id));
//   };

  return (
    <div className="min-h-screen">
        <div className="mb-5">
            <Button onClick={handleAdd}>
                <PlusIcon className="mr-2 h-4 w-4" />
                Buat Tugas
            </Button>
        </div>
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
      <AppDialogForm
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title={initialValues.id ? "Edit Tugas" : "Tambah Tugas"}
        description="Isi detail tugas."
        initialValues={initialValues}
        fields={fields}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
