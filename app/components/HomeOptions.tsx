"use client";
import React from "react";
import { Tabs, Tab } from "@heroui/tabs";
import HomeCoordinate from "./HomeCoordinate";
import { FaHome } from "react-icons/fa";
import { VscGithubProject } from "react-icons/vsc";
import HomeProjects from "./HomeProjects";
import { AiOutlineFieldTime } from "react-icons/ai";
import NonScheduleOvertime from "./NonScheduleOvertime";

const HomeOptions = () => {
  return (
    <Tabs aria-label="options" color="primary" variant="underlined" className="max-w-full">
      <Tab
        key="home-coordinate"
        title={
          <div className="flex items-center gap-2">
            <FaHome className="size-4" />
            <span>Kordinat Rumah</span>
          </div>
        }
      >
        <HomeCoordinate />
      </Tab>
      <Tab key="NSO" title={<div className="flex items-center gap-2">
            <AiOutlineFieldTime className="size-4" />
            <span>Lembur Luar Jadwal</span>
          </div>}>
            <NonScheduleOvertime />
          </Tab>
      <Tab
        key="projects"
        title={
          <div className="flex items-center gap-2">
            <VscGithubProject className="size-4" />
            <span>Proyek</span>
          </div>
        }
      >
        <HomeProjects />
      </Tab>
      
    </Tabs>
  );
};

export default HomeOptions;
