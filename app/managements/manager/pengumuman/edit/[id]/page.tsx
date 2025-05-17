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
  const fixData = {...data?.announcement, targets: data?.announcement.targets[0]}
  console.log(fixData)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <CommonFormEdit
      lable="Pengumuman"
      title="Edit Pengumuman"
      method="PUT"
      mutation={updateAnnouncement}
      dataGet={fixData}
      schema={announcementSchema}
      sections={sections}
    />
  );
};

export default EditPage;
