"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import ButtonEdit from "@/components/ui/buttonEdit";
import { useDeleteUserMutation, useGetClassroomsQuery, useGetUsersQuery} from "@/graphql/generated";


type Student = {
    id: string;
    name?: string | null;
    username: string;
    gender: string;
    nik?: string | null;
    nisn?: string | null;
    nuptk?: string | null;
    classrom?: any | undefined;
    role: string;
    address: string;
    phone: string; // Ubah number ke string agar cocok dengan GraphQL
  };
  
  
export default function StudentTable() {
  const { data, error } = useGetUsersQuery()
  const { data: classrooms } = useGetClassroomsQuery();
    const [deleteUser, { loading }] = useDeleteUserMutation();
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
        cell: ({ row }: any) => <span>{row.getValue('name')}</span>,
      },
      {
        accessorKey: "nisn",
        header: "NISN",
        cell: ({ row }: any) => <span>{row.getValue("nisn")}</span>,
        // cell: () => <span>7A</span>,
      },
      {
        accessorKey: "class",
        header: "KELAS",
        cell: ({ row }: any) => <span>{row.getValue("class")}</span>,
      },
      {
        accessorKey: "phone",
        header: "PHONE",
        cell: ({ row }: any) => <span>{row.getValue("phone")}</span>,
      },
      {
        accessorKey: "gender",
        sortable: true,
        header: "GENDER",
        cell: ({ row }: any) => <span>{row.getValue("gender")}</span>,
      },
      {
        accessorKey: "school",
        header: "SEKOLAH",
        cell: ({ row }: any) => <span>{row.original.school.name}</span>,
      },
      {
        accessorKey: "action",
        header: "ACTION",
        cell: ({ row }: any) => <div className="flex gap-3">
         <ButtonEdit endpoint="/managements/manager/student/edit/" id={row.original.id} />
         <ButtonDelete mutation={deleteUser} loading={loading} id={row.original.id} />
        </div>,
      },
    ];

  const classroomsData = classrooms?.classrooms || [];

  let dataStudent: any[] = data?.users.filter(user => user.role === "STUDENT").map(student => {
    const classFind = classroomsData.filter(sub =>
      sub.students.some(t => t.id === student.id)
    );

    // Gabungkan data student dengan subjects yang ditemukan
    return {
      ...student,
      class: classFind.map(sub => sub.name).join(" | ") || "-",
    };
  }) || [];


  return (
    <DataTable
      columns={columns}
      data={dataStudent}
      filterName="name"
      filterPlaceholder="Cari Siswa.."
    />
  );
}
