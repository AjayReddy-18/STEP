const range = (from, to, step) => {
  const length = Math.floor((to - from) / step);
  return Array.from({ length }, (_, i) => from + i * step);
};

const transpose = (array) => {
  const cols = range(0, array[0].length, 1);
  return cols.map((index) => array.map((row) => row[index]));
};