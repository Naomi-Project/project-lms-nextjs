"use client";
/* eslint-disabled */
import {
  CommonFormAddSection,
} from "@/components/common/form/CommonFormAdd";
import {
  useGetCurriculumsQuery,
  useGetSchoolsQuery,
  useGetTermQuery,
  useUpdateTermMutation,
} from "@/graphql/generated";
import { z } from "zod";
import { CommonFormEdit } from "@/components/common/form/CommonFormEdit";
import { useParams } from "next/navigation";
import { format } from "date-fns";

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

const FormHelpersEdit = () => {
  const params = useParams();
  const { id } = params;
  const { data, loading } = useGetTermQuery({
    variables: {
      data: id as string,
    },
    skip: !id,
  })
  console.log(data?.term)
  const { data: firstData } = useGetSchoolsQuery()
  const dataSchool: dataSelectTypes[] = firstData?.schools.map((data) => ({
    label: data.name,
    value: data.id,
  })) || []
  const { data: secondData } = useGetCurriculumsQuery()
  const dataCurriculum: dataSelectTypes[] = secondData?.curriculums.map((data) => ({
    label: data.name,
    value: data.id,
  })) || []
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
            placeholder: "Pilih sekolah..",
          },
          {
            key: "curriculumId",
            label: "Kurikulum",
            type: "select",
            dataSelect: dataCurriculum,
            emptyValue: "-",
            placeholder: "Pilih kurikulum untuk semester..",
          },
        ],
      ],
    },
  ];

  const [updateTerm] = useUpdateTermMutation();

  if (loading) {
    return (
      <p>Loading..</p>
    );
  }  

  const fixData = { ...data?.term, startDate: format(new Date(data?.term?.startDate || 0), "yyyy-MM-dd"), endDate: format(new Date(data?.term?.endDate || 0), "yyyy-MM-dd") }
  // console.log("data fix: ", fixData)
  // return ''
  return (
    <CommonFormEdit
      lable="Semester"
      title="Edit Semester"
      method="PUT"
      mutation={updateTerm}
      dataGet={fixData}
      schema={termSchema}
      sections={sections}
    />
  );
};

export default FormHelpersEdit;
