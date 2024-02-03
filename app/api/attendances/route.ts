import { Log, User } from "@/models";
import { LogModel } from "@/models/Log";
import { NextRequest, NextResponse } from "next/server";
import { FindOptions } from "sequelize";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const limit = searchParams.get("limit");
  const latest = searchParams.get("latest");
  const queryOption: FindOptions<LogModel> = {
    attributes: ["user_id", "time", "type", "id"],
    include: {
      model: User,
      attributes: ["name", "job_position", "today_shift"],
      as: "user",
    },
  };

  if (limit) {
    queryOption.limit = parseInt(limit);
  }

  if (latest) {
    queryOption.order = [["created_at", "DESC"]];
  }

  const logs = await Log.findAll(queryOption);

  return NextResponse.json(logs);
}
