"use client";
import {
  CommonFormAdd
} from "@/components/common/form/CommonFormAdd";
import { Gender, Role, useCreateUserMutation } from "@/graphql/generated";
import { sections, teacherSchema } from "@/helpers/FormTeachers";
import { useState } from "react";

const CreatePage = () => {
  const [dataMutationDefault, setDataMutationDefault] = useState({
    username: "",
    password: "",
    role: Role.Teacher,
    nik: "1234567890",
    nuptk: "",
    nisn: "",
    dateOfBirth: 20050101,
    gender: Gender.Male,
    address: "",
    phone: "",
  });
  const [createUser] = useCreateUserMutation();
  return (
    <CommonFormAdd
      lable="Teacher"
      title="Create Teacher Data"
      method="POST"
      mutation={createUser}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={teacherSchema}
      sections={sections}
    />
  );
};

export default CreatePage;
