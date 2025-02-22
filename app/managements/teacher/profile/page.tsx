// import { Toggle } from "@/components/ui/toggle";
// import Image from "next/image";
import React from "react";
import { CommonDetailPage } from "@/components/common/detail/CommonDetailProfile";
import type { CommonDetailSection, CommonSectionField } from "@/components/common/detail/CommonDetailProfile";
import user from "../../../../image/user.jpeg";

interface Teacher {
  name: string
  address: string
  phone: number
}

export default function ProfileTeacher() {
  const data: Teacher = {
    name: "Pak Budi",
    address: "jakarta",
    phone: 123,
  }
  const sections: CommonDetailSection<Teacher>[] = [
    {
      label: "Data Siswa",
      fields: [
        {
          key: "name",
          label: "Nama Lengkap",
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
      ] satisfies CommonSectionField<Teacher>[],
    },
  ];
  return (
    <div className="min-h-screen">
      <CommonDetailPage
        title="Teacher Profile"
        name={data.name}
        jobdesk={"Guru"}
        image={user.src}
        data={data}
        sections={sections}
      ></CommonDetailPage>
    </div>
  );
}
