import { main } from '../../testing/testingFramework.js';

function isElementFound(set, target, left, right) {
  if (right < left) {
    return false;
  }

  if (set[left] === target || set[right] === target) {
    return true;
  }

  return isElementFound(set, target, left + 1, right - 1);
}

function difference(array1, array2) {
  let differenceArray = [];

  for (let index = 0; index < array1.length; index++) {
    if (!isElementFound(array2, array1[index], 0, array2.length - 1)) {
      differenceArray.push(array1[index]);
    }
  }

  return differenceArray;
}

// PROGRAM END //

// Testing...

function getTestCasesData(index) {
  const testCasesData = [];
  testCasesData.push([[[1], [2]], [1]][index]);
  testCasesData.push([[[1, 2, 3, 4], [2, 3, 4]], [1]][index]);
  testCasesData.push([[[1, 2, 3, 4], [5, 6]], [1, 2, 3, 4]][index]);
  testCasesData.push([[[1, 2, 3, 4], [1, 2, 3, 4]], []][index]);
  testCasesData.push([[[2, 3, 4], [1, 2, 3, 4]], []][index]);

  return testCasesData;
}

function testAll() {
  const programName = '05 DIFFERENCE';
  const headings = ['STATUS', 'ARRAY 1', 'ARRAY 2', 'EXPECTED', 'ACTUAL'];
  const metaData = [programName, headings];
  const testCasesData = [getTestCasesData(0), getTestCasesData(1)];
  const functionToTest = difference;

  main(metaData, testCasesData, functionToTest);
}

testAll();