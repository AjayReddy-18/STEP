import { main } from '../../testing/testingFramework.js';

function concat(array1, array2) {
  const concatenatedArray = [];
  
  for (let index = 0; index < array1.length; index++) {
    concatenatedArray.push(array1[index]);
  }

  for (let index = 0; index < array2.length; index++) {
    concatenatedArray.push(array2[index]);
  }
  
  return concatenatedArray;
}

// PROGRAM END //

// Testing...

function getTestCasesData(index) {
  const testCases = [];
  testCases.push([[[1, 2, 3, 4], [5, 6, 7]], [1, 2, 3, 4, 5, 6, 7]][index]);
  testCases.push([[[1, 3, 4], [5, 6, 7]], [1, 3, 4, 5, 6, 7]][index]);
  testCases.push([[[1, 2, 3, 4], [5, 7]], [1, 2, 3, 4, 5, 7]][index]);
  testCases.push([[[-1, 1, 2, 3, 4], [5, 7]], [-1, 1, 2, 3, 4, 5, 7]][index]);
  
  return testCases;
}

function testAll() {
  const programName = '04 CONCAT';
  const headings = ['STATUS', 'ARRAY 1', 'ARRAY 2', 'EXPECTED', 'ACTUAL'];
  const metaData = [programName, headings];
  const testCasesData = [getTestCasesData(0), getTestCasesData(1)];
  const functionToTest = concat;
  
  main(metaData, testCasesData, functionToTest);
}

testAll();