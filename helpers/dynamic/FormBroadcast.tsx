"use client";
/* eslint-disabled */
import {
  CommonFormAdd,
  CommonFormAddSection,
} from "@/components/common/form/CommonFormAdd";
import {
  BroadcastTag,
  useCreateBroadcastMutation,
  useGetSchoolsQuery,
  useGetUserQuery,
  useUserPayloadQuery,
} from "@/graphql/generated";
import { z } from "zod";
import { useState } from "react";

const broadcastSchema = z.object({
  tag: z.string().min(1, "Tag pesan wajib diisi"),
  message: z.string().min(1, "Pesan wajib diisi"),
  schoolId: z.string().min(1, "Sekolah wajib dipilih"),
});

interface Form {
  tag: string;
  message: string;
  schoolId: string;
}

interface dataSelectTypes {
  label: string;
  value: string;
}

const FormHelpersAdd = () => {
  const { data: firstData } = useGetSchoolsQuery()
  const { data: userPayload } = useUserPayloadQuery()
  const { data: findUser, loading: loadFindUser } = useGetUserQuery({
    variables: {
      data: userPayload?.me.id ?? ''
    }, 
    skip: !userPayload?.me.id
  })
  const dataSchool: dataSelectTypes[] = firstData?.schools.map((data) => ({
    label: data.name,
    value: data.id,
  })) || []

  const [createBroadcast] = useCreateBroadcastMutation();
  const [dataMutationDefault, setDataMutationDefault] = useState({
    tag: "",
    message: "",
    schoolId: '',
  });
  
  if (loadFindUser) return 'loading..'
  const fixData = {...dataMutationDefault, schoolId: findUser?.user?.school?.id}
  
  // if (loadFindUser) return 'loading..'
  const sections: CommonFormAddSection<Form>[] = [
    {
      fields: [
        [
          {
            key: "tag",
            label: "Tag Pesan",
            class: "md:w-full lg:w-full",
            emptyValue: "-",
            type: "select",
            dataSelect: [
              { label: "REMINDER_PAYMENT", value: BroadcastTag.ReminderPayment },
              { label: "REMINDER", value: BroadcastTag.Reminder },
              { label: "ANNOUNCEMENT", value: BroadcastTag.Announcement },
              { label: "EVENT", value: BroadcastTag.Event },
              { label: "PAYMENT", value: BroadcastTag.Payment },
              { label: "NOTIFICATION", value: BroadcastTag.Notification },
            ],
            placeholder: "Pilih salah satu tag..",
          },
          {
            key: "message",
            label: "Pesan",
            class: "md:w-full lg:w-full",
            emptyValue: "-",
            placeholder: "Masukan pesan..",
          },
          {
            key: "schoolId",
            label: "Sekolah/Cabang Sekolah",
            type: "select",
            dataSelect: dataSchool,
            emptyValue: "-",
            disabled: true,
            hidden: true,
            class: "hidden",
            placeholder: "Pilih sekolah..",
          },
        ],
      ],
    },
  ];

  return (
    <CommonFormAdd
      lable="Broadcast"
      title="Buat Pesan Pengingat WA Blast"
      method="POST"
      isUseDefaultMutation={true}
      mutation={createBroadcast}
      dataMutation={fixData}
      setDataMutation={setDataMutationDefault}
      schema={broadcastSchema}
      sections={sections}
    />
  );
};

export default FormHelpersAdd;
