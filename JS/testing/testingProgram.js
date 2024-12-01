// for file in *.js; do
//   deno run "$file" >> results.md
// done
function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

// PROGRAM END //

// Testing World! 

function getHyphens(length) { // repeat
  let hyphenString = '';
  for (let counter = 0; counter < length; counter++) {
    hyphenString += '-';
  }

  return hyphenString;
}

function getBorder(columnLengths) { // modify to pipe
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

function getHeading(headings, columnLengths) { // join('|')
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

function printRow(rowData, columnLengths) { // join('|')
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
  const actual = factorial(input);
  const isPassed = Object.is(expected, actual);

  const result = ['   ' + getMark(isPassed), input, expected, actual];
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

function getTestCases(index) {
  const testCases = [];
  testCases.push([0, 1][index]);
  testCases.push([1, 1][index]);
  testCases.push([2, 2][index]);
  testCases.push([3, 6][index]);
  testCases.push([4, 24][index]);
  testCases.push([5, 120][index]);

  return testCases;
}

function main() { //dynamic column lengths.
  const programName = 'PROGRAM';
  const headings = ['STATUS', 'INPUT', 'EXPECTED', 'ACTUAL'];
  const columnLengths = [8, 7, 10, 8];
  const border = getBorder(columnLengths);
  columnLengths[0] = 7;
  const heading = getHeading(headings, columnLengths);

  const testCases = getTestCases(0);
  const expectations = getTestCases(1);

  const results = testAll(testCases, expectations);
  generateReport(programName, heading, columnLengths, border, results);
}

main();