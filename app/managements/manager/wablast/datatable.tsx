"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useDeleteBroadcastMutation, useGetBroadcastsQuery, useGetClassroomsQuery, useGetSubjectsQuery, useGetUserQuery, useGetUsersQuery, useUserPayloadQuery } from "@/graphql/generated";

type Teacher = {
    id: string;
    tag: string | null;
    message?: string;
  };
  
  
export default function BroadcastTable() {
  const { data: subject } = useGetSubjectsQuery();
  const { data: classrooms } = useGetClassroomsQuery();
  const [deleteBroadcast, { loading }] = useDeleteBroadcastMutation();
    const { data: user } = useUserPayloadQuery(); 
    const { data: findUser, loading: loadFindUser } = useGetUserQuery({
      variables: {
        data: user?.me.id ?? ''
      }, 
      skip: !user?.me.id
    })
    const { data } = useGetBroadcastsQuery({
      variables: {
        schoolId: findUser?.user?.school?.id ?? ''
      }
    });
    const columns = [
      {
        accessorKey: "id",
        header: "No.",
        enableHiding: false,
        enableSorting: true,
        cell: ({ row }: any) => <span>{row.index + 1}</span>,
      },
      {
        accessorKey: "tag",
        header: "TAG",
        cell: ({ row }: any) => <span>{row.getValue("tag")}</span>,
      },
      {
        accessorKey: "message",
        header: "PESAN",
        cell: ({ row }: any) => <span>{row.getValue("message")}</span>,
        // cell: ({ row }: any) => <span>7A</span>,
      },
      {
        accessorKey: "action",
        header: "ACTION",
        cell: ({ row }: any) => <div className="flex gap-3">
         {/* <ButtonEdit endpoint="/managements/manager/teacher/edit/" id={row.original.id} /> */}
         <ButtonDelete mutation={deleteBroadcast} loading={loading} id={row.original.id} />
        </div>,
      },
    ];

  const dataBroadcasts: any[] = data?.broadcasts || [];

  console.log(dataBroadcasts)
  return (
    <DataTable
      columns={columns}
      data={dataBroadcasts}
      filterName="message"
      filterPlaceholder="Cari Pesan.."
    />
  );
}
