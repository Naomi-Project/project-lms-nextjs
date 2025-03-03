'use client'
import {
  CommonDetail,
  CommonDetailSection,
  CommonSectionField,
} from "@/components/common/detail/CommonDetailFinance";
import { useGetEnrollmentQuery, useGetPaymentsQuery } from "@/graphql/generated";
import user from "@/image/user.jpeg";
import { useParams } from "next/navigation";
import React from "react";

interface Finance {
  name: string;
  address: string;
  nisn: number;
  class: string;
  amount: string;
  payMethod: string;
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
  // const { data: dataPayments } = useGetPaymentsQuery()
  // console.log('pay', dataPayments)
  const data: Finance = {
    name: enrollment?.enrollment.student?.name ?? "",
    address: enrollment?.enrollment?.student?.name ?? "",
    nisn: parseInt(enrollment?.enrollment?.student?.nisn ?? "") ?? "",
    amount: new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(enrollment?.enrollment.payment?.pricing?.amount ?? 0),    
    payMethod: "Manual",
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
      // invoice: "Sabtu, 28 maret 2024",
      status: enrollment?.enrollment.payment?.status,
      amount: data.amount,
    },
  ];
  // const ricianTagihan = Object.entries(enrollment?.enrollment.payment.map)
  const ricianTagihan = [
    { name: enrollment?.enrollment.payment?.pricing?.name, harga: enrollment?.enrollment.payment?.pricing?.amount },
  ];
  console.log(enrollment)
  return (
    <div className="min-h-screen">
      <CommonDetail
        title="Finance"
        name={data.name}
        class={data.class}
        payStatus={enrollment?.enrollment.payment?.status ?? ''}
        paymentId={enrollment?.enrollment.payment?.id ?? ''}
        enrollmentId={enrollment?.enrollment.id ?? ""}
        studentId={enrollment?.enrollment.studentId ?? ''}
        classroomId={enrollment?.enrollment.classroomId ?? ''}
        termId={enrollment?.enrollment.termId ?? ''}
        pricingId={enrollment?.enrollment.payment?.pricing?.id ?? ''}
        tagihan={data.amount.slice(2) ?? 0}
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
