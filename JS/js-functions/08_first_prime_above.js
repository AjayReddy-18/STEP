function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function sqrt(number) {
  return number ** 1 / 2;
}

function isPrime(number) {
  let divisor = 3;
  const endLimit = sqrt(number);

  while (!isDivisible(number, divisor) && divisor <= endLimit) {
    divisor = divisor + 2;
  }

  return divisor > endLimit;
}

function firstPrimeAbove(number) {
  if (number < 2) {
    return 2;
  }

  let primeCandidate = number + 1 + (number % 2);

  while (!isPrime(primeCandidate)) {
    primeCandidate = primeCandidate + 2;
  }

  return primeCandidate;
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

function testFirstPrimeAbove(number, expected) {
  const actual = firstPrimeAbove(number);
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
  const programName = 'FIRST PRIME ABOVE';
  console.log('\n              ' + programName + '\n');

  console.log(border);
  printReport(STATUS, input1, EXPECTED, ACTUAL);
  headingLengths[0] = STATUS.length - 1;
}

function testAll() {
  printHeading();
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(2, 3);
  testFirstPrimeAbove(3, 5);
  testFirstPrimeAbove(4, 5);
  testFirstPrimeAbove(5, 7);
  testFirstPrimeAbove(7, 11);
  testFirstPrimeAbove(11, 13);
  testFirstPrimeAbove(13, 17);
  testFirstPrimeAbove(24, 29);
  console.log('\n');
}

testAll();