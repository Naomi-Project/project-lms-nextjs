"use client";
import {
  CommonFormAdd
} from "@/components/common/form/CommonFormAdd";
import { useCreateFamilyMutation, useUserPayloadQuery } from "@/graphql/generated";
import { familiesSchema, sections } from "@/helpers/static/FormFamilies";
import { useEffect, useState } from "react";

const CreatePage = () => {
  const { data: userLogin } = useUserPayloadQuery()
  
  const [dataMutationDefault, setDataMutationDefault] = useState({
    name: "",
    contact: '',
    relationship: "",
    userId: userLogin?.me.id ?? "",
  });
  const [createFamily] = useCreateFamilyMutation();

  useEffect(() => {
    setDataMutationDefault({...dataMutationDefault, userId: userLogin?.me.id ?? ""})
  }, [userLogin?.me.id])
  return (
    <CommonFormAdd
      lable="Families"
      title="Buat Data Keluarga"
      method="POST"
      mutation={createFamily}
      dataMutation={dataMutationDefault}
      isUseDefaultMutation={true}
      setDataMutation={setDataMutationDefault}
      schema={familiesSchema}
      sections={sections}
    />
  );
};

export default CreatePage;
