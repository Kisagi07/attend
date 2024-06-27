"use client";
import React from "react";
import useSWR from "swr";
import { fetcher } from "@/app/helper";
import { Spinner } from "@nextui-org/spinner";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Tooltip } from "@nextui-org/tooltip";
import { ProjectResult } from "@/app/prisma";
import { notFound } from "next/navigation";
import ProjectDetailStatus from "@/app/components/ProjectDetailStatus";
import ProjectDetailMonthlyRecap from "@/app/components/ProjectDetailMonthlyRecap";
type Props = {
  params: {
    id: string;
  };
};

const page = (props: Props) => {
  const { data: project, isLoading } = useSWR<ProjectResult>(
    `/api/projects/${props.params.id}`,
    fetcher
  );
  if (!project && !isLoading) {
    notFound();
    return null;
  }

  return isLoading ? (
    <div className="flex justify-center w-full">
      <Spinner label="Loading Project" />
    </div>
  ) : (
    <>
      <ProjectDetailStatus project={project} />
      <ProjectDetailMonthlyRecap project={project} />
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-0">
        <article>
          <Card shadow="sm">
            <CardHeader>
              <span className="font-semibold">Project Lead</span>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col gap-4 items-center">
                <Avatar
                  disableAnimation
                  src={project?.projectLead.api_profile_picture ?? undefined}
                  name={project?.projectLead.name!}
                  size="lg"
                />
                <p className="font-medium text-lg">{project?.projectLead.name}</p>
              </div>
            </CardBody>
          </Card>
        </article>
        <article>
          <Card shadow="sm">
            <CardHeader>
              <span className="font-semibold">Project Members</span>
            </CardHeader>
            <CardBody>
              <div className="flex flex-wrap gap-4">
                {project?.projectMembers.map((member) => (
                  <div key={member.id}>
                    <Tooltip content={member.name}>
                      <Avatar
                        disableAnimation
                        src={member.api_profile_picture ?? undefined}
                        size="lg"
                      />
                    </Tooltip>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </article>
      </section>
    </>
  );
};

export default page;
