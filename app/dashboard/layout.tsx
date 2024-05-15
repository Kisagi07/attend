"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Sidebar from "@/app/components/Sidebar";
import Logout from "@/app/components/Logout";
import { GiPartyPopper } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers, FaBriefcase, FaClock } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

interface Layout {
  children: React.ReactNode;
}
const Layout: React.FC<Layout> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <>
      <nav
        className={`p-4  border-b h-14 sticky top-0 left-0 z-[100]  border-slate-200 bg-white text-slate-600 shadow flex items-center`}
      >
        <h1 className="text-xl font-sixtyfour uppercase italic font-bold">Attendance</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          type="button"
          className="ml-auto hover:bg-slate-100 p-4 lg:hidden"
          title="open sidebar"
        >
          <FaBars className="text-xl " />
        </button>
      </nav>

      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}>
        <Sidebar.LinkItem
          href="/dashboard"
          name="Dashboard"
          icon={<MdSpaceDashboard className="w-5 h-5" />}
        />
        <Sidebar.LinkItem
          href="/dashboard/employees"
          subMatch
          name="Employee"
          icon={<FaUsers className="w-5 h-5" />}
        />
        <Sidebar.LinkItem
          href="/dashboard/job-positions"
          subMatch
          name="Job Position"
          icon={<FaBriefcase className="w-5 h-5" />}
        />
        <Sidebar.LinkItem
          href="/dashboard/attendances"
          subMatch
          name="Attendances"
          icon={<FaClock className="w-5 h-5" />}
        />
        <Sidebar.LinkItem
          href="/dashboard/holidays"
          subMatch
          name="Holidays"
          icon={<GiPartyPopper className="w-5 h-5" />}
        />
        {/* <Sidebar.LinkItem href="/dashboard/salary" name="Salary" /> */}
        <Sidebar.LinkItem
          href="/dashboard/settings"
          name="Settings"
          icon={<IoSettingsSharp className="w-5 h-5" />}
        />
        <Sidebar.Divider />
        <Logout className="!bg-white !text-inherit hover:!bg-slate-100 w-full p-4   text-left" />
      </Sidebar>

      <main className="lg:ml-[280px] p-4 space-y-4 bg-white min-h-[calc(100vh-3.5rem)]">
        {children}
      </main>
    </>
  );
};
export default Layout;
