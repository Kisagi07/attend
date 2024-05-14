"use client";
import { TimelineModel } from "@/models/Timeline";
import { fetcher } from "../helper";
import useSWR from "swr";
import { TimelineSkeleton } from "../skeletons";
import { CustomFlowbiteTheme, Timeline } from "flowbite-react";
import clsx from "clsx";

const ActivityTimeline = () => {
  const { data: timelines, isLoading: timelineLoading } = useSWR<TimelineModel[]>(
    "/api/timelines?limit=4",
    fetcher
  );

  function calculateTimeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return `${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
    }
  }
  return (
    <section className="space-y-2 md:col-span-3">
      <h1 className="text-xl uppercase font-semibold">Activity Timeline</h1>
      <hr />
      {timelineLoading ? (
        <TimelineSkeleton />
      ) : (
        <Timeline>
          {timelines?.map((timeline) => {
            const date = new Date(timeline.createdAt);
            const customTheme: CustomFlowbiteTheme["timeline"] = {
              item: {
                point: {
                  marker: {
                    base: {
                      vertical: clsx(
                        "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white ",
                        {
                          "bg-red-400 dark:border-red-900 dark:bg-red-700":
                            timeline.type === "removed",
                          "bg-blue-400 dark:border-blue-900 dark:bg-blue-700":
                            timeline.type === "updated",
                          "bg-green-400 dark:border-green-900 dark:bg-green-700":
                            timeline.type === "new",
                        }
                      ),
                    },
                  },
                },
              },
            };
            return (
              <Timeline.Item key={timeline.id} className="mb-3">
                <Timeline.Point theme={customTheme.item!.point} />
                <Timeline.Content>
                  <div className="flex items-start justify-between gap-2">
                    <Timeline.Title className="capitalize text-base lg:text-lg">
                      {timeline.title.includes("Attendance") ? (
                        <>
                          <span>{timeline.title.split(":")[0]} : </span>
                          <span className="text-red-500">{timeline.title.split(":")[1]}</span>
                        </>
                      ) : timeline.title.includes("Attendance") ? (
                        <>
                          <span>{timeline.title}</span>
                        </>
                      ) : (
                        <span>
                          {timeline.title} (
                          {`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`})
                        </span>
                      )}
                    </Timeline.Title>
                    <Timeline.Time>
                      {calculateTimeAgo(timeline.createdAt as unknown as string)}
                    </Timeline.Time>
                  </div>
                  <Timeline.Body>
                    {timeline.title.includes("Attendance") ||
                    timeline.title.includes("Clock Out") ? (
                      <>
                        {timeline.description.split("at")[0]} at{" "}
                        <span className="text-lime-400">{timeline.description.split("at")[1]}</span>
                      </>
                    ) : timeline.title.includes("Working on") ? (
                      <>
                        <ul className="list-disc ml-2 list-inside">
                          {(JSON.parse(timeline.description) as string[]).map((job) => (
                            <li key={job}>{job}</li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <>{timeline.description}</>
                    )}
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            );
          })}
        </Timeline>
      )}
    </section>
  );
};
export default ActivityTimeline;
