'use client'
import {
  CommonDetail,
  CommonDetailSection,
  CommonSectionField,
} from "@/components/common/detail/CommonDetailFinance";
import { useGetEnrollmentQuery } from "@/graphql/generated";
import user from "@/image/user.jpeg";
import { useParams } from "next/navigation";
import React from "react";

interface Finance {
  name: string;
  address: string;
  nisn: number;
  class: string;
  phone: number;
}

const DetailPage = () => {
  const params = useParams();
  const { id } = params;
  const { data: enrollment } = useGetEnrollmentQuery({
    variables: {
      id: id as string
    }, 
    skip: !id,
  })
  console.log(enrollment)
  const data: Finance = {
    name: enrollment?.enrollment.student?.name ?? "",
    address: enrollment?.enrollment?.student?.name ?? "",
    nisn: parseInt(enrollment?.enrollment?.student?.nisn ?? "") ?? "",
    class: enrollment?.enrollment.classroom?.name ?? "",
    phone: 123,
  };
  const sections: CommonDetailSection<Finance>[] = [
    {
      label: "Data Keuangan",
      fields: [
        {
          key: "name",
          label: "Nama Lengkap",
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
      ] satisfies CommonSectionField<Finance>[],
    },
  ];

  const payments = [
    {
      invoice: "Sabtu, 28 maret 2024",
      status: "Berhasil",
      amount: "Rp. 1.000.000",
    },
    {
      invoice: "Senin, 30 maret 2024",
      status: "Berhasil",
      amount: "Rp. 1.000.000",
    },
  ];
  const ricianTagihan = [
    { name: "SPP Bulan Juni", harga: "200.000" },
    { name: "SPP Bulan Mei", harga: "400.000" },
  ];
  return (
    <div className="min-h-screen">
      <CommonDetail
        title="Finance"
        name={data.name}
        class={data.class}
        tagihan="300.000"
        jatuhTempo="23 Mei 2025"
        image={user.src}
        data={data}
        ricianTagihan={ricianTagihan}
        riwayatPembayaran={payments}
        sections={sections}
      ></CommonDetail>
    </div>
  );
};

export default DetailPage;
