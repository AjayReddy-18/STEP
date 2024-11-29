function nthFibonacciTerm(n) {
  let nthTerm = 0;
  let nPlus1Term = 1;
  let nPlus2Term = 0;

  for (let term = 1; term < n; term++) {
    nPlus2Term = nthTerm + nPlus1Term;
    nthTerm = nPlus1Term;
    nPlus1Term = nPlus2Term;
  }

  return nthTerm;
}
  
// PROGRAM END //

// Testing World! 

function getMark(testStatus) {
  return testStatus ? '   ✅' : '   ❌';
}

function makeColumn(data, columnLength) {
  let cellData = '';

  for (let index = 0; index < columnLength; index++) {
    cellData += data[index] ? data[index] : ' ';
  }

  return cellData;
}

function makeRow(elements) {
  let row = '';
  let index = 0;
  let word = '';
  let wordCount = 0;
  
  while (index < elements.length) {
    if (elements[index] !== '\n') {
      word += elements[index];
    }
    
    if (elements[index] === '\n') {
      row += makeColumn(word, headingLengths[wordCount]) + '|';
      word = '';
      wordCount++;
    }
    index++;
  }
  
  return row;
}

function printReport(column1, column2, column3, column4) {
  console.log('|' + makeRow(column1 + '\n' + column2 + '\n' + column3 + '\n' + column4 + '\n'));
  console.log(border);
}

function testFibonacci(number, expected) {
  const actual = nthFibonacciTerm(number);
  const isPassed = '' + actual === '' + expected;
  
  printReport(getMark(isPassed), number, expected, actual);
}

function makeBorder(headings) {
  let border = '+';
  let index = 0;
  
  while (index < headings.length) {
    border += headings[index] === '\n' ? '+' : '-';
    index++;
  }
  
  return border;
}

const STATUS = ' STATUS ';
const input1 = ' NUMBER ';
const EXPECTED = ' EXPECTED ';
const ACTUAL = ' ACTUAL ';

const headingLength = input1.length + 29;
const border = makeBorder(STATUS + '\n' + input1 + '\n' + EXPECTED + '\n' + ACTUAL + '\n');
let headingLengths = [STATUS.length, input1.length, EXPECTED.length, ACTUAL.length];

function printHeading() {
  const programName = 'FIBONACCI';
  console.log('\n              ' + programName + '\n');

  console.log(border);
  printReport(STATUS, input1, EXPECTED, ACTUAL);
  headingLengths[0] = STATUS.length - 1;
}

function testAll() {
  printHeading();
  testFibonacci(1, 0);
  testFibonacci(2, 1);
  testFibonacci(3, 1);
  testFibonacci(4, 2);
  testFibonacci(5, 3);
  testFibonacci(6, 5);
  testFibonacci(7, 8);
  console.log('\n');
}

testAll();