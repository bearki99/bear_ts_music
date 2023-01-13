export const getType = (data: any) => {
  const map = new Map();
  for (const element of data) {
    map.set(element.id, element.name);
  }
  return map;
};
