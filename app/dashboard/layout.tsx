"use client";
import clsx from "clsx";
import React, { useState, useEffect, useRef } from "react";
import { LuArrowLeftFromLine } from "react-icons/lu";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { usePathname } from "next/navigation";

interface Layout {
  children: React.ReactNode;
}
const Layout: React.FC<Layout> = ({ children }) => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const handleSidebarClose = (e: MouseEvent) => {
    !sidebarRef.current!.contains(e.target as Node) && setSidebarOpen(false);
  };

  useEffect(() => {
    if (sidebarOpen && window.innerWidth >= 768) {
      document.addEventListener("click", handleSidebarClose);

      return () => document.removeEventListener("click", handleSidebarClose);
    }
  }, [sidebarOpen]);

  return (
    <>
      <nav
        className={`p-2  border-b h-14  border-slate-200 bg-white text-slate-600 shadow flex items-center`}
      >
        <h1 className="text-xl font-sixtyfour uppercase italic font-bold">
          Attendance
        </h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          type="button"
          className="ml-auto hover:bg-slate-100 p-2 lg:hidden"
          title="open sidebar"
        >
          <FaBars className="text-xl " />
        </button>
      </nav>

      <aside
        ref={sidebarRef}
        className={clsx(
          "fixed z-40 top-0 left-0 lg:max-w-[280px] lg:p-2 lg:min-h-[calc(100vh-56px)] lg:bottom-0 lg:top-auto  transition-all text-slate-600 overflow-x-hidden max-w-0 min-h-screen  border border-slate-100 shadow w-full bg-white",
          {
            "max-w-xs p-2": sidebarOpen,
          }
        )}
      >
        <button
          onClick={() => setSidebarOpen(false)}
          type="button"
          className="ml-auto block hover:bg-slate-100 p-2 md:hidden"
          title="close sidebar"
        >
          <LuArrowLeftFromLine className="text-xl" />
        </button>
        <ul className="space-y-2">
          <li>
            <Link
              onClick={() => setSidebarOpen(false)}
              href="/dashboard"
              className={clsx("text-lg p-2 hover:bg-slate-100 w-full block", {
                "bg-slate-100": pathname === "/dashboard",
              })}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setSidebarOpen(false)}
              href="/dashboard/employees"
              className={clsx("text-lg p-2 hover:bg-slate-100 w-full block", {
                "bg-slate-100": pathname.startsWith("/dashboard/employees"),
              })}
            >
              Employee
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setSidebarOpen(false)}
              href="/dashboard/settings"
              className={clsx("text-lg p-2 hover:bg-slate-100 w-full block", {
                "bg-slate-100": pathname === "/dashboard/settings",
              })}
            >
              Settings
            </Link>
          </li>
          <hr className="!mt-8" />
          <li>
            <Link
              // onClick={}
              href="#"
              className={clsx("text-lg p-2 hover:bg-slate-100 w-full block")}
            >
              Logouts
            </Link>
          </li>
        </ul>
      </aside>

      <main className="lg:ml-[280px] p-2">{children}</main>
    </>
  );
};
export default Layout;
