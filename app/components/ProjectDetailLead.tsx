import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { UserResult } from "../prisma";

type Props = {
  leader: UserResult | undefined;
};

const ProjectDetailLead = (props: Props) => {
  return (
    <article data-testid="project-lead-card" className="h-full">
      <Card shadow="sm" className="h-full">
        <CardHeader>
          <span className="font-semibold">Project Lead</span>
        </CardHeader>
        <CardBody>
          <div className="flex flex-col gap-4 items-center">
            <Avatar
              data-testid="project-lead-avatar"
              src={props.leader?.api_profile_picture ?? undefined}
              name={props.leader?.name!}
              size="lg"
            />
            <p className="font-medium text-lg" data-testid="project-lead-name">
              {props.leader?.name}
            </p>
          </div>
        </CardBody>
      </Card>
    </article>
  );
};

export default ProjectDetailLead;
