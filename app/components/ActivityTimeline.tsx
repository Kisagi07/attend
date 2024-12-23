"use client";
import { fetcher } from "../helper";
import useSWR from "swr";
import { TimelineSkeleton } from "../skeletons";
import Timeline from "./Timeline";
import { timelines } from "@prisma/client";
import { convertNewLine } from "@/app/react-helper";

const ActivityTimeline = () => {
  const { data: timelines, isLoading: timelineLoading } = useSWR<timelines[]>(
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
      <h1 className="text-xl font-semibold uppercase">Activity Timeline</h1>
      <hr />
      {timelineLoading ? (
        <TimelineSkeleton />
      ) : (
        <Timeline>
          {timelines?.map((timeline) => {
            const date = new Date(timeline.created_at);
            return (
              <Timeline.Item key={timeline.id}>
                <Timeline.Point
                  color={
                    timeline.type === "removed"
                      ? "red"
                      : timeline.type === "updated"
                        ? "blue"
                        : "green"
                  }
                />
                <Timeline.Content>
                  <div className="flex items-start justify-between gap-2">
                    <Timeline.Title>
                      <div className="text-base">
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
                      </div>
                    </Timeline.Title>
                    <Timeline.Time>
                      {calculateTimeAgo(timeline.created_at as unknown as string)}
                    </Timeline.Time>
                  </div>
                  <Timeline.Body>
                    {timeline.title.includes("Attendance") ||
                    timeline.title.includes("Clock Out") ? (
                      <>
                        {timeline.description.split("at")[0]} at{" "}
                        <span className="text-emerald-500">
                          {timeline.description.split("at")[1].split(",")[0]}
                        </span>
                        {timeline.description.includes("special reason") && (
                          <span>{timeline.description.split(",").slice(1).join(", ")}</span>
                        )}
                      </>
                    ) : timeline.title.includes("Working on") ? (
                      <>
                        <ul className="ml-2 list-inside list-disc">
                          {(JSON.parse(timeline.description) as string[]).map((job) => (
                            <li key={job}>{job}</li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <>{convertNewLine(timeline.description)}</>
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
