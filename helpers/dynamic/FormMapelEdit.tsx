"use client";
/* eslint-disabled */
import {
  CommonFormAddSection,
} from "@/components/common/form/CommonFormAdd";
import { CommonFormEdit } from "@/components/common/form/CommonFormEdit";
import {
  useGetCurriculumsQuery,
  useGetGradesQuery,
  useGetSubjectQuery,
  useGetUsersQuery,
  useUpdateSubjectMutation,
} from "@/graphql/generated";
import { useParams } from "next/navigation";
import { z } from "zod";

const mapelSchema = z.object({
  name: z.string().min(1, "Nama pelajaran wajib diisi"),
  code: z.string().min(1, "Kode pelajaran wajib diisi"),
  description: z.string().min(1, "Deskripsi pelajaran wajib diisi"),
  gradeId: z.string().min(1, "Induk Kelas wajib dipilih"),
  curriculumId: z.string().min(1, "Kurikulum wajib dipilih"),
  teacherId: z.string().min(1, "Guru Pelajaran wajib dipilih"),
});

interface Form {
  name: string;
  code: string;
  description: string;
  gradeId: string;
  curriculumId: string;
  teacherId: string;
}

interface dataSelectTypes {
  label: string;
  value: string;
}

const FormHelpersEdit = () => {
  const params = useParams();
  const { id } = params;
  const { data, loading } = useGetSubjectQuery({
    variables: {
      data: id as string,
    },
    skip: !id,
  })
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
            key: "teacherId",
            type: "select",
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

  const [updateSubject] = useUpdateSubjectMutation()

  if (loading) {
    return (
      <p>Loading..</p>
    );
  }  
  
  // const fixData = { ...data?.subject, startDate: format(new Date(data?.subject?.startDate || 0), "yyyy-MM-dd"), endDate: format(new Date(data?.subject?.endDate || 0), "yyyy-MM-dd") }
  const fixData = {...data?.subject, teacherId: data?.subject.teachers[0].id, gradeId: data?.subject.grade.id, curriculumId: data?.subject.curriculum.id}
  return (
      <CommonFormEdit
        lable="Mata Pelajaran"
        title="Edit Mata Pelajaran"
        method="PUT"
        mutation={updateSubject}
        dataGet={fixData}
        schema={mapelSchema}
        sections={sections}
      />
  );
};

export default FormHelpersEdit;
