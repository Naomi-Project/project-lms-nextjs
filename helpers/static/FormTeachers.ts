"use client"
import { CommonFormAddSection } from "@/components/common/form/CommonFormAdd"
import { z } from "zod";

export const teacherSchema = z.object({
  username: z.string().min(1, "Nama Lengkap wajib diisi"),
  nuptk: z.string().min(8, "NUPTK minimal 8 digit"),
  nik: z.string().min(1, "NIK wajib diisi"),
//   guardian: z.string().min(1, "Nama Orang Tua/Wali wajib diisi"),
  phone: z.string().regex(/^(\+62|62|0)[0-9]{9,13}$/, "Nomor telepon tidak valid"),
  address: z.string().min(1, "Alamat wajib diisi"),
  mainClass: z.string().optional(),
  subClass: z.string().optional(),
  isTransfer: z.boolean().optional(),
});

export interface Form {
    username: string
    nuptk: string
    nik: string
    phone: string
    address: string
}

export const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        // fields group 1
        [
          {
            key: "username",
            label: "Nama Lengkap",
            emptyValue: "-",
            placeholder: "Masukkan nama lengkap guru..",
          },
          {
            key: "nuptk",
            label: "Nomor Unik Pendidik dan Tenaga Kependidikan",
            emptyValue: "-",
            placeholder: "Masukkan NUPTK..",
          },
        ],
        // fields group 2
        [
          {
            key: "nik",
            label: "NIK (Nomor Induk Keluarga)",
            emptyValue: "-",
            placeholder: "Masukkan NIK..",
          },
          {
            key: "phone",
            label: "No. Telfon Orang Tua/Wali",
            emptyValue: "-",
            placeholder: "Masukkan No. Telfon Orang Tua/Wali..",
          },
        ],
        // fields group 3
        [
            {
              key: "address",
              label: "Alamat Tempat Tinggal",
              emptyValue: "-",
              class: "md:w-full lg:w-full",
              placeholder: "Masukkan Alamat..",
            },
        ],
      ],
    },
];