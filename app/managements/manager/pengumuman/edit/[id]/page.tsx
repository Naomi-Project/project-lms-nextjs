"use client";


import { useParams } from "next/navigation";
import { CommonFormEdit } from "@/components/common/form/CommonFormEdit";
import { useGetAnnouncementQuery, useUpdateAnnouncementMutation } from "@/graphql/generated";
import { announcementSchema, sections } from "@/helpers/static/FormAnnouncements";

const EditPage = () => {
  const params = useParams();
  const { id } = params;
  const [updateAnnouncement] = useUpdateAnnouncementMutation();
  const { data, loading, error } = useGetAnnouncementQuery({
    variables: {
      data: id as string,
    },
    skip: !id,
  }); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data)
  return (
    <CommonFormEdit
      lable="Pengumuman"
      title="Edit Pengumuman"
      method="PUT"
      mutation={updateAnnouncement}
      dataGet={data?.announcement}
      schema={announcementSchema}
      sections={sections}
    />
  );
};

export default EditPage;
