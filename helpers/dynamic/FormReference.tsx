"use client";
/* eslint-disable */
import {
  CommonFormAdd,
  CommonFormAddSection,
} from "@/components/common/form/CommonFormAdd";
import {
  useUserPayloadQuery,
  useCreateReferenceMutation,
} from "@/graphql/generated";
import { url } from "inspector";
import { useEffect, useState } from "react";
import { z } from "zod";

export const referenceSchema = z.object({
  title: z.string().min(1, "Judul Referensi wajib diisi"),
  description: z.string().min(1, "Deskripsi Referensi wajib diisi"),
  tags: z.string().min(1, "Tags minimal 1 dan wajib diisi"),
  type: z.string().min(1, "Tipe Referensi wajib dipilih"),
  url: z.string().min(1, "Isi Referensi wajib diisi"),
  authorId: z.string().min(1, "Author Referensi wajib diisi"),
});

export interface Form {
  title: string;
  description: string;
  tags: string;
  type: string;
  url: string;
  authorId: string;
}
// 🔹 State untuk Quill Editor (WYSIWYG)

const CreatePage = () => {
  const [desc, setDesc] = useState<string>("");
  const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        [
          {
            key: "title",
            label: "Judul referensi",
            emptyValue: "-",
            placeholder: "Masukkan judul/nama referensi..",
          },
          {
            key: "tags",
            label: "Tags/Keyword referensi  (opsional)",
            emptyValue: "-",
            placeholder: "Pisahkan tag dengan tanda koma ,..",
          },
        ],
        [
          {
            key: "description",
            type: "md",
            mdValue: desc,
            setMdValue: setDesc,
            label: "Deskripsi Referensi",
            emptyValue: "-",
            class: "md:w-full lg:w-full",
            placeholder: "Masukkan deskripsi referensi..",
          },
        ],
        [
          {
            key: "type",
            label: "Tipe Referensi",
            emptyValue: "-",
            type: "select",
            dataSelect: [
              { label: "LINK", value: "LINK" },
              { label: "BOOK", value: "BOOK" },
              { label: "VIDEO", value: "VIDEO" },
              { label: "ARTICLE", value: "ARTICLE" },
              { label: "OTHER", value: "OTHER" },
            ],
            class: "md:w-full lg:w-full",
            placeholder: "Pilih tipe referensi..",
          },
        ],
        [
          {
            key: "url",
            label: "Isi referensi (dalam bentuk url)",
            emptyValue: "-",
            class: "md:w-full lg:w-full",
            placeholder: "Masukkan isi referensi berupa url..",
          },
        ],
        [
          {
            key: "authorId",
            label: "Author ID",
            emptyValue: "-",
            hidden: true,
            class: "md:w-full lg:w-full",
            placeholder: "Masukkan author id..",
          },
        ],
      ],
    },
  ];

  const { data, loading } = useUserPayloadQuery();
  const [createReference] = useCreateReferenceMutation();
  const [dataMutationDefault, setDataMutationDefault] = useState({
    title: "",
    description: "",
    tags: '',
    type: "",
    url: "",
    authorId: data?.me.id ?? "",
  });

  useEffect(() => {
    setDataMutationDefault({
      ...dataMutationDefault,
      authorId: data?.me.id ?? "",
    });
  }, [data?.me.id]);

  if (loading) {
    return <p>Loading..</p>;
  }
  ;
  return (
    <CommonFormAdd
      lable="Referensi/Libary"
      title="Buat Referensi/Libary"
      method="POST"
      mutation={createReference}
      isInputTags={true}
      isUseDefaultMutation={true}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={referenceSchema}
      sections={sections}
    />
  );
};

export default CreatePage;
