"use client";
/* eslint-disabled */
import {
  CommonFormAdd,
  CommonFormAddSection,
} from "@/components/common/form/CommonFormAdd";
import {
  useGetSubjectsQuery,
} from "@/graphql/generated";
import { z } from "zod";
import { useState } from "react";
import { useCreateAssignmentMutation } from "@/src/graphql/generated";

const tugasSchema = z.object({
  title: z.string().min(1, "Nama materi wajib diisi"),
  description: z.string().min(1, "Nama materi wajib diisi"),
  dueDate: z.string().min(1, "Nama materi wajib diisi"),
  type: z.string().min(1, "Nama materi wajib diisi"),
  extendedData: z.string().min(1, "Nama materi wajib diisi"),
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
  const dataSubject: dataSelectTypes[] = firstData?.subjects.map((data) => ({
    label: data.name,
    value: data.id,
  })) || []

  // // 🔹 State untuk Quill Editor (WYSIWYG)
  // const [code, setCode] = useState<string>("");
  // useEffect(() => {
  //   console.log(code)
  // }, [code])

  const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        [
          {
            key: "title",
            label: "Judul Tugas",
            emptyValue: "-",
            placeholder: "Masukan judul tugas..",
          },
          {
            key: "description",
            label: "Deskripsi Tugas",
            emptyValue: "-",
            placeholder: "Masukan deskripsi..",
          },
        ],
        [
          {
            key: "dueDate",
            label: "Tanggal",
            defaultValue: "2025-01-01",
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
//   const { data, loading, error } = useGetAssignmentsQuery();

// if (loading) {
//   return <p>Loading...</p>;
// }

// if (error) {
//   console.error("Error fetching assignments:", error);
//   return <p>Error fetching data</p>;
// }

// console.log(data); // Pastikan ini mencetak hasil query

  const [createAssignment] = useCreateAssignmentMutation();

  const [dataMutationDefault, setDataMutationDefault] = useState({
    title: "",
    description: "",
    dueDate: "2025-01-01",
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
