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
  // enrollments: z.string().min(1, "Nama wali wajib diisi"),
  // schedules: z.string().min(1, "Nama wali wajib diisi"),
});

interface Form {
  gradeId: string;
  guardianId: string;
  name: string;
  // enrollments: string
  // schedules: string
}

interface dataSelectTypes {
  label: string;
  value: string;
}

const FormCabangKelasHelpers = () => {
  // Query pertama: Ambil data grades
  const { data: firstData, loading: loadingGrades, error: errorGrades } = useGetGradesQuery()
  const dataGrades: dataSelectTypes[] = firstData?.grades.map((grade) => ({
    label: grade.name,
    value: grade.id,
  })) || []
  
  // Query kedua: Ambil data users
  const { data: secondData, loading: loadingUsers, error: errorUsers } = useGetUsersQuery()
  const dataUsers: dataSelectTypes[] = secondData?.users.map((user) => ({
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
            label: "Grade ID",
            type: "select",
            dataSelect: dataGrades,
            emptyValue: "-",
            placeholder: "Pilih Induk Kelas..",
          },
          {
            key: "guardianId",
            label: "Guardian id",
            type: "select",
            dataSelect: dataUsers,
            emptyValue: "-",
            placeholder: "Pilih Users..",
          },
          // {
          //   key: "enrollments",
          //   label: "Wali Kelas",
          //   emptyValue: "-",
          //   placeholder: "Masukkan nama wali kelas..",
          // },
        ],
        // fields group 2
        // [
        //   {
        //     key: "schedules",
        //     label: "Schedules",
        //     emptyValue: "-",
        //     type: "number",
        //     class: "md:w-full lg:w-full",
        //     placeholder: "Masukkan..",
        //   },
        // ],
      ],
    },
  ];

  const [createClassroom] = useCreateClassroomMutation();

  const [dataMutationDefault, setDataMutationDefault] = useState({
    gradeId: "",
    guardianId: "",
    name: "",
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

export default FormCabangKelasHelpers;
