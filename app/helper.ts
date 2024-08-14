import { Fetcher } from "swr";
import { ZonedDateTime } from "@internationalized/date";

export function getWordDay() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const dayName = dayNumberToWord(dayOfWeek);
  return dayName;
}

export function dayNumberToWord(day: number) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[day];
}

export function extractNumber(value: string) {
  const numberClean: number = parseInt(value.match(/\d+/g)?.join("") || "0");
  return numberClean;
}

export function formatRupiah(value: number) {
  const format = value.toFixed(0).replace(/\d(?=(\d{3})+$)/g, "$&.");
  return `Rp. ${format}`;
}

export function getDateOnly() {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function getTimeOnly() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

/**
 * function to calculate the distance between 2 real coordinate in straight line
 * @param lat1 - the first location latitude
 * @param lon1 - the first location longitude
 * @param lat2 - the second location latitude
 * @param lon2 - the second location longitude
 * @returns distance - distance in kilometers
 */
export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const earthRadiusKm = 6371;

  const dLat = degreesToRadians(lat2 - lat1);
  const dLon = degreesToRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degreesToRadians(lat1)) *
      Math.cos(degreesToRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadiusKm * c;

  return distance;
}

export function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timeoutId: NodeJS.Timeout;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  } as T;
}

const fetcher: Fetcher<any, string> = (...args) =>
  fetch(...args).then(async (res) => {
    if (!res.ok) {
      const error: CustomError = new Error("Something went wrong when fetching data");
      error.status = res.status;
      error.info = await res.json();
      throw error;
    }
    return res.json();
  });

/**
 * Helper function to turn number month into full name
 * @param month - number from 0-11
 * @returns string - month name
 */
const monthNumberToWord = (month: number): string => {
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Desember",
  ];

  return monthName[month];
};
const monthWordToNumber = (month: string): number => {
  const lowercase = month.toLowerCase();
  switch (lowercase) {
    case "january":
      return 0;
    case "february":
      return 1;
    case "march":
      return 2;
    case "april":
      return 3;
    case "may":
      return 4;
    case "june":
      return 5;
    case "july":
      return 6;
    case "august":
      return 7;
    case "september":
      return 8;
    case "october":
      return 9;
    case "november":
      return 10;
    case "december":
      return 11;
    default:
      return 0;
  }
};
const calculatePercentageValue = (numbers: number[]): number[] => {
  if (numbers.every((number) => number === 0)) {
    return [0, 0, 0, 0];
  }

  const total = numbers.reduce((a, b) => a + b);
  const percentages = numbers.map((number) => {
    if (number == 0) {
      return 0;
    } else {
      return (number / total) * 100;
    }
  });
  return percentages;
};
const getLocalZoneDate = function (timezone: string): ZonedDateTime {
  const baseDate = new Date();
  const localDate = new ZonedDateTime(
    baseDate.getFullYear(),
    baseDate.getMonth() + 1,
    baseDate.getDate(),
    "asia/jakarta",
    baseDate.getTimezoneOffset(),
    baseDate.getHours(),
    baseDate.getMinutes(),
    baseDate.getSeconds()
  );

  return localDate;
};
const replaceToSpaceAndCapitalize = function (text: string, target: string): string {
  if (typeof text !== "string") {
    throw Error("Invalid type: expected a string");
  }
  if (typeof target !== "string") {
    throw Error(`Invalid Argument Type: expected "target" to be string ${typeof target} received`);
  }
  return text
    .split(target)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
const capitalize = function (text: string): string {
  if (typeof text !== "string") {
    throw Error("Invaild type: expected a string");
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const groupByDate = (field: string, data: any[]): { [key: string]: any[] } => {
  const grouped = data.reduce((acc, curr) => {
    const date = new Date(curr[field]);
    const month = date.getMonth();
    const monthName = monthNumberToWord(month);
    if (!acc[monthName]) {
      acc[monthName] = [];
    }

    acc[monthName].push(curr);

    return acc;
  }, {});

  return grouped;
};

export {
  fetcher,
  monthNumberToWord,
  calculatePercentageValue,
  getLocalZoneDate,
  replaceToSpaceAndCapitalize,
  capitalize,
  groupByDate,
  monthWordToNumber,
};
