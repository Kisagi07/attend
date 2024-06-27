import React from "react";
import { Progress } from "@nextui-org/progress";
import { ProjectResult } from "@/app/prisma";
import { calculatePercentageValue } from "@/app/helper";

type Props = {
  project: ProjectResult | undefined;
};

const ProjectDetailSpendingProgress = ({ project }: Props) => {
  const [percentageValue, setPercentageValue] = React.useState<number[]>();
  React.useEffect(() => {
    if (project) {
      setPercentageValue(
        calculatePercentageValue([
          project.transportationSpending,
          project.foodSpending,
          project.lodgingSpending,
          project.entertainmentSpending,
        ])
      );
    }
  }, [project]);
  return (
    <article className="space-y-4">
      <h4 className="text-center font-semibold">Necessity</h4>
      <Progress
        data-testid="progress-transportation"
        label="Transportation"
        size="md"
        value={percentageValue?.[0] ?? 0}
        color="primary"
        showValueLabel
        className="w-full"
      />
      <Progress
        data-testid="progress-food"
        label="Food"
        size="md"
        value={percentageValue?.[1] ?? 0}
        color="danger"
        showValueLabel
        className="w-full"
      />
      <Progress
        data-testid="progress-lodging"
        label="Lodging"
        size="md"
        value={percentageValue?.[2] ?? 0}
        color="success"
        showValueLabel
        className="w-full"
      />
      <Progress
        data-testid="progress-entertainment"
        label="Entertainment"
        size="md"
        value={percentageValue?.[3] ?? 0}
        color="warning"
        showValueLabel
        className="w-full"
      />
    </article>
  );
};

export default ProjectDetailSpendingProgress;
