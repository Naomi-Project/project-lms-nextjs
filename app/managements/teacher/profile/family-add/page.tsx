"use client";
import {
  CommonFormAdd
} from "@/components/common/form/CommonFormAdd";
import { useCreateFamilyMutation, useUserPayloadQuery } from "@/graphql/generated";
import { familiesSchema, sections } from "@/helpers/static/FormFamilies";
import { useState } from "react";

const CreatePage = () => {
  const { data: userLogin, loading } = useUserPayloadQuery()
  
  const [dataMutationDefault, setDataMutationDefault] = useState({
    name: "",
    contact: '',
    relationship: "",
    userId: "",
  });
  const [createFamily] = useCreateFamilyMutation();

  if (loading) return 'loading..'
  const fixData = {...dataMutationDefault, userId: userLogin?.me.id}

  return (
    <CommonFormAdd
      lable="Families"
      title="Buat Data Keluarga"
      method="POST"
      mutation={createFamily}
      dataMutation={fixData}
      isUseDefaultMutation={true}
      setDataMutation={setDataMutationDefault}
      schema={familiesSchema}
      sections={sections}
    />
  );
};

export default CreatePage;
