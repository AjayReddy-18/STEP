import { main } from '../../testing/testingFramework.js';

function isStrictlyDescending(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] >= numbers[index - 1]) {
      return false;
    }
  }

  return true;
}

// PROGRAM END //

// Testing...

function getTestCasesData(index) {
  const testCasesData = [];
  testCasesData.push([[[1, 3, 4, 5, 16]], false][index]);
  testCasesData.push([[[5, 4, 2, 1]], true][index]);
  testCasesData.push([[[5, 4, 6, 1]], false][index]);
  testCasesData.push([[[5, 4, 4, 1]], false][index]);
  
  return testCasesData;
}

function testAll() {
  const programName = '02 STRICTLY DESCENDING';
  const headings = ['STATUS', 'ARRAY', 'EXPECTED', 'ACTUAL'];
  const metaData = [programName, headings];
  const testCasesData = [getTestCasesData(0), getTestCasesData(1)];
  const functionToTest = isStrictlyDescending;
  
  main(metaData, testCasesData, functionToTest);
}

testAll();