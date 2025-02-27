"use client";
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "@/graphql/generated";
import { useParams } from "next/navigation";
import { CommonFormEdit } from "@/components/common/form/CommonFormEdit";
import { sections, studentSchema } from "@/helpers/static/FormStudents";
import { format } from "date-fns";

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
  const fixData = { ...data?.user, dateOfBirth: format(new Date(data?.user.dateOfBirth), "yyyy-MM-dd") }
  console.log(data)

  return (
    <CommonFormEdit
      lable="Student"
      title="Edit Student Data"
      method="PUT"
      mutation={updateUser}
      dataGet={fixData || {}}
      schema={studentSchema}
      sections={sections}
    />
  );
};

export default EditPage;
