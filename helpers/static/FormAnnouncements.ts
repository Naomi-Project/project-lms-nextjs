"use client"
import { CommonFormAddSection } from "@/components/common/form/CommonFormAdd"
import { z } from "zod";

export const announcementSchema = z.object({
  title: z.string().min(1, "Judul wajib diisi"),
  content: z.string().min(1, "Isi wajib diisi"),
  target: z.string().min(1, "Target wajib diisi"),
  date: z.string().optional(),
});

export interface Form {
    title: string
    content: string
    target: string
    // date: string
}

export const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        // fields group 1
        [
          {
            key: "title",
            label: "Judul Pengumuman",
            emptyValue: "-",
            placeholder: "Masukkan judul pengumuman..",
          },
          {
            key: "target",
            label: "Target Pengumuman",
            emptyValue: "-",
            type: "select",
            dataSelect: [
              { label: "Semua", value: "ALL" },
              { label: "Staff", value: "STAFF" },
              { label: "Siswa", value: "STUDENT" }
            ],
            placeholder: "Pilih Target pengumuman..",
          },
        ],
        // fields group 2
        [
          {
            key: "content",
            label: "Isi pengumuman",
            emptyValue: "-",
            type: "md",
            class: "md:w-full lg:w-full",
            placeholder: "Masukan isi pengumuman..",
          },
        ],
      ],
    },
];