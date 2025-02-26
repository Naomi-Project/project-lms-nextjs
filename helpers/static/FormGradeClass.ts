"use client"
import { CommonFormAddSection } from "@/components/common/form/CommonFormAdd"
import { z } from "zod";

export const gradeSchema = z.object({
  name: z.string().min(1, "Nama Induk wajib diisi"),
});

export interface Form {
    name: string
}

export const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        // fields group 1
        [
          {
            key: "name",
            label: "Nama Induk Kelas",
            emptyValue: "-",
            placeholder: "Masukkan nama induk..",
          },
        ],
      ],
    },
];