"use client";
/* eslint-disabled */
import {
  CommonFormAdd,
  CommonFormAddSection,
} from "@/components/common/form/CommonFormAdd";


import { z } from "zod";
import { useEffect, useState } from "react";
import { useCreateScoreMutation, useUserPayloadQuery } from "@/graphql/generated";

const tugasSchema = z.object({
  assignmentId: z.string().min(1, "Nama materi wajib diisi"),
  studentId: z.string().min(1, "Nama materi wajib diisi"),
  extendedData: z.string().min(1, "Nama materi wajib diisi"),
});

interface Form {
  assignmentId: string;
  studentId: string;
  extendedData: string;
}


interface FHelper {
  idAssignment: string | undefined
  dataDefault: string | undefined
}

const FormHelpersAdd = ({ idAssignment, dataDefault }: FHelper) => {
  const { data } = useUserPayloadQuery()
  const dataUser = data?.me || { id: "", username: "", role: "" };

  const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        [
          {
            key: "assignmentId",
            label: "Soal ID",
            hidden: true,
            class: "md:w-full lg:w-full",
            emptyValue: "-",
            placeholder: "",
          },
          {
            key: "studentId",
            label: "Student ID",
            // hidden: true,
            class: "md:w-full lg:w-full",
            emptyValue: "-",
            placeholder: "",
          },
          {
            key: "extendedData",
            label: "Soal-soal",
            class: "md:w-full lg:w-full",
            emptyValue: "-",
            type: "submission",
            placeholder: "",
          },
        ]
      ],
    },
  ];
  
  const [createScore] = useCreateScoreMutation();

  const [dataMutationDefault, setDataMutationDefault] = useState({
    assignmentId: idAssignment,
    studentId: "",
    extendedData: "",
  });

  useEffect(() => {
    setDataMutationDefault((prev) => ({
      ...prev,
      studentId: dataUser.id,
    }));
  }, [dataUser.id]);
  

  return (
    <CommonFormAdd
      lable="Tugas"
      title=""
      isSubmission={true}
      buttonTextSubmit="Submit"
      method="POST"
      hideBackButton={true}
      isUseDefaultMutation={true}
      dataDefault={dataDefault}
      mutation={createScore}
      dataMutation={dataMutationDefault}
      setDataMutation={setDataMutationDefault}
      schema={tugasSchema}
      sections={sections}
    />
  );
};

export default FormHelpersAdd;
