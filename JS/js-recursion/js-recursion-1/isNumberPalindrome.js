function getDigits(number) {
  if (number < 10) {
    return 1;
  }

  return 1 + getDigits((number - number % 10) / 10);
}

function quotient(dividend, divisor) {
  return (dividend - dividend % divisor) / divisor;
}

function remainder(dividend, divisor) {
  return dividend % divisor;
}

function getLeftDigit(dividend, divisor) {
  return remainder(quotient(dividend, divisor), 10);
}

function getRightDigit(dividend, divisor) {
  return quotient(remainder(dividend, divisor), divisor / 10);
}

function __isPalindrome(palindromeCandidate, left, right) {
  if (left < right) {
    return true;
  }

  const leftDigit = getLeftDigit(palindromeCandidate, left);
  const rightDigit = getRightDigit(palindromeCandidate, right);

  if (leftDigit !== rightDigit) {
    return false;
  }

  return __isPalindrome(palindromeCandidate, left / 10, right * 10);
}

function isPalindrome(palindromeCandidate) {
  const digits = getDigits(palindromeCandidate) - 1;

  return __isPalindrome(palindromeCandidate, 10 ** digits, 10);
}

// PROGRAM END //

// Testing World! 

const programName = 'PALINDROME';
const headings = ['STATUS', 'NUMBER', 'EXPECTED', 'ACTUAL'];
let columnLengths = [8, 8, 10, 8];
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
    const dataLength = ('' + rowData[column]).length;
    const requiredSpaces = columnLengths[column] - dataLength;
    const spaces = getSpaces(requiredSpaces);
    
    row += rowData[column] + spaces + '|';
  }

  console.log(row);
}

function testIsPalindrome(input, expected) {
  const actual = isPalindrome(input);
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
  testIsPalindrome(1, true);
  testIsPalindrome(11, true);
  testIsPalindrome(13, false);
  testIsPalindrome(121, true);
  testIsPalindrome(1221, true);
  testIsPalindrome(2222, true);
  testIsPalindrome(101, true);
  console.log('\n');
}

testAll();