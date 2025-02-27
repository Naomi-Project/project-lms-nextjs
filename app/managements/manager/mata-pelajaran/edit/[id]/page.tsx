"use client";
import {
  useGetCurriculumQuery,
  useGetUserQuery,
  useUpdateCurriculumMutation,
  useUpdateUserMutation,
} from "@/graphql/generated";
import { useParams } from "next/navigation";
import { CommonFormEdit } from "@/components/common/form/CommonFormEdit";
import { format } from "date-fns";
import { kurikulumSchema, sections } from "@/helpers/static/FormKurikulum";

const EditPage = () => {
  const params = useParams();
  const { id } = params;
  const [updateCurriculum] = useUpdateCurriculumMutation();
  const { data, loading, error } = useGetCurriculumQuery({
    variables: {
      data: id as string,
    },
    skip: !id,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <CommonFormEdit
      lable="Student"
      title="Edit Student Data"
      method="PUT"
      mutation={updateCurriculum}
      dataGet={data?.curriculum || {}}
      schema={kurikulumSchema}
      sections={sections}
    />
  );
};

export default EditPage;
