"use client";
import { signOut } from "next-auth/react";
const Logout = () => {
  return (
    <button
      onClick={() => signOut()}
      className="bg-black hover:bg-slate-900 text-white px-2 py-1"
    >
      Logout
    </button>
  );
};
export default Logout;
