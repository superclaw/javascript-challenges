export async function fetchData() {
  try {
    const data = await fetch('/public/projects.json')
    return data.json();
  } catch (e) {
    throw new Error(e);
  }
}
