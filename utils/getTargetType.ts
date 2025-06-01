import { logs } from "@prisma/client";

const getTargetType = (selectedButtonValue: string, todayAttendance: logs | undefined) => {
    return selectedButtonValue === "work_from_home" || todayAttendance?.type === "work_from_home" || selectedButtonValue === "work_overtime_home" ? "home" : "office";
  };
export default getTargetType;