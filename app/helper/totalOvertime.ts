import { logs as Log, job_positions as JobPosition } from "@prisma/client";
import { parseTime } from "@internationalized/date";

const totalOvertime = (
  logs: Log[],
  job: JobPosition | null,
  { unit }: { unit: "hour" | "minutes" } = { unit: "minutes" }
) => {
  let totalMinutes = 0;

  const parseTimeFromLog = (time: string) => parseTime(time.split("T")[1].split(".")[0]);

  const calculateMinutes = (startTime: string, endTime: string) => {
    const start = parseTimeFromLog(startTime);
    const end = parseTimeFromLog(endTime);
    return end.compare(start) / 1000 / 60;
  };

  logs.forEach((log) => {
    if (log.isOverTime && log.clock_out_time) {
      totalMinutes += calculateMinutes(
        log.clock_in_time as unknown as string,
        log.clock_out_time as unknown as string
      );
    } else if (log.afterHourOvertime && job) {
      totalMinutes += calculateMinutes(job.shift_end, log.clock_out_time as unknown as string);
    }
  });

  return unit === "hour" ? totalMinutes / 60 : totalMinutes;
};

export default totalOvertime;
