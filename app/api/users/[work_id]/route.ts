import { NextRequest, NextResponse } from "next/server";
import { User, JobPosition, Timeline, Log } from "@/models";
import Holidays from "date-holidays";
import { Op } from "sequelize";

export async function GET(req: NextRequest, { params }: { params: { work_id: string } }) {
  const searchParams = req.nextUrl.searchParams;
  const monthlyStatus = searchParams.has("monthly-status");

  const user = await User.findOne({
    where: {
      work_id: params.work_id,
    },
    include: [
      {
        model: JobPosition,
      },
    ],
    attributes: [
      "name",
      "work_id",
      "home_latitude",
      "home_longitude",
      "id",
      "role",
      "job_position_id",
      "createdAt",
      "updatedAt",
      "gender",
    ],
  });

  if (!user) return NextResponse.json(null);

  if (monthlyStatus) {
    // get year, month, beggining of the month in string
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const monthString = month.toString().padStart(2, "0");
    const dateString = `${year}-${month}-01`;

    // create holidays instance and initiate with Indonesia holidays
    const hd = new Holidays();
    hd.init("ID");
    const holidays = hd.getHolidays(year);

    // get this month total days
    const currentTotalDays = currentDate.getDate();
    // get up to today total weekend
    const totalWeekend = new Array(currentTotalDays)
      .fill(0)
      .map((_, index) => {
        const date = new Date(year, month - 1, index + 1);
        return date.getDay();
      })
      .filter((day) => day === 0 || day === 6).length;
    // get this month total holidays
    const totalHolidays = holidays.filter((item) => {
      const itemDate = new Date(item.date);
      return (
        itemDate.getFullYear() === year &&
        itemDate.getMonth() + 1 === month &&
        itemDate.getDate() <= currentTotalDays
      );
    }).length;

    // get logs for each user

    const logs = await Log.findAll({
      where: {
        user_id: user.id,
        createdAt: {
          [Op.gte]: dateString,
        },
      },
    });

    // get total logs, work from home, and absent
    const totalLogs = logs.length;
    // get total work from home
    const totalWorkFromHome = logs.filter((log) => log.type === "work-from-home").length;
    // get total absent
    const totalAbsent = currentTotalDays - totalHolidays - totalWeekend - totalLogs;
    // set virtual fields
    user.setDataValue("totalAbsent", totalAbsent);
    user.setDataValue("totalWorkFromHome", totalWorkFromHome);

    // get today log
    const todayLog = logs.find((log) => {
      const logDate = new Date(log.createdAt);
      return logDate.getDate() === currentDate.getDate();
    });
    // set today status
    user.setDataValue("todayStatus", todayLog?.type || "absent");

    return NextResponse.json(user);
  }

  return NextResponse.json(user);
}

export async function DELETE(req: NextRequest, { params }: { params: { work_id: string } }) {
  const user = await User.findOne({
    where: {
      work_id: params.work_id,
    },
  });

  if (!user)
    return NextResponse.json(
      {
        message: "User not found",
      },
      { status: 404 }
    );

  await user.destroy();

  await Timeline.create({
    title: "User Deleted",
    description: `User ${user.name} has been deleted`,
    type: "removed",
  });

  return NextResponse.json(user);
}

export async function PUT(req: NextRequest, { params }: { params: { work_id: string } }) {
  const { name, job_position_id, gender, role } = await req.json();
  const user = await User.findOne({
    where: {
      work_id: params.work_id,
    },
  });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const updateUser = await user.update({
    name,
    job_position_id,
    gender,
    role,
  });

  await Timeline.create({
    title: "User Update",
    description: `User ${user.name} data has been updated`,
    type: "updated",
  });

  return NextResponse.json(updateUser);
}
