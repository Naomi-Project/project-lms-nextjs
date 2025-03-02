"use client";
import {
  CommonFormAdd
} from "@/components/common/form/CommonFormAdd";
import { useCreateReferenceMutation, useUserPayloadQuery } from "@/graphql/generated";
import { referenceSchema, sections } from "@/helpers/static/FormReference";
import { useEffect, useState } from "react";

const CreatePage = () => {
  const { data, loading } = useUserPayloadQuery()
  const [createReference] = useCreateReferenceMutation();
  const [dataMutationDefault, setDataMutationDefault] = useState({
    type: "",
    url: "",
    authorId: data?.me.id ?? "",
  });
  
  useEffect(() => {
    setDataMutationDefault({...dataMutationDefault, authorId: data?.me.id ?? ""})
  }, [data?.me.id])

  if (loading) {
    return (
      <p>Loading..</p>
    )
  }
  console.log(data)
  return (
    <CommonFormAdd
      lable="Referensi/Libary"
      title="Buat Referensi/Libary"
      method="POST"
      mutation={createReference}
      isUseDefaultMutation={true}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={referenceSchema}
      sections={sections}
    />
  );
};

export default CreatePage;
