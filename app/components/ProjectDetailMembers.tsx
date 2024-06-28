import { users } from "@prisma/client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Tooltip } from "@nextui-org/tooltip";

type Props = {
  members: users[];
};

const ProjectDetailMembers = ({ members }: Props) => {
  return (
    <article data-testid="project-members" className="h-full">
      <Card shadow="sm" className="h-full">
        <CardHeader>
          <span className="font-semibold">Project Members</span>
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
