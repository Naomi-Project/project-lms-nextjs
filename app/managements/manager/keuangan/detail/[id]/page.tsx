'use client'
import {
  CommonDetail,
  CommonDetailSection,
  CommonSectionField,
} from "@/components/common/detail/CommonDetailFinance";
import { useGetEnrollmentQuery } from "@/graphql/generated";
import user from "@/image/user.jpeg";
import { useParams } from "next/navigation";
import { format } from "date-fns";
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
  
  const dueDate = enrollment?.enrollment?.payment?.dueDate ?? null;
  const paidDate = enrollment?.enrollment?.payment?.paidDate ?? null;
  // if (!dueDate || !paidDate) return

  const payments = [
    {
      invoice: format(paidDate, 'yyyy-MM-dd') ?? '-',
      status: enrollment?.enrollment.payment?.status ?? "PENDING",
      amount: data.amount ?? '0',
    },
  ];
  // const ricianTagihan = Object.entries(enrollment?.enrollment.payment.map)
  const ricianTagihan = [
    { name: enrollment?.enrollment.payment?.pricing?.name, harga: enrollment?.enrollment.payment?.pricing?.amount },
  ];


  const formattedDueDate = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(dueDate));

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
        jatuhTempo={formattedDueDate ?? ''}
        image={user.src}
        data={data}
        ricianTagihan={ricianTagihan}
        riwayatPembayaran={enrollment?.enrollment.payment?.status === 'SUCCESS' ? payments : [ ]}
        sections={sections}
      ></CommonDetail>
    </div>
  );
};

export default DetailPage;
