'use client'
/* eslint-disable */
import React from "react";
import { CommonDetailPage } from "@/components/common/detail/CommonDetailProfile";
import type { CommonDetailSection, CommonSectionField } from "@/components/common/detail/CommonDetailProfile";
import user from "@/image/user.jpeg";
import { useGetClassroomsQuery, useGetEnrollmentsQuery, useGetSchoolsQuery, useGetUsersQuery, useUserPayloadQuery } from "@/graphql/generated";
import { format } from "date-fns";
import Swal from "sweetalert2";





interface HeadOffice {
  id: string
  enrollment_id: string | number
  term_id: string | number
  classroom_id: number
  classrooms: any
  name: string
  address: string
  role: string
  nisn: string
  phone: number | string
  nik: number
  gender: string
  dateOfBirth: string
  classroom?: string | null
  families?: string[] | null
}

export default function ManagerProfileStudent() {
  const { data: userLogin, loading } = useUserPayloadQuery()
  const { data: allUser, loading: loadAllUser } = useGetUsersQuery()
  const { data: classrooms } = useGetClassroomsQuery()
  const { data: enrollments } = useGetEnrollmentsQuery()

  if (loading) {
    return 'loading'
  } else if (loadAllUser) {
    return
  }
  if (userLogin?.me.role !== 'STAFF' && userLogin?.me.role !== 'ADMIN' && userLogin?.me.role !== 'PRINCIPAL') {
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
  const userPayload = userLogin?.me.role !== 'STAFF' && userLogin?.me.role !== 'ADMIN' && userLogin?.me.role !== 'PRINCIPAL' ? null : userLogin
  const userFind = allUser?.users.find((item) => item.id === userPayload?.me.id)
  const enrolId = enrollments?.enrollments.find((item) => item.studentId === userFind?.id)

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
   const data: HeadOffice = {
      id: userFind.id ?? "",
      role: userLogin?.me.role,
      enrollment_id: enrolId?.id ?? "",
      term_id: enrolId?.termId ?? '',
      name: userFind.name ?? "",
      address: userFind.address ?? "",
      nisn: userFind.nisn ?? '-',
      phone: userFind.phone,
      classrooms: classrooms?.classrooms ??[],
      nik: parseInt(userFind.nik ?? ""),
      dateOfBirth: format(userFind.dateOfBirth, 'yyyy-MM-dd') ?? "",
      gender: userFind.gender === 'MALE' ? "Laki-laki" : "Perempuan",
      classroom_id: parseInt(userFind?.classroom?.id ?? '0') ?? 0,
      classroom: userFind.classroom?.name ?? "Belum ada kelas",
  }
  const sections: CommonDetailSection<HeadOffice>[] = [
    {
      label: "Data Head Office",
      fields: [
        {
          key: "name",
          label: "Nama Lengkap",
          emptyValue: "-",
        },
        {
          key: "role",
          label: "Role",
          emptyValue: "-",
        },
        {
          key: "nik",
          label: "NIK",
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
      ] satisfies CommonSectionField<HeadOffice>[],
    },
  ];
  console.log(data)
  return (
    <div className="min-h-screen">
      <CommonDetailPage
        title="HeadOffice Profile"
        name={data.name}
        hideAddFamily={true}
        epEdit={"/managements/manager/profile/edit/" + data.id}
        jobdesk={data.role}
        image={user.src}
        data={data}
        sections={sections}
      ></CommonDetailPage>
    </div>
  );
}
