function extractDigits(number) {
  let absNumber = Math.abs(number);

  const digits = [];
  do {
    const remainder = absNumber % 10;
    digits.unshift(remainder);
    absNumber = Math.floor(absNumber / 10);
  } while (absNumber !== 0);

  return digits;
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
  const actual = extractDigits(input);
  const isPassed = areEqual(expected, actual);

  const result = ['   ' + getMark(isPassed), input, expected, actual];
  return result;
}

function printHeading(programName, border, heading) {
  console.log('\n\t\t' + programName + '\n');
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
  testCasesData.push([0, [0]][index]);
  testCasesData.push([101, [1, 0, 1]][index]);
  testCasesData.push([201, [2, 0, 1]][index]);
  testCasesData.push([123, [1, 2, 3]][index]);
  testCasesData.push([-123, [1, 2, 3]][index]);
  // testCasesData.push([12.3, [1, 2, 3]][index]);
  // testCasesData.push([12.03, [1, 2, 0, 3]][index]);

  return testCases;
}

function main() {
  const programName = 'EXTRACT DIGIT';
  const headings = ['STATUS', 'INPUT', 'EXPECTED', 'ACTUAL'];
  const columnLengths = [8, 7, 10, 8];
  const border = getBorder(columnLengths);
  columnLengths[0] = 7;
  const heading = getHeading(headings, columnLengths);

  const testCases = getTestCasesData(0);
  const expectations = getTestCasesData(1);

  const results = testAll(testCases, expectations);
  generateReport(programName, heading, columnLengths, border, results);
}

main();