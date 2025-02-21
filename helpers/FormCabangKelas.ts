"use client"
import { CommonFormAddSection } from "@/components/common/form/CommonFormAdd"
import { z } from "zod";

export const cabangKelasSchema = z.object({
  gradeId: z.string().min(1, "Induk kelas wajib diisi"),
  guardianId: z.string().min(1, "Induk kelas wajib diisi"),
  name: z.string().min(1, "Induk kelas wajib diisi"),
  // enrollments: z.string().min(1, "Nama wali wajib diisi"),
  // schedules: z.string().min(1, "Nama wali wajib diisi"),
});

export interface Form {
  gradeId: string
  guardianId: string
  name: string
  // enrollments: string
  // schedules: string
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
  {
    value: "9",
    label: "9",
  },
]

export const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        // fields group 1
        [
          {
            key: "name",
            label: "Nama Kelas",
            emptyValue: "-",
            placeholder: "Masukan nama kelas..",
          },
          {
            key: "gradeId",
            label: "Grade ID",
            emptyValue: "-",
            placeholder: "Masukan..",
          },
          {
            key: "guardianId",
            label: "Guardian id",
            emptyValue: "-",
            placeholder: "Masukkan..",
          },
          // {
          //   key: "enrollments",
          //   label: "Wali Kelas",
          //   emptyValue: "-",
          //   placeholder: "Masukkan nama wali kelas..",
          // },
        ],
        // fields group 2
        // [
        //   {
        //     key: "schedules",
        //     label: "Schedules",
        //     emptyValue: "-",
        //     type: "number",
        //     class: "md:w-full lg:w-full",
        //     placeholder: "Masukkan..",
        //   },
        // ],
      ],
    },
];