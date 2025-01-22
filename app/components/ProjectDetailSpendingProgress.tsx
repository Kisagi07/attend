import React from "react";
import { Progress } from "@heroui/progress";
import { ProjectResult } from "@/app/prisma";
import { calculatePercentageValue } from "@/app/helper";

type Props = {
  project: ProjectResult | undefined;
};

const ProjectDetailSpendingProgress = ({ project }: Props) => {
  const [percentageValue, setPercentageValue] = React.useState<number[]>();
  React.useEffect(() => {
    if (project) {
      const { food, transportation, lodging, entertainment } = project.spendings.reduce(
        (acc, spending) => {
          acc[spending.type] += spending.amount;

          return acc;
        },
        { food: 0, transportation: 0, lodging: 0, entertainment: 0 }
      );
      setPercentageValue(calculatePercentageValue([transportation, food, lodging, entertainment]));
    }
  }, [project]);
  return (
    <article className="space-y-4 px-4">
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
