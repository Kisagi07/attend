"use client";
import React from "react";
import useSWR from "swr";
import { fetcher } from "@/app/helper";
import { Spinner } from "@nextui-org/spinner";
import { ProjectResult } from "@/app/prisma";
import { notFound } from "next/navigation";
import ProjectDetailStatus from "@/app/components/ProjectDetailStatus";
import ProjectDetailMonthlyRecap from "@/app/components/ProjectDetailMonthlyRecap";
import ProjectActivity from "@/app/components/ProjectActivity";
import ProjectDetailMembers from "@/app/components/ProjectDetailMembers";
import ProjectDetailLead from "@/app/components/ProjectDetailLead";
import ProjectHistories from "@/app/components/ProjectHistories";
type Props = {
  params: {
    id: string;
  };
};

const page = (props: Props) => {
  const {
    data: project,
    isLoading,
    error,
  } = useSWR<ProjectResult>(`/api/projects/${props.params.id}`, fetcher, {
    refreshInterval: 1000,
  });
  if ((error && error.status === 404) || (!isLoading && !project)) {
    notFound();
  }

  return isLoading ? (
    <div className="flex justify-center w-full">
      <Spinner label="Loading Project" />
    </div>
  ) : (
    <>
      <ProjectDetailStatus project={project} />
      <ProjectDetailMonthlyRecap project={project} />
      <section className="grid gap-4 space-y-0 md:grid-cols-2 xl:grid-cols-3">
        <ProjectDetailLead leader={project!.projectLead} />
        <ProjectDetailMembers members={project!.projectMembers} />
        <ProjectActivity activities={project!.activity} />
      </section>
      <ProjectHistories histories={project!.histories} project={project!} />
    </>
  );
};

export default page;
