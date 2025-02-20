"use client";
import { DataTable } from "@/components/common/list/CommonDataTable";
import DeleteStudent from "@/components/managerStudent/DeleteStudent";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useDeleteAnnouncementMutation, useGetAnnouncementQuery, useGetAnnouncementsQuery } from "@/src/graphql/generated";

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
        accessorKey: "username",
        header: "NAMA SISWA",
        cell: ({ row }: any) => <span>{row.getValue("username")}</span>,
      },
      {
        accessorKey: "class",
        header: "KELAS",
        // cell: ({ row }: any) => <span>{row.getValue("class")}</span>,
        cell: ({ row }: any) => <span>7A</span>,
      },
      {
        accessorKey: "address",
        header: "ALAMAT",
        cell: ({ row }: any) => <span>{row.getValue("address")}</span>,
      },
      {
        accessorKey: "phone",
        header: "PHONE",
        cell: ({ row }: any) => <span>{row.getValue("phone")}</span>,
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

    const dataPengumuman: Pengumuman[] = data?.announcements || [];
    console.log(data)

  return (
    <DataTable
      columns={columns}
      data={dataPengumuman}
      filterName="username"
      filterPlaceholder="Cari Siswa.."
    />
  );
}
