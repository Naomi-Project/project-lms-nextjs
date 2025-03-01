"use client";
/* eslint-disabled */
import {
  CommonFormAdd,
  CommonFormAddSection,
} from "@/components/common/form/CommonFormAdd";
import {
  useGetClassroomsQuery,
  useGetSubjectsQuery,
} from "@/graphql/generated";
import { z } from "zod";
import { useState } from "react";
import { useCreateAssignmentMutation } from "@/graphql/generated";

const tugasSchema = z.object({
  title: z.string().min(1, "Nama tugas wajib diisi"),
  description: z.string().min(1, "Deskripsi tugas wajib diisi"),
  dueDate: z.string().min(1, "Deadline wajib diisi"),
  type: z.string().min(1, "Tipe tugas wajib diisi"),
  extendedData: z.string().min(1, "Isi tugas wajib diisi"),
  subjectId: z.string().min(1, "Subject id wajib dipilih"),
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

const FormHelpersAdd = () => {
  const { data: firstData } = useGetSubjectsQuery()
  const { data: secondData } = useGetClassroomsQuery()
  const dataSubject: dataSelectTypes[] = firstData?.subjects.map((data) => ({
    label: data.name,
    value: data.id,
  })) || []
  const dataClass: dataSelectTypes[] = secondData?.classrooms.map((data) => ({
    label: data.name,
    value: data.id,
  })) || []

  // 🔹 State untuk Quill Editor (WYSIWYG)
  const [stateEditor, setStateEditor] = useState<string>("");
  
  const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        [
          {
            key: "title",
            label: "Judul Tugas",
            class: "md:w-full lg:w-full",
            emptyValue: "-",
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
            label: "Deadline Tugas",
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
            label: "Berikan tugas ini ke kelas",
            emptyValue: "-",
            type: "select",
            dataSelect: dataClass,
            placeholder: "Pilih target kelas..",
          },
          {
            key: "subjectId",
            label: "Mata Pelajaran",
            emptyValue: "-",
            type: "select",
            dataSelect: dataSubject,
            placeholder: "Pilih mata pelajaran..",
          },
        ],
        [
          {
            key: "extendedData",
            label: "Soal-soal - Pastikan semua soal punya jawaban dengan klik checkbox untuk mengunci jawaban",
            class: "md:w-full lg:w-full",
            emptyValue: "-",
            type: "soal_builder",
            placeholder: "",
          },
        ]
      ],
    },
  ];

  const [createAssignment] = useCreateAssignmentMutation();

  const [dataMutationDefault, setDataMutationDefault] = useState({
    title: "",
    description: "",
    dueDate: "",
    type: "",
    extendedData: '',
    subjectId: "",
  });
  return (
    <CommonFormAdd
      lable="Tugas"
      title="Buat Tugas"
      method="POST"
      isUseDefaultMutation={true}
      mutation={createAssignment}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={tugasSchema}
      sections={sections}
    />
  );
};

export default FormHelpersAdd;
