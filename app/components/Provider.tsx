"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface ProviderSession {
  children: React.ReactNode;
  session: any;
}

const Provider = ({ children, session }: ProviderSession) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
