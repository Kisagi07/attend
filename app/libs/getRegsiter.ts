export default async function getRegister() {
  const res = await fetch(`${process.env.APP_URL}/api/register`);
  if (!res.ok) {
    throw new Error("Failed on getting register additional data");
  }

  const data = await res.json();
  return data;
}
