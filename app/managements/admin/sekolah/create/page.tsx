"use client";
import {
  CommonFormAdd
} from "@/components/common/form/CommonFormAdd";
import { useCreateSchoolMutation } from "@/graphql/generated";
import { sekolahSchema, sections } from "@/helpers/static/FormSekolah";
import { useState } from "react";

const CreatePage = () => {
  const [dataMutationDefault, setDataMutationDefault] = useState({
    name: "",
    accreditation: "",
    address: "",
    email: "",
    foundAt: "",
  });
  const [createSchool] = useCreateSchoolMutation();
  return (
    <CommonFormAdd
      lable="Cabang Sekolah"
      title="Buat Cabang Sekolah"
      method="POST"
      mutation={createSchool}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={sekolahSchema}
      sections={sections}
    />
  );
};

export default CreatePage;
