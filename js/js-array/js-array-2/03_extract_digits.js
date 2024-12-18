import { main } from '../../testing/testingFramework.js';

function getIntegralNumber(number) {
  if (number === Math.floor(number / 1)) {
    return number;
  }

  return getIntegralNumber(number * 10);
}

function extractDigits(number) {
  let integralNumber = getIntegralNumber(Math.abs(number));

  const digits = [];
  do {
    const lastDigit = integralNumber % 10;
    digits.unshift(lastDigit);
    integralNumber = Math.floor(integralNumber / 10);
  } while (integralNumber !== 0);

  return digits;
}

// PROGRAM END //

// Testing...

function getTestCasesData(index) {
  const testCasesData = [];
  testCasesData.push([[0], [0]][index]);
  testCasesData.push([[101], [1, 0, 1]][index]);
  testCasesData.push([[201], [2, 0, 1]][index]);
  testCasesData.push([[123], [1, 2, 3]][index]);
  testCasesData.push([[-123], [1, 2, 3]][index]);
  testCasesData.push([[12.3], [1, 2, 3]][index]);
  testCasesData.push([[12.03], [1, 2, 0, 3]][index]);
  testCasesData.push([[0.03], [0, 0, 3]][index]);

  return testCasesData;
}

function testAll() {
  const programName = '03 EXTRACT DIGITS';
  const headings = ['STATUS', 'NUMBER', 'EXPECTED', 'ACTUAL'];
  const metaData = [programName, headings];
  const testCasesData = [getTestCasesData(0), getTestCasesData(1)];
  const functionToTest = extractDigits;
  
  main(metaData, testCasesData, functionToTest);
}

testAll();