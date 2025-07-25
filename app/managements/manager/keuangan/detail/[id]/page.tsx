'use client'
/* eslint-disable */
import {
  CommonDetail,
  CommonDetailSection,
  CommonSectionField,
} from "@/components/common/detail/CommonDetailFinance";
import { useGetEnrollmentQuery } from "@/graphql/generated";
import user from "@/image/user.jpeg";
import { useParams } from "next/navigation";
import { format, isThisMonth } from "date-fns";
import React, { useMemo } from "react";

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
  const { data: enrollment, loading } = useGetEnrollmentQuery({
    variables: {
      id: id as string
    }, 
    skip: !id,
  })
  const paymenttThisMonth = enrollment?.enrollment?.payments?.find((item) => isThisMonth(new Date(parseInt(item.createdAt))))

  const akumulateTagihanSpp = useMemo(() => {
    return enrollment?.enrollment?.payments?.filter((item) => item.status === "PENDING" || item.status === "FAILED").reduce((total, item) => {
      return total + (item.pricing?.amount ?? 0); // Jika tidak ada amount, gunakan 0 sebagai default
    }, 0);
  }, [enrollment]);

  const data: Finance = {
    name: enrollment?.enrollment?.student?.name ?? "",
    address: enrollment?.enrollment?.student?.name ?? "",
    nisn: parseInt(enrollment?.enrollment?.student?.nisn ?? "") ?? "",
    amount: new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(akumulateTagihanSpp ?? 0),
    payMethod: "Manual",
    class: enrollment?.enrollment?.classroom?.name ?? "",
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
  
  if (!paymenttThisMonth)
    return 'loading..'

  if (!akumulateTagihanSpp && loading)
    return 'loading..'
  

  const invoicesNonPaid = enrollment?.enrollment?.payments?.filter((item: any) => (item.updatedAt && isThisMonth(new Date(parseInt(item.updatedAt))) && item.status === 'PENDING' || item.status === 'FAILED')).map((item: any) => ({
    ...item,
    name: item.pricing?.name,
    status: item.status,
    paymentId: item.id,
    amount: item.pricing?.amount ?? 0,
    harga: new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(item.pricing?.amount ?? 0),
  }));

  const invoicesPaid = enrollment?.enrollment?.payments?.filter((item: any) => (item.updatedAt && isThisMonth(new Date(parseInt(item.updatedAt))) && item.status === 'PAID')).map((item: any) => ({
    ...item,
    invoice: item.invoice,
    status: item.status,
    amount: new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(item.pricing?.amount ?? 0),
  }));

  return (
    <div className="min-h-screen">
      <CommonDetail
        title="Finance"
        name={data.name}
        class={data.class}
        payStatus={paymenttThisMonth?.status ?? ''}
        paymentId={paymenttThisMonth?.id ?? ''}
        enrollmentId={enrollment?.enrollment?.id ?? ""}
        studentId={enrollment?.enrollment?.studentId ?? ''}
        classroomId={enrollment?.enrollment?.classroomId ?? ''}
        termId={enrollment?.enrollment?.termId ?? ''}
        pricingId={paymenttThisMonth?.pricing?.id ?? ''}
        tagihan={data?.amount}
        // jatuhTempo={formattedDueDate ?? ''}
        image={user.src}
        data={data}
        ricianTagihan={invoicesNonPaid}
        riwayatPembayaran={invoicesPaid ?? []}
        sections={sections}
      ></CommonDetail>
    </div>
  );
};

export default DetailPage;
