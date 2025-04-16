"use server";
import { parseTime } from "@internationalized/date";
import { logs } from "@/prisma/client";

const calculateLateInLogs = (logs: logs[], tolerance: number, jobShiftStart: string) => {
  
  // get user job position shift_start time
  const shiftStart = parseTime(jobShiftStart);
  // add company tolerance time to shiftStart
  const shiftStartTolerance = shiftStart.add({ minutes: tolerance });
  // total late
  let totalLate = 0;
  // iterate logs
  logs.forEach((log) => {
    // get log clock_in_time as string with format `HH:mm:ss` from date string
    const utcClockInTime = log.clock_in_time;
    const clockInTime = parseTime(
      `${utcClockInTime?.getUTCHours().toString().padStart(2, "0")}:${utcClockInTime?.getUTCMinutes().toString().padStart(2, "0")}:${utcClockInTime?.getUTCSeconds().toString().padStart(2, "0")}`
    );
    // check if clockInTime is late
    const isLate = clockInTime.compare(shiftStartTolerance) > 0;
    // if isLate is true then decrease initialScore
    if (isLate) {
      totalLate++;
    }
  });

  return totalLate;
};

export default calculateLateInLogs;
