"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useDeletePricingMutation, useDeleteUserMutation, useGetPricingsQuery, useGetUsersQuery } from "@/graphql/generated";
import { format } from "date-fns";

  
  
export default function PricingTable() {
    const { data } = useGetPricingsQuery()
    console.log(data)
    const [deletePricing, { loading }] = useDeletePricingMutation();
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
        header: "NAMA TAGIHAN",
        cell: ({ row }: any) => <span>{row.getValue('name')}</span>,
      },
      {
        accessorKey: "amount",
        header: "TOTAL TAGIHAN",
        cell: ({ row }: any) => (
          <span>
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0, // Tidak menampilkan desimal
            }).format(row.getValue("amount"))}
          </span>
        ),        
      },
      {
        accessorKey: "action",
        header: "ACTION",
        cell: ({ row }: any) => <div className="flex gap-3">
         <ButtonEdit endpoint="/managements/manager/pricing/edit/" id={row.original.id} />
         <ButtonDelete mutation={deletePricing} loading={loading} id={row.original.id} />
        </div>,
      },
    ];

  const dataPricing: any[] = data?.pricings || [];
  console.log(dataPricing)

  return (
    <DataTable
      columns={columns}
      data={dataPricing}
      filterName="name"
      filterPlaceholder="Cari Tagihan.."
    />
  );
}
