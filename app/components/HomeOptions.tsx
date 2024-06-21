"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import HomeCoordinate from "./HomeCoordinate";
import { FaHome } from "react-icons/fa";
import { VscGithubProject } from "react-icons/vsc";
import HomeProjects from "./HomeProjects";

const HomeOptions = () => {
  return (
    <Accordion>
      <AccordionItem
        aria-label="Home Coordinate"
        title="Home Coordinate"
        startContent={<FaHome className="w-6 h-6 text-blue-600" />}
      >
        <HomeCoordinate />
      </AccordionItem>
      <AccordionItem
        aria-label="Projects"
        title="Projects"
        startContent={<VscGithubProject className="w-6 h-6 text-violet-600" />}
      >
        <HomeProjects />
      </AccordionItem>
    </Accordion>
  );
};

export default HomeOptions;
