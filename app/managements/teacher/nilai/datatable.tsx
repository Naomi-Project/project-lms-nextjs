"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import { useDeleteSubmissionMutation, useGetSubmissionsQuery } from "@/graphql/generated";


interface SubmissionTableProps {
  selectedSubject: string | null;
  selectedGrade: string | null;
  selectedClassType: string | null;
}

export default function SubmissionTable({
  selectedSubject,
  selectedGrade,
  selectedClassType,
}: SubmissionTableProps) {
  const { data, error } = useGetSubmissionsQuery();
  const [deleteSubmission, { loading }] = useDeleteSubmissionMutation();

  // 🔹 Data asli dari query
  const dataSubmission: any[] = data?.submissions || [];

  // 🔹 Filter data berdasarkan state dari ExamTeacher.tsx
  const filteredData = dataSubmission.filter((submission) => {
    const { assignment } = submission;
    console.log(selectedSubject)

    return (
      (!selectedSubject || assignment?.subject?.name.toLowerCase() === selectedSubject) &&
      (!selectedGrade || assignment?.grade === selectedGrade) &&
      (!selectedClassType || assignment?.classType === selectedClassType)
    );
  });

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
      accessorKey: "assignment.subject.name",
      header: "MATA PELAJARAN",
      cell: ({ row }: any) => <span>{row.original.assignment?.subject?.name || "-"}</span>,
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

  if (error) {
    console.error("Error fetching submissions:", error);
  }

  return (
    <DataTable
      columns={columns}
      data={filteredData} // 🔹 Data yang sudah difilter
      filterName="student.username"
      filterPlaceholder="Cari Nama Siswa..."
    />
  );
}
