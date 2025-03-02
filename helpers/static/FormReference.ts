"use client"
import { CommonFormAddSection } from "@/components/common/form/CommonFormAdd"
import { z } from "zod";

export const referenceSchema = z.object({
  type: z.string().min(1, "Nama Sekolah wajib diisi"),
  url: z.string().min(1, "Nama Sekolah wajib diisi"),
  authorId: z.string().min(1, "Nama Sekolah wajib diisi"),
});

export interface Form {
    type: string
    url: string
    authorId: string
}

export const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        [
          {
            key: "type",
            label: "Tipe Referensi",
            emptyValue: "-",
            type: "select",
            dataSelect: [
              { label: "LINK", value: "LINK" },
              { label: "BOOK", value: "BOOK" },
              { label: "VIDEO", value: "VIDEO" },
              { label: "ARTICLE", value: "ARTICLE" },
              { label: "OTHER", value: "OTHER" },
            ],
            class: "md:w-full lg:w-full",
            placeholder: "Pilih tipe referensi..",
          },
        ],
        [
          {
            key: "url",
            label: "Isi referensi (dalam bentuk url)",
            emptyValue: "-",
            class: "md:w-full lg:w-full",
            placeholder: "Masukkan isi referensi berupa url..",
          },
        ],
        [
          {
            key: "authorId",
            label: "Author ID",
            emptyValue: "-",
            class: "md:w-full lg:w-full",
            placeholder: "Masukkan author id..",
          },
        ],
      ],
    },
];