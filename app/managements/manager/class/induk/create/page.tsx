"use client";
import {
  CommonFormAdd
} from "@/components/common/form/CommonFormAdd";
import { useCreateGradeMutation } from "@/graphql/generated";
import { gradeSchema, sections } from "@/helpers/static/FormGradeClass";
import { useState } from "react";

const CreatePage = () => {
  const [dataMutationDefault, setDataMutationDefault] = useState({
    name: ""
  });
  const [createGrade] = useCreateGradeMutation();
  return (
    <CommonFormAdd
      lable="Induk Kelas"
      title="Buat Induk Kelas"
      method="POST"
      mutation={createGrade}
      isUseDefaultMutation={true}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={gradeSchema}
      sections={sections}
    />
  );
};

export default CreatePage;
