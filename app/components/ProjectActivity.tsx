import React from "react";
import { ActivityWithUser } from "../prisma";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

type Props = {
  activities: ActivityWithUser[];
};

const ProjectActivity = (props: Props) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedHours = String(hours).padStart(2, "0");

    return `${day} ${month} ${year} ${formattedHours}:${minutes} ${ampm}`;
  };
  return (
    <section className="h-full">
      <Card shadow="sm">
        <CardHeader>
          <h3 className="font-semibold">Activities</h3>
        </CardHeader>
        <CardBody>
          <div className="max-h-60 overflow-y-auto overflow-x-hidden">
            {props.activities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-2">
                <Avatar name={activity.user.name!} size="md" className="shrink-0" />
                <div>
                  <div>
                    <span className="font-medium">{activity.user.name}</span>{" "}
                    <time>{formatDate(activity.dateTime.toString())}</time>
                  </div>
                  <p className="p-2 bg-gray-200 text-sm">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default ProjectActivity;
