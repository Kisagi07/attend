import { Holiday, Log } from "@/";
import { UserModel } from "@//User";
import Holidays from "date-holidays";
import { Op } from "sequelize";

const calculateMonthlyStatus = async (data: UserModel | UserModel[]) => {
  // get year, month, beggining of the month in string
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const dateString = `${year}-${month}-01`;
  const startofMonthDate = new Date(year, month - 1, 1);

  // get all holidays in this month
  const companyHolidays = await Holiday.findAll({
    where: {
      date: {
        [Op.gte]: startofMonthDate,
        [Op.lte]: currentDate,
      },
    },
  });
  // create holidays instance and initiate with Indonesia holidays
  const hd = new Holidays();
  hd.init("ID");
  const yearlyHolidays = hd.getHolidays(year);

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
  const currentMonthHolidaysCount = yearlyHolidays.filter((item) => {
    const itemDate = new Date(item.date);
    return (
      itemDate.getFullYear() === year &&
      itemDate.getMonth() + 1 === month &&
      itemDate.getDate() <= currentTotalDays
    );
  }).length;

  // check if data is an array or not
  const users = Array.isArray(data) ? data : [data];
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
    const totalWorkFromHome = logs.filter((log) => log.type === "work-from-home").length;
    // get total work from office
    const totalWorkFromOffice = logs.filter((log) => log.type === "work-from-office").length;
    // get total absent
    const totalAbsent = Math.max(
      currentTotalDays -
        currentMonthHolidaysCount -
        totalWeekend -
        companyHolidays.length -
        totalLogs,
      0
    );
    // set virtual fields
    user.setDataValue("totalAbsent", totalAbsent);
    user.setDataValue("totalWorkFromHome", totalWorkFromHome);
    user.setDataValue("totalWorkFromOffice", totalWorkFromOffice);

    // get today log
    const todayLog = logs.find((log) => {
      const logDate = new Date(log.createdAt);
      return logDate.getDate() === currentDate.getDate();
    });
    // set today status
    user.setDataValue("todayStatus", todayLog?.type || "absent");
  }

  return users;
};

export { calculateMonthlyStatus };
