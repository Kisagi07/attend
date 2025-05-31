"use client";
import ProjectForm from "@/app/components/ProjectForm";
import { fetcher } from "@/app/helper";
import { users } from "generated/prisma";
import React from "react";
import useSWR from "swr";
const ProjectCreatePage: React.FC = () => {
  const { data: users, isLoading } = useSWR<users[]>(`/api/users`, fetcher);
  return <ProjectForm users={{ data: users ?? [], isLoading }} />;
};
export default ProjectCreatePage;
