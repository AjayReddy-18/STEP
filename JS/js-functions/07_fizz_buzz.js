function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function fizzBuzz(number) {
  const FIZZ = "fizz";
  const BUZZ = "buzz";

  switch (true) {
    case isDivisible(number, 15):
      return FIZZ + BUZZ;
    case isDivisible(number, 3):
      return FIZZ;
    case isDivisible(number, 5):
      return BUZZ;
    default:
      return "" + number;
  }
}

function returnWordIfDivisible(dividend, divisor, word) {
  return dividend % divisor ? "" : word;
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

function testFizzBuzz(number, expected) {
  const actual = fizzBuzz(number);
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
  const programName = 'FIZZ BUZZ';
  console.log('\n              ' + programName + '\n');

  console.log(border);
  printReport(STATUS, input1, EXPECTED, ACTUAL);
  headingLengths[0] = STATUS.length - 1;
}

function testAll() {
  printHeading();
  testFizzBuzz(0, 'fizzbuzz');
  testFizzBuzz(3, 'fizz');
  testFizzBuzz(5, 'buzz');
  console.log('\n');
}

testAll();