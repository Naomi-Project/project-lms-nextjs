"use client";

import { useGetClassroomQuery, useGetClassroomsQuery } from "@/graphql/generated";

const ListClass = () => {
  const { data, loading } = useGetClassroomsQuery();
  if (loading) return false
  console.log(data)
  return <div>ListClass</div>;
};

export default ListClass;