"use client";
import React from "react";
import "@/initExtension";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-full bg-white space-y-4 text-slate-700 py-4">{children}</main>
  );
};
export default layout;
