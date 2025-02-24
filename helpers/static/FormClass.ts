"use client"
import { CommonFormAddSection } from "@/components/common/form/CommonFormAdd"
import { z } from "zod";

export const classSchema = z.object({
  induk: z.string().min(1, "Induk Kelas wajib diisi"),
  guardian: z.string().min(1, "Nama wali wajib diisi"),
  classname: z.string().min(1, "Nama Kelas diisi"),
  radio: z.string(),
});

export interface Form {
    induk: string
    guardian: string
    classname: string
    radio: string
}

export interface dataSelectTypes {
  label: string
  value: string
} 

export const dataIndukKelas: dataSelectTypes[] = [
  {
    value: "7",
    label: "7",
  },
  {
    value: "8",
    label: "8",
  },
]

export const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        // fields group 1
        [
          {
            key: "induk",
            label: "Induk Kelas",
            emptyValue: "-",
            type: "select",
            dataSelect: dataIndukKelas,
            placeholder: "Pilih induk kelas..",
          },
          {
            key: "guardian",
            label: "Wali Kelas",
            emptyValue: "-",
            placeholder: "Masukkan NISN..",
          },
        ],
        // fields group 2
        [
          {
            key: "classname",
            label: "Nama Kelas",
            emptyValue: "-",
            type: "number",
            class: "md:w-full lg:w-full",
            placeholder: "Masukkan Nama Kelas..",
          },
        ],
      ],
    },
];