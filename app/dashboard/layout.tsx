"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Sidebar from "@/app/components/Sidebar";
import Logout from "@/app/components/Logout";

interface Layout {
  children: React.ReactNode;
}
const Layout: React.FC<Layout> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
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

      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}>
        <Sidebar.LinkItem href="/dashboard" name="Dashboard" />
        <Sidebar.LinkItem href="/dashboard/employees" name="Employee" />
        <Sidebar.LinkItem href="/dashboard/job-positions" name="Job Position" />
        <Sidebar.LinkItem href="/dashboard/settings" name="Settings" />
        <Sidebar.Divider />
        <Logout className="!bg-white !text-inherit hover:!bg-slate-100 w-full p-2   text-left" />
      </Sidebar>

      <main className="lg:ml-[280px] p-2">{children}</main>
    </>
  );
};
export default Layout;
