"use client";
import React, { use } from "react";
import useSWR from "swr";
import { fetcher } from "@/app/helper";
import { Spinner } from "@heroui/spinner";
import { ProjectResult } from "@/app/prisma";
import { notFound } from "next/navigation";
import ProjectDetailStatus from "@/app/components/ProjectDetailStatus";
import ProjectDetailMonthlyRecap from "@/app/components/ProjectDetailMonthlyRecap";
import ProjectActivity from "@/app/components/ProjectActivity";
import ProjectDetailMembers from "@/app/components/ProjectDetailMembers";
import ProjectDetailLead from "@/app/components/ProjectDetailLead";
import ProjectHistories from "@/app/components/ProjectHistories";
import { Button } from "@heroui/button";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
type Props = {
  params: Promise<{
    id: string;
  }>;
};

const Page = (props: Props) => {
  const params = use(props.params);
  const {
    data: project,
    isLoading,
    error,
  } = useSWR<ProjectResult>(`/api/projects/${params.id}`, fetcher, {
    refreshInterval: 1000,
  });
  if ((error && error.status === 404) || (!isLoading && !project)) {
    notFound();
  }

  return isLoading ? (
    <div className="flex justify-center w-full">
      <Spinner label="Memuat Proyek" />
    </div>
  ) : (
    <>
      <section>
        <Button as={Link} href="/home" variant="flat" color="secondary" startContent={<FaHome />}>
          Kembali ke Beranda
        </Button>
      </section>
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

export default Page;
