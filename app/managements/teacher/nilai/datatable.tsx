"use client";
/* eslint-disable */
import { DataTable } from "@/components/common/list/CommonDataTable";
import ButtonDelete from "@/components/ui/buttonDelete";
import { useDeleteSubmissionMutation, useGetClassroomQuery, useGetClassroomsQuery, useGetSubmissionsQuery, useGetUsersQuery, useUserPayloadQuery } from "@/graphql/generated";


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
  const { data: user } = useUserPayloadQuery();
  const { data: classrooms } = useGetClassroomsQuery();
  const [deleteSubmission, { loading }] = useDeleteSubmissionMutation();

  // 🔹 Data asli dari query
  if (error) {
    console.log(error)
  }

  const findclass = classrooms?.classrooms.find((item) => item.guardian?.id === user?.me.id)

  const dataSubmission: any[] = data?.submissions.filter((item) => item.student.schoolId === user?.me.schoolId && item.student.classroom?.id === findclass?.id) || [];

  // 🔹 Filter data berdasarkan state dari ExamTeacher.tsx
  const filteredData = dataSubmission.filter((submission) => {
    const { assignment } = submission;

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
      accessorKey: "name",
      header: "NAMA SISWA",
      cell: ({ row }: any) => <span>{row.original.student?.name || "-"}</span>,
    },
    {
      accessorKey: "assignment_title",
      header: "NAMA TUGAS",
      cell: ({ row }: any) => <span>{row.original.assignment?.title || "-"}</span>,
    },
    {
      accessorKey: "subject_name",
      header: "MATA PELAJARAN",
      cell: ({ row }: any) => <span>{row.original.assignment?.subject?.name || "-"}</span>,
    },
    {
      accessorKey: "assignment",
      header: "TIPE TUGAS",
      cell: ({ row }: any) => <span>{row.original.assignment?.type || "-"}</span>,
    },
    {
      accessorKey: "score",
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
  console.log(filteredData)
  return (
    <DataTable
      columns={columns}
      data={filteredData} // 🔹 Data yang sudah difilter
      filterName="no"
      filterPlaceholder="Cari Nama Siswa..."
    />
  );
}
