import { main } from '../../testing/testingFramework.js';

function dropLast(array, number) {
  const newArray = [];
  const end = array.length - number;

  for (let index = 0; index < end; index++) {
    newArray.push(array[index]);
  }

  return newArray;
}

// PROGRAM END //

// Testing...

function getTestCasesData(index) {
  const testCasesData = [];
  testCasesData.push([[[1, 2, 3], 1], [1, 2]][index]);
  testCasesData.push([[[1, 2, 3, 4, 5], 4], [1]][index]);
  testCasesData.push([[[1, 2, 3], 2], [1]][index]);

  return testCasesData;
}

function testAll() {
  const programName = '07 DROP LAST';
  const headings = ['STATUS', 'ARRAY', 'NUMBER', 'EXPECTED', 'ACTUAL'];
  const metaData = [programName, headings];
  const testCasesData = [getTestCasesData(0), getTestCasesData(1)];
  const functionToTest = dropLast;

  main(metaData, testCasesData, functionToTest);
}

testAll();