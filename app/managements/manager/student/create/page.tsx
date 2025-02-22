"use client";
import {
  CommonFormAdd
} from "@/components/common/form/CommonFormAdd";
import { Gender, Role, useCreateUserMutation } from "@/graphql/generated";
import { sections, studentSchema } from "@/helpers/static/FormStudents";
import { useState } from "react";

const CreatePage = () => {
  const [dataMutationDefault, setDataMutationDefault] = useState({
    username: "",
    password: "",
    role: Role.Student,
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
      lable="Student"
      title="Create Student Data"
      method="POST"
      mutation={createUser}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={studentSchema}
      sections={sections}
    />
  );
};

export default CreatePage;
