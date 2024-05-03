"use client";

import { notFound } from "next/navigation";
import { SWRConfig } from "swr";

const SWR = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        onError: (error: CustomError, key) => {
          if (error.status === 404) {
            notFound();
            return;
          }
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};
export default SWR;
