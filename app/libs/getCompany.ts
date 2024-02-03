export default async function getCompany() {
  const res = await fetch(`${process.env.APP_URL}/api/company`);
  if (!res.ok) {
    throw new Error("Failed on retrieving company office");
  }

  const data = await res.json();

  return data;
}
