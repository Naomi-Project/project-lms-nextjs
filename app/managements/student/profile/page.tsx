'use client'
import React from "react";
import { CommonDetailPage } from "@/components/common/detail/CommonDetailProfile";
import type { CommonDetailSection, CommonSectionField } from "@/components/common/detail/CommonDetailProfile";
import user from "@/image/user.jpeg";
import { useGetUsersQuery, useUserPayloadQuery } from "@/graphql/generated";
import { format } from "date-fns";
import Swal from "sweetalert2";





interface Student {
  id: string
  name: string
  address: string
  role: string
  nisn: number
  phone: number
  nik: number
  gender: string
  dateOfBirth: string
  classroom?: string | null
  families?: string[] | null
}

export default function ManagerProfileStudent() {
  const { data: userLogin, loading } = useUserPayloadQuery()
  const { data: allUser, loading: loadAllUser } = useGetUsersQuery()
  if (loading) {
    return 'loading'
  } else if (loadAllUser) {
    return
  }
  if (userLogin?.me.role !== 'STUDENT') {
      Swal.fire({
        title: "Access Denied!",
        text: "Kamu tidak ada akses ke profile ini!",
        icon: "error",
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
  const userPayload = userLogin?.me.role !== 'STUDENT' ? null : userLogin
  const userFind = allUser?.users.find((item) => item.id === userPayload?.me.id)
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
   const data: Student = {
    id: userFind.id ?? "",
    role: userFind.role === 'STUDENT' ? 'Murid' : "Tidak Diketahui",
    name: userFind.name ?? "",
    address: userFind.address ?? "",
    nisn: parseInt(userFind.nisn ?? ""),
    phone: parseInt(userFind.phone ?? ""),
    nik: parseInt(userFind.nik ?? ""),
    dateOfBirth: format(userFind.dateOfBirth, 'yyyy-MM-dd') ?? "",
    gender: userFind.gender === 'MALE' ? "Laki-laki" : "Perempuan",
    classroom: userFind.classroom?.name ?? "Belum ada kelas",
  }
  const sections: CommonDetailSection<Student>[] = [
    {
      label: "Data Siswa",
      fields: [
        {
          key: "name",
          label: "Nama Lengkap",
          emptyValue: "-",
        },
        {
          key: "classroom",
          label: "Kelas",
          emptyValue: "-",
        },
        {
          key: "nik",
          label: "NIK",
          emptyValue: "-",
        },
        {
          key: "nisn",
          label: "NISN",
          emptyValue: "-",
        },
        {
          key: "address",
          label: "Alamat",
          emptyValue: "-",
        },
        {
          key: "phone",
          label: "Telepon",
          emptyValue: "-",
        },
        {
          key: "dateOfBirth",
          label: "Tgl. Ulang Tahun",
          emptyValue: "-",
        },
        {
          key: "gender",
          label: "Gender",
          emptyValue: "-",
        },
      ] satisfies CommonSectionField<Student>[],
    },
    {
      label: "Keluarga Siswa",
      fields: [
        {
          key: "families",
          label: "families",
          emptyValue: "-",
          dataFamily: userFind.families, 
        },
      ] satisfies CommonSectionField<Student>[],
    },
  ];
  return (
    <div className="min-h-screen">
      <CommonDetailPage
        title="Student Profile"
        name={data.name}
        epAddFamily="/managements/manager/profile-student/family-add/"
        epEdit={"/managements/manager/profile-student/edit/" + data.id}
        jobdesk={data.role}
        image={user.src}
        data={data}
        sections={sections}
      ></CommonDetailPage>
    </div>
  );
}
