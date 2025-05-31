import { logs as Log, job_positions as JobPosition } from "generated/prisma";
import { parseTime } from "@internationalized/date";

const totalOvertime = (logs: Log[], job: JobPosition | null) => {
  let totalMinutes = 0;

  const parseTimeFromLog = (time: string) =>
    time.includes("T") ? parseTime(time.split("T")[1].split(".")[0]) : parseTime(time);

  const calculateMinutes = (startTime: string, endTime: string | null) => {
    const start = parseTimeFromLog(startTime);
    const end = endTime ? parseTimeFromLog(endTime) : start;
    return end.compare(start) / 1000 / 60;
  };

  logs.forEach((log) => {
    try {
      if (log.isOverTime && log.clock_out_time) {
        totalMinutes += calculateMinutes(
          log.clock_in_time as unknown as string,
          log.clock_out_time as unknown as string
        );
      } else if (log.afterHourOvertime && job) {
        totalMinutes += calculateMinutes(
          job.shift_end,
          log.clock_out_time as unknown as string | null
        );
      }
    } catch (error) {
      console.log(error);
      console.log({ log, job });
    }
  });

  const minuteReminder = Math.trunc(totalMinutes % 60);
  return { hour: Math.trunc(totalMinutes / 60), minute: minuteReminder };
};

export default totalOvertime;
