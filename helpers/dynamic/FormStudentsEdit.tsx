"use client";

import { CommonFormAddSection } from "@/components/common/form/CommonFormAdd";
import { CommonFormEdit } from "@/components/common/form/CommonFormEdit";
import {
  useGetSchoolsQuery,
  useGetUserQuery,
  useGetUsersQuery,
  useUpdateUserMutation,
  useUserPayloadQuery,
} from "@/graphql/generated";
import { format } from "date-fns";
import { useParams } from "next/navigation";
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

interface HelpersProps {
  context?: string
}

const FormHelpersEdit = ({ context }: HelpersProps) => {
  const params = useParams();
  const { id } = params;
  const [updateUser] = useUpdateUserMutation()
  const { data: userLogin, loading: loadUserLogin } = useUserPayloadQuery()
  const { data: allUser, loading: loadAllUser } = useGetUsersQuery()
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

  // untuk edit profile
  let userFind;
  if (context === 'edit_profile_student') {
    if (loadUserLogin) {
      return 'loading'
    } else if (loadAllUser) {
      return
    }
    if (userLogin?.me.role !== 'STUDENT' && id !== userLogin?.me.id) {
      alert('Kamu tidak ada akses untuk mengedit profile ini')
      history.back()
      return
    }
    
    userFind = allUser?.users?.find((item) => item.id === userLogin?.me.id)
  }
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
            disabled: context && context === 'edit_profile_student' ? true : false,
            placeholder: "Masukkan NISN..",
          },
          {
            key: "username",
            label: "Nama Lengkap",
            emptyValue: "-",
            hidden: true,
            disabled: context && context === 'edit_profile_student' ? true : false,
            placeholder: "Masukkan nama lengkap siswa..",
          },
          {
            key: "password",
            label: "Password",
            emptyValue: "-",
            disabled: context && context === 'edit_profile_student' ? true : false,
            hidden: true,
            placeholder: "Masukkan password..",
          },
          {
            key: "role",
            label: "Role",
            emptyValue: "-",
            disabled: context && context === 'edit_profile_student' ? true : false,
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
            label: "No. Telfon",
            emptyValue: "-",
            placeholder: "087377333...",
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
            disabled: context && context === 'edit_profile_student' ? true : false,
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
  if (context && context === 'edit_profile_student') {
    userFind = { ...userFind, dateOfBirth: format(new Date(userFind?.dateOfBirth), "yyyy-MM-dd"), schoolId: userFind?.school?.id ?? "" }
  }

  return (
    <CommonFormEdit
      lable="Murid"
      title="Edit Murid"
      method="PUT"
      isRelation={true}
      valuerRelation1="nisn"
      dataGet={context && context === 'edit_profile_student' ? userFind : fixData}
      mutation={updateUser}
      schema={studentSchema}
      sections={sections}
    />
  );
};

export default FormHelpersEdit;
