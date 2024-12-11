function getTeensInWords(index) {
  const teens = [
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'
  ];

  return teens[index];
}

function getTensInWords(index) {
  const tens = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
    'eighty', 'ninety'];

  return tens[index];
}

function getUnitDigitsInWords(index) {
  const unitDigits = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
  ];

  return unitDigits[index];
}

function getUnits(index) {
  const units = ['', 'thousand', 'million', 'billion'];
  
  return units[index];
}

function concatIfNotEmpty(string, array) {
  const trimmedString = string.trim();
  return trimmedString.length === 0 ? array : [trimmedString].concat(array);
}

function getWordsAndPlaceValue(arrayOfWords, index, numberInWords) {
  if ((arrayOfWords[index] + arrayOfWords[index + 1]).length < 2) {
    return numberInWords;
  }

  let currentWords = [getUnits(index / 2)].concat(numberInWords);

  currentWords = concatIfNotEmpty(arrayOfWords[index], currentWords);
  currentWords = concatIfNotEmpty(arrayOfWords[index + 1], currentWords);

  return currentWords;
}

function addPlaceValues(arrayOfWords) {
  let numberInWords = [];
  const end = arrayOfWords.length;

  for (let index = 0; index < end; index += 2) {
    numberInWords = getWordsAndPlaceValue(arrayOfWords, index, numberInWords);
  }

  return numberInWords;
}

function extractWordsOfLastTwoDigits(digits) {
  const tensDigit = Math.floor(digits / 10);
  const unitDigit = digits % 10;

  if (tensDigit === 1) {
    return getTeensInWords(unitDigit);
  }

  return getTensInWords(tensDigit) + ' ' + getUnitDigitsInWords(unitDigit);
}

function extractWordOfHundredthDigit(digit) {
  const faceValue = getUnitDigitsInWords(digit);

  return digit !== 0 ? faceValue + ' ' + 'hundred' : '';
}

function extractWordsOfGroupOf3(number) {
  const numberInWords = [];

  numberInWords.push(extractWordsOfLastTwoDigits(number % 100));
  numberInWords.push(extractWordOfHundredthDigit(Math.floor(number / 100)));

  return numberInWords;
}

function getNumberInWords(num) {
  let number = num;
  let numberInWords = [];

  while (number !== 0) {
    const groupOf3 = number % 1000;
    numberInWords = numberInWords.concat(extractWordsOfGroupOf3(groupOf3));
    number = Math.floor(number / 1000);
  }

  const result = addPlaceValues(numberInWords);
  return result.join(' ').trim();
}

function numberToWords(num) {
  if (num < 1 || num > 999999999999) {
    return num === 0 ? 'zero' : NaN;
  }

  return getNumberInWords(num);
}

// Program END!

// Testing...

function joinPipes(array) {
  return '|' + array.join('|') + '|';
}

function padSpaces(data, columnLength) {
  const dataInString = '' + data;
  const dataLength = dataInString.length;
  const requiredSpaces = columnLength - dataLength;
  const leftPadLength = Math.floor(requiredSpaces / 2);
  const rightPadLength = columnLength - (leftPadLength + dataLength);

  return ' '.repeat(leftPadLength) + dataInString + ' '.repeat(rightPadLength);
}

function getRow(rowData, columnLengths) {
  const row = [];

  for (let column = 0; column < rowData.length; column++) {
    row.push(padSpaces(rowData[column], columnLengths[column]));
  }

  return joinPipes(row);
}

function getBorder(columnLengths) {
  const border = [];

  for (let column = 0; column < columnLengths.length; column++) {
    border.push(':' + '-'.repeat(columnLengths[column] - 2) + ':');
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
  columnLengths[0] = columnLengths[0] - 1;

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

function generateReport(metaData, results) {
  const programName = metaData[0];
  const headings = metaData[1];

  const columnLengths = getColumnLengths(headings, results);

  printReport(programName, headings, columnLengths, results);
}

function areArraysEqual(array1, array2, left, right) {
  if (right < left) {
    return true;
  }

  if (array1[left] !== array2[left] || array1[right] !== array2[right]) {
    return false;
  }

  return areArraysEqual(array1, array2, left + 1, right - 1);
}

function areEqual(array1, array2) {
  if (Object.is(array1, array2)) {
    return true;
  }
  
  if (array1.length !== array2.length) {
    return false;
  }

  return areArraysEqual(array1, array2, 0, array1.length - 1);
}


function testFunction(input, expected, functionToTest) {
  const actual = functionToTest(...input);
  const mark = areEqual(expected, actual) ? '✅' : '❌';

  const result = [mark, ...input, expected, actual];
  return result;
}

function testAll(testCases, expectations, functionToTest) {
  const results = [];

  for (let index = 0; index < testCases.length; index++) {
    const args = [testCases[index], expectations[index], functionToTest];
    results.push(testFunction(...args));
  }

  return results;
}

function runTestCases(metaData, testCasesData, functionToTest) {
  const testCases = testCasesData[0];
  const expectations = testCasesData[1];

  const results = testAll(testCases, expectations, functionToTest);
  generateReport(metaData, results);
}


function getTestCasesData(index) {
  const testCasesData = [];
  testCasesData.push([[0], 'zero'][index]);
  testCasesData.push([[1], 'one'][index]);
  testCasesData.push([[12], 'twelve'][index]);
  testCasesData.push([[13], 'thirteen'][index]);
  testCasesData.push([[40], 'forty'][index]);
  testCasesData.push([[123], 'one hundred twenty three'][index]);
  testCasesData.push([[23456],
  'twenty three thousand four hundred fifty six'  ][index]);
  testCasesData.push([[100001], 'one hundred thousand one'][index]);
  testCasesData.push([[200001], 'two hundred thousand one'][index]);
  testCasesData.push([[1111], 'one thousand one hundred eleven'][index]);
  testCasesData.push([[80001], 'eighty thousand one'][index]);
  testCasesData.push([[1000000], 'one million'][index]);
  testCasesData.push([[1000001], 'one million one'][index]);
  testCasesData.push([[100000000], 'one hundred million'][index]);
  testCasesData.push([[987654321],
  'nine hundred eighty seven million six ' +
  'hundred fifty four thousand three hundred twenty one'][index]);
  testCasesData.push([[999999999999],
  'nine hundred ninety nine billion nine hundred ninety nine million nine' +
  ' hundred ninety nine thousand nine hundred ninety nine'][index]);

  return testCasesData;
}

function start() {
  const programName = 'NUMBER TO WORDS';
  const headings = ['STATUS', 'NUMBER', 'EXPECTED', 'ACTUAL'];
  const metaData = [programName, headings];
  const testCasesData = [getTestCasesData(0), getTestCasesData(1)];
  const functionToTest = numberToWords;

  runTestCases(metaData, testCasesData, functionToTest);
}

start();