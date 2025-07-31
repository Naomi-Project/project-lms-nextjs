"use client"
import { CommonFormAddSection } from "@/components/common/form/CommonFormAdd"
import { z } from "zod";

export const pricingSchema = z.object({
  name: z.string().min(1, "Nama Tagihan wajib diisi"),
  amount: z.string().min(1, "Jumlah Tagihan wajib diisi"),
  schoolId: z.string().min(1, "School wajib diisi"),
});

export interface Form {
    name: string
    amount: string
    schoolId: string
}

export const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        // fields group 1
        [
          {
            key: "name",
            label: "Nama Tagihan/SPP",
            emptyValue: "-",
            placeholder: "Masukkan nama tagihan..",
          },
          {
            key: "amount",
            label: "Total Tagihan/SPP",
            emptyValue: "-",
            type: "number",
            placeholder: "Dalam bentuk Rupiah tanpa titik..",
          },
          {
            key: "schoolId",
            label: "sekolah",
            hidden: true,
            emptyValue: "-",
          },
        ],
      ],
    },
];