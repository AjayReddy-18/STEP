function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

// PROGRAM END //

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

function generateReport(results) {
  const programName = 'PROGRAM';
  const headings = ['STATUS', 'INPUT', 'EXPECTED', 'ACTUAL'];

  const columnLengths = getColumnLengths(headings, results);

  printReport(programName, headings, columnLengths, results);
}

function testFunction(input, expected) {
  const actual = factorial(...input);
  const mark = Object.is(expected, actual) ? '✅' : '❌';

  const result = [mark, ...input, expected, actual];
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
  testCasesData.push([[0], 1][index]);
  testCasesData.push([[1], 1][index]);
  testCasesData.push([[2], 2][index]);
  testCasesData.push([[3], 6][index]);
  testCasesData.push([[4], 24][index]);
  testCasesData.push([[5], 120][index]);

  return testCasesData;
}

function main() {
  const testCases = getTestCasesData(0);
  const expectations = getTestCasesData(1);

  const results = testAll(testCases, expectations);
  generateReport(results);
}

main();