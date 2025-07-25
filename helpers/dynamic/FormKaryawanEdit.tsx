"use client";
import {
  CommonFormAddSection,
} from "@/components/common/form/CommonFormAdd";
import { CommonFormEdit } from "@/components/common/form/CommonFormEdit";
import {
  Role,
  useGetSchoolsQuery,
  useGetUserQuery,
  useUpdateUserMutation,
} from "@/graphql/generated";
import { useParams } from "next/navigation";
import { format } from "date-fns";
import { z } from "zod";

const karyawanSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  username: z.string().min(1, "Password wajib diisi"),
  password: z.string().optional(),
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
  nik: string;
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
  const params = useParams();
  const { id } = params;
  const [updateUser] = useUpdateUserMutation()
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
            label: "Nama Karyawan",
            emptyValue: "-",
            placeholder: "Masukkan nama..",
          },
          {
            key: "username",
            label: "Username (berguna untuk login)",
            emptyValue: "-",
            placeholder: "Masukkan username..",
          },
        ],
        [
          {
            key: "password",
            label: "Password baru",
            emptyValue: "-",
            placeholder: "Masukkan password baru..",
          },
          {
            key: "role",
            label: "Role",
            emptyValue: "-",
            type: 'select',
            dataSelect: [
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
            label: "Nomor Unik Pendidik dan Tenaga Kependidikan",
            emptyValue: "-",
            type: 'number',
            hidden: true,
            class: 'w-full',
            placeholder: "Masukkan NUPTK..",
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
            key: "dateOfBirth",
            label: "Tgl Ulang Tahun",
            type: "date_picker",
            emptyValue: "-",
            class: 'md:w-full lg:w-full',
            placeholder: "Masukkan Tanggal Ulang Tahun .",
          },
        ],
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
  if (loading) {
    return (
      <p>Loading..</p>
    );
  }  
  const fixData = { ...dataEdit?.user, dateOfBirth: format(new Date(dataEdit?.user?.dateOfBirth), "yyyy-MM-dd"), schoolId: dataEdit?.user?.school?.id ?? "" }
  console.log(fixData)
  return (
      <CommonFormEdit
        lable="Karyawan"
        title="Edit Karyawan"
        method="PUT"
        dataGet={fixData}
        mutation={updateUser}
        schema={karyawanSchema}
        sections={sections}
      />
  );
};

export default FormHelpersAdd