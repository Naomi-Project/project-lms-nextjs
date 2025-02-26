"use client";
import {
  CommonFormAdd
} from "@/components/common/form/CommonFormAdd";
import { useCreateCurriculumMutation } from "@/graphql/generated";
import { kurikulumSchema, sections } from "@/helpers/static/FormKurikulum";
import { useState } from "react";

const CreatePage = () => {
  const [dataMutationDefault, setDataMutationDefault] = useState({
    name: ""
  });
  const [createCurriculum] = useCreateCurriculumMutation();
  return (
    <CommonFormAdd
      lable="Kurikulum"
      title="Buat Kurikulum"
      method="POST"
      isUseDefaultMutation={true}
      mutation={createCurriculum}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={kurikulumSchema}
      sections={sections}
    />
  );
};

export default CreatePage;
