"use client"
import { CommonFormAddSection } from "@/components/common/form/CommonFormAdd"
import { z } from "zod";

export const familiesSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  contact: z.string().regex(/^(\+62|62|0)[0-9]{9,13}$/, "Nomor telepon tidak valid"),
  relationship: z.string().min(1, "Relasi wajib diisi"),
  userId: z.string().min(1, "User Id wajib diisi"),
});

export interface Form {
    name: string
    contact: string
    relationship: string
    userId: string
}

export interface dataSelectTypes {
  label: string
  value: string
} 

export const Relasi: dataSelectTypes[] = [
  {
    value: "FATHER",
    label: "Ayah",
  },
  {
    value: "MOTHER",
    label: "Ibu",
  },
  {
    value: "HUSBAND",
    label: "Suami",
  },
  {
    value: "WIFE",
    label: "Istri",
  },
]

export const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        // fields group 1
        [
          {
            key: "name",
            label: "Nama",
            emptyValue: "-",
            placeholder: "Masukan Nama Anggota Keluarga..",
          },
          {
            key: "contact",
            label: "Kontak Anggota Keluarga",
            emptyValue: "-",
            type: "number",
            placeholder: "Masukkan Kontak Keluarga..",
          },
        ],
        // fields group 2
        [
          {
            key: "relationship",
            label: "Hubungan",
            emptyValue: "-",
            type: "select",
            dataSelect: Relasi,
            placeholder: "Masukkan Nama Kelas..",
          },
          {
            key: "userId",
            label: "UserID",
            emptyValue: "-",
            placeholder: "Masukan user id (sementara manual)..",
          },
        ],
      ],
    },
];