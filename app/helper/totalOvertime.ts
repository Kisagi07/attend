import { logs as Log, job_positions as JobPosition } from "@prisma/client";
import { parseTime } from "@internationalized/date";

const totalOvertime = (
  logs: Log[],
  job: JobPosition | null,
  { unit }: { unit: "hour" | "minutes" } = { unit: "minutes" }
) => {
  // initialize total minutes
  let totalMinutes = 0;
  // loop through logs
  logs.forEach((log) => {
    // check if log are overtime day also clock out time are not null
    if (log.isOverTime && log.clock_out_time) {
      // parse clock in and out time
      const clockInTime = parseTime(
        (log.clock_in_time as unknown as string).split("T")[1].split(".")[0]
      );
      const clockOutTime = parseTime(
        (log.clock_out_time as unknown as string).split("T")[1].split(".")[0]
      );
      // calculate compare result
      const compareResult = clockOutTime.compare(clockInTime);
      // turn into minute
      const resultInMinute = compareResult / 1000 / 60;
      // add to total minutes
      totalMinutes += resultInMinute;
      return;
    }
    // check if log are after hour overtime
    if (log.afterHourOvertime && job) {
      // parse clock out and end shift
      const shiftEnd = parseTime(job.shift_end);
      const clockOutTime = parseTime(
        (log.clock_out_time as unknown as string).split("T")[1].split(".")[0]
      );
      // calculate compare result
      const compareResult = clockOutTime.compare(shiftEnd);
      // turn into minute
      const resultInMinute = compareResult / 1000 / 60;
      // add to total minutes
      totalMinutes += resultInMinute;
      return;
    }
  });

  // determine return in hour or minute
  if (unit === "hour") {
    return totalMinutes / 60;
  } else {
    return totalMinutes;
  }
};

export default totalOvertime;
