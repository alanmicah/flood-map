export async function getFloods() {
  const res = await fetch("/api/floods");
  return res.json();
}