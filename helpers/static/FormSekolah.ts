"use client"
import { CommonFormAddSection } from "@/components/common/form/CommonFormAdd"
import { z } from "zod";

export const sekolahSchema = z.object({
  name: z.string().min(1, "Nama Sekolah wajib diisi"),
  npsn: z.string().min(1, "NPSN Sekolah wajib diisi"),
  phone: z.string().min(1, "Phone Sekolah wajib diisi"),
  email: z.string().min(1, "Email Sekolah wajib diisi"),
  address: z.string().min(1, "Alamat Sekolah wajib diisi"),
  accreditation: z.string().min(1, "Akreditasi Sekolah wajib diisi"),
  foundAt: z.string().min(1, "Tahun Berdiri Sekolah wajib diisi"),
});

export interface Form {
    name: string
    npsn: string
    phone: string
    email: string
    address: string
    accreditation: string
    foundAt: string
}

export const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        [
          {
            key: "name",
            label: "Nama Sekolah",
            emptyValue: "-",
            placeholder: "Masukkan nama Sekolah..",
          },
          {
            key: "npsn",
            label: "NPSN",
            emptyValue: "-",
            type: "number",
            placeholder: "Masukkan NPSN Sekolah..",
          },
        ],
        [
          {
            key: "address",
            label: "Alamat Sekolah",
            emptyValue: "-",
            placeholder: "Masukkan alamat Sekolah..",
          },
          {
            key: "accreditation",
            label: "Akreditasi",
            emptyValue: "-",
            type: "select",
            dataSelect: [
              { label: "A", value: "A" },
              { label: "B", value: "B" },
              { label: "C", value: "C" },
            ],
            placeholder: "Pilih Akreditasi Sekolah..",
          },
        ],
        [
          {
            key: "phone",
            label: "No. Telp Sekolah",
            type: "number",
            emptyValue: "-",
            placeholder: "Masukkan nomor telfon Sekolah..",
          },
          {
            key: "email",
            label: "Email Sekolah",
            type: "email",
            emptyValue: "-",
            placeholder: "Masukkan Email Sekolah..",
          },
        ],
        [
          {
            key: "foundAt",
            label: "Tahun Berdirinya Sekolah",
            emptyValue: "-",
            type: "date_picker",
            placeholder: "Masukkan tahun beridiri Sekolah..",
          },
        ],
      ],
    },
];