function stars(times) {
  return '*'.repeat(times);
}

function spaces(times) {
  return ' '.repeat(times);
}

function filledLine(cols) {
  return stars(cols);
}

function hollowLine(cols) {
  return '*' + spaces(cols - 2) + '*';
}

function rectangle(type, rows, cols) {
  const rectangle = [];
  for (let row = 0; row < rows; row++) {
    rectangle.push(type(cols));
  }

  return rectangle;
}

function filledRectangle(dimensions) {
  const [cols, rows] = dimensions;

  return rectangle(filledLine, rows, cols).join('\n');
}

function hollowRectangle(dimensions) {
  const [cols, rows] = dimensions;

  if (rows <= 2 || cols <= 2) {
    return filledRectangle(dimensions);
  }

  const hollowRectangle = rectangle(hollowLine, rows - 2, cols);
  hollowRectangle.push(filledLine(cols));
  hollowRectangle.unshift(filledLine(cols));

  return hollowRectangle.join('\n');
}

function getIndex(allStyles, style) {
  for (let index = 0; index < allStyles.length; index++) {
    if (allStyles[index][0] === style) {
      return index;
    }
  }

  return -1;
}

function getStyleFunction(style) {
  const styles =
  [
    ['filled-rectangle', filledRectangle],
    ['hollow-rectangle', hollowRectangle],
    // ['alternating-rectangle', alternatingRectangle],
    // ['spaced-alternating-rectangle', spacedAlternatingRectangle],
    // ['triangle', triangle],
    // ['right-aligned-triangle', rightAlignedTriangle],
    // ['diamond', diamond],
    // ['hollow-diamond', hollowDiamond]
  ];
  
  const index = getIndex(styles, style);
  return styles[index][1];
}

function areDimensionsNotZero(dimensions) {
  return !dimensions.includes(0);
}

function generatePattern(style, dimensions) {
  if (!areDimensionsNotZero(dimensions)) {
    return '';
  }

  return getStyleFunction(style)(dimensions);
}

function testGeneratePattern(style, dimensions, expected, failed) {
  const actual = generatePattern(style, dimensions);
  if (actual !== expected) {
    console.log(actual);
    failed.push([style, dimensions, actual, expected]);
  }
}

function testGenerateFilledRectangle(dimensions, expected, failed) {
  testGeneratePattern('filled-rectangle', dimensions, expected, failed);
}

function testFilledRectangle(failed) {
  testGenerateFilledRectangle([0, 0], '', failed);
  testGenerateFilledRectangle([0, 1], '', failed);
  testGenerateFilledRectangle([1, 0], '', failed);
  testGenerateFilledRectangle([1, 1], '*', failed);
  testGenerateFilledRectangle([1, 2], '*\n*', failed);
  testGenerateFilledRectangle([2, 1], '**', failed);
  testGenerateFilledRectangle([2, 2], '**\n**', failed);
  testGenerateFilledRectangle([2, 3], '**\n**\n**', failed);
  testGenerateFilledRectangle([3, 3], '***\n***\n***', failed);
}

function testGenerateHollowRectangle(dimensions, expected, failed) {
  testGeneratePattern('hollow-rectangle', dimensions, expected, failed);
}

function testHollowRectangle(failed) {
  testGenerateHollowRectangle([0, 0], '', failed);
  testGenerateHollowRectangle([0, 1], '', failed);
  testGenerateHollowRectangle([1, 0], '', failed);
  testGenerateHollowRectangle([1, 1], '*', failed);
  testGenerateHollowRectangle([1, 2], '*\n*', failed);
  testGenerateHollowRectangle([2, 1], '**', failed);
  testGenerateHollowRectangle([2, 2], '**\n**', failed);
  testGenerateHollowRectangle([2, 3], '**\n**\n**', failed);
  testGenerateHollowRectangle([3, 3], '***\n* *\n***', failed);
}

function displayTestResults(failed) {
  if (failed.length === 0) {
    console.log('Hurray!!! All tests passing!');
    return;
  }

  console.table(failed);
}

function testAll() {
  const failed = [];
  testFilledRectangle(failed);
  testHollowRectangle(failed);

  displayTestResults(failed);
}

testAll();