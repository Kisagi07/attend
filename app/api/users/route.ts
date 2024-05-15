import { User, JobPosition, Log, Holiday } from "@/models";
import { NextRequest, NextResponse } from "next/server";
import { FindOptions, Op } from "sequelize";
import Holidays from "date-holidays";
import { calculateMonthlyStatus } from "@/app/serverhelper";
export const revalidate = 0;

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const role = params.get("role");
  const monthlyStatus = params.has("monthly-status");

  const option: FindOptions = {
    where: {
      role: {
        [Op.in]: ["employee", "intern"],
      },
    },
    include: [{ model: JobPosition }],
    attributes: [
      "id",
      "name",
      "work_id",
      "role",
      "job_position_id",
      "createdAt",
      "updatedAt",
      "gender",
    ],
  };

  if (role) {
    option.where = {
      role,
    };
  }

  const users = await User.findAll(option);

  if (monthlyStatus) {
    // get year, month, beggining of the month in string
    await calculateMonthlyStatus(users);
    return NextResponse.json(users);
  }

  return NextResponse.json(users);
}
