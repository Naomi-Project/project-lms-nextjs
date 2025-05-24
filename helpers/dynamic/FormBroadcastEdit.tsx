"use client";
/* eslint-disabled */
import {
  CommonFormAddSection,
} from "@/components/common/form/CommonFormAdd";
import { CommonFormEdit } from "@/components/common/form/CommonFormEdit";
import {
  useUpdateSubjectMutation,
} from "@/graphql/generated";
import { useParams } from "next/navigation";
import { z } from "zod";

const broadcastSchema = z.object({
  openingText: z.string().min(1, "Text awalan wajib diisi"),
  mainText: z.string().min(1, "pesan wajib diisi"),
});

interface Form {
  openingText: string;
  mainText: string;
}

interface dataSelectTypes {
  label: string;
  value: string;
}

const FormHelpersEdit = () => {
  const params = useParams();
  const { id } = params;

  const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        // fields group 1
        [
          {
            key: "openingText",
            label: "Text Awalan",
            emptyValue: "-",
            class: "w-full mb-2",
            disabled: true,
            placeholder: "...",
          },
          {
            key: "mainText",
            label: "Isi Pesan",
            emptyValue: "-",
            class: "w-full",
            placeholder: "...",
          },
        ],
      ],
    },
  ];

  const [updateSubject] = useUpdateSubjectMutation()

  const fixData = {openingText: "Halo {{ student_name }} "}
  return (
      <CommonFormEdit
        lable="Whatsapp Blast"
        title="Edit Isi Pesan Auto reminder whatsapp"
        method="PUT"
        mutation={updateSubject}
        dataGet={fixData}
        schema={broadcastSchema}
        sections={sections}
      />
  );
};

export default FormHelpersEdit;