"use client";
import React, { useState } from "react";
import AppDialogForm, { Field } from "@/components/app-dialog-form";
import AppTable, { Column } from "@/components/app-table";

interface School {
  id: string;
  name: string;
  address: string;
  type: "Elementary" | "Middle" | "High";
}

export default function SchoolManagement() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [schools, setSchools] = useState<School[]>([
    {
      id: "1",
      name: "Sekolah A",
      address: "Jl. Raya, Kota A",
      type: "Elementary",
    },
    {
      id: "2",
      name: "Sekolah B",
      address: "Jl. Raya, Kota B",
      type: "Middle",
    },
    {
      id: "3",
      name: "Sekolah C",
      address: "Jl. Raya, Kota C",
      type: "High",
    },
  ]);

  const [initialValues, setInitialValues] = useState<School>({
    id: "",
    name: "",
    address: "",
    type: "Elementary",
  });

  const fields: Field<School>[] = [
    {
      name: "name",
      label: "Nama",
      placeholder: "Masukkan nama sekolah",
      type: "text",
    },
    {
      name: "address",
      label: "Alamat",
      placeholder: "Masukkan alamat",
      type: "text",
    },
    {
      name: "type",
      label: "Tingkatan",
      placeholder: "Pilih tingkatan",
      type: "select",
      options: [
        { value: "Elementary", label: "SD" },
        { value: "Middle", label: "SMP" },
        { value: "High", label: "SMA" },
      ],
    },
  ];

  const columns: Column<School>[] = [
    { label: "Nama", key: "name" },
    { label: "Alamat", key: "address" },
    { label: "Tingkatan", key: "type" },
  ];

  const handleAdd = () => {
    setInitialValues({ id: "", name: "", address: "", type: "Elementary" });
    setDialogOpen(true);
  };

  const handleSubmit = (data: School) => {
    setSchools((prev) => {
      const index = prev.findIndex((school) => school.id === data.id);
      if (index !== -1) {
        // Edit existing entry
        const updatedSchools = [...prev];
        updatedSchools[index] = data;
        return updatedSchools;
      } else {
        // Add new entry
        return [...prev, { ...data, id: (prev.length + 1).toString() }];
      }
    });
    setDialogOpen(false);
  };

  const handleEdit = (row: School) => {
    setInitialValues(row); // Set initial values to the selected row
    setDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setSchools((prev) => prev.filter((school) => school.id !== id));
  };

  return (
    <div className="min-h-screen">
      <AppTable
        title="Daftar Sekolah"
        description="Daftar sekolah yang telah terdaftar"
        data={schools}
        columns={columns}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <AppDialogForm
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title={initialValues.id ? "Edit Sekolah" : "Tambah Sekolah"}
        description="Isi detail sekolah."
        initialValues={initialValues}
        fields={fields}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
