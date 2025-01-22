"use client";
import { DayOffRequestWithUser } from "../prisma";
import React from "react";
import clsx from "clsx";
import { Pagination } from "@heroui/pagination";
import DayOffRequestCard from "./DayOffRequestCard";

interface DayOffRequestListProps {
  data: DayOffRequestWithUser[];
  onArticleClick?: (id: number) => void;
}

const DayOffRequestList: React.FC<DayOffRequestListProps> = ({
  data,
  onArticleClick: onClick,
}) => {
  const [pendingPage, setPendingPage] = React.useState<number>(1);
  return (
    <article className="py-2">
      <div className="grid gap-4 lg:grid-cols-2">
        {data
          .slice((pendingPage - 1) * 4, pendingPage * 4)
          .map((dayOffRequest) => (
            <DayOffRequestCard
              key={dayOffRequest.id}
              dayOffRequest={dayOffRequest}
              onClick={onClick}
            />
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
