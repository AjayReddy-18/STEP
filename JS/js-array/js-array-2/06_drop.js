import { main } from '../../testing/testingFramework.js';

function drop(array, number) {
  const newArray = [];
  for (let index = number; index < array.length; index++) {
    newArray.push(array[index]);
  }

  return newArray;
}

// PROGRAM END //

// Testing...

function getTestCasesData(index) {
  const testCasesData = [];
  testCasesData.push([[[1, 2, 3], 1], [2, 3]][index]);
  testCasesData.push([[[1, 2, 3, 4], 2], [3, 4]][index]);
  testCasesData.push([[[1, 2, 3, 4, 5], 4], [5]][index]);
  testCasesData.push([[[1, 2, 3], 0], [1, 2, 3]][index]);
  testCasesData.push([[[1, 2, 3], 2], [3]][index]);

  return testCasesData;
}


function testAll() {
  const programName = '06 DROP';
  const headings = ['STATUS', 'ARRAY', 'NUMBER', 'EXPECTED', 'ACTUAL'];
  const metaData = [programName, headings];
  const testCasesData = [getTestCasesData(0), getTestCasesData(1)];
  const functionToTest = drop;

  main(metaData, testCasesData, functionToTest);
}

testAll();