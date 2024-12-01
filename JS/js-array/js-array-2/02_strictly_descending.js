function isStrictlyDescending(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] >= numbers[index - 1]) {
      return false;
    }
  }

  return true;
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
  const programName = '02 STRICTLY DESCENDING';
  const headings = ['STATUS', 'ARRAY', 'EXPECTED', 'ACTUAL'];
  
  const columnLengths = getColumnLengths(headings, results);
  
  printReport(programName, headings, columnLengths, results);
}

function testFunction(input, expected) {
  const actual = isStrictlyDescending(input);
  const mark = Object.is(expected, actual) ? '✅' : '❌';

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
  testCasesData.push([[1, 3, 4, 5, 16], false][index]);
  testCasesData.push([[5, 4, 2, 1], true][index]);
  testCasesData.push([[5, 4, 6, 1], false][index]);
  testCasesData.push([[5, 4, 4, 1], false][index]);
  
  return testCasesData;
}

function main() {
  const testCases = getTestCasesData(0);
  const expectations = getTestCasesData(1);

  const results = testAll(testCases, expectations);
  generateReport(results);
}

main();