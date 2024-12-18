function max(lhs, rhs) {
  return lhs > rhs ? lhs : rhs;
}

function min(lhs, rhs) {
  return lhs < rhs ? lhs : rhs;
}

function slice(text, start, end) {
  const startIndex = max(start, 0);
  const endIndex = min(end, text.length - 1);

  let subString = "";

  for (let index = startIndex; index <= endIndex; index++) {
    subString = subString + text[index];
  }

  return subString;
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

function printReport(column1, column2, column3, column4, column5, column6) {
  console.log('|' + makeRow(column1 + '\n' + column2 + '\n' + column3 + '\n' + column4 + '\n' + column5 + '\n' + column6 + '\n'));
  console.log(border);
}

function testSlice(text, start, end, expected) {
  const actual = slice(text, start, end);
  const isPassed = '' + actual === '' + expected;
  
  printReport(getMark(isPassed), text, start, end, expected, actual);
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
const input1 = ' TEXT ';
const input2 = ' START ';
const input3 = ' END ';
const EXPECTED = ' EXPECTED ';
const ACTUAL = ' ACTUAL ';

const headingLength = input1.length + input2.length + input3.length + 31;
const border = makeBorder(STATUS + '\n' + input1 + '\n' + input2 + '\n' + input3 + '\n' + EXPECTED + '\n' + ACTUAL + '\n');
let headingLengths = [STATUS.length, input1.length, input2.length, input3.length, EXPECTED.length, ACTUAL.length];

function printHeading() {
  const programName = 'STRING REPLACE';
  console.log('\n              ' + programName + '\n');

  console.log(border);
  printReport(STATUS, input1, input2, input3, EXPECTED, ACTUAL);
  headingLengths[0] = STATUS.length - 1;
}

function testAll() {
  printHeading();
  testSlice('hello world', 5, 9, ' worl');
  testSlice('Good morning', 5, 8, 'morn');
  testSlice('Good morning', -5, -8, '');
  console.log('\n');
}

testAll();