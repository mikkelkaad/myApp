export const getJson = async (url) => {
  const data = await fetch(url, { credentials: "include" });
  const json = await data.json();
  return json;
};
