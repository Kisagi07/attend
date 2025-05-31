"use client";
import React from "react";
import useSWR from "swr";
import { fetcher } from "../helper";
import { Spinner } from "@heroui/spinner";
import { Tabs, Tab } from "@heroui/tabs";
import { ProjectWithLeadAndMembers, ProjectWithMembers } from "../prisma";
import HomeProjectLeading from "./HomeProjectLeading";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import clsx from "clsx";
import { Tooltip } from "@heroui/tooltip";
import { Avatar } from "@heroui/avatar";
import { User } from "@heroui/user";
import Link from "next/link";
import { Button } from "@heroui/button";
import { IoIosOpen } from "react-icons/io";
import { Priority, ProjectStatus } from "generated/prisma";
import translateStatus from "@/utils/translateStatus";
import translatePriority from "@/utils/translatePriority";

interface Projects {
  projectLeading: ProjectWithMembers[];
  projectMembersOf: ProjectWithLeadAndMembers[];
}

const HomeProjects = () => {
  const { data, isLoading } = useSWR<Projects>(`/api/user/projects`, fetcher); 
 

  return isLoading ? (
    <div className="flex justify-center w-full">
      <Spinner label="Loadings..." />
    </div>
  ) : (
    <section>
      <Tabs aria-label="projects" color="secondary" variant="light">
        <Tab key="lead-project" title="Proyek yang Dipimpin">
          <div className="space-y-4">
            {data?.projectLeading.map((project) => (
              <HomeProjectLeading project={project} key={project.id} />
            ))}
          </div>
        </Tab>
        <Tab key="memberofproject" title="Anggota dari Proyek">
          {data?.projectMembersOf.map((project) => (
            <article key={project.id} className="shadow-md p-2 border border-slate-100 space-y-2">
              <div className="flex justify-between">
                <h4>{project.title}</h4>
                <Chip
                  className=" capitalize"
                  size="sm"
                  variant="flat"
                  color={
                    project.status === "completed"
                      ? "success"
                      : project.status === "in_progress"
                        ? "primary"
                        : "default"
                  }
                >
                  {translateStatus(project.status)}
                </Chip>
              </div>
              <Divider />
              <p>
                Prioritas :{" "}
                <span
                  className={clsx("font-semibold capitalize", {
                    "text-red-500": project.priority === "urgent",
                    "text-green-500": project.priority === "low",
                    "text-yellow-500": project.priority === "high",
                    "text-blue-500": project.priority === "normal",
                  })}
                >
                  {translatePriority(project.priority)}
                </span>
              </p>
              <p>Pemimpin:</p>
              <User name={project.projectLead.name} title={project.projectLead.name!} />
              <p>Anggota:</p>
              <div className="flex gap-2 flex-wrap">
                {project.projectMembers.map((member) => (
                  <Tooltip key={member.id} color="primary" content={member.name!}>
                    <Avatar name={member.name!} />
                  </Tooltip>
                ))}
              </div>
              <Tooltip content="Buka Proyek" color="primary">
                <Button
                  className="w-full"
                  as={Link}
                  href={`/home/projects/${project.id}`}
                  variant="flat"
                  color="secondary"
                  isIconOnly
                >
                  <IoIosOpen className="w-6 h-6" />
                </Button>
              </Tooltip>
            </article>
          ))}
        </Tab>
      </Tabs>
    </section>
  );
};

export default HomeProjects;
