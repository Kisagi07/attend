export default async function getAttendance() {
  const res = await fetch(`${process.env.APP_URL}`);
  if (!res.ok) {
    throw new Error("Failed on getting today attendance logs");
  }
  const data = await res.json();
  return data;
}
