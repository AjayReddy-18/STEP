function isLeapYear(year) {
  const isDivBy400 = isDivisible(year, 400);
  const isDivBy100 = isDivisible(year, 100);
  const isDivBy4 = isDivisible(year, 4);

  return isDivBy400 || (!isDivBy100 && isDivBy4);
}

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
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

function testIsLeapYear(year, expected) {
  const actual = isLeapYear(year);
  const isPassed = '' + actual === '' + expected;
  
  printReport(getMark(isPassed), year, expected, actual);
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
const input1 = ' YEAR ';
const EXPECTED = ' EXPECTED ';
const ACTUAL = ' ACTUAL ';

const headingLength = input1.length + 29;
const border = makeBorder(STATUS + '\n' + input1 + '\n' + EXPECTED + '\n' + ACTUAL + '\n');
let headingLengths = [STATUS.length, input1.length, EXPECTED.length, ACTUAL.length];

function printHeading() {
  const programName = 'LEAP YEAR';
  console.log('\n              ' + programName + '\n');

  console.log(border);
  printReport(STATUS, input1, EXPECTED, ACTUAL);
  headingLengths[0] = STATUS.length - 1;
}

function testAll() {
  printHeading();
  testIsLeapYear(1, false);
  testIsLeapYear(2000, true);
  testIsLeapYear(2100, false);
  console.log('\n');
}

testAll();