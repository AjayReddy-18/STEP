function isSubstringAtPosition(string, subString, index, subStringIndex = 0) {
  if (subStringIndex === subString.length) {
    return true;
  }

  if (string[index] !== subString[subStringIndex]) {
    return false;
  }

  return isSubstringAtPosition(string, subString, index + 1, subStringIndex + 1);
}

function isSubstring(string, subString) {

  for (let index = 0; index < string.length; index++) {
    if (isSubstringAtPosition) {
      return true;
    }
  }

  return false;
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

function printReport(column1, column2, column3, column4, column5) {
  console.log('|' + makeRow(column1 + '\n' + column2 + '\n' + column3 + '\n' + column4 + '\n' + column5 + '\n'));
  console.log(border);
}

function testIsSubstring(text, target, expected) {
  const actual = isSubstring(text, target);
  const isPassed = '' + actual === '' + expected;

  printReport(getMark(isPassed), text, target, expected, actual);
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
const input1 = '    TEXT    ';
const input2 = ' TARGET ';
const EXPECTED = ' EXPECTED ';
const ACTUAL = ' ACTUAL ';

const headingLength = input1.length + 29;
const border = makeBorder(STATUS + '\n' + input1 + '\n' + input2 + '\n' + EXPECTED + '\n' + ACTUAL + '\n');
let headingLengths = [STATUS.length, input1.length, input2.length, EXPECTED.length, ACTUAL.length];

function printHeading() {
  const programName = 'IS SUBSTRING';
  console.log('\n              ' + programName + '\n');

  console.log(border);
  printReport(STATUS, input1, input2, EXPECTED, ACTUAL);
  headingLengths[0] = STATUS.length - 1;
}

function testAll() {
  printHeading();
  testIsSubstring('Ajay', 'A', true);
  testIsSubstring('Ajay', 'j', true);
  testIsSubstring('Ajay', 'a', true);
  testIsSubstring('Ajay', 'y', true);
  testIsSubstring('Ajay', 'Ajay', true);
  testIsSubstring('Ajay', 'ja', true);
  testIsSubstring('Ajay', 'h', false);
  console.log('\n');
}

testAll();