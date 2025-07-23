"use client";
/* eslint-disable */
import {
  CommonFormAdd,
  CommonFormAddSection,
} from "@/components/common/form/CommonFormAdd";
import {
  useGetReferencesQuery,
  useGetSubjectsQuery,
} from "@/graphql/generated";
import { z } from "zod";
import { useState } from "react";
import { useCreateMaterialMutation } from "@/graphql/generated";

const materiGuruSchema = z.object({
  title: z.string().min(1, "Nama materi wajib diisi"),
  subjectId: z.string().min(1, "Subject id wajib dipilih"),
  content: z.string().min(1, "Isi materi wajib diisi"),
  referenceIds: z.array(z.string()).min(1, "Isi materi wajib diisi"),
});

interface Form {
  title: string;
  subjectId: string;
  content: string;
  referenceIds: string[];
}

interface dataSelectTypes {
  label: string;
  value: string;
}

const FormHelpersAdd = () => {
  // Query pertama: Ambil data grades
  const { data: firstData } = useGetSubjectsQuery()
  const { data: secondData, loading: loadSecdata } = useGetReferencesQuery()
  const dataSubject: dataSelectTypes[] = firstData?.subjects.map((data) => ({
    label: data.name,
    value: data.id,
  })) || []
  const dataReferences: dataSelectTypes[] = secondData?.references.map((data) => ({
    label: data.title,
    value: data.id,
  })) || [] 

  // 🔹 State untuk Quill Editor (WYSIWYG)
  const [code, setCode] = useState<string>("");
  const [createMaterial] = useCreateMaterialMutation();

  const [dataMutationDefault, setDataMutationDefault] = useState({
    title: "",
    content: "",
    subjectId: "",
    referenceIds: [],
  });
  
  if (loadSecdata) {
    return (
      'loading..'
    )
  }

  const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        // fields group 1
        [
          {
            key: "title",
            label: "Nama Materi",
            emptyValue: "-",
            placeholder: "Masukan nama materi..",
          },
          {
            key: "subjectId",
            label: "Pilih Mata Pelajaran",
            emptyValue: "-",
            type: "select",
            dataSelect: dataSubject,
            placeholder: "Pilih Mata Pelajaran..",
          },
        ],
        // fields group 2
        [
          {
            key: "content",
            type: "md",
            mdValue: code,
            setMdValue: setCode,
            label: "Isi Materi",
            emptyValue: "-",
            class: "md:w-full lg:w-full",
            placeholder: "Masukkan materi..",
          },
        ],
        [
          {
            key: "referenceIds",
            type: "select_multiple",
            label: "Referensi Perpustakaan",
            dataSelect: dataReferences,
            emptyValue: "-",
            class: "md:w-full lg:w-full",
            placeholder: "Pilih Referensi..",
          },
          // {
          //   key: "referenceIds",
          //   type: "select_multiple",
          //   label: "Referensi Perpus",
          //   dataSelect: dataReferences,
          //   emptyValue: "-",
          //   placeholder: "Pilih Referensi..",
          // },
        ],
      ],
    },
  ];

  return (
    <CommonFormAdd
      lable="Materi"
      title="Buat Materi"
      method="POST"
      isUseDefaultMutation={true}
      mutation={createMaterial}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={materiGuruSchema}
      sections={sections}
    />
  );
};

export default FormHelpersAdd;
