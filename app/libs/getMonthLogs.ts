import { Log } from "@/models";
import { Op } from "sequelize";

const getMonthLogs = async (month = new Date().getMonth() + 1, year = new Date().getFullYear()) => {
  if (month > 12 || month < 1) {
    throw new Error("Month parameter must be between 1 and 12, month in number");
  }
  const date = new Date(year, month, 0).getDate();

  const logs = await Log.findAll({
    where: {
      createdAt: {
        [Op.lte]: new Date(year, month - 1, date),
        [Op.gte]: new Date(year, month - 1, 1),
      },
    },
  });

  return logs;
};

export default getMonthLogs;
