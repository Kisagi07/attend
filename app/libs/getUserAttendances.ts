export default async function getUserAttendance(work_id: string): Promise<any> {
  const res = await fetch(`${process.env.APP_URL}/api/users/${work_id}/attendances`);
  if (!res.ok) {
    const error = new Error("Something went wrong when fetching user attendances");
    throw error;
  }

  const data = await res.json();
  return data;
}
