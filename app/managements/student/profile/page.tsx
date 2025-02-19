import React from "react";
import { CommonDetailPage } from "@/components/common/detail/CommonDetailPage";
import type { CommonDetailSection, CommonSectionField } from "@/components/common/detail/CommonDetailPage";
import user from "../../../../image/user.jpeg";

interface Student {
  name: string
  address: string
  phone: number
}

export default function ProfileStudent() {
  const data: Student = {
    name: "Pak Budi",
    address: "jakarta",
    phone: 123,
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
          key: "address",
          label: "Alamat",
          emptyValue: "-",
        },
        {
          key: "phone",
          label: "Telepon",
          emptyValue: "-",
        },
      ] satisfies CommonSectionField<Student>[],
    },
  ];
  return (
    <div className="min-h-screen">
      <CommonDetailPage
        title="Student Profile"
        name={data.name}
        jobdesk={"Guru"}
        image={user.src}
        data={data}
        sections={sections}
      ></CommonDetailPage>
    </div>
  );
}
