"use client";
import {
  CommonFormAdd
} from "@/components/common/form/CommonFormAdd";
import { useCreatePricingMutation, useUserPayloadQuery } from "@/graphql/generated";
import { pricingSchema, sections } from "@/helpers/static/FormPricing";
import { useEffect, useState } from "react";

const CreatePage = () => {
  const [dataMutationDefault, setDataMutationDefault] = useState({
    name: "",
    amount: "",
    schoolId: ""
  });

  const { data: user } = useUserPayloadQuery()

  useEffect(() => {
    setDataMutationDefault(prev => ({
      ...prev,
      schoolId: user?.me.schoolId || ""
    }));
  }, [user?.me.schoolId]);



  const [createPricing] = useCreatePricingMutation();
  return (
    <CommonFormAdd
      lable="Tagihan Atau SPP"
      title="Buat Tagihan Atau SPP"
      method="POST"
      isCreateSpp={true}
      isUseDefaultMutation={true}
      mutation={createPricing}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={pricingSchema}
      sections={sections}
    />
  );
};

export default CreatePage;
