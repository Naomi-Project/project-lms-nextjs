"use client";

import {
  CommonFormAdd,
  CommonFormAddSection,
} from "@/components/common/form/CommonFormAdd";
import {
  Role,
  Gender,
  useCreateUserMutation,
  useGetSchoolsQuery,
} from "@/graphql/generated";
import { useState } from "react";
import { z } from "zod";

const studentSchema = z.object({
  username: z.string().optional(),
  password: z.string().nullable().optional(),
  role: z.string().optional(),
  name: z.string().min(1, "Nama Lengkap wajib diisi"),
  nisn: z.string().min(8, "NISN minimal 8 digit"),
  nik: z.string().min(1, "NIK wajib diisi"),
  phone: z
    .string()
    .regex(/^(\+62|62|0)[0-9]{9,13}$/, "Nomor telepon tidak valid"),
  address: z.string().min(1, "Alamat wajib diisi"),
  gender: z.string().min(1, "Gender wajib dipilih"),
  dateOfBirth: z.string().min(1, "Tgl Ulang Tahun wajib diisi"),
  schoolId: z.string().min(1, "Sekolah user wajib dipilih"),
});

interface Form {
  name: string;
  username?: string;
  password?: string | null;
  role?: string | null;
  nisn: string;
  nik: string;
  phone: string;
  address: string;
  gender: string;
  dateOfBirth: string;
  schoolId: string;
}

interface dataSelectTypes {
  label: string;
  value: string;
}

const FormHelpersAdd = () => {
  const { data: firstData } = useGetSchoolsQuery();
  const dataSchool: dataSelectTypes[] =
    firstData?.schools.map((data) => ({
      label: data.name,
      value: data.id,
    })) || [];
  const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        // fields group 1
        [
          {
            key: "name",
            label: "Nama",
            emptyValue: "-",
            placeholder: "Masukkan nama lengkap siswa..",
          },
          {
            key: "nisn",
            label: "NISN",
            emptyValue: "-",
            type: "number",
            placeholder: "Masukkan NISN..",
          },
          {
            key: "username",
            label: "Nama Lengkap",
            emptyValue: "-",
            hidden: true,
            placeholder: "Masukkan nama lengkap siswa..",
          },
          {
            key: "password",
            label: "Password",
            emptyValue: "-",
            hidden: true,
            placeholder: "Masukkan password..",
          },
          {
            key: "role",
            label: "Role",
            emptyValue: "-",
            hidden: true,
            placeholder: "Masukkan Role..",
          },
        ],
        // fields group 2
        [
          {
            key: "nik",
            label: "NIK (Nomor Induk Keluarga)",
            emptyValue: "-",
            placeholder: "Masukkan NIK..",
          },
          {
            key: "dateOfBirth",
            label: "Tgl Ulang Tahun",
            type: "date_picker",
            emptyValue: "-",
            placeholder: "Masukkan Tanggal Ulang Tahun .",
          },
        ],
        // fields group 3
        [
          {
            key: "phone",
            label: "No. Telfon Orang Tua/Wali",
            emptyValue: "-",
            placeholder: "6287377333...",
          },
          {
            key: "gender",
            label: "Gender",
            type: "select",
            dataSelect: [
              { label: "Laki-laki", value: "MALE" },
              { label: "Perempuan", value: "FEMALE" },
            ],
            emptyValue: "-",
            placeholder: "Pilih Gender..",
          },
        ],
        [
          {
            key: "schoolId",
            label: "Sekolah",
            emptyValue: "-",
            type: "select",
            dataSelect: dataSchool,
            placeholder: "Pilih Sekolah untuk pengguna ini..",
          },
          {
            key: "address",
            label: "Alamat Tempat Tinggal",
            emptyValue: "-",
            placeholder: "Masukkan Alamat..",
          },
        ],
      ],
    },
  ];

  const [dataMutationDefault, setDataMutationDefault] = useState({
    name: "",
    username: "",
    password: "",
    role: Role.Student,
    nik: "1234567890",
    nuptk: "",
    nisn: "",
    dateOfBirth: "",
    gender: Gender.Male,
    address: "",
    phone: "",
  });
  const [createUser] = useCreateUserMutation();
  return (
    <CommonFormAdd
      lable="Student"
      title="Create Student Data"
      method="POST"
      isRelation={true}
      relation1="username"
      valuerRelation1="nisn"
      mutation={createUser}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={studentSchema}
      sections={sections}
    />
  );
};

export default FormHelpersAdd