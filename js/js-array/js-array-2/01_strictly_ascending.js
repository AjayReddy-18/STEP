import { main } from '../../testing/testingFramework.js';

function isStrictlyAscending(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] <= numbers[index - 1]) {
      return false;
    }
  }

  return true;
}

// // PROGRAM END //

// // Testing...

function getTestCasesData(index) {
  const testCasesData = [];
  testCasesData.push([[[1, 3, 4, 5, 16]], true][index]);
  testCasesData.push([[[1, 3, 2, 4]], false][index]);
  testCasesData.push([[[1, 3, 3, 4, 5, 16]], false][index]);
  testCasesData.push([[[1, 1, 1, 1]], false][index]);
  testCasesData.push([[[-1, 0, 1, 2, 3, 4]], true][index]);
  testCasesData.push([[[-3, -2, -1, 0]], true][index]);
  
  return testCasesData;
}

function testAll() {
  const programName = '01 STRICTLY ASCENDING';
  const headings = ['STATUS', 'ARRAY', 'EXPECTED', 'ACTUAL'];
  const metaData = [programName, headings];
  const testCasesData = [getTestCasesData(0), getTestCasesData(1)];
  const functionToTest = isStrictlyAscending;
  
  main(metaData, testCasesData, functionToTest);
}

testAll();