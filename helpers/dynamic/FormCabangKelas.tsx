"use client";
import {
  CommonFormAdd,
  CommonFormAddSection,
} from "@/components/common/form/CommonFormAdd";
import {
  useCreateClassroomMutation,
  useGetGradesQuery,
  useGetUsersQuery,
} from "@/graphql/generated";
import { z } from "zod";
import { useState } from "react";

const cabangKelasSchema = z.object({
  name: z.string().min(1, "Nama kelas wajib diisi"),
  gradeId: z.string().min(1, "Induk kelas wajib diisi"),
  guardianId: z.string().min(1, "Wali wajib diisi"),
  students: z.string().min(1, "Wali wajib diisi"),
  // schedules: z.string().min(1, "Nama wali wajib diisi"),
});

interface Form {
  gradeId: string;
  guardianId: string;
  students: string;
  name: string;
  // schedules: string
}

interface dataSelectTypes {
  label: string;
  value: string;
}

const FormHelpersAdd = () => {
  // Query pertama: Ambil data grades
  const { data: firstData } = useGetGradesQuery()
  const dataGrades: dataSelectTypes[] = firstData?.grades.map((grade) => ({
    label: grade.name,
    value: grade.id,
  })) || []
  
  // Query kedua: Ambil data users
  const { data: secondData } = useGetUsersQuery()
  const dataTeachers: dataSelectTypes[] = secondData?.users.filter((item) => item.role === "TEACHER").map((user) => ({
      label: user.username,
      value: user.id,
  })) || []
  const dataStudents: dataSelectTypes[] = secondData?.users.filter((item) => item.role === "STUDENT").map((user) => ({
      label: user.username,
      value: user.id,
  })) || []

  const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        // fields group 1
        [
          {
            key: "name",
            label: "Nama Kelas",
            emptyValue: "-",
            placeholder: "Masukan nama kelas..",
          },
          {
            key: "gradeId",
            label: "Induk Kelas / Angkatan",
            type: "select",
            dataSelect: dataGrades,
            emptyValue: "-",
            placeholder: "Pilih Induk Kelas..",
          },
        ],
        [
          {
            key: "guardianId",
            label: "Wali Kelas",
            type: "select",
            dataSelect: dataTeachers,
            emptyValue: "-",
            placeholder: "Pilih Guru..",
          },
          {
            key: "students",
            label: "Siswa/i Kelas",
            type: "select_multiple",
            dataSelect: dataStudents,
            emptyValue: "-",
            placeholder: "Pilih Siswa..",
          },
        ],
      ],
    },
  ];

  const [createClassroom] = useCreateClassroomMutation();

  const [dataMutationDefault, setDataMutationDefault] = useState({
    gradeId: "",
    guardianId: "",
    name: "",
    students: [],
    // enrollments: "",
    // scheduls: "",
  });
  return (
    <CommonFormAdd
      lable="Cabang Kelas"
      title="Buat Cabang Kelas"
      method="POST"
      isUseDefaultMutation={true}
      mutation={createClassroom}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={cabangKelasSchema}
      sections={sections}
    />
  );
};

export default FormHelpersAdd;
