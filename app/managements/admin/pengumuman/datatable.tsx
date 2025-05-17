"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import header from "@/components/header";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useDeleteAnnouncementMutation, useGetAnnouncementsQuery, useGetSchoolsQuery } from "@/graphql/generated";
import { format } from "date-fns";

type Pengumuman = {
    id: string;
    title: string;
    content: string;
    targets: string;
    cabangs: string[];
    createdAt: string;
    updatedAt: string;
  };
  
  
  export default function AnnouncementTable() {
    const { data } = useGetAnnouncementsQuery();
    const { data: schools } = useGetSchoolsQuery();
    const truncateText = (text: string, wordLimit: number = 10) => {
      if (!text) return "";
      const words = text.split(" ");
      if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + "..."; // Potong hingga 100 kata dan tambahkan "..."
      }
      return text;
    };


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
        cell: ({ row }: any) => (
          <div dangerouslySetInnerHTML={{ __html: truncateText(row.getValue("content"))}} />
        ),
      },
      {
        accessorKey: "targets",
        header: "TARGET",
        cell: ({ row }: any) => <span>{row.getValue("targets")}</span>,
      },
      {
        accessorKey: "cabangs",
        header: "CABANG",
        cell: ({ row }: any) => <span>{row.getValue("cabangs") ?? 'Semua Cabang'}</span>,
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
      {
        accessorKey: "action",
        header: "ACTION",
        cell: ({ row }: any) => <div className="flex gap-3">
         <ButtonEdit endpoint="/managements/manager/pengumuman/edit/" id={row.original.id} />
         <ButtonDelete mutation={deleteAnnouncement} loading={loading} id={row.original.id} />
        </div>,
      },
    ];

  const dataSchools = schools?.schools || []
  const dataPengumuman: any[] = data?.announcements.map((item) => {
    return {
      ...item,
      cabangs: item?.schoolIds && item?.schoolIds?.length > 0 ? item?.schoolIds?.map((itemSchool, i) => {
        const findSchool = dataSchools.find((sc) => sc.id === itemSchool)?.name ?? "-"
        return findSchool ?? 'semua'
      }) : 'Semua Cabang'
    }
  }) || [];

  return (
    <DataTable
      columns={columns}
      data={dataPengumuman}
      filterName="title"
      filterPlaceholder="Cari Pengumuman.."
    />
  );
}
