"use client";
import {
  CommonFormAdd,
  CommonFormAddSection,
} from "@/components/common/form/CommonFormAdd";
import {
  Gender,
  Role,
  useCreateUserMutation,
  useGetSchoolsQuery,
  useGetUserQuery,
  useUserPayloadQuery,
} from "@/graphql/generated";
import { useState } from "react";
import { z } from "zod";

const karyawanSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  username: z.string().min(1, "Password wajib diisi"),
  password: z.string().min(1, "NUPTK wajib diisi"),
  nuptk: z.string().optional(),
  role: z.string().optional(),
  nik: z.string().optional(),
  phone: z
    .string()
    .regex(/^(\+62|62|0)[0-9]{9,13}$/, "Nomor telepon tidak valid"),
  address: z.string().min(1, "Alamat wajib diisi"),
  gender: z.string().min(1, "Gender wajib dipilih"),
  dateOfBirth: z.string().min(1, "Tgl Ulang Tahun Wajib diisi"),
  schoolId: z.string().optional(),
});

interface Form {
  name: string;
  username: string;
  password?: string | null;
  role?: string | null;
  nuptk?: string;
  nik?: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
  address: string;
  schoolId?: string;
}

interface dataSelectTypes {
  label: string;
  value: string;
}

const FormHelpersAdd = () => {
  const { data: firstData } = useGetSchoolsQuery();
  const { data: userPayload } = useUserPayloadQuery()
  const { data: findUser, loading: loadFindUser } = useGetUserQuery({
    variables: {
      data: userPayload?.me.id ?? ''
    }, 
  skip: !userPayload?.me.id
})
  const dataSchool: dataSelectTypes[] =
    firstData?.schools.map((data) => ({
      label: data.name,
      value: data.id,
    })) || [];
  
    const [dataMutationDefault, setDataMutationDefault] = useState({
      name: "",
      username: "",
      password: "",
      role: '',
      nik: "",
      nuptk: "",
      nisn: "",
      dateOfBirth: "",
      gender: Gender.Male,
      address: "",
      phone: "",
    });
    const [createUser] = useCreateUserMutation();
    
    if (loadFindUser) return 'loading..'
    const fixData = {...dataMutationDefault, schoolId: findUser?.user?.school?.id}

    const sections: CommonFormAddSection<Form>[] = [
      {
        fields: [
          // fields group 1
          [
            {
              key: "name",
              label: "Nama Karyawan",
              emptyValue: "-",
              placeholder: "Masukkan nama..",
            },
            {
              key: "username",
              label: "Username (berfungsi untuk login)",
              emptyValue: "-",
              placeholder: "Masukkan username..",
            },
          ],
          [
            {
              key: "password",
              label: "Password",
              emptyValue: "-",
              placeholder: "Masukkan password..",
            },
            {
              key: "role",
              label: "Role",
              emptyValue: "-",
              type: 'select',
              dataSelect: [
                // { label: 'TEACHER', value: Role.Teacher },
                { label: 'ADMIN', value: Role.Admin },
                { label: 'PRINCIPAL', value: Role.Principal },
                { label: 'STAFF', value: Role.Staff }
              ],
              placeholder: "Pilih Role..",
            },
          ],
          // fields group 2
          [
            {
              key: "nuptk",
              label: "Nomor Unik Pendidik dan Tenaga Kependidikan (Opsional)",
              emptyValue: "-",
              placeholder: "Masukkan NUPTK..",
            },
            {
              key: "dateOfBirth",
              label: "Tgl Ulang Tahun",
              type: "date_picker",
              emptyValue: "-",
              placeholder: "Masukkan Tanggal Ulang Tahun .",
            },
            {
              key: "nik",
              label: "NIK (Nomor Induk Keluarga)",
              emptyValue: "-",
              hidden: true,
              placeholder: "Masukkan NIK..",
            },
          ],
          [
            {
              key: "phone",
              label: "No. Telfon",
              emptyValue: "-",
              type: 'number',
              placeholder: "6284238342..",
            },
            {
              key: "gender",
              label: "Gender",
              type: "select",
              dataSelect: [
                { label: "Laki-laki", value: Gender.Male },
                { label: "Perempuan", value: Gender.Female },
              ],
              emptyValue: "-",
              placeholder: "Pilih Gender..",
            },
          ],
          [
            {
              key: "schoolId",
              label: "Sekolah (opsional)",
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

  return (
    <CommonFormAdd
      lable="karyawan"
      title="Buat Data Karyawan"
      method="POST"
      mutation={createUser}
      isUseDefaultMutation={true}
      dataMutation={fixData}
      setDataMutation={setDataMutationDefault}
      schema={karyawanSchema}
      sections={sections}
    />
  );
};

export default FormHelpersAdd