"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { IoMdLogOut } from "react-icons/io";
interface CProps {
  className?: string;
}
const Logout = ({ className }: CProps) => {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await signOut({ redirect: false });
        router.push("/login");
      }}
      className={`${className} bg-black hover:bg-slate-900 text-white px-2 py-1 flex items-center gap-2`}
    >
      <IoMdLogOut className="w-5 h-5" />
      <span>Logout</span>
    </button>
  );
};
export default Logout;
