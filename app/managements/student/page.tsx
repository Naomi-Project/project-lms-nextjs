"use client";
import React, { useState } from "react";
import AppDialogForm, { Field } from "@/components/app-dialog-form";
import AppTable, { Column } from "@/components/app-table";

interface Student {
  id: string;
  name: string;
  address: string;
  grade: string;
}

export default function StudentManagement() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [Students, setStudents] = useState<Student[]>([
    {
      id: "1",
      name: "Siswa A",
      address: "Jl. Raya, Kota A",
      grade: "7",
    },
  ]);

  const [initialValues, setInitialValues] = useState<Student>({
    id: "",
    name: "",
    address: "",
    grade: "",
  });

  const fields: Field<Student>[] = [
    {
      name: "name",
      label: "Nama",
      placeholder: "Masukkan nama siswa",
      type: "text",
    },
    {
      name: "address",
      label: "Alamat",
      placeholder: "Masukkan alamat",
      type: "text",
    },
    {
      name: "grade",
      label: "Kelas",
      placeholder: "Masukkan kelas",
      type: "select",
      options: [
        {
          value: "7",
          label: "7",
        },
        {
          value: "8",
          label: "8",
        },
        {
          value: "9",
          label: "9",
        },
      ],
    },
  ];

  const columns: Column<Student>[] = [
    { label: "Nama", key: "name" },
    { label: "Alamat", key: "address" },
    { label: "Kelas", key: "grade" },
  ];

  const handleAdd = () => {
    setInitialValues({ id: "", name: "", address: "", grade: "" });
    setDialogOpen(true);
  };

  const handleSubmit = (data: Student) => {
    setStudents((prev) => {
      const index = prev.findIndex((Student) => Student.id === data.id);
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

  const handleEdit = (row: Student) => {
    setInitialValues(row); // Set initial values to the selected row
    setDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setStudents((prev) => prev.filter((Student) => Student.id !== id));
  };

  return (
    <div className="min-h-screen">
      <AppTable
        title="Daftar Siswa"
        description="Daftar siswa yang telah terdaftar"
        data={Students}
        columns={columns}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <AppDialogForm
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title={initialValues.id ? "Edit Siswa" : "Tambah Siswa"}
        description="Isi detail siswa."
        initialValues={initialValues}
        fields={fields}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
