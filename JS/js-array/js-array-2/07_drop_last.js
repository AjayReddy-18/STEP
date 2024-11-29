function dropLast(array, number) {
  const newArray = [];
  const end = array.length - number;

  for (let index = 0; index < end; index++) {
    newArray.push(array[index]);
  }

  return newArray;
}

// PROGRAM END //

// Testing World! 

function getHyphens(length) {
  let hyphenString = '';
  for (let counter = 0; counter < length; counter++) {
    hyphenString += '-';
  }

  return hyphenString;
}

function getBorder(columnLengths) {
  let border = '+';
  for (let column = 0; column < columnLengths.length; column++) {
    border += getHyphens(columnLengths[column]);
    border += '+';
  }

  return border;
}

function getSpaces(length) {
  let spaces = '';

  for (let counter = 0; counter < length; counter++) {
    spaces += ' ';
  }

  return spaces;
}

function getHeading(headings, columnLengths) {
  let heading = '|';

  for (let column = 0; column < headings.length; column++) {
    const requiredSpaces = (columnLengths[column] - headings[column].length);
    const spaces = getSpaces(requiredSpaces / 2);

    heading += spaces + headings[column] + spaces + '|';
  }

  return heading;
}

function getMark(testStatus) {
  return testStatus ? '✅' : '❌';
}

function printRow(rowData, columnLengths) {
  let row = '|';

  for (let column = 0; column < rowData.length; column++) {
    const dataLength = ('' + rowData[column]).length;
    const requiredSpaces = columnLengths[column] - dataLength;
    const spaces = getSpaces(requiredSpaces);

    row += rowData[column] + spaces + '|';
  }

  console.log(row);
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
  if (array1.length !== array2.length) {
    return false;
  }

  return areArraysEqual(array1, array2, 0, array1.length - 1);
}

function testFunction(input, expected) {
  const actual = dropLast(input[0], input[1]);
  const isPassed = areEqual(expected, actual);

  const result = ['   ' + getMark(isPassed), input[0], input[1]];
  result[result.length] = expected;
  result[result.length] = actual;
  return result;
}

function printHeading(programName, border, heading) {
  const spaces = getSpaces(border.length / 2);
  console.log('\n' + spaces + programName + '\n');
  console.log(border);
  console.log(heading);
  console.log(border);
}

function testAll(testCases, expectations) {
  const results = [];

  for (let index = 0; index < testCases.length; index++) {
    results[index] = testFunction(testCases[index], expectations[index]);
  }

  return results;
}

function generateReport(programName, heading, columnLengths, border, results) {
  printHeading(programName, border, heading);

  for (let index = 0; index < results.length; index++) {
    printRow(results[index], columnLengths);
    console.log(border);
  }
  console.log();
}

function getTestCasesData(index) {
  const testCasesData = [];
  testCasesData.push([[[1, 2, 3], 1], [1, 2]][index]);
  testCasesData.push([[[1, 2, 3, 4, 5], 4], [1]][index]);
  testCasesData.push([[[1, 2, 3], 4], []][index]);

  return testCases;
}

function main() {
  const programName = 'DROP LAST';
  const headings = ['STATUS', 'ARRAY', 'NUMBER', 'EXPECTED', 'ACTUAL'];
  const columnLengths = [8, 13, 8, 14, 14];
  const border = getBorder(columnLengths);
  columnLengths[0] = 7;
  const heading = getHeading(headings, columnLengths);

  const testCases = getTestCasesData(0);
  const expectations = getTestCasesData(1);

  const results = testAll(testCases, expectations);
  generateReport(programName, heading, columnLengths, border, results);
}

main();