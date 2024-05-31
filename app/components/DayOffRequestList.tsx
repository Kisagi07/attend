"use client";
import { DayOffRequestWithUser } from "../prisma";
import React from "react";
import clsx from "clsx";
import { Pagination } from "@nextui-org/pagination";

interface DayOffRequestListProps {
  data: DayOffRequestWithUser[];
}

const DayOffRequestList: React.FC<DayOffRequestListProps> = ({ data }) => {
  const [pendingPage, setPendingPage] = React.useState<number>(1);
  return (
    <article className="py-2">
      <div className="grid gap-4 lg:grid-cols-2">
        {data
          .slice((pendingPage - 1) * 4, pendingPage * 4)
          .map((dayOffRequest) => (
            <article
              key={dayOffRequest.id}
              className="space-y-2 rounded-md border border-slate-200 p-2"
            >
              <h4
                className={clsx("p-1 font-semibold uppercase", {
                  "bg-red-200 text-red-500":
                    dayOffRequest.status === "rejected",
                  "bg-green-200 text-green-500":
                    dayOffRequest.status === "approved",
                  "bg-slate-200 text-slate-500":
                    dayOffRequest.status === "pending",
                })}
              >
                {dayOffRequest.status}
              </h4>
              <p>{dayOffRequest.leaveType}</p>
              <div>
                <p className="font-medium">Comment :</p>
                <p className="text-sm text-slate-700">
                  {dayOffRequest.comment}
                </p>
              </div>
              <p className="font-medium">Leave Date :</p>
              <div className="flex items-center gap-4 font-medium">
                <p>{dayOffRequest.leaveStartDate.toString().split("T")[0]}</p>
                <span>-</span>
                <p>{dayOffRequest.leaveEndDate.toString().split("T")[0]}</p>
              </div>
              <p className="text-sm text-slate-400">
                Requested by {dayOffRequest.user.name}
              </p>
              <p className="text-sm text-slate-400">
                Requested at{" "}
                {dayOffRequest.requestDate.toString().split("T")[0]}
              </p>
            </article>
          ))}
      </div>
      {data.length === 0 ? (
        <div className="text-center text-2xl font-medium">No Record Found</div>
      ) : (
        <div className="mt-4">
          <Pagination
            total={Math.ceil(data.length / 4)}
            page={pendingPage}
            onChange={setPendingPage}
          />
        </div>
      )}
    </article>
  );
};

export default DayOffRequestList;
