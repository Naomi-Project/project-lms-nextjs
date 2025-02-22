"use client";
import {
  CommonFormAdd
} from "@/components/common/form/CommonFormAdd";
import { Gender, Role, useCreateFamilyMutation, useCreateUserMutation } from "@/graphql/generated";
import { familiesSchema, sections } from "@/helpers/static/FormFamilies";
import { useState } from "react";

const CreatePage = () => {
  const [dataMutationDefault, setDataMutationDefault] = useState({
    name: "",
    contact: 0,
    relationship: "",
    userId: "aa49febe-8ade-4423-b92d-fc521bc3cf2e",
  });
  const [createFamily] = useCreateFamilyMutation();
  return (
    <CommonFormAdd
      lable="Families"
      title="Buat Data Keluarga"
      method="POST"
      mutation={createFamily}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={familiesSchema}
      sections={sections}
    />
  );
};

export default CreatePage;
