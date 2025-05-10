"use client";
/* eslint-disable */
import {
  CommonFormAdd,
  CommonFormAddSection,
} from "@/components/common/form/CommonFormAdd";
import {
  useCreateClassroomMutation,
  useGetClassroomsQuery,
  useGetGradesQuery,
  useGetPricingsQuery,
  useGetSchoolsQuery,
  useGetUsersQuery,
  useUserPayloadQuery,
} from "@/graphql/generated";
import { z } from "zod";
import { useState } from "react";

const cabangKelasSchema = z.object({
  name: z.string().min(1, "Nama kelas wajib diisi"),
  gradeId: z.string().min(1, "Induk kelas wajib diisi"),
  guardianId: z.string().min(1, "Wali wajib diisi"),
  termId: z.string().min(1, "Wali wajib diisi"),
  pricingId: z.string().min(1, "Tagihan/SPP wajib dipilih"),
  students: z.array(z.string()).min(1, "Minimal pilih satu siswa"), 
  // schedules: z.string().min(1, "Nama wali wajib diisi"),
});

interface Form {
  gradeId: string;
  guardianId: string;
  termId: string;
  pricingId: string;
  students: string[];
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
  const { data: school } = useGetSchoolsQuery()
  const { data: thirdData } = useGetPricingsQuery()
  const { data: user, loading } = useUserPayloadQuery(); 
  const dataGrades: dataSelectTypes[] = firstData?.grades.map((grade) => ({
    label: grade.name,
    value: grade.id,
  })) || []
  const dataPricings: dataSelectTypes[] = thirdData?.pricings.map((item) => ({
    label: item.name,
    value: item.id,
  })) || []
  
  // Query kedua: Ambil data users
  const { data: classroomData  } = useGetClassroomsQuery()
  const { data: secondData } = useGetUsersQuery()
  // Pastikan data sudah tersedia sebelum melakukan filtering
  // if (!classroomData || !secondData) return;
  
  // Ambil daftar wali kelas (guardian)
  const guardians = classroomData?.classrooms
    ?.filter((cls) => cls.guardian) // Pastikan kelas punya wali kelas
    .map((cls) => cls.guardian.id); // Ambil ID wali kelas
  // Ambil murid (murid)
  const studentsInClass = classroomData?.classrooms
  ?.flatMap((cls) => cls.students.map((student) => student.id)) || []; // Ambil semua student.id
  
  // Filter hanya guru yang BELUM menjadi wali kelas
  const onlyOneGuardian = secondData?.users.filter(
    (user) => user.role === "TEACHER" && !guardians?.includes(user.id)
  );
  const onlyOneStudent = secondData?.users.filter(
    (user) => user.role === "STUDENT" && !studentsInClass?.includes(user.id)
  );
  
  // return 
  const dataTeachers: dataSelectTypes[] = onlyOneGuardian?.map((user) => ({
      label: user.name ?? "",
      value: user.id,
  })) || []
  const dataStudents: dataSelectTypes[] = onlyOneStudent?.map((user) => ({
      label: user.name ?? "",
      value: user.id,
  })) || []
  const dataTerms: dataSelectTypes[] = school?.schools
  .filter((item) => item.users.some(userItem => userItem.id === user?.me.id)) // Filter hanya sekolah yang memiliki user tertentu
  .flatMap((schoolItem) => 
    schoolItem.terms.map((termItem) => ({
      label: termItem.name ?? "",  // Ambil nama dari term
      value: termItem.id,     // Ambil ID dari term
    }))
  ) || []

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
            class: "md:w-full lg:w-full",
            dataSelect: dataTeachers,
            emptyValue: "-",
            placeholder: "Pilih Guru..",
          },
        ],
        [
          {
            key: "students",
            label: "Siswa/i Kelas",
            type: "select_multiple",
            dataSelect: dataStudents,
            class: "md:w-full lg:w-full",
            emptyValue: "-",
            placeholder: "Pilih Siswa..",
          },
        ],
        [
          {
            key: "termId",
            label: "Semester untuk kelas",
            type: "select",
            dataSelect: dataTerms,
            emptyValue: "-",
            placeholder: "Pilih Semester..",
          },
          {
            key: "pricingId",
            label: "Tagihan Untuk Semua Siswa Dikelas ini",
            type: "select",
            dataSelect: dataPricings,
            emptyValue: "-",
            placeholder: "Pilih Tagihan..",
          },
        ]
      ],
    },
  ];

  const [createClassroom] = useCreateClassroomMutation();

  const [dataMutationDefault, setDataMutationDefault] = useState({
    gradeId: "",
    guardianId: "",
    termId: "",
    pricingId: "",
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
      isCreateClass={true}
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
