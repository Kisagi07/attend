import { DataTypes, Model } from "sequelize";
import sequelize from "@/db";

const AttendanceLog = sequelize.define(
  "AttendanceLog",
  {
    type: DataTypes.ENUM("clock-in", "clock-out", "sick"),
    date: DataTypes.DATE,
    time: DataTypes.TIME,
  },
  {
    underscored: true,
  }
);

export default AttendanceLog;
