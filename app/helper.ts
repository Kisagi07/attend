export function getWordDay() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const dayName = dayNumberToWord(dayOfWeek);
  return dayName;
}

export function dayNumberToWord(day: number) {
  const days = [
    "Sunday",
    "Mondat",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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
