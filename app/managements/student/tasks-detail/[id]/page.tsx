"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useGetAssignmentQuery, useUserPayloadQuery } from "@/graphql/generated";
import TasksDetail from "@/components/common/detail/CommonDetailTasks";

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
  console.log(user)

  return <TasksDetail dataDefault={data?.assignment.extendedData ?? ""} role='student' idAssignment={String(id) ?? ""} title={data?.assignment.title ?? ""} typeTugas={data?.assignment.type} dueDate={data?.assignment.dueDate} description={data?.assignment.description} subject={data?.assignment.subject.name ?? "Mapel Tidak Diketahui"} />;
}
