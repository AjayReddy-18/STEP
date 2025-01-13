const deepCopy = (data) => {
  if (typeof data !== "object") return data;

  const keys = Object.keys(data);
  const copy = Array.isArray(data) ? [] : {};

  keys.forEach((key) => {
    copy[key] = deepCopy(data[key]);
  });

  return copy;
};
