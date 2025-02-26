"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useGetAssignmentQuery } from "@/src/graphql/generated";
import TasksDetail from "@/components/common/detail/CommonDetailTasks";

export default function DetailPage() {
  const params = useParams();
  const { id } = params;

  const { data, loading, error } = useGetAssignmentQuery({
    variables: { data: id as string },
    skip: !id,
  });
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading material: {error.message}</p>;
  console.log(data)

  return <TasksDetail role="teacher" title={data?.assignment.title ?? ""} dueDate={data?.assignment.dueDate} extendedData={JSON.parse(data?.assignment.extendedData || "") ?? ""} description={data?.assignment.description} subject={data?.assignment.subject.name ?? "Mapel Tidak Diketahui"} />;
}
