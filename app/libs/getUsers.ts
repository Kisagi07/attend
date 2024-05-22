export default async function getUsers() {
  const res = await fetch(`${process.env.APP_URL}/api/users`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Error");
  }

  const data = await res.json();

  return data;
}
