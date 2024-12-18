function range(from, to, step) {
  const numbers = [];

  for (let start = from; start <= to; start += step) {
    numbers.push(start);
  }

  return numbers;
}

function repeat(times) {
  return function (type) {
    return type(times);
  };
}
  
function stars(times) {
  return '*'.repeat(times);
}

function spaces(times) {
  return ' '.repeat(times);
}

function hyphens(times) {
  return '-'.repeat(times);
}

function hollowLine(columns) {
  return '*' + spaces(columns - 2) + '*';
}

function generateRectangle(lines, columns) {
  return lines.map(repeat(columns)).join('\n');
}

function cycle(list) {
  let index = 0;
  return function () {
    if (index === list.length) {
      index = 0;
    }
    return list[index++];
  };
}

function getLinesOf(count) {
  return range(1, count, 1);
}

function getSequence(types, rows) {
  const lines = getLinesOf(rows);
  return lines.map(cycle(types));
}

function filledRectangle(columns, rows) {
  const sequence = getSequence([stars], rows);
  return generateRectangle(sequence, columns);
}

function hollowRectangle(columns, rows) {
  const sequence = getSequence([hollowLine], rows);
  sequence[0] = stars;
  sequence[sequence.length - 1] = stars;

  return generateRectangle(sequence, columns);
}

function alternatingRectangle(columns, rows) {
  const sequence = getSequence([stars, hyphens], rows);
  return generateRectangle(sequence, columns);
}

function spacedAlternatingRectangle(columns, rows) {
  const sequence = getSequence([stars, hyphens, spaces], rows);
  return generateRectangle(sequence, columns);
}

function generateTriangle(lines, size) {
  let index = 0;
  return range(1, size, 1).map(function (times) {
    return lines[index++](times);
  }).join('\n');
}

function triangle(size) {
  const sequence = getSequence([stars], size);
  return generateTriangle(sequence, size);
}

function extractFirstElement(array) {
  return array[0];
}

function getFunction(style) {
  const stylesData = [
    ['filled-rectangle', filledRectangle],
    ['hollow-rectangle', hollowRectangle],
    ['alternating-rectangle', alternatingRectangle],
    ['spaced-alternating-rectangle', spacedAlternatingRectangle],
    ['triangle', triangle],
  ];

  const styles = stylesData.map(extractFirstElement);
  return stylesData[styles.indexOf(style)][1];
}

const generatePattern = function (...args) {
  const [style, dimensions] = args;
  const styleFunction = getFunction(style);

  return styleFunction(...dimensions);
};

console.log(generatePattern('filled-rectangle', [4, 3]));
console.log(generatePattern('hollow-rectangle', [3, 4]));
console.log(generatePattern('alternating-rectangle', [3, 4]));
console.log(generatePattern('spaced-alternating-rectangle', [6, 7]));
console.log(generatePattern('triangle', [3]));