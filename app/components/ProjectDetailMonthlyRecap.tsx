import React from "react";
import ProjectDetailSpendingChart from "./ProjectDetailSpendingChart";
import ProjectDetailSpendingProgress from "./ProjectDetailSpendingProgress";
import { ProjectResult } from "../prisma";

type Props = {
  project: ProjectResult | undefined;
};

const ProjectDetailMonthlyRecap = ({ project }: Props) => {
  return (
    <section>
      <h3 className="text-xl font-bold">Monthly Recap</h3>
      <div className="grid gap-4 md:grid-cols-2">
        <ProjectDetailSpendingChart />
        <ProjectDetailSpendingProgress project={project} />
      </div>
    </section>
  );
};

export default ProjectDetailMonthlyRecap;
