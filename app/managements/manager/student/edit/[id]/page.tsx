"use client";
import {
  Gender,
  Role,
  useCreateUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
} from "@/graphql/generated";
import { useParams } from "next/navigation";
import { CommonFormEdit } from "@/components/common/form/CommonFormEdit";
import { sections, studentSchema } from "@/helpers/static/FormStudents";

const EditPage = () => {
  const params = useParams();
  const { id } = params;
  const [updateUser] = useUpdateUserMutation();
  const { data, loading, error } = useGetUserQuery({
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
      mutation={updateUser}
      dataGet={data?.user}
      schema={studentSchema}
      sections={sections}
    />
  );
};

export default EditPage;
