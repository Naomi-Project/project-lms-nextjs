"use client";
/* eslint-disable */
import {
  CommonFormAdd,
  CommonFormAddSection,
} from "@/components/common/form/CommonFormAdd";
import {
  useCreateAnnouncementMutation,
  useGetSchoolsQuery,
} from "@/graphql/generated";
import { z } from "zod";
import { useState, useEffect } from "react"; // Import useEffect
import { isError } from "util";

const announcementStaffSchema = z.object({
  title: z.string().min(1, "Judul wajib diisi"),
  content: z.string().min(1, "Isi wajib diisi"),
  targets: z.string().min(1, "Target wajib diisi"),
  schoolIds: z.array(z.string()).min(1, "Sekolah wajib di isi"),
  date: z.string().optional(),
});

interface Form {
  title: string
  content: string
  targets: string
  schoolIds: string[]
}

interface dataSelectTypes {
  label: string;
  value: string;
}

const FormHelpersAdd = () => {
  const { data: school } = useGetSchoolsQuery();
  const [dataSchools, setDataSchools] = useState<dataSelectTypes[]>([]);

  useEffect(() => {
    if (school?.schools) {
      const schoolsData: dataSelectTypes[] = school.schools.map((schoolItem) => ({
        label: schoolItem.name ?? "",
        value: schoolItem.id,
      }));
      setDataSchools([{ label: "Semua Cabang", value: "ALL_CABANG" }, ...schoolsData]);
    }
  }, [school]);


  const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        // fields group 1
        [
          {
            key: "title",
            label: "Judul Pengumuman",
            emptyValue: "-",
            placeholder: "Masukkan judul pengumuman..",
          },
          {
            key: "schoolIds",
            label: "Sekolah",
            emptyValue: "-",
            type: "select_multiple",
            dataSelect: dataSchools,
            placeholder: "Pilih Sekolah..",
          },
          {
            key: "targets",
            label: "Penerima",
            emptyValue: "-",
            type: "select",
            dataSelect: [
              { label: "Semua", value: "ALL" },
              { label: "Principal", value: "PRINCIPAL" },
              { label: "Staff", value: "STAFF" },
              { label: "Teacher", value: "TEACHER" },
              { label: "Siswa", value: "STUDENT" }
            ],
            placeholder: "Pilih Target pengumuman..",
            class: "md:w-full mb-2 lg:w-full",
          },
        ],
        // fields group 2
        [
          {
            key: "content",
            label: "Isi pengumuman",
            emptyValue: "-",
            type: "md",
            class: "md:w-full lg:w-full",
            placeholder: "Masukan isi pengumuman..",
          },
        ],
      ],
    },
  ];

  const [dataMutationDefault, setDataMutationDefault] = useState({
    title: "",
    content: "",
    target: "",
    schoolIds: [],
  });

  const [createAnnouncement] = useCreateAnnouncementMutation();
  return (
    <CommonFormAdd
      lable="Pengumuman"
      title="Buat Pengumuman"
      method="POST"
      isCreateAnnouncementDynamic={true}
      mutation={createAnnouncement}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={announcementStaffSchema}
      sections={sections}
    />
  );
};

export default FormHelpersAdd;