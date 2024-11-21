function factorial(number) {
  let factorialResult = 1;

  for (let currentNumber = number; currentNumber > 1; currentNumber--) {
    factorialResult = factorialResult * currentNumber;
  }

  return factorialResult;
}

// PROGRAM END //

// Testing World! 

const programName = 'FACTORIAL';
const headings = ['STATUS', 'INPUT', 'EXPECTED', 'ACTUAL'];
let columnLengths = [8, 7, 10, 8];
const border = getBorder(columnLengths);
columnLengths[0] = 7;
const heading = getHeading(headings, columnLengths);

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

function printRow(rowData) {
  let row = '|';
  
  for (let column = 0; column < rowData.length; column++) {
    const requiredSpaces = columnLengths[column] - ('' + rowData[column]).length;
    const spaces = getSpaces(requiredSpaces);
    
    row += rowData[column] + spaces + '|';
  }

  console.log(row);
}

function testFactorial(input, expected) {
  const actual = factorial(input);
  const isPassed = Object.is(expected, actual);
  
  const result = ['   ' + getMark(isPassed), input, expected, actual];
  printRow(result);
  console.log(border);
}

function printHeading() {
  console.log('\n              ' + programName + '\n');
  console.log(border);
  console.log(heading);
  console.log(border);
}

function testAll() {
  printHeading();
  testFactorial(0, 1);
  console.log('\n');
}

testAll();