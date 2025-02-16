"use client";

import { ApolloProvider } from "@apollo/client";
import client from "./apollo";

export default function CustomApolloProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
