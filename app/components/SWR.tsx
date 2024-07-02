"use client";

import { notFound } from "next/navigation";
import { SWRConfig } from "swr";

const SWR = ({ children }: { children: React.ReactNode }) => {
  return <SWRConfig>{children}</SWRConfig>;
};
export default SWR;
