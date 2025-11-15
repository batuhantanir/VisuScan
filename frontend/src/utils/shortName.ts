const shortName = (name: string | null | undefined) => {
  if (!name) return "";
  const maxLength = 12;
  return name.length > maxLength ? name.slice(0, maxLength) + "..." : name;
};

export default shortName;