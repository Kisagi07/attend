"use client";
import { signOut } from "next-auth/react";
interface CProps {
  className?: string;
}
const Logout = ({ className }: CProps) => {
  return (
    <button
      onClick={() => signOut()}
      className={`${className} bg-black hover:bg-slate-900 text-white px-2 py-1}`}
    >
      Logout
    </button>
  );
};
export default Logout;
