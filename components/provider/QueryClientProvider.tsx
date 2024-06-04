"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const query =  new QueryClient()
export const Provider = ({ children }: { children: React.ReactNode }) => {
  const [client] = useState(query);
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
