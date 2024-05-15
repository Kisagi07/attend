"use client";
import { signOut } from "next-auth/react";
import { IoMdLogOut } from "react-icons/io";
interface CProps {
  className?: string;
}
const Logout = ({ className }: CProps) => {
  return (
    <button
      onClick={() => signOut()}
      className={`${className} bg-black hover:bg-slate-900 text-white px-2 py-1 flex items-center gap-2`}
    >
      <IoMdLogOut className="w-5 h-5" />
      <span>Logout</span>
    </button>
  );
};
export default Logout;
