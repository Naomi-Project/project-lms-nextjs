"use client";
import {
  CommonFormAdd
} from "@/components/common/form/CommonFormAdd";
import { sections, announcementSchema } from "@/helpers/static/FormAnnouncements";
import { useCreateAnnouncementMutation } from "@/src/graphql/generated";
import { useState } from "react";

const CreatePage = () => {
  const [dataMutationDefault, setDataMutationDefault] = useState({
    title: "",
    content: "",
    target: "",
  });
  const [createAnnouncement] = useCreateAnnouncementMutation();
  return (
    <CommonFormAdd
      lable="Announcement"
      title="Create Announcement"
      method="POST"
      mutation={createAnnouncement}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={announcementSchema}
      sections={sections}
    />
  );
};

export default CreatePage;
