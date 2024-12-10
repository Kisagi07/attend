"use client";
import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import HomeCoordinate from "./HomeCoordinate";
import { FaHome } from "react-icons/fa";
import { VscGithubProject } from "react-icons/vsc";
import HomeProjects from "./HomeProjects";

const HomeOptions = () => {
  return (
    <Tabs aria-label="options" color="primary" variant="underlined">
      <Tab
        key="home-coordinate"
        title={
          <div className="flex items-center gap-2">
            <FaHome className="size-4" />
            <span>Home Coordinate</span>
          </div>
        }
      >
        <HomeCoordinate />
      </Tab>
      <Tab
        key="projects"
        title={
          <div className="flex items-center gap-2">
            <VscGithubProject className="size-4" />
            <span>Projects</span>
          </div>
        }
      >
        <HomeProjects />
      </Tab>
    </Tabs>
  );
};

export default HomeOptions;
