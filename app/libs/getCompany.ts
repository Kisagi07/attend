export default async function getCompany() {
  const res = await fetch(`/api/company`);
  if (!res.ok) {
    throw new Error("Failed on retrieving company office");
  }

  const data = await res.json();

  return data;
}
