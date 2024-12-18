const STAR = '*';
const HYPHEN = '-';
const SPACE = ' ';

function isInRange(cordinate, limit) {
  return cordinate >= 0 && cordinate < limit;
}

function putChar(plane, char, xc, yc) {
  if (!isInRange(xc, plane[yc].length) || !isInRange(yc, plane.length)) {
    return;
  }

  plane[yc][xc] = char;
}

function drawHorizontalLine(plane, char, x1, x2, yCord) {
  if (!isInRange(yCord, plane.length)) {
    return;
  }

  for (let xCord = x1; xCord <= x2; xCord++) {
    putChar(plane, char, xCord, yCord);
  }
}

function drawVerticalLine(plane, char, xCord, y1, y2) {
  if (!isInRange(xCord, plane[0].length)) {
    return;
  }

  for (let yCord = y1; yCord < y2; yCord++) {
    putChar(plane, char, xCord, yCord);
  }
}

function planeToString(plane) {
  return plane.join('\n').replaceAll(',', '');
}

function createPlane(width, height) {
  const plane = [];
  for (let row = 0; row < height; row++) {
    const row = [];
    for (let col = 0; col < width; col++) {
      row.push(SPACE);
    }
    plane.push(row);
  }
  return plane;
}

function generatePlane(dimensions) {
  if (dimensions.length === 1) {
    return createPlane(dimensions[0], dimensions[0]);
  }

  return createPlane(dimensions[0], dimensions[1]);
}

function drawAlternateLines(plane, width, height, types) {
  for (let row = 0; row < height; row++) {
    drawHorizontalLine(plane, types[row % types.length], 0, width, row);
  }
}

function filledRectangle(width, height) {
  const plane = generatePlane([width, height]);
  const typesOfLines = [STAR];

  drawAlternateLines(plane, width, height, typesOfLines);

  return plane;
}

function hollowRectangle(width, height) {
  const plane = generatePlane([width, height]);

  drawHorizontalLine(plane, STAR, 0, width, 0);
  drawVerticalLine(plane, STAR, 0, 1, height - 1);
  drawVerticalLine(plane, STAR, width - 1, 1, height - 1);
  drawHorizontalLine(plane, STAR, 0, width, height - 1);

  return plane;
}

function alternatingRectangle(width, height) {
  const plane = generatePlane([width, height]);
  const typesOfLines = [STAR, HYPHEN];

  drawAlternateLines(plane, width, height, typesOfLines);

  return plane;
}

function spacedAlternatingRectangle(width, height) {
  const plane = generatePlane([width, height]);
  const typesOfLines = [STAR, HYPHEN, SPACE];

  drawAlternateLines(plane, width, height, typesOfLines);

  return plane;
}

function triangle(size) {
  const plane = generatePlane([size]);

  for (let col = 0; col < size; col++) {
    drawVerticalLine(plane, STAR, col, col, size);
  }

  return plane;
}

function rightAlignedTriangle(size) {
  const plane = generatePlane([size]);

  for (let col = 0; col < size; col++) {
    drawVerticalLine(plane, STAR, size - col - 1, col, size);
  }

  return plane;
}

function removeTrailingSpaces(array) {
  for (let col = array.length - 1; col > -1; col--) {
    if (array[col] !== ' ') {
      return;
    }
    array.pop();
  }
}

function removeTrailingSpacedElements(plane) {
  for (let row = 0; row < plane.length; row++) {
    removeTrailingSpaces(plane[row]);
  }
}

function diamond(size) {
  const newSize = size - 1 | 1;
  const mid = newSize >> 1;
  const plane = generatePlane([newSize]);

  for (let row = 0; row <= mid; row++) {
    drawHorizontalLine(plane, STAR, mid - row, mid + row, row);
    drawHorizontalLine(plane, STAR, mid - row, mid + row, newSize - row - 1);
  }

  return plane;
}

function hollowDiamond(size) {
  const revisedSize = size - 1 | 1;
  const mid = revisedSize >> 1;
  const plane = generatePlane([revisedSize]);

  for (let row = 0; row <= mid; row++) {
    putChar(plane, STAR, mid - row, row);
    putChar(plane, STAR, mid + row, row);
    putChar(plane, STAR, mid - row, revisedSize - row - 1);
    putChar(plane, STAR, mid + row, revisedSize - row - 1);
  }

  return plane;
}

function getIndex(shapes, style) {
  for (let index = 0; index < shapes.length; index++) {
    if (shapes[index][0] === style) {
      return index;
    }
  }

  return -1;
}

function areDimensionsNotZero(dimensions) {
  return !dimensions.includes(0);
}

function getFunctionOfIndex(style) {
  const shapes =
    [
      ['filled-rectangle', filledRectangle],
      ['hollow-rectangle', hollowRectangle],
      ['alternating-rectangle', alternatingRectangle],
      ['spaced-alternating-rectangle', spacedAlternatingRectangle],
      ['triangle', triangle],
      ['right-aligned-triangle', rightAlignedTriangle],
      ['diamond', diamond],
      ['hollow-diamond', hollowDiamond]
    ];

  const index = getIndex(shapes, style);
  return shapes[index][1];
}

function getMergedPatterns(firstPlane, secondPlane, secondShape) {
  const finalPlane = [];
  for (let row = 0; row < firstPlane.length; row++) {
    finalPlane.push(firstPlane[row].concat([' '], secondPlane[row]));
  }

  if (secondShape !== 'spaced-alternating-rectangle') {
    removeTrailingSpacedElements(finalPlane);
  }

  return planeToString(finalPlane);
}

function generatePattern(style, dimensions, secondStyle) {
  if (!areDimensionsNotZero(dimensions)) {
    return '';
  }

  const firstShape = getFunctionOfIndex(style);
  const firstPlane = firstShape(dimensions[0], dimensions[1]);

  if (secondStyle === undefined) {
    if (style !== 'spaced-alternating-rectangle') {
      removeTrailingSpacedElements(firstPlane);
    }
    return planeToString(firstPlane);
  }

  const secondShape = getFunctionOfIndex(secondStyle);
  const secondPlane = secondShape(dimensions[0], dimensions[1]);

  return getMergedPatterns(firstPlane, secondPlane, secondStyle);
}

function testGeneratePattern(style, dimensions, expected, failed, secondStyle) {
  const actual = generatePattern(style, dimensions, secondStyle);
  if (actual !== expected) {
    console.log(actual);
    failed.push([style, secondStyle, dimensions, actual, expected]);
  }
}

function testFilledRectangle(failed) {
  testGeneratePattern('filled-rectangle', [0, 0], '', failed);
  testGeneratePattern('filled-rectangle', [1, 0], '', failed);
  testGeneratePattern('filled-rectangle', [0, 1], '', failed);
  testGeneratePattern('filled-rectangle', [1, 2], '*\n*', failed);
  testGeneratePattern('filled-rectangle', [1, 3], '*\n*\n*', failed);
  testGeneratePattern('filled-rectangle', [1, 4], '*\n*\n\*\n*', failed);
  testGeneratePattern('filled-rectangle', [2, 2], '**\n**', failed);
}

function testHollowRectangle(failed) {
  testGeneratePattern('hollow-rectangle', [0, 0], '', failed);
  testGeneratePattern('hollow-rectangle', [1, 0], '', failed);
  testGeneratePattern('hollow-rectangle', [0, 1], '', failed);
  testGeneratePattern('hollow-rectangle', [1, 1], '*', failed);
  testGeneratePattern('hollow-rectangle', [2, 1], '**', failed);
  testGeneratePattern('hollow-rectangle', [1, 2], '*\n*', failed);
  testGeneratePattern('hollow-rectangle', [1, 3], '*\n*\n*', failed);
  testGeneratePattern('hollow-rectangle', [2, 2], '**\n**', failed);
  testGeneratePattern('hollow-rectangle', [3, 3], '***\n* *\n***', failed);
  testGeneratePattern('hollow-rectangle', [3, 4], '***\n* *\n* *\n***', failed);
  testGeneratePattern('hollow-rectangle', [4, 5],
    '****\n*  *\n*  *\n*  *\n****', failed);
}

function testAlternatingRectangle(failed) {
  testGeneratePattern('alternating-rectangle', [0, 0], '', failed);
  testGeneratePattern('alternating-rectangle', [1, 0], '', failed);
  testGeneratePattern('alternating-rectangle', [0, 1], '', failed);
  testGeneratePattern('alternating-rectangle', [1, 1], '*', failed);
  testGeneratePattern('alternating-rectangle', [2, 1], '**', failed);
  testGeneratePattern('alternating-rectangle', [1, 2], '*\n-', failed);
  testGeneratePattern('alternating-rectangle', [2, 2], '**\n--', failed);
  testGeneratePattern('alternating-rectangle', [3, 2], '***\n---', failed);
  testGeneratePattern('alternating-rectangle', [3, 3], '***\n---\n***', failed);
  testGeneratePattern('alternating-rectangle', [1, 3], '*\n-\n*', failed);
  testGeneratePattern('alternating-rectangle', [3, 1], '***', failed);
}

function testSpacedAlternatingRectangle(failed) {
  testGeneratePattern('spaced-alternating-rectangle', [0, 0], '', failed);
  testGeneratePattern('spaced-alternating-rectangle', [1, 0], '', failed);
  testGeneratePattern('spaced-alternating-rectangle', [0, 1], '', failed);
  testGeneratePattern('spaced-alternating-rectangle', [1, 1], '*', failed);
  testGeneratePattern('spaced-alternating-rectangle', [1, 2], '*\n-', failed);
  testGeneratePattern('spaced-alternating-rectangle', [1, 3],
    '*\n-\n ', failed);
  testGeneratePattern('spaced-alternating-rectangle', [1, 4],
    '*\n-\n \n*', failed);
  testGeneratePattern('spaced-alternating-rectangle', [1, 5],
    '*\n-\n \n*\n-', failed);
  testGeneratePattern('spaced-alternating-rectangle', [1, 6],
    '*\n-\n \n*\n-\n ', failed);
  testGeneratePattern('spaced-alternating-rectangle', [3, 2],
    '***\n---', failed);
}

function testTriangle(failed) {
  testGeneratePattern('triangle', [0], '', failed);
  testGeneratePattern('triangle', [1], '*', failed);
  testGeneratePattern('triangle', [2], '*\n**', failed);
  testGeneratePattern('triangle', [3], '*\n**\n***', failed);
  testGeneratePattern('triangle', [4], '*\n**\n***\n****', failed);
  testGeneratePattern('triangle', [5], '*\n**\n***\n****\n*****', failed);
}

function testRightAlignedTriangle(failed) {
  testGeneratePattern('right-aligned-triangle', [0], '', failed);
  testGeneratePattern('right-aligned-triangle', [1], '*', failed);
  testGeneratePattern('right-aligned-triangle', [2], ' *\n**', failed);
  testGeneratePattern('right-aligned-triangle', [3], '  *\n **\n***', failed);
  testGeneratePattern('right-aligned-triangle', [4],
    '   *\n  **\n ***\n****', failed);
  testGeneratePattern('right-aligned-triangle', [5],
    '    *\n   **\n  ***\n ****\n*****', failed);
}

function testDiamond(failed) {
  testGeneratePattern('diamond', [0], '', failed);
  testGeneratePattern('diamond', [1], '*', failed);
  testGeneratePattern('diamond', [2], '*', failed);
  testGeneratePattern('diamond', [3], ' *\n***\n *', failed);
  testGeneratePattern('diamond', [4], ' *\n***\n *', failed);
  testGeneratePattern('diamond', [5], '  *\n ***\n*****\n ***\n  *', failed);
}

function testHollowDiamond(failed) {
  testGeneratePattern('hollow-diamond', [0], '', failed);
  testGeneratePattern('hollow-diamond', [1], '*', failed);
  testGeneratePattern('hollow-diamond', [2], '*', failed);
  testGeneratePattern('hollow-diamond', [3], ' *\n* *\n *', failed);
  testGeneratePattern('hollow-diamond', [4], ' *\n* *\n *', failed);
  testGeneratePattern('hollow-diamond', [5],
    '  *\n * *\n*   *\n * *\n  *', failed);
  testGeneratePattern('hollow-diamond', [6],
    '  *\n * *\n*   *\n * *\n  *', failed);
}

function testDoublePatterns(failed) {
  testGeneratePattern('filled-rectangle', [0, 0], '', failed,
    'hollow-rectangle');
  testGeneratePattern('filled-rectangle', [0, 1], '', failed,
    'hollow-rectangle');
  testGeneratePattern('filled-rectangle', [1, 0], '', failed,
    'hollow-rectangle');
  testGeneratePattern('filled-rectangle', [1, 1], '* *', failed,
    'hollow-rectangle');
  testGeneratePattern('filled-rectangle', [3, 3], '*** ***\n*** * *\n*** ***',
    failed, 'hollow-rectangle');
  testGeneratePattern('filled-rectangle', [4, 4],
    '**** ****\n**** *  *\n**** *  *\n**** ****', failed, 'hollow-rectangle');
  testGeneratePattern('triangle', [5],
    '*       *\n**     ***\n***   *****\n****   ***\n*****   *', failed,
    'diamond');
  testGeneratePattern('hollow-rectangle', [3, 3], '*** ***\n* * ---\n***    ',
    failed, 'spaced-alternating-rectangle');
}

function testAll() {
  const failed = [];
  testFilledRectangle(failed);
  testHollowRectangle(failed);
  testAlternatingRectangle(failed);
  testSpacedAlternatingRectangle(failed);

  testTriangle(failed);
  testRightAlignedTriangle(failed);

  testDiamond(failed);
  testHollowDiamond(failed);

  testDoublePatterns(failed);
  console.table(failed);
}

testAll();
