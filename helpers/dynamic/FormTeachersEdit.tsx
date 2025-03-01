"use client";

import { CommonFormAddSection } from "@/components/common/form/CommonFormAdd";
import { CommonFormEdit } from "@/components/common/form/CommonFormEdit";
import {
  useGetSchoolsQuery,
  useGetUserQuery,
  useUpdateUserMutation,
} from "@/graphql/generated";
import { format } from "date-fns";
import { useParams } from "next/navigation";
import { z } from "zod";

const teacherSchema = z.object({
  username: z.string().optional(),
  password: z.string().nullable().optional(),
  role: z.string().optional(),
  name: z.string().min(1, "Nama Lengkap wajib diisi"),
  nuptk: z.string().min(8, "NISN minimal 8 digit"),
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
  nuptk: string;
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

const FormHelpersEdit = () => {
  const params = useParams();
  const { id } = params;

  const { data: dataEdit, loading } = useGetUserQuery({
    variables: {
      data: id as string,
    },
    skip: !id,
  });

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
            key: "nuptk",
            label: "NUPTK",
            emptyValue: "-",
            type: "number",
            placeholder: "Masukkan NUPTK..",
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

  const [updateUser] = useUpdateUserMutation();

  if (loading) {
    return (
      <p>Loading..</p>
    );
  }  

  const fixData = { ...dataEdit?.user, dateOfBirth: format(new Date(dataEdit?.user.dateOfBirth), "yyyy-MM-dd"), schoolId: dataEdit?.user.school?.id ?? "" }
  console.log(fixData);
  return (
    <CommonFormEdit
      lable="Guru"
      title="Edit Data Guru"
      method="PUT"
      isRelation={true}
      valuerRelation1="nuptk"
      dataGet={fixData}
      mutation={updateUser}
      schema={teacherSchema}
      sections={sections}
    />
  );
};

export default FormHelpersEdit;
