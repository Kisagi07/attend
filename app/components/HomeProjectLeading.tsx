"use client";
import React from "react";
import { Key } from "@react-types/shared";

import { ProjectWithMembers } from "../prisma";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/divider";
import clsx from "clsx";
import { Tooltip } from "@nextui-org/tooltip";
import { Avatar } from "@nextui-org/avatar";
import { toast } from "react-toastify";

interface HomeProjectLeading {
  project: ProjectWithMembers;
}

const HomeProjectLeading: React.FC<HomeProjectLeading> = ({ project }) => {
  const [status, setStatus] = React.useState<Set<Key> | "all">(new Set([project.status]));
  const value = Array.from(status as Set<Key>);

  const handleStatusUpdate = React.useCallback(async (): Promise<void> => {
    const formData = new FormData();
    formData.append("title", project.title);
    formData.append("priority", project.priority);
    formData.append("fund", project.fund.toString());
    formData.append("status", value[0] as string);
    project.projectMembers.forEach((member) => {
      formData.append("project-members-[]", member.id.toString());
    });
    formData.append("project-lead-id", project.projectLeadId.toString());
    try {
      const res = await fetch(`/api/projects/${project.id}`, {
        method: "PUT",
        body: formData,
      });
      if (!res.ok) {
        const error: CustomError = new Error("Something went wrong");
        error.status = res.status;
        error.info = await res.json();
        throw error;
      }
      const data = await res.json();
    } catch (error: any) {
      console.error(error);
      console.log(error.info);
      toast.error("Failed updating project status");
    }
  }, []);

  React.useEffect(() => {
    if (value[0] !== project.status) {
      handleStatusUpdate();
    }
  }, [status]);
  return (
    <article key={project.id} className="shadow-md p-2 border border-slate-100 space-y-2">
      <div className="flex justify-between">
        <h4>{project.title}</h4>

        <Dropdown>
          <DropdownTrigger>
            <Chip
              className="cursor-pointer capitalize"
              size="sm"
              variant="flat"
              color={
                value[0] === "completed"
                  ? "success"
                  : value[0] === "in_progress"
                    ? "primary"
                    : "default"
              }
            >
              {(value[0] as string).replace("_", " ")}
            </Chip>
          </DropdownTrigger>
          <DropdownMenu
            selectionMode="single"
            disallowEmptySelection
            selectedKeys={status}
            onSelectionChange={setStatus}
          >
            <DropdownItem key="pending">Pending</DropdownItem>
            <DropdownItem color="primary" key="in_progress">
              In Progress
            </DropdownItem>
            <DropdownItem color="success" key="completed">
              Completed
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <Divider />
      <p>
        Priority :{" "}
        <span
          className={clsx("font-semibold capitalize", {
            "text-red-500": project.priority === "urgent",
            "text-green-500": project.priority === "low",
            "text-yellow-500": project.priority === "high",
            "text-blue-500": project.priority === "normal",
          })}
        >
          {project.priority}
        </span>
      </p>
      <p>Members:</p>
      <div className="flex gap-2 flex-wrap">
        {project.projectMembers.map((member) => (
          <Tooltip key={member.id} color="primary" content={member.name!}>
            <Avatar name={member.name!} />
          </Tooltip>
        ))}
      </div>
    </article>
  );
};
export default HomeProjectLeading;
