function getIntegralNumber(number) {
  if (number === Math.floor(number / 1)) {
    return number;
  }

  return getIntegralNumber(number * 10);
}

function extractDigits(number) {
  let integralNumber = getIntegralNumber(Math.abs(number));

  const digits = [];
  do {
    const lastDigit = integralNumber % 10;
    digits.unshift(lastDigit);
    integralNumber = Math.floor(integralNumber / 10);
  } while (integralNumber !== 0);

  return digits;
}

// PROGRAM END //

// Testing...

function repeat(char, times) {
  let repeatedString = '';
  for (let counter = 0; counter < times; counter++) {
    repeatedString += char;
  }

  return repeatedString;
}

function joinPipes(array) {
  return '|' + array.join('|') + '|';
}

function alignSpaces(string, columnLength) {
  const dataLength = ('' + string).length;
  const requiredSpaces = columnLength - dataLength;
  const spaces = repeat(' ', Math.floor(requiredSpaces / 2));
  const columnData = spaces + string + spaces;
  const isLengthMatched = columnLength === columnData.length;
  
  return isLengthMatched ? columnData : columnData + ' ';
}

function getRow(rowData, columnLengths) {
  const row = [];
  
  for (let column = 0; column < rowData.length; column++) {
    row.push(alignSpaces(rowData[column], columnLengths[column]));
  }
  
  return joinPipes(row);
}

function getBorder(columnLengths) {
  const border = [];

  for (let column = 0; column < columnLengths.length; column++) {
    border.push(':' + repeat('-', columnLengths[column] - 2) + ':');
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
  columnLengths[0] = 7;
  
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

function generateReport(results) {
  const programName = '03 EXTRACT DIGITS';
  const headings = ['STATUS', 'NUMBER', 'EXPECTED', 'ACTUAL'];
  
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
  if (array1.length !== array2.length) {
    return false;
  }
  
  return areArraysEqual(array1, array2, 0, array1.length - 1);
}

function testFunction(input, expected) {
  const actual = extractDigits(input);
  const mark = areEqual(expected, actual) ? '✅' : '❌';

  const result = [mark, input, expected, actual];
  return result;
}

function testAll(testCases, expectations) {
  const results = [];

  for (let index = 0; index < testCases.length; index++) {
    results.push(testFunction(testCases[index], expectations[index]));
  }

  return results;
}

function getTestCasesData(index) {
  const testCasesData = [];
  testCasesData.push([0, [0]][index]);
  testCasesData.push([101, [1, 0, 1]][index]);
  testCasesData.push([201, [2, 0, 1]][index]);
  testCasesData.push([123, [1, 2, 3]][index]);
  testCasesData.push([-123, [1, 2, 3]][index]);
  testCasesData.push([12.3, [1, 2, 3]][index]);
  testCasesData.push([12.03, [1, 2, 0, 3]][index]);
  testCasesData.push([0.03, [0, 0, 3]][index]);

  return testCasesData;
}

function main() {
  const testCases = getTestCasesData(0);
  const expectations = getTestCasesData(1);

  const results = testAll(testCases, expectations);
  generateReport(results);
}

main();