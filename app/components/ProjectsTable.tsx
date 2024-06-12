import React from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { formatRupiah } from "../helper";
import Pill from "@/app/components/Pill";
import Table from "@/app/components/Table";
import { ProjectWithLeadWithJobAndMembers } from "@/app/prisma";
import { User } from "@nextui-org/user";

const projectsColumnHelper =
  createColumnHelper<ProjectWithLeadWithJobAndMembers>();

const columns = [
  projectsColumnHelper.accessor("title", {
    header: "Title",
    cell: (info) => info.getValue(),
  }),
  projectsColumnHelper.accessor("fund", {
    header: "Funding",
    cell: (info) => formatRupiah(info.getValue()),
  }),
  projectsColumnHelper.accessor("status", {
    header: "Status",
    cell: (info) => (
      <div className="flex justify-center">
        <Pill
          color={
            info.getValue() === "completed"
              ? "green"
              : info.getValue() === "in_progress"
                ? "blue"
                : "yellow"
          }
        >
          {info.getValue()}
        </Pill>
      </div>
    ),
  }),
  projectsColumnHelper.accessor("priority", {
    header: "Priority",
    cell: (info) => (
      <div className="flex justify-center">
        <Pill
          color={
            info.getValue() === "low"
              ? "green"
              : info.getValue() === "normal"
                ? "blue"
                : info.getValue() === "high"
                  ? "yellow"
                  : "red"
          }
        >
          {info.getValue()}
        </Pill>
      </div>
    ),
  }),
  projectsColumnHelper.accessor("projectLead", {
    header: "Leader",
    cell: (info) => (
      <User
        name={info.getValue().name}
        description={info.getValue().job_position?.name ?? "No Position"}
      />
    ),
  }),
];

interface ProjectsTableProps {
  projects: ProjectWithLeadWithJobAndMembers[];
}

const ProjectsTable: React.FC<ProjectsTableProps> = ({ projects }) => {
  return <Table data={projects} columns={columns} />;
};

export default ProjectsTable;
