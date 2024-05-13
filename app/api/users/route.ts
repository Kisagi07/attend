import { User, JobPosition, Log } from "@/models";
import { NextRequest, NextResponse } from "next/server";
import { FindOptions, Op } from "sequelize";
import Holidays from "date-holidays";
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
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
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
    for (const user of users) {
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
      const totalWorkFromHome = logs.filter(
        (log) => log.type === "work-from-home"
      ).length;
      // get total absent
      const totalAbsent =
        currentTotalDays - totalHolidays - totalWeekend - totalLogs;
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
    }
    return NextResponse.json(users);
  }

  return NextResponse.json(users);
}
