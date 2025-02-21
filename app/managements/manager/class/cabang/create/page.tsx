"use client";
import {
  CommonFormAdd
} from "@/components/common/form/CommonFormAdd";
import { Gender, Role, useCreateClassroomMutation } from "@/graphql/generated";
import { cabangKelasSchema, sections } from "@/helpers/FormCabangKelas";
import { useState } from "react";

const CreatePage = () => {
  const [dataMutationDefault, setDataMutationDefault] = useState({
    gradeId: "",
    guardianId: "",
    name: "",
    // enrollments: "",
    // scheduls: "",
  });
  const [createClassroom] = useCreateClassroomMutation();
  return (
    <CommonFormAdd
      lable="Cabang Kelas"
      title="Buat Cabang Kelas"
      method="POST"
      mutation={createClassroom}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={cabangKelasSchema}
      sections={sections}
    />
  );
};

export default CreatePage;
