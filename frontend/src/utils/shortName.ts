const shortName = (name: string | null | undefined, maxLength: number = 12) => {
  if (!name) return "";
  return name.length > maxLength ? name.slice(0, maxLength) + "..." : name;
};

export default shortName;