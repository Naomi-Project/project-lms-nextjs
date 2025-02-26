"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import { useDeleteSubmissionMutation, useGetSubmissionsQuery } from "@/src/graphql/generated";

type Submission = {
  id: string;
  assignment: {
    id: string;
    title: string;
    type: string;
  };
  student: {
    id: string;
    username: string;
  };
  score?: {
    id: string;
    value: number | null;
    notes: string;
  };
};

export default function SubmissionTable() {
  const { data, error } = useGetSubmissionsQuery();
  const [deleteSubmission, { loading }] = useDeleteSubmissionMutation();

  const columns = [
    {
      accessorKey: "no",
      header: "No.",
      enableHiding: false,
      enableSorting: false,
      cell: ({ row }: any) => <span>{row.index + 1}</span>,
    },
    {
      accessorKey: "student.username",
      header: "NAMA SISWA",
      cell: ({ row }: any) => <span>{row.original.student?.username || "-"}</span>,
    },
    {
      accessorKey: "assignment.title",
      header: "NAMA TUGAS",
      cell: ({ row }: any) => <span>{row.original.assignment?.title || "-"}</span>,
    },
    {
      accessorKey: "assignment.type",
      header: "TIPE TUGAS",
      cell: ({ row }: any) => <span>{row.original.assignment?.type || "-"}</span>,
    },
    {
      accessorKey: "score.value",
      header: "NILAI",
      cell: ({ row }: any) => <span>{row.original.score?.value ?? "Belum Dinilai"}</span>,
    },
    {
      accessorKey: "action",
      header: "ACTION",
      cell: ({ row }: any) => (
        <div className="flex gap-3">
          <ButtonDelete mutation={deleteSubmission} loading={loading} id={row.original.id} />
        </div>
      ),
    },
  ];

  const dataSubmission = data?.submissions || [];
  
  if (error) {
    console.error("Error fetching submissions:", error);
  }
  console.log(dataSubmission)

  return (
    <DataTable
      columns={columns}
      data={dataSubmission}
      filterName="student.username"
      filterPlaceholder="Cari Nama Siswa..."
    />
  );
}
