"use client";

import { useGetGradesQuery } from "@/graphql/generated";

const ListGrade = () => {
  const { data, loading } = useGetGradesQuery();
  if (loading) return false
  console.log(data)
  return <div>ListGrade</div>;
};

export default ListGrade;