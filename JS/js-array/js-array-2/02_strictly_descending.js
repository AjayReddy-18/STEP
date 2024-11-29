function isStrictlyDescending(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] >= numbers[index - 1]) {
      return false;
    }
  }

  return true;
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

function testFunction(input, expected) {
  const actual = isStrictlyDescending(input);
  const isPassed = Object.is(expected, actual);

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
  testCasesData.push([[1, 3, 4, 5, 16], false][index]);
  testCasesData.push([[5, 4, 2, 1], true][index]);
  testCasesData.push([[5, 4, 6, 1], false][index]);
  testCasesData.push([[5, 4, 4, 1], false][index]);

  return testCases;
}

function main() {
  const programName = 'IS STRICTLY DESCENDING';
  const headings = ['STATUS', 'NUMBERS', 'EXPECTED', 'ACTUAL'];
  const columnLengths = [8, 17, 10, 8];
  const border = getBorder(columnLengths);
  columnLengths[0] = 7;
  const heading = getHeading(headings, columnLengths);

  const testCases = getTestCasesData(0);
  const expectations = getTestCasesData(1);

  const results = testAll(testCases, expectations);
  generateReport(programName, heading, columnLengths, border, results);
}

main();