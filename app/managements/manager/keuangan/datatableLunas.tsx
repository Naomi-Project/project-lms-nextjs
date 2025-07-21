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
  useUserPayloadQuery,
} from "@/graphql/generated";
import { format, isThisMonth } from "date-fns";

export default function PaymentTable() {
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
      header: "TAGIHAN DIBAYAR",
      cell: ({ row }: any) => <span>{row.getValue("amount")}</span>,
    },
    // {
    //   accessorKey: "status",
    //   header: "STATUS TAGIHAN",
    //   cell: ({ row }: any) => <span>{row.original.payment?.status ?? "Tidak Ada Status"}</span>
    // },
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
  var fixData = dataPayment.map((item: any) => {
      // Calculate total amount for the current month
      const totalAmount = item.payments.filter((item: any) => item.status === "PAID").reduce((sum: number, payment: any) => {
        if (payment.createdAt && isThisMonth(new Date(payment.createdAt))) {
          return sum + payment.pricing.amount;
        }
        return sum;
      }, 0);
    
      return {
        ...item,
        nisn: item.student.nisn,
        name: item.student.name,
        amount: new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(totalAmount), // Use the calculated totalAmount
        class: item.classroom.name,
      };
    });
  
  // untuk data murid yang sudah lunas
    fixData = fixData.filter((item) => item.student.schoolId === user?.me?.schoolId && item.payments.some((item: any) => item.createdAt && isThisMonth(new Date(item.createdAt)) && item.status === "PAID"))

  return (
    <DataTable
      columns={columns}
      data={fixData}
      filterName="name"
      filterPlaceholder="Cari Siswa.."
    />
  );
}
