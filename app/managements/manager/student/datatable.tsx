"use client";
import { DataTable } from "@/components/common/list/CommonDataTable";
import DeleteStudent from "@/components/managerStudent/DeleteStudent";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useGetUsersQuery } from "@/graphql/generated";

type Student = {
    id: string;
    username: string;
    gender: string;
    nik?: string | null; // Bisa null atau undefined
    nisn?: string | null;
    nuptk?: string | null;
    role: string;
    address: string;
    phone: string; // Ubah number ke string agar cocok dengan GraphQL
  };
  
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
     <ButtonEdit endpoint="/managements/manager/student/edit" id={row.original.id} />
     <DeleteStudent id={row.original.id} />
    </div>,
  },
];

export default function StudentTable() {
  const { data } = useGetUsersQuery();

  const dataStudent: Student[] = data?.users || [];
  console.log(dataStudent)

  return (
    <DataTable
      columns={columns}
      data={dataStudent}
      filterName="username"
      filterPlaceholder="Cari Siswa.."
    />
  );
}
