import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CommonDetailPage } from "@/components/common/detail/CommonDetailPage";
// import user from "../../../../image/user.jpeg";
// import Image from "next/image";
// import Link from "next/link";

export default function ProfileStudent() {
  return (
    <div className="min-h-screen">
      <CommonDetailPage
        title="Test"
        name={data.name}
        jobdesk={"Guru"}
        image="https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
        data={data}
        sections={sections}
      ></CommonDetailPage>
    </div>
  );
}
