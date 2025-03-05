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

const teacherSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  username: z.string().min(1, "NUPTK wajib diisi"),
  nuptk: z.string().optional(),
  password: z.string().nullable(),
  role: z.string().optional(),
  nik: z.string().min(1, "NIK wajib diisi"),
  phone: z
    .string()
    .regex(/^(\+62|62|0)[0-9]{9,13}$/, "Nomor telepon tidak valid"),
  address: z.string().min(1, "Alamat wajib diisi"),
  gender: z.string().min(1, "Gender wajib dipilih"),
  dateOfBirth: z.string().min(1, "Tgl Ulang Tahun Wajib diisi"),
  schoolId: z.string().min(1, "Sekolah user wajib dipilih"),
});

interface Form {
  name: string;
  username: string;
  password?: string | null;
  role?: string | null;
  nuptk?: string;
  nik: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
  address: string;
  schoolId: string;
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
      role: Role.Teacher,
      nik: "",
      nuptk: "",
      nisn: "",
      dateOfBirth: "",
      gender: '',
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
              label: "Nama",
              emptyValue: "-",
              placeholder: "Masukkan nama guru..",
            },
            {
              key: "username",
              label: "NUPTK",
              emptyValue: "-",
              placeholder: "Masukkan NUPTK guru..",
            },
            {
              key: "nuptk",
              label: "Nomor Unik Pendidik dan Tenaga Kependidikan",
              emptyValue: "-",
              hidden: true,
              placeholder: "Masukkan NUPTK..",
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
              label: "No. Telfon",
              emptyValue: "-",
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
              label: "Sekolah",
              emptyValue: "-",
              type: "select",
              disabled: true,
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
      lable="Teacher"
      title="Buat Data Guru"
      method="POST"
      isRelation={true}
      valuerRelation1="nuptk"
      mutation={createUser}
      dataMutation={fixData}
      setDataMutation={setDataMutationDefault}
      schema={teacherSchema}
      sections={sections}
    />
  );
};

export default FormHelpersAdd