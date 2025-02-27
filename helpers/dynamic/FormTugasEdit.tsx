"use client";
/* eslint-disabled */
import {
  CommonFormAddSection,
} from "@/components/common/form/CommonFormAdd";
import {
  useGetSubjectsQuery,
} from "@/graphql/generated";
import { z } from "zod";
import { useGetAssignmentQuery, useUpdateAssignmentMutation } from "@/graphql/generated";
import { CommonFormEdit } from "@/components/common/form/CommonFormEdit";
import { useParams } from "next/navigation";
import { useState } from "react";
import { format } from "date-fns";

const tugasSchema = z.object({
  title: z.string().min(1, "Nama tugas wajib diisi"),
  description: z.string().min(1, "Deskripsi tugas wajib diisi"),
  dueDate: z.string().min(1, "Deadline wajib diisi"),
  type: z.string().min(1, "Tipe tugas wajib diisi"),
  extendedData: z.string().min(1, "Isi tugas wajib diisi"),
  subjectId: z.string().min(1, "Mapel wajib dipilih"),
});

interface Form {
  title: string;
  description: string;
  dueDate: string;
  type: string;
  extendedData: string;
  subjectId: string;
}

interface dataSelectTypes {
  label: string;
  value: string;
}

const FormHelpersEdit = () => {
  const params = useParams();
  const { id } = params;

  const { data: firstData } = useGetSubjectsQuery()
  const dataSubject: dataSelectTypes[] = firstData?.subjects.map((data) => ({
    label: data.name,
    value: data.id,
  })) || []
  
  const { data: dataEdit } = useGetAssignmentQuery({
    variables: {
      data: id as string,
    },
    skip: !id,
  })
  
    // 🔹 State untuk Quill Editor (WYSIWYG)
    const [stateEditor, setStateEditor] = useState<string>("");

  const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        [
          {
            key: "title",
            label: "Judul Tugas",
            emptyValue: "-",
            class: "md:w-full lg:w-full",
            placeholder: "Masukan judul tugas..",
          },
        ],
        [
          {
            key: "description",
            label: "Deskripsi Tugas",
            emptyValue: "-",
            type: "md",
            mdValue: stateEditor,
            setMdValue: setStateEditor,
            class: "md:w-full lg:w-full",
            placeholder: "Masukan deskripsi..",
          },
        ],
        [
          {
            key: "dueDate",
            label: "Deadline",
            type: "date_time",
            emptyValue: "-",
            placeholder: "Masukkan tanggal pengumpulan..",
          },
          {
            key: "type",
            label: "Tipe Tugas",
            type: "select",
            dataSelect: [
              { label: "Quiz", value: "QUIZ" },
              { label: "Task", value: "TASK" },
              { label: "Midterm", value: "MIDTERM" },
              { label: "Final", value: "FINAL" },
            ],
            emptyValue: "-",
            placeholder: "Pilih tipe tugas..",
          },
        ],
        [
          {
            key: "subjectId",
            label: "Mata Pelajaran",
            emptyValue: "-",
            type: "select",
            dataSelect: dataSubject,
            class: "md:w-full lg:w-full",
            placeholder: "Pilih mata pelajaran..",
          },
        ],
        [
          {
            key: "extendedData",
            label: "Soal-soal",
            class: "md:w-full lg:w-full",
            emptyValue: "-",
            type: "soal_builder",
            placeholder: "",
          },
        ]
      ],
    },
  ];

  const [updateAssignment] = useUpdateAssignmentMutation();
  const fixData = { ...dataEdit?.assignment, dueDate: format(new Date(dataEdit?.assignment.dueDate), "yyyy-MM-dd") }
  return (
    <CommonFormEdit
      lable="Tugas"
      title="Edit & Detail Tugas"
      method="PUT"
      hideBackButton={true}
      dataGet={fixData}
      mutation={updateAssignment}
      schema={tugasSchema}
      sections={sections}
    />
  );
};

export default FormHelpersEdit;
