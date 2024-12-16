"use client";
import React, { useState } from "react";
import AppDialogForm, { Field } from "@/components/app-dialog-form";
import AppTable, { Column } from "@/components/app-table";

interface Teacher {
  id: string;
  name: string;
  address: string;
  email: string;
}

export default function TeacherManagement() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [Teachers, setTeachers] = useState<Teacher[]>([
    {
      id: "1",
      name: "Guru A",
      address: "Jl. Raya, Kota A",
      email: "bG0fH@example.com",
    },
    {
      id: "2",
      name: "Guru B",
      address: "Jl. Raya, Kota B",
      email: "bG0fH@example.com",
    },
    {
      id: "3",
      name: "Guru C",
      address: "Jl. Raya, Kota C",
      email: "bG0fH@example.com",
    },
  ]);

  const [initialValues, setInitialValues] = useState<Teacher>({
    id: "",
    name: "",
    address: "",
    email: "",
  });

  const fields: Field<Teacher>[] = [
    {
      name: "name",
      label: "Nama",
      placeholder: "Masukkan nama guru",
      type: "text",
    },
    {
      name: "address",
      label: "Alamat",
      placeholder: "Masukkan alamat",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Masukkan email",
      type: "text",
    },
  ];

  const columns: Column<Teacher>[] = [
    { label: "Nama", key: "name" },
    { label: "Alamat", key: "address" },
    { label: "Email", key: "email" },
  ];

  const handleAdd = () => {
    setInitialValues({ id: "", name: "", address: "", email: "" });
    setDialogOpen(true);
  };

  const handleSubmit = (data: Teacher) => {
    setTeachers((prev) => {
      const index = prev.findIndex((Teacher) => Teacher.id === data.id);
      if (index !== -1) {
        // Edit existing entry
        const updatedTeachers = [...prev];
        updatedTeachers[index] = data;
        return updatedTeachers;
      } else {
        // Add new entry
        return [...prev, { ...data, id: (prev.length + 1).toString() }];
      }
    });
    setDialogOpen(false);
  };

  const handleEdit = (row: Teacher) => {
    setInitialValues(row); // Set initial values to the selected row
    setDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setTeachers((prev) => prev.filter((Teacher) => Teacher.id !== id));
  };

  return (
    <div className="min-h-screen">
      <AppTable
        title="Daftar Guru"
        description="Daftar guru yang telah terdaftar"
        data={Teachers}
        columns={columns}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <AppDialogForm
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title={initialValues.id ? "Edit Guru" : "Tambah Guru"}
        description="Isi detail guru."
        initialValues={initialValues}
        fields={fields}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
