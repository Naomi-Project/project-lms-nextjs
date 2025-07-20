"use client";
/* eslint-disabled */
import {
  CommonFormAdd,
  CommonFormAddSection,
} from "@/components/common/form/CommonFormAdd";
import {
  useCreateSubjectMutation,
  useGetCurriculumsQuery,
  useGetGradesQuery,
  useGetSubjectsQuery,
  useGetUsersQuery,
  useUserPayloadQuery,
} from "@/graphql/generated";
import { z } from "zod";
import { useEffect, useState } from "react";

const mapelSchema = z.object({
  name: z.string().min(1, "Nama pelajaran wajib diisi"),
  code: z.string().min(1, "Kode pelajaran wajib diisi"),
  description: z.string().min(1, "Deskripsi pelajaran wajib diisi"),
  gradeId: z.string().min(1, "Induk Kelas wajib dipilih"),
  schoolId: z.string().min(1, "School id wajib di isi"),
  curriculumId: z.string().min(1, "Kurikulum wajib dipilih"),
  teacherIds: z.array(z.string()).min(1, "Guru Pelajaran wajib dipilih"),
});

interface Form {
  name: string;
  code: string;
  description: string;
  gradeId: string;
  curriculumId: string;
  schoolId: string;
  teacherIds: string[];
}

interface dataSelectTypes {
  label: string;
  value: string;
}

const FormHelpersAdd = () => {
  const { data: user } = useUserPayloadQuery()
  const { data: subjects } = useGetSubjectsQuery()
  const { data: firstData } = useGetGradesQuery()
  const dataGrades: dataSelectTypes[] = firstData?.grades.map((data) => ({
    label: data.name,
    value: data.id,
  })) || []
  const { data: secondData } = useGetCurriculumsQuery()
  const dataCurriculum: dataSelectTypes[] = secondData?.curriculums.map((data) => ({
    label: data.name,
    value: data.id,
  })) || []
  const { data: thridData } = useGetUsersQuery()
  const dataTeacher: dataSelectTypes[] = thridData?.users.filter((item) => item.role === "TEACHER").map((data) => ({
    label: data.name ?? "",
    value: data.id,
  })) || []
   

  const [createSubject] = useCreateSubjectMutation();

  const [dataMutationDefault, setDataMutationDefault] = useState({
    name: "",
    code: "",
    description: "",
    gradeId: "",
    schoolId: user?.me.schoolId ?? '',
    curriculumId: "",
    teacherIds: [],
  });


  const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        // fields group 1
        [
          {
            key: "name",
            label: "Nama Mata Pelajaran",
            emptyValue: "-",
            placeholder: "Masukan nama mata Pelajaran..",
          },
          {
            key: "code",
            label: "Kode Pelajaran",
            emptyValue: "-",
            placeholder: "Masukan kode pelajaran..",
          },
        ],
        [
          {
            key: "description",
            label: "Deskripsi pelajaran",
            class: "md:w-full lg:w-full",
            emptyValue: "-",
            placeholder: "Masukan deskripsi pelajaran..",
          },
        ],
        [
          {
            key: "schoolId",
            label: "School ID",
            class: "md:w-full lg:w-full",
            emptyValue: "-",
            hidden: true,
            placeholder: "Masukan id sekolah..",
          },
        ],
        [
          {
            key: "gradeId",
            label: "Induk Kelas",
            emptyValue: "-",
            type: "select",
            dataSelect: dataGrades,
            placeholder: "Pilih Induk kelas..",
          },
          {
            key: "curriculumId",
            label: "Kurikulum Pelajaran",
            emptyValue: "-",
            type: "select",
            dataSelect: dataCurriculum,
            placeholder: "Pilih Kurikulum..",
          },
        ],
        [
          {
            key: "teacherIds",
            type: "select_multiple",
            dataSelect: dataTeacher,
            label: "Guru/Pemateri",
            emptyValue: "-",
            class: "md:w-full lg:w-full",
            placeholder: "Pilih Guru..",
          },
        ],
      ],
    },
  ];

  useEffect(() => {
    setDataMutationDefault({...dataMutationDefault, schoolId: user?.me?.schoolId ?? ''})
  }, [user?.me.schoolId])

  return (
    <CommonFormAdd
      lable="Mata Pelajaran"
      title="Buat Mata Pelajaran"
      method="POST"
      isUseDefaultMutation={true}
      mutation={createSubject}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={mapelSchema}
      sections={sections}
    />
  );
};

export default FormHelpersAdd;
