"use client";
import React, { use } from "react";
import ProjectForm from "@/app/components/ProjectForm";
import { fetcher } from "@/app/helper";
import { ProjectWithLeadWithJobAndMembers } from "@/app/prisma";
import { Spinner } from "@heroui/spinner";
import { users } from "@/prisma/client";
import useSWR from "swr";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const Page: React.FC<PageProps> = (props) => {
  const params = use(props.params);
  const {
    data: project,
    isLoading,
    isValidating,
  } = useSWR<ProjectWithLeadWithJobAndMembers>(
    params.id ? `/api/projects/${params.id}` : null,
    fetcher,
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
    }
  );
  const { data: users, isLoading: usersLoading } = useSWR<users[]>(`/api/users`, fetcher);

  return isLoading || isValidating ? (
    <div className="flex justify-center">
      <Spinner label="Loading Project" />
    </div>
  ) : (
    <ProjectForm
      users={{ data: users ?? [], isLoading: usersLoading }}
      defaultValue={{
        fund: project?.fund ?? 0,
        title: project?.title ?? "",
        priority: project?.priority ?? "normal",
        lead: project?.projectLead.id.toString(),
        members: project?.projectMembers.map((member) => member.id.toString()) ?? [],
        id: parseInt(params.id),
      }}
    />
  );
};

export default Page;
