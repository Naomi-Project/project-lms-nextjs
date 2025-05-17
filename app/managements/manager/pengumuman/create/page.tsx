"use client";
import {
  CommonFormAdd
} from "@/components/common/form/CommonFormAdd";
import { sections, announcementSchema } from "@/helpers/static/FormAnnouncements";
import { useCreateAnnouncementMutation } from "@/graphql/generated";
import { useState } from "react";

const CreatePage = () => {
  const [dataMutationDefault, setDataMutationDefault] = useState({
    title: "",
    content: "",
    targets: "",
  });
  const [createAnnouncement] = useCreateAnnouncementMutation();
  return (
    <CommonFormAdd
      lable="Announcement"
      title="Create Announcement"
      method="POST"
      mutation={createAnnouncement}
      isUseDefaultMutation
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={announcementSchema}
      sections={sections}
    />
  );
};

export default CreatePage;
