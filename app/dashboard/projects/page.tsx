"use client";
import ProjectsTable from "@/app/components/ProjectsTable";
import { fetcher } from "@/app/helper";
import { ProjectWithLeadWithJobAndMembers } from "@/app/prisma";
import { TableSkeleton } from "@/app/skeletons";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

const ProjectsPage = () => {
  const {
    data: projects,
    isLoading,
    mutate,
  } = useSWR<ProjectWithLeadWithJobAndMembers[]>(`/api/projects`, fetcher, {
    revalidateOnMount: true,
    refreshInterval: 1000,
  });
  return (
    <section className="space-y-2">
      <h3 className="text-2xl font-semibold">Projects</h3>
      <div className="flex justify-end">
        <Button as={Link} href="/dashboard/projects/create" color="secondary" variant="flat">
          Add Project
        </Button>
      </div>

      <ProjectsTable projects={projects ?? []} isLoading={isLoading} mutateProjects={mutate} />
    </section>
  );
};

export default ProjectsPage;
