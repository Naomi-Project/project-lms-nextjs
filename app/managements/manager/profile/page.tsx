'use client'
/* eslint-disable */
import React from "react";
import { CommonDetailPage } from "@/components/common/detail/CommonDetailProfile";
import type { CommonDetailSection, CommonSectionField } from "@/components/common/detail/CommonDetailProfile";
import user from "@/image/user.jpeg";
import { useGetSchoolsQuery, useGetUsersQuery, useUserPayloadQuery } from "@/graphql/generated";
import { format } from "date-fns";
import Swal from "sweetalert2";





interface Student {
  id: string
  role: string
  name: string
  cabangSekolah: string
  npsn: number
  tingkatSekolah: string
  akreditasi: string
  tahunBerdiri?: string
  phone: number
  address: string
  email: string
  semester: string
  totalUsers: number
}

export default function ManagerProfileManager() {
  const { data: userLogin, loading } = useUserPayloadQuery()
  const { data: schools, loading: loadSchool } = useGetSchoolsQuery()
  const { data: allUser, loading: loadAllUser } = useGetUsersQuery()
  if (loading) {
    return 'loading'
  } else if (loadAllUser) {
    return
  }
  if (userLogin?.me.role !== 'ADMIN') {
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
    history.back()
    return
  }
  const userPayload = userLogin?.me.role !== 'ADMIN' ? null : userLogin
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
  const findSchoolByUser: any = schools?.schools.find((item) => item.users.some((usr) => usr.id === userFind.id)) || {}
  const data: Student = {
    id: userFind.id ?? "",
    name: findSchoolByUser.name ?? "",
    role: userFind.role === 'ADMIN' ? 'Sekolah' : "Tidak Diketahui",
    cabangSekolah: findSchoolByUser.address ?? "",
    npsn: findSchoolByUser.npsn ?? "",
    tingkatSekolah: findSchoolByUser.name ?? "",
    akreditasi: findSchoolByUser.accreditation ?? "",
    tahunBerdiri: format((findSchoolByUser.foundAt ?? ''), 'yyyy-MM-dd') ?? "",
    address: findSchoolByUser.address ?? "",
    phone: parseInt(findSchoolByUser.phone ?? ""),
    email: findSchoolByUser.email ?? "",
    semester: findSchoolByUser?.term?.length ?? "",
    totalUsers: findSchoolByUser?.term?.length ?? "",
  }
  const sections: CommonDetailSection<Student>[] = [
    {
      label: "Sekolah",
      fields: [
        {
          key: "name",
          label: "Nama Sekolah",
          emptyValue: "-",
        },
        // {
        //   key: "cabangSekolah",
        //   label: "Cabang Sekolah",
        //   emptyValue: "-",
        // },
        {
          key: "npsn",
          label: "NPSN",
          emptyValue: "-",
        },
        // {
        //   key: "tingkatSekolah",
        //   label: "Tingkat Sekolah",
        //   emptyValue: "-",
        // },
        {
          key: "akreditasi",
          label: "Akreditasi",
          emptyValue: "-",
        },
        {
          key: "tahunBerdiri",
          label: "Tahun Berdiri",
          emptyValue: "-",
        },
        {
          key: "address",
          label: "Alamat Sekolah",
          emptyValue: "-",
        },
        {
          key: "phone",
          label: "Nomor Yang Bisa Dihubungi",
          emptyValue: "-",
        },
        {
          key: "email",
          label: "Email Yang Bisa Dihubungi",
          emptyValue: "-",
        },
        // {
        //   key: "semester",
        //   label: "Total Semester",
        //   emptyValue: "-",
        // },
        // {
        //   key: "totalUsers",
        //   label: "Total Staff dan Siswa",
        //   emptyValue: "-",
        // },
      ] satisfies CommonSectionField<Student>[],
    },
  ];
  return (
    <div className="min-h-screen">
      <CommonDetailPage
        title="Profile Sekolah"
        name={data.name}
        profileIcon="school"
        hideAddFamily
        epEdit={"/managements/manager/profile/edit/" + data.id}
        jobdesk={data.role}
        image={user.src}
        data={data}
        sections={sections}
      ></CommonDetailPage>
    </div>
  );
}
