"use client";
import React from "react";
import { DayOffStatus, DayOffRequest } from "@prisma/client";
import clsx from "clsx";
import useSWR from "swr";
import { fetcher } from "../helper";

const UserDayOffTable = () => {
  const { data: dayOffRequests, isLoading } = useSWR<DayOffRequest[]>(
    "/api/user/day-off",
    fetcher,
    { refreshInterval: 1000 },
  );

const translateDayOffStatus = (status: DayOffStatus) => {
    switch (status) {
      case "pending":
        return "Menunggu";
      case "approved":
        return "Disetujui";
      case "rejected":
        return "Ditolak";
      default:
        return status;
    }
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="lg:grid lg:grid-cols-2 lg:gap-4">
      {dayOffRequests?.map((dayOffRequest) => (
        <article
          key={dayOffRequest.id}
          className="space-y-2 rounded-md border border-slate-200 p-2"
        >
          <h4
            className={clsx("p-1 font-semibold uppercase", {
              "bg-red-200 text-red-500": dayOffRequest.status === "rejected",
              "bg-green-200 text-green-500":
                dayOffRequest.status === "approved",
              "bg-slate-200 text-slate-500": dayOffRequest.status === "pending",
            })}
          >
            {translateDayOffStatus(dayOffRequest.status)}
          </h4>
          <p>{dayOffRequest.leaveType}</p>
          <div>
            <p className="font-medium">Komen :</p>
            <p className="text-sm text-slate-700">{dayOffRequest.comment}</p>
          </div>
          <p className="font-medium">Tanggal Cuti :</p>
          <div className="flex items-center gap-4 font-medium">
            <p>{dayOffRequest.leaveStartDate.toString().split("T")[0]}</p>
            <span>-</span>
            <p>{dayOffRequest.leaveEndDate.toString().split("T")[0]}</p>
          </div>
          <p className="text-sm text-slate-400">
            Di ajukan pada {dayOffRequest.requestDate.toString().split("T")[0]}
          </p>
        </article>
      ))}
    </div>
  );
};
export default UserDayOffTable;
