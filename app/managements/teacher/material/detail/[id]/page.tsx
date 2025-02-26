"use client";
import React from "react";
import { useParams } from "next/navigation";
import MaterialDetail from "@/components/common/detail/CommonDetailMateri";
import { useGetMaterialQuery } from "@/src/graphql/generated";

export default function DetailPage() {
  const params = useParams();
  const { id } = params;

  const { data, loading, error } = useGetMaterialQuery({
    variables: { data: id as string },
    skip: !id,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading material: {error.message}</p>;
  console.log(data)

  return <MaterialDetail guru={"pa budi"} semester={"semester 1" } subject={data?.material.subject.name ?? ""} name={data?.material.title ?? ""} code={data?.material.content ?? ""}  />;
}
