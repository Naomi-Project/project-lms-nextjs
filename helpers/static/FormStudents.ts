"use client"
import { CommonFormAddSection } from "@/components/common/form/CommonFormAdd"
import { z } from "zod";

export const studentSchema = z.object({
  username: z.string().optional(),
  password: z.string().nullable().optional(),
  role: z.string().optional(),
  name: z.string().min(1, "Nama Lengkap wajib diisi"),
  nisn: z.string().min(8, "NISN minimal 8 digit"),
  nik: z.string().min(1, "NIK wajib diisi"),
//   guardian: z.string().min(1, "Nama Orang Tua/Wali wajib diisi"),
  phone: z.string().regex(/^(\+62|62|0)[0-9]{9,13}$/, "Nomor telepon tidak valid"),
  address: z.string().min(1, "Alamat wajib diisi"),
  gender: z.string().min(1, "Gender wajib dipilih"),
  dateOfBirth: z.string().min(1, "Tgl Ulang Tahun wajib diisi"),
  mainClass: z.string().optional(),
  subClass: z.string().optional(),
  isTransfer: z.boolean().optional(),
});

export interface Form {
    name: string
    username?: string
    password?: string | null
    role?: string | null
    nisn: string
    nik: string
    phone: string
    address: string
    gender: string
    dateOfBirth: string
}

export const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        // fields group 1
        [
          {
            key: "name",
            label: "Nama",
            emptyValue: "-",
            placeholder: "Masukkan nama lengkap siswa..",
          },
          {
            key: "nisn",
            label: "NISN",
            emptyValue: "-",
            type: "number",
            placeholder: "Masukkan NISN..",
          },
          {
            key: "username",
            label: "Nama Lengkap",
            emptyValue: "-",
            hidden: true,
            placeholder: "Masukkan nama lengkap siswa..",
          },
          {
            key: "password",
            label: "Password",
            emptyValue: "-",
            hidden: true,
            placeholder: "Masukkan password..",
          },
          {
            key: "role",
            label: "Role",
            emptyValue: "-",
            hidden: true,
            placeholder: "Masukkan Role..",
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
            key: "dateOfBirth",
            label: "Tgl Ulang Tahun",
            type: "date_picker",
            emptyValue: "-",
            placeholder: "Masukkan Tanggal Ulang Tahun .",
          },
        ],
        // fields group 3
        [
          {
            key: "phone",
            label: "No. Telfon Orang Tua/Wali",
            emptyValue: "-",
            placeholder: "6287377333...",
          },
          {
            key: "gender",
            label: "Gender",
            type: "select",
            dataSelect: [
              { label: "Laki-laki", value: "MALE" },
              { label: "Perempuan", value: "FEMALE" },
            ],
            emptyValue: "-",
            placeholder: "Pilih Gender..",
          },
        ],
        [
          {
            key: "address",
            label: "Alamat Tempat Tinggal",
            emptyValue: "-",
            class: "md:w-full lg:w-full",
            placeholder: "Masukkan Alamat..",
          },
        ]
      ],
    },
];