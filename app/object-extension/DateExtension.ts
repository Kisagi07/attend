import { ZonedDateTime } from "@internationalized/date";

const getLocalZoneDate = function (this: Date, timezone: string): ZonedDateTime {
  const localDate = new ZonedDateTime(
    this.getFullYear(),
    this.getMonth() + 1,
    this.getDate(),
    "asia/jakarta",
    this.getTimezoneOffset(),
    this.getHours(),
    this.getMinutes(),
    this.getSeconds()
  );

  return localDate;
};

declare global {
  interface Date {
    getLocalZonedDate(timezone: string): ZonedDateTime;
  }
}

Date.prototype.getLocalZonedDate = getLocalZoneDate;

export {};
