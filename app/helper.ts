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
