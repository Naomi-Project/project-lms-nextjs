"use client";
import {
  useGetSchoolQuery,
  useUpdateSchoolMutation,
} from "@/graphql/generated";
import { useParams } from "next/navigation";
import { CommonFormEdit } from "@/components/common/form/CommonFormEdit";
import { sekolahSchema, sections } from "@/helpers/static/FormSekolah";
import { format } from "date-fns";

const EditPage = () => {
  const params = useParams();
  const { id } = params;
  const [updateSchool] = useUpdateSchoolMutation();
  const { data, loading, error } = useGetSchoolQuery({
    variables: {
      data: id as string,
    },
    skip: !id,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const fixData = { ...data?.school, foundAt: format(new Date(data?.school.foundAt), "yyyy-MM-dd") }
  console.log(fixData)

  return (
    <CommonFormEdit
      lable="Sekolah"
      title="Edit Sekolah"
      method="PUT"
      mutation={updateSchool}
      dataGet={fixData || {}}
      schema={sekolahSchema}
      sections={sections}
    />
  );
};

export default EditPage;
