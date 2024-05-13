"use client";

import useSWR from "swr";
import { fetcher } from "../helper";
import { CardSkeleton, TimelineSkeleton } from "@/app/skeletons";
import { UserModel } from "@/models/User";
import { EmployeeCard } from "@/app/components";
import { CustomFlowbiteTheme, Timeline } from "flowbite-react";
import { TimelineModel } from "@/models/Timeline";
import clsx from "clsx";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { LogModel } from "@/models/Log";
import { useEffect, useState } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ChartDataResponse {
  dates: string[];
  data: { [key: string]: LogModel[] };
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Visit by Day",
    },
  },
};

const Dashboard = () => {
  const { data: users, isLoading: usersLoading } = useSWR<UserModel[]>(
    "/api/users?monthly-status",
    fetcher
  );
  const { data: timelines, isLoading: timelineLoading } = useSWR<TimelineModel[]>(
    "/api/timelines?limit=4",
    fetcher
  );

  const { data: chartData } = useSWR<ChartDataResponse>(
    "/api/attendances?last-seven-days",
    fetcher
  );

  const labels = ['1','2','3','4','5']
  const data = {
    labels,
    datasets: [
      {
        label: "Visit",
        data: [12, 142, 123, 45, 234],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // function to calculate how long ago is a certain string date
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

  // useEffect(() => {
  //   if (chartData) {
  //     setLabels(chartData.dates);
  //     setData({
  //       labels: chartData.dates,
  //       datasets: [
  //         {
  //           label: "Visit",
  //           data: [2, 6, 9, 19, 49],
  //         },
  //       ],
  //     });
  //     console.log();
  //   }
  // }, [chartData]);

  return (
    <>
      <section className="space-y-2">
        <h1 className="text-xl uppercase font-semibold">Team BGroup</h1>
        <hr />
        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {usersLoading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            users
              ?.filter((user) => user.role === "employee")
              .map((user) => <EmployeeCard key={user.id} user={user} />)
          )}
        </div>
      </section>
      <section className="space-y-2">
        <h1 className="text-xl uppercase font-semibold">Magang</h1>
        <hr />
        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {usersLoading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            users
              ?.filter((user) => user.role === "intern")
              .map((intern) => <EmployeeCard key={intern.id} user={intern} />)
          )}
        </div>
      </section>
      <div className="md:grid md:gap-2 md:grid-cols-5">
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
                            <span className="text-lime-400">
                              {timeline.description.split("at")[1]}
                            </span>
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
        <section>
          <Bar options={options} data={data} />
        </section>
      </div>
    </>
  );
};
export default Dashboard;
