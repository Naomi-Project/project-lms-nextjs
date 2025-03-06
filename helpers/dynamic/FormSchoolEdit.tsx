"use client";
/* eslint-disable */
import { CommonFormAddSection } from "@/components/common/form/CommonFormAdd";
import { CommonFormEdit } from "@/components/common/form/CommonFormEdit";
import {
  useGetSchoolsQuery,
  useGetUserQuery,
  useGetUsersQuery,
  useUpdateSchoolMutation,
  useUpdateUserMutation,
  useUserPayloadQuery,
} from "@/graphql/generated";
import { Student } from "@/lib/types";
import { format } from "date-fns";
import { useParams } from "next/navigation";
import Swal from "sweetalert2";
import { z } from "zod";

const schoolSchema = z.object({
  name: z.string().min(1, "Nama Sekolah wajib diisi"),
  npsn: z.string().min(1, "NPSN wajib diisi"),
  accreditation: z.string().min(1, "accreditation wajib diisi"),
  phone: z.string().min(1, "phone wajib diisi"),
  email: z.string().min(1, "email wajib diisi"),
  foundAt: z.string().min(1, "foundAt wajib diisi"),
  address: z.string().min(1, "address wajib diisi"),
});

interface Form {
  name: string;
  npsn: string;
  accreditation: string;
  phone: string;
  email: string;
  foundAt: string;
  address: string;
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
  const [updateSchool] = useUpdateSchoolMutation()
  const { data: userLogin, loading: loadUserLogin } = useUserPayloadQuery()
  const { data: allUser, loading: loadAllUser } = useGetUsersQuery()
  const { data: schools, loading: loadSchool } = useGetSchoolsQuery()

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
  let userFindTemporary;
  if (context === 'edit_profile_sekolah') {
    if (loadUserLogin) {
      return 'loading'
    } else if (loadAllUser) {
      return
    }
    if (userLogin?.me.role !== 'TEACHER' && id !== userLogin?.me.id) {
      alert('Kamu tidak ada akses untuk mengedit profile ini')
      history.back()
      return
    }
    
    userFindTemporary = allUser?.users.find((item) => item.id === userLogin?.me.id)
  }

  const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        // fields group 1
        [
          {
            key: "name",
            label: "Nama Sekolah",
            emptyValue: "-",
            placeholder: "Masukkan nama lengkap siswa..",
          },
          {
            key: "npsn",
            label: "NPSN",
            emptyValue: "-",
            type: "number",
            // disabled: context && context === 'edit_profile_sekolah' ? true : false,
            placeholder: "Masukkan NPSN..",
          },
        ],
        [
          {
            key: "phone",
            label: "No. Telepon Sekolah",
            emptyValue: "-",
            placeholder: "6287377333...",
          },
          {
            key: "email",
            label: "Email Sekolah",
            emptyValue: "-",
            placeholder: "Masukan Email..",
          },
        ],
        [
          {
            key: "accreditation",
            label: "Akreditasi",
            emptyValue: "-",
            type: 'select',
            dataSelect: [
              { label: "A", value: 'A' },
              { label: "B", value: 'B' },
              { label: "C", value: 'C' },
            ],
            placeholder: "Pilih akreditasi..",
          },
          {
            key: "address",
            label: "Alamat Sekolah",
            emptyValue: "-",
            placeholder: "Masukan Alamat..",
          },
        ],
        [ {
            key: "foundAt",
            label: "Tahun Beridiri Sekolah",
            emptyValue: "-",
            type: 'date_picker',
            class: 'w-full',
            placeholder: "Masukan Tahun Beridiri sekolah..",
          },
        ],
      ],
    },
  ];

  const userPayload = userLogin?.me.role !== 'ADMIN' ? null : userLogin
  const userFind: any = allUser?.users.find((item) => item.id === userPayload?.me.id) || {}
  if (userFind == null) {
      Swal.fire({
        title: "Error!",
        text: "Data tidak ditemukan!",
        icon: "info",
        timer: 2000,
        timerProgressBar: true,
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer || result.isConfirmed) {
          location.reload()
          setTimeout(() => {
            history.back(); 
          }, 500);
        }
      });
    return
  }
  const findSchoolByUser: any = schools?.schools.find((item) => item.users.some((usr) => usr.id === userFind.id)) || {}
  const data: Form = {
    name: findSchoolByUser.name ?? "",
    npsn: findSchoolByUser.npsn ?? "",
    accreditation: findSchoolByUser.accreditation ?? "",
    address: findSchoolByUser.address ?? "",
    phone: findSchoolByUser.phone ?? "",
    email: findSchoolByUser.email ?? "",
    foundAt: findSchoolByUser.foundAt ?? '',
  }

  const fixData = { ...data, id: findSchoolByUser.id, foundAt: format(new Date(data?.foundAt), "yyyy-MM-dd") }

  if (loading) {
    return (
      <p>Loading..</p>
    );
  }  

  return (
    <CommonFormEdit
      lable="Sekolah"
      title="Edit Data Sekolah"
      method="PUT"
      isRelation={true}
      valuerRelation1="npsn"
      dataGet={fixData ?? {}}
      mutation={updateSchool}
      schema={schoolSchema}
      sections={sections}
    />
  );
};

export default FormHelpersEdit;
