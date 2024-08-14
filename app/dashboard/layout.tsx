"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Sidebar from "@/app/components/Sidebar";
import Logout from "@/app/components/Logout";
import { GiPartyPopper } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers, FaBriefcase, FaClock } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { GoDiscussionOutdated } from "react-icons/go";
import { VscGithubProject } from "react-icons/vsc";
import { MdFastfood } from "react-icons/md";
import "@/initExtension";

interface Layout {
  children: React.ReactNode;
}
const Layout: React.FC<Layout> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <>
      <nav
        className={`sticky  left-0 top-0 z-[49] flex h-14 items-center  border-b border-slate-200 bg-white p-4 text-slate-600 shadow`}
      >
        <h1 className="font-sixtyfour text-xl font-bold uppercase italic">Attendance</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          type="button"
          className="ml-auto p-4 hover:bg-slate-100 lg:hidden"
          title="open sidebar"
        >
          <FaBars className="text-xl " />
        </button>
      </nav>

      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}>
        <Sidebar.LinkItem
          href="/dashboard"
          name="Dashboard"
          icon={<MdSpaceDashboard className="h-5 w-5" />}
        />
        <Sidebar.LinkItem
          href="/dashboard/employees"
          subMatch
          name="Employee"
          icon={<FaUsers className="h-5 w-5" />}
        />
        <Sidebar.LinkItem
          href="/dashboard/job-positions"
          subMatch
          name="Job Position"
          icon={<FaBriefcase className="h-5 w-5" />}
        />
        <Sidebar.LinkItem
          href="/dashboard/attendances"
          subMatch
          name="Attendances"
          icon={<FaClock className="h-5 w-5" />}
        />
        <Sidebar.LinkItem
          href="/dashboard/holidays"
          subMatch
          name="Holidays"
          icon={<GiPartyPopper className="h-5 w-5" />}
        />
        <Sidebar.LinkItem
          href="/dashboard/leave-request"
          subMatch
          name="Leave Request"
          icon={<GoDiscussionOutdated />}
        />
        <Sidebar.LinkItem
          href="/dashboard/projects"
          subMatch
          name="Projects"
          icon={<VscGithubProject />}
        />
        <Sidebar.LinkItem
          href="/dashboard/settings"
          name="Settings"
          icon={<IoSettingsSharp className="h-5 w-5" />}
        />
        <Sidebar.LinkItem
          href="/dashboard/food-and-drink-cost"
          name="Food and Drink Cost"
          icon={<MdFastfood className="h-5 w-5" />}
        />
        <Sidebar.Divider />
        <Logout className="w-full !bg-white p-4 text-left !text-inherit   hover:!bg-slate-100" />
      </Sidebar>

      <main className="min-h-[calc(100vh-3.5rem)] space-y-4 bg-white py-4 lg:ml-[280px]">
        {children}
      </main>
    </>
  );
};
export default Layout;
