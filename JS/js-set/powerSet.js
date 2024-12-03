function generatePowerSet(array) {
  const powerSet = [[]];

  for (let arrayIndex = array.length - 1; arrayIndex > -1; arrayIndex--) {
    const currentElement = [array.at(arrayIndex)];
    const endLength = powerSet.length;
    for (let setIndex = 0; setIndex < endLength; setIndex++) {
      powerSet.push(currentElement.concat(powerSet[setIndex]));
    }
  }

  return powerSet;
}

// Program END!

// Testing...

function joinPipes(array) {
  return '|' + array.join('|') + '|';
}

function padSpaces(data, columnLength) {
  const dataInString = '' + data;
  const dataLength = dataInString.length;
  const requiredSpaces = columnLength - dataLength;
  const leftPadLength = Math.floor(requiredSpaces / 2);
  const rightPadLength = columnLength - (leftPadLength + dataLength);

  return ' '.repeat(leftPadLength) + dataInString + ' '.repeat(rightPadLength);
}

function getRow(rowData, columnLengths) {
  const row = [];

  for (let column = 0; column < rowData.length; column++) {
    row.push(padSpaces(rowData[column], columnLengths[column]));
  }

  return joinPipes(row);
}

function getBorder(columnLengths) {
  const border = [];

  for (let column = 0; column < columnLengths.length; column++) {
    border.push(':' + '-'.repeat(columnLengths[column] - 2) + ':');
  }

  return joinPipes(border);
}

function printHeading(programName, headings, columnLengths) {
  console.log('\n# ' + programName + '\n');
  console.log(getRow(headings, columnLengths));
  console.log(getBorder(columnLengths));
}

function printReport(programName, heading, columnLengths, results) {
  printHeading(programName, heading, columnLengths);
  columnLengths[0] = columnLengths[0] - 1;

  for (let index = 0; index < results.length; index++) {
    console.log(getRow(results[index], columnLengths));
  }
  console.log();
}

function getMaxColumnLengths(row, columnLengths) {
  const maxColumnLengths = [];

  for (let column = 0; column < row.length; column++) {
    const currentColLength = ('' + row[column]).length;
    maxColumnLengths.push(Math.max(currentColLength, columnLengths[column]));
  }

  return maxColumnLengths;
}

function getColumnLengths(headings, rows) {
  let columnLengths = [];

  for (let index = 0; index < headings.length; index++) {
    columnLengths.push(headings[index].length + 2);
  }

  for (let row = 0; row < rows.length; row++) {
    columnLengths = getMaxColumnLengths(rows[row], columnLengths);
  }

  return columnLengths;
}

function generateReport(metaData, results) {
  const programName = metaData[0];
  const headings = metaData[1];

  const columnLengths = getColumnLengths(headings, results);

  printReport(programName, headings, columnLengths, results);
}

function areArraysEqual(array1, array2, left, right) {
  if (right < left) {
    return true;
  }

  if (array1[left] !== array2[left] || array1[right] !== array2[right]) {
    return false;
  }

  return areArraysEqual(array1, array2, left + 1, right - 1);
}

function areEqual(array1, array2) {
  if (Object.is(array1, array2)) {
    return true;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  return areArraysEqual(array1, array2, 0, array1.length - 1);
}

function testFunction(input, expected, functionToTest) {
  const actual = functionToTest(...input);
  const mark = areEqual(expected, actual) ? '✅' : '❌';

  const result = [mark, ...input, expected, actual];
  return result;
}

function testAll(testCases, expectations, functionToTest) {
  const results = [];

  for (let index = 0; index < testCases.length; index++) {
    const args = [testCases[index], expectations[index], functionToTest];
    results.push(testFunction(...args));
  }

  return results;
}

function runTestCases(metaData, testCasesData, functionToTest) {
  const testCases = testCasesData[0];
  const expectations = testCasesData[1];

  const results = testAll(testCases, expectations, functionToTest);
  generateReport(metaData, results);
}

function getTestCasesData(index) {
  const testCasesData = [];
  testCasesData.push([[[]], [[]]][index]);
  testCasesData.push([[[1]], [[], [1]]][index]);
  testCasesData.push([[[1, 2]], [[], [1], [2], [1, 2]]][index]);
  testCasesData.push([[[1, 2, 3]], [[], [1], [2], [3], [1, 2], [1, 3], [2, 3],
  [1, 2, 3]]][index]);
  testCasesData.push([[[1, 2, 3, 4]], [[], [1], [2], [3], [4], [1, 2], [1, 3],
  [1, 4], [2, 3], [2, 4], [3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4],
  [1, 2, 3, 4]]][index]);

  return testCasesData;
}

function start() {
  const programName = 'POWER SET';
  const headings = ['STATUS', 'ARRAY', 'EXPECTED', 'ACTUAL'];
  const metaData = [programName, headings];
  const testCasesData = [getTestCasesData(0), getTestCasesData(1)];
  const functionToTest = generatePowerSet;

  runTestCases(metaData, testCasesData, functionToTest);
}

start();