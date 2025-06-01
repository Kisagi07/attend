import { users } from "@prisma/client";
import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Tooltip } from "@heroui/tooltip";

type Props = {
  members: users[];
};

const ProjectDetailMembers = ({ members }: Props) => {
  return (
    <article data-testid="project-members" className="h-full">
      <Card shadow="sm" className="h-full">
        <CardHeader>
          <span className="font-semibold">Anggota Proyek</span>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap gap-4">
            {members.map((member) => (
              <div key={member.id}>
                <Tooltip content={member.name}>
                  <Avatar name={member.name!} size="lg" />
                </Tooltip>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </article>
  );
};

export default ProjectDetailMembers;
