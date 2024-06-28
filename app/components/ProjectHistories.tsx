import React from "react";
import { HistoryWithUser, UserResult } from "../prisma";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardHeader, CardBody } from "@nextui-org/card";

type Props = {
  histories: HistoryWithUser[];
};

interface GroupedHistories {
  [key: string]: HistoryWithUser[];
}

const ProjectHistories = ({ histories }: Props) => {
  const groupedHistories = histories.reduce<GroupedHistories>((acc, history) => {
    const { dateTime, ...rest } = history;
    const date = new Date(dateTime);
    const groupProperty = `${date.toLocaleDateString()}`;
    if (!acc[groupProperty]) {
      acc[groupProperty] = [];
    }
    acc[groupProperty].push(history);

    return acc;
  }, {} as GroupedHistories);
  const groupedHistoriesArray = Object.entries(groupedHistories).map(([date, values]) => ({
    date,
    values,
  }));
  console.log(groupedHistoriesArray);
  return (
    <section>
      <h3 className="font-semibold text-lg">Project Histories</h3>
      <ul className="border-l-8 border-gray-300 space-y-4 relative h-full ml-12">
        {groupedHistoriesArray.map(({ date, values }) => (
          <li key={date} className="min-h-[40px]">
            <div className="text-emerald-600 font-bold bg-emerald-300 p-2 w-24 rounded absolute -translate-x-1/2">
              {date}
            </div>
            <ul className="space-y-4 pt-12 pl-2">
              {values.map((history) => (
                <li key={history.id} className="flex gap-4">
                  <Avatar
                    name={history.user.name!}
                    src={(history.user as UserResult)?.api_profile_picture ?? undefined}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectHistories;
