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
  tags: z.string().optional(),
  type: z.string().min(1, "Tipe Referensi wajib dipilih"),
  url: z.optional(z.string()),
  file: z.any(),
  authorId: z.string().min(1, "Author Referensi wajib diisi"),
});

export interface Form {
  title: string;
  description: string;
  tags?: string;
  type: string;
  url?: string;
  file?: any;
  authorId: string;
}
// 🔹 State untuk Quill Editor (WYSIWYG)

const CreatePage = () => {
  const [desc, setDesc] = useState<string>("");

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
            placeholder: "Pisahkan tag dengan tanda koma",
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
            class: "w-full md:w-full mt-2 mb-3 lg:w-full",
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
              { label: "IMAGE", value: "IMAGE" },
              { label: "VIDEO", value: "VIDEO" },
              { label: "ARTICLE", value: "ARTICLE" },
              { label: "OTHER", value: "OTHER" },
            ],
            class: "w-full my-2 md:w-full lg:w-full",
            placeholder: "Pilih tipe referensi..",
          },
        ],
        [
          {
            key: "file",
            label: "File Referensi",
            emptyValue: "-",
            type: 'file_upload_ref',
            class: "w-full mt-2 md:w-full lg:w-full",
            placeholder: "Masukkan upload file referensi..",
          },
        ],
        [
          {
            key: "url",
            label: "Isi referensi URL",
            emptyValue: "-",
            type: 'url_input_ref',
            class: "w-full mt-2 md:w-full lg:w-full",
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
      lable="Referensi"
      title="Buat Referensi"
      method="POST"
      mutation={createReference}
      isInputTags={true}
      isCreateReference={true}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={referenceSchema}
      sections={sections}
    />
  );
};

export default CreatePage;
