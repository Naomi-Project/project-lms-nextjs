"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useDeleteAnnouncementMutation, useGetAnnouncementsQuery } from "@/graphql/generated";
import { format } from "date-fns";

type Pengumuman = {
    id: string;
    title: string;
    content: string;
    target: string;
    createdAt: string;
    updatedAt: string;
  };
  
  
  export default function AnnouncementTable() {
    const { data } = useGetAnnouncementsQuery();

    const [deleteAnnouncement, {loading}] = useDeleteAnnouncementMutation()
    const columns = [
      {
        accessorKey: "id",
        header: "No.",
        enableHiding: false,
        enableSorting: true,
        cell: ({ row }: any) => <span>{row.index + 1}</span>,
      },
      {
        accessorKey: "title",
        header: "JUDUL PENGUMUMAN",
        cell: ({ row }: any) => <span>{row.getValue("title")}</span>,
      },
      {
        accessorKey: "content",
        header: "CONTENT",
        cell: ({ row }: any) => <span>{row.getValue("content")}</span>,
      },
      {
        accessorKey: "target",
        header: "TARGET",
        cell: ({ row }: any) => <span>{row.getValue("target")}</span>,
      },
      {
        accessorKey: "createdAt",
        header: "CREATED AT",
        cell: ({ row }: any) => <span>{format(row.getValue("createdAt"), 'yyyy-MM-dd')}</span>,
      },
      {
        accessorKey: "updatedAt",
        header: "UPDATED AT",
        cell: ({ row }: any) => <span>{format(row.getValue("updatedAt"), 'yyyy-MM-dd')}</span>,
      },
    ];

    const dataPengumuman: any[] = data?.announcements || [];

  return (
    <DataTable
      columns={columns}
      data={dataPengumuman}
      filterName="title"
      filterPlaceholder="Cari Pengumuman.."
    />
  );
}
