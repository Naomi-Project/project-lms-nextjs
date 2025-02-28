"use client"
import { CommonFormAddSection } from "@/components/common/form/CommonFormAdd"
import { z } from "zod";

export const teacherSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  username: z.string().min(1, "NUPTK wajib diisi"),
  nuptk: z.string().optional(),
  password: z.string().nullable(),
  role: z.string().optional(),
  nik: z.string().min(1, "NIK wajib diisi"),
  phone: z.string().regex(/^(\+62|62|0)[0-9]{9,13}$/, "Nomor telepon tidak valid"),
  address: z.string().min(1, "Alamat wajib diisi"),
  gender: z.string().min(1, "Gender wajib dipilih"),
  dateOfBirth: z.string().min(1, "Tgl Ulang Tahun Wajib diisi"),
  mainClass: z.string().optional(),
  subClass: z.string().optional(),
  isTransfer: z.boolean().optional(),
});

export interface Form {
    name: string
    username: string
    password?: string | null
    role?: string | null
    nuptk?: string
    nik: string
    phone: string
    gender: string
    dateOfBirth: string
    address: string
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
            placeholder: "Masukkan nama guru..",
          },
          {
            key: "username",
            label: "NUPTK",
            emptyValue: "-",
            placeholder: "Masukkan NUPTK guru..",
          },
          {
            key: "nuptk",
            label: "Nomor Unik Pendidik dan Tenaga Kependidikan",
            emptyValue: "-",
            hidden: true,
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
            label: "No. Telfon",
            emptyValue: "-",
            placeholder: "6284238342..",
          },
        ],
        // fields group 3
        [
            {
              key: "address",
              label: "Alamat Tempat Tinggal",
              emptyValue: "-",
              placeholder: "Masukkan Alamat..",
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
            key: "dateOfBirth",
            label: "Tgl Ulang Tahun",
            type: "date_picker",
            class: "md:w-full lg:w-full",
            emptyValue: "-",
            placeholder: "Masukkan Tanggal Ulang Tahun .",
          },
        ]
      ],
    },
];