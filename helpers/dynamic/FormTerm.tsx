"use client";
/* eslint-disabled */
import {
  CommonFormAdd,
  CommonFormAddSection,
} from "@/components/common/form/CommonFormAdd";
import {
  useCreateTermMutation,
  useGetCurriculumsQuery,
  useGetSchoolsQuery,
  useGetUserQuery,
  useUserPayloadQuery,
} from "@/graphql/generated";
import { z } from "zod";
import { useState } from "react";

const termSchema = z.object({
  name: z.string().min(1, "Nama semester wajib diisi"),
  startDate: z.string().min(1, "Tanggal Mulai semester wajib diisi"),
  endDate: z.string().min(1, "Tanggal Selesai semester wajib diisi"),
  schoolId: z.string().min(1, "Sekolah wajib dipilih"),
  curriculumId: z.string().min(1, "Kurikulum wajib dipilih"),
});

interface Form {
  name: string;
  startDate: string;
  endDate: string;
  schoolId: string;
  curriculumId: string;
}

interface dataSelectTypes {
  label: string;
  value: string;
}

const FormHelpersAdd = () => {
  const { data: firstData } = useGetSchoolsQuery()
  const { data: userPayload } = useUserPayloadQuery()
  const { data: findUser, loading: loadFindUser } = useGetUserQuery({
    variables: {
      data: userPayload?.me.id ?? ''
    }, 
    skip: !userPayload?.me.id
  })
  const dataSchool: dataSelectTypes[] = firstData?.schools.map((data) => ({
    label: data.name,
    value: data.id,
  })) || []
  const { data: secondData } = useGetCurriculumsQuery()
  const dataCurriculum: dataSelectTypes[] = secondData?.curriculums.map((data) => ({
    label: data.name,
    value: data.id,
  })) || []

  const [createTerm] = useCreateTermMutation();
  const [dataMutationDefault, setDataMutationDefault] = useState({
    name: "",
    startDate: "",
    endDate: "",
    schoolId: '',
    curriculumId: "",
  });
  
  if (loadFindUser) return 'loading..'
  const fixData = {...dataMutationDefault, schoolId: findUser?.user?.school?.id}
  
  // if (loadFindUser) return 'loading..'
  const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        [
          {
            key: "name",
            label: "Nama Semester",
            class: "md:w-full lg:w-full",
            emptyValue: "-",
            placeholder: "Masukan nama semester..",
          },
        ],
        [
          {
            key: "startDate",
            label: "Tgl. Mulai Semester",
            emptyValue: "-",
            type: "date_picker",
            placeholder: "Masukan tanggal mulai semester..",
          },
          {
            key: "endDate",
            label: "Tgl. Selesai Semester",
            emptyValue: "-",
            type: "date_picker",
            placeholder: "Masukan tanggal selesai semester..",
          },
        ],
        [
          {
            key: "schoolId",
            label: "Sekolah/Cabang Sekolah",
            type: "select",
            dataSelect: dataSchool,
            emptyValue: "-",
            disabled: true,
            hidden: true,
            class: "hidden",
            placeholder: "Pilih sekolah..",
          },
          {
            key: "curriculumId",
            label: "Kurikulum",
            type: "select",
            dataSelect: dataCurriculum,
            class: "mt-2",
            emptyValue: "-",
            placeholder: "Pilih kurikulum untuk semester..",
          },
        ],
      ],
    },
  ];

  return (
    <CommonFormAdd
      lable="Semester"
      title="Buat Semester"
      method="POST"
      isUseDefaultMutation={true}
      mutation={createTerm}
      dataMutation={fixData}
      setDataMutation={setDataMutationDefault}
      schema={termSchema}
      sections={sections}
    />
  );
};

export default FormHelpersAdd;
