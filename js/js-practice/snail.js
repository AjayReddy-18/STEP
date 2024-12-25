const range = (from, to, step) => {
  const length = Math.floor((to - from) / step);
  return Array.from({ length }, (_, i) => from + i * step);
};

const transpose = (array) => {
  const cols = range(0, array[0].length, 1);
  return cols.map((index) => array.map((row) => row[index]));
};

const chunck = (array, size) => {
  const starts = range(0, array.length, size);
  return starts.map((start) => array.slice(start, start + size));
}

Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) {
    return [];
  }

  const chunks = chunck(this, rowsCount).map((row, index) => {
    return index & 1 === 1 ? row.reverse() : row;
  })

  return transpose(chunks);
};