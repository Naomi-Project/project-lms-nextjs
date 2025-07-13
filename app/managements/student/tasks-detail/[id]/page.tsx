"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useGetAssignmentQuery, useUserPayloadQuery } from "@/graphql/generated";
import TasksDetail from "@/components/common/detail/CommonDetailTasks";
import Swal from "sweetalert2";

export default function DetailPage() {
  const params = useParams();
  const { id } = params;

  
  const { data: user } = useUserPayloadQuery()
  const { data, loading, error } = useGetAssignmentQuery({
    variables: { data: id as string },
    skip: !id,
  });
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading material: {error.message}</p>;
  
  const validateDoneSubmit = data?.assignment.submissions.find((item) => item.studentId === user?.me.id) ? true : false
  if (validateDoneSubmit) {
    Swal.fire({
      title: "Akses Ditolak!",
      text: "Kamu telah mengerjakan tugas ini!",
      icon: "error",
      timer: 2000,
      timerProgressBar: true,
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer || result.isConfirmed) {
        // history.back()
        window.location.href = '/dashboard/students'
      }
    });
    setTimeout(() => {
      window.location.href = '/dashboard/students'
    }, 2050);
    return
  }

  return <TasksDetail guru={data?.assignment?.subject?.teachers[0]?.name ?? "Pembuat Tidak diketahui"} dataDefault={data?.assignment?.extendedData ?? ""} role='student' idAssignment={String(id) ?? ""} title={data?.assignment?.title ?? ""} typeTugas={data?.assignment?.type ?? ''} dueDate={data?.assignment?.dueDate} description={data?.assignment?.description} subject={data?.assignment.subject.name ?? "Mapel Tidak Diketahui"} />;
}
