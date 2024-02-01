import { auth } from "../api/auth/[...nextauth]/route";

export default async function getAttendance() {
  const res = await fetch("/api/attendance");
  if (!res.ok) {
    throw new Error("Failed on getting today attendance logs");
  }
  const data = await res.json();
  return data;
}
