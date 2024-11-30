"use client";
import React, { useState } from "react";
import AppDialogForm, { Field } from "@/components/app-dialog-form";
import AppTable, { Column } from "@/components/app-table";

interface Announcement {
  id: string;
  title: string; // e.g., "Midterm Exam Schedule"
  content: string; // Full announcement text
  audience: "students" | "teachers" | "all"; // Target audience
  createdBy: string; // ID of the teacher or admin who created it
  createdAt: Date; // Date and time of announcement creation
  attachments?: string[]; // Optional file URLs (e.g., PDF schedules)
  isUrgent?: boolean; // Optional flag for urgent announcements
}

export default function AnnouncementManagement() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [Announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: "ann001",
      title: "Midterm Exam Schedule",
      content:
        "The midterm exams will start from December 10th. Check the attached schedule for details.",
      audience: "students",
      createdBy: "t1",
      createdAt: new Date("2024-11-30"),
      attachments: ["https://example.com/uploads/midterm-schedule.pdf"],
    },
    {
      id: "ann002",
      title: "Final Exam Schedule",
      content:
        "The final exams will start from December 20th. Check the attached schedule for details.",
      audience: "teachers",
      createdBy: "t2",
      createdAt: new Date("2024-12-10"),
      attachments: ["https://example.com/uploads/final-schedule.pdf"],
    },
    {
      id: "ann003",
      title: "Class Schedule Update",
      content:
        "The class schedule has been updated. Check the attached schedule for the new schedule.",
      audience: "all",
      createdBy: "a1",
      createdAt: new Date("2024-11-25"),
      attachments: ["https://example.com/uploads/class-schedule.pdf"],
    },
  ]);

  const [initialValues, setInitialValues] = useState<Announcement>({
    id: "",
    title: "",
    content: "",
    audience: "students",
    createdBy: "",
    createdAt: new Date(),
    attachments: [],
    isUrgent: false,
  });

  const fields: Field<Announcement>[] = [
    {
      name: "title",
      label: "Judul",
      placeholder: "Masukkan judul",
      type: "text",
    },
    {
      name: "content",
      label: "Isi",
      placeholder: "Masukkan isi",
      type: "textarea",
    },
    {
      name: "audience",
      label: "Audience",
      placeholder: "Masukkan audience",
      type: "select",
      options: [
        { label: "Siswa", value: "students" },
        { label: "Guru", value: "teachers" },
        { label: "Semua", value: "all" },
      ],
    },
    {
      name: "attachments",
      label: "Lampiran",
      placeholder: "Masukkan lampiran",
      type: "text",
    },
    {
      name: "isUrgent",
      label: "Urgent",
      placeholder: "Masukkan urgent",
      type: "checkbox",
    },
  ];

  const columns: Column<Announcement>[] = [
    { key: "id", label: "ID" },
    { key: "title", label: "Judul" },
    { key: "content", label: "Isi" },
    { key: "audience", label: "Audience" },
    { key: "createdBy", label: "Dibuat oleh" },
    { key: "createdAt", label: "Dibuat pada" },
    { key: "attachments", label: "Lampiran" },
    { key: "isUrgent", label: "Urgent" },
  ];

  const handleAdd = () => {
    setInitialValues({
      id: "",
      title: "",
      content: "",
      audience: "students",
      createdBy: "",
      createdAt: new Date(),
      attachments: [],
      isUrgent: false,
    });
    setDialogOpen(true);
  };

  const handleSubmit = (data: Announcement) => {
    setAnnouncements((prev) => {
      const index = prev.findIndex(
        (Announcement) => Announcement.id === data.id
      );
      if (index !== -1) {
        const updatedAnnouncements = [...prev];
        updatedAnnouncements[index] = data;
        return updatedAnnouncements;
      } else {
        return [...prev, { ...data, id: (prev.length + 1).toString() }];
      }
    });
    setDialogOpen(false);
  };

  const handleEdit = (row: Announcement) => {
    setInitialValues(row);
    setDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setAnnouncements((prev) =>
      prev.filter((Announcement) => Announcement.id !== id)
    );
  };

  return (
    <div className="min-h-screen">
      <AppTable
        title="Pengumuman"
        description="Daftar pengumuman."
        data={Announcements}
        columns={columns}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <AppDialogForm
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title={initialValues.id ? "Edit Pengumuman" : "Tambah Pengumuman"}
        description="Form pengumuman"
        initialValues={initialValues}
        fields={fields}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
