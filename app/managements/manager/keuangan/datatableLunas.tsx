"use client";
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
} from "@/graphql/generated";
import { format } from "date-fns";

export default function PaymentTable() {
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
      accessorKey: "status",
      header: "STATUS TAGIHAN",
      cell: ({ row }: any) => <span>{row.original.payment?.status ?? "Tidak Ada Status"}</span>
    },
    {
      accessorKey: "action",
      header: "ACTION",
      cell: ({ row }: any) => (
        <div className="flex gap-3">
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
  var fixData = dataPayment.map((item: any) => ({
    ...item,
    nisn: item.student.nisn,
    name: item.student.name,
    amount: new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(item.payment.pricing?.amount ?? 0),    
    class: item.classroom.name,
  }));
  // untuk data murid yang sudah lunas
  fixData = fixData.filter((item) => item.payment.status === 'SUCCESS')
  

  return (
    <DataTable
      columns={columns}
      data={fixData}
      filterName="name"
      filterPlaceholder="Cari Siswa.."
    />
  );
}
