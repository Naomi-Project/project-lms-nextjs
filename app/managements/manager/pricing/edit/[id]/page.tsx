"use client";
import {
  useGetPricingQuery,
  useUpdatePricingMutation,
} from "@/graphql/generated";
import { useParams } from "next/navigation";
import { CommonFormEdit } from "@/components/common/form/CommonFormEdit";
import { pricingSchema, sections } from "@/helpers/static/FormPricing";

const EditPage = () => {
  const params = useParams();
  const { id } = params;
  const [updatePricing] = useUpdatePricingMutation();
  const { data, loading, error } = useGetPricingQuery({
    variables: {
      data: id as string,
    },
    skip: !id,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <CommonFormEdit
      lable="Tagihan"
      title="Edit Tagihan"
      convertFloat="amount"
      method="PUT"
      mutation={updatePricing}
      dataGet={data?.pricing || {}}
      schema={pricingSchema}
      sections={sections}
    />
  );
};

export default EditPage;
