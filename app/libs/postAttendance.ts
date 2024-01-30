interface attendanceModel {
  latitude: number;
  longitude: number;
  type: string;
  date: string;
  time: string;
}
export default async function postAttendance(credentials: attendanceModel) {
  const res = await fetch(`/api/attendance`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed on sending attendance log");
  }

  const data = await res.json();

  return data;
}
