"use client";
import {
  CommonFormAdd
} from "@/components/common/form/CommonFormAdd";
import { Gender, Role, useCreateUserMutation, useGetUsersQuery } from "@/graphql/generated";
import { sections, teacherSchema } from "@/helpers/static/FormTeachers";
import { useState } from "react";

const CreatePage = () => {
  const { data, error } = useGetUsersQuery();
  console.log(error)
  console.log(data)
  const [dataMutationDefault, setDataMutationDefault] = useState({
    name: "",
    username: "",
    password: "",
    role: Role.Teacher,
    nik: "1234567890",
    nuptk: "",
    nisn: "",
    dateOfBirth: "",
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
      isRelation={true}
      valuerRelation1="nuptk"
      mutation={createUser}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={teacherSchema}
      sections={sections}
    />
  );
};

export default CreatePage;
