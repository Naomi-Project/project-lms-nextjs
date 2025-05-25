"use client";
/* eslint-disabled */
import {
  CommonFormAddSection,
} from "@/components/common/form/CommonFormAdd";
import { CommonFormEdit } from "@/components/common/form/CommonFormEdit";
import {
  useGetBroadcastsQuery,
  useGetUserQuery,
  useUpdateSubjectMutation,
  useUserPayloadQuery,
} from "@/graphql/generated";
import { useParams } from "next/navigation";
import { z } from "zod";

const broadcastSchema = z.object({
  openingText: z.string().min(1, "Text awalan wajib diisi"),
  mainText: z.string().min(1, "pesan wajib diisi"),
});

interface Form {
  openingText: string;
  mainText: string;
}

interface dataSelectTypes {
  label: string;
  value: string;
}

const FormHelpersEdit = () => {
  const params = useParams();
  const { id } = params;
  const { data: user, loading } = useUserPayloadQuery(); 
  const { data: findUser, loading: loadFindUser } = useGetUserQuery({
    variables: {
      data: user?.me.id ?? ''
    }, 
    skip: !user?.me.id
  })
  const { data: broadcast } = useGetBroadcastsQuery({
    variables: {
      schoolId: findUser?.user.school?.id ?? ''
    }
  })
  console.log(broadcast)

  const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        // fields group 1
        [
          {
            key: "openingText",
            label: "Text Awalan",
            emptyValue: "-",
            class: "w-full mb-2",
            disabled: true,
            placeholder: "...",
          },
          {
            key: "mainText",
            label: "Isi Pesan",
            emptyValue: "-",
            class: "w-full",
            placeholder: "...",
          },
        ],
      ],
    },
  ];

  const [updateSubject] = useUpdateSubjectMutation()

  const fixData = {openingText: "Halo {{ student_name }} "}
  return (
      <CommonFormEdit
        lable="Whatsapp Blast"
        title="Edit Isi Pesan Auto reminder whatsapp"
        method="PUT"
        mutation={updateSubject}
        dataGet={fixData}
        schema={broadcastSchema}
        sections={sections}
      />
  );
};

export default FormHelpersEdit;