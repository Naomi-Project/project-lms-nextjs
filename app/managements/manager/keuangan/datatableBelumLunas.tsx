"use client";
import CommonFormBroadcastWa from "@/components/common/form/CommonFormBroadcastWa";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import {
  useDeletePaymentMutation,
  useDeleteUserMutation,
  useGetEnrollmentsQuery,
  useGetPaymentsQuery,
  useGetPricingsQuery,
  useGetUsersQuery,
  useUserPayloadQuery,
} from "@/graphql/generated";
import { format, isThisMonth } from "date-fns";

export default function PaymentTablePending() {
  const { data: user } = useUserPayloadQuery();
  const { data } = useGetEnrollmentsQuery();
  const [deletePayment, { loading }] = useDeletePaymentMutation();
  const columns = [
    {
      accessorKey: "id",
      header: "No.",
      enableHiding: false,
      enableSorting: true,
      cell: ({ row }: any) => <span>{row.index + 1}</span>,
    },
    {
      accessorKey: "name",
      header: "NAMA SISWA",
      cell: ({ row }: any) => <span>{row.getValue("name")}</span>,
    },
    {
      accessorKey: "nisn",
      header: "NISN",
      cell: ({ row }: any) => <span>{row.getValue("nisn")}</span>,
    },
    {
      accessorKey: "class",
      header: "KELAS",
      cell: ({ row }: any) => <span>{row.getValue("class")}</span>,
    },
    {
      accessorKey: "amount",
      header: "JUMLAH TAGIHAN",
      cell: ({ row }: any) => <span>{row.getValue("amount")}</span>,
    },
    {
      accessorKey: "action",
      header: "ACTION",
      cell: ({ row }: any) => (
        <div className="flex gap-3">
          <CommonFormBroadcastWa label="WA Blast reminder" nomor={row.original.phone} />
          <ButtonEdit
            label="Detail Tagihan"
            hideIcon
            endpoint="/managements/manager/keuangan/detail/"
            id={row.original.id}
          />
        </div>
      ),
    },
  ];
  const dataPayment: unknown[] = data?.enrollments || [];
  var fixData = dataPayment.map((item: any) => {
    // Calculate total amount for the current month
    const totalAmount = item.payments.filter((item: any) => item.status === "PENDING").reduce((sum: number, payment: any) => {
      return sum + payment.pricing.amount;  
    }, 0);
  
    return {
      ...item,
      nisn: item.student.nisn,
      phone: item.student.phone,
      name: item.student.name,
      amount: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(totalAmount), // Use the calculated totalAmount
      class: item.classroom.name,
    };
  });

  // untuk data murid yang sudah belum lunas
  fixData = fixData.filter((item) => item.student.schoolId === user?.me?.schoolId && item.payments.some((item: any) => item.createdAt && isThisMonth(new Date(item.createdAt)) && item.status === "PENDING"))

  return (
    <DataTable
      columns={columns}
      data={fixData}
      filterName="name"
      filterPlaceholder="Cari Siswa.."
    />
  );
}
