export default async function deleteUser(work_id: string) {
  if (!work_id) throw new Error("Work Id is needed for deleting");
  const res = await fetch(`${process.env.APP_URL}/api/users/${work_id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed on deleting user");
  }

  const data = await res.json();

  return {
    data,
    success: true,
  };
}
