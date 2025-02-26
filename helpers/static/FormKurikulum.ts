"use client"
import { CommonFormAddSection } from "@/components/common/form/CommonFormAdd"
import { z } from "zod";

export const kurikulumSchema = z.object({
  name: z.string().min(1, "Nama Kurikulum wajib diisi"),
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
            label: "Nama Kurikulum",
            emptyValue: "-",
            placeholder: "Masukkan nama kurikulum..",
          },
        ],
      ],
    },
];