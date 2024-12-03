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

function containsAll(array, elements) {
  for (let index = 0; index < elements.length; index++) {
    if (!isElementFound(array, elements[index], 0, array.length - 1)) {
      return false;
    }
  }

  return true;
}

// PROGRAM END //

// Testing...

function getTestCasesData(index) {
  const testCasesData = [];
  testCasesData.push([[[1, 2, 3], [2, 1]], true][index]);
  testCasesData.push([[[1, 2, 3], [2, 1, 4]], false][index]);
  testCasesData.push([[[1, 2, 3], [2, 1, 3]], true][index]);
  testCasesData.push([[[1, 2, 3, 4], [21, 1, 3]], false][index]);
  testCasesData.push([[[1, 2, 31], [2, 1, 3]], false][index]);

  return testCasesData;
}

function testAll() {
  const programName = '08 CONTAINS ALL';
  const headings = ['STATUS', 'ARRAY 1', 'ARRAY 2', 'EXPECTED', 'ACTUAL'];
  const metaData = [programName, headings];
  const testCasesData = [getTestCasesData(0), getTestCasesData(1)];
  const functionToTest = containsAll;

  main(metaData, testCasesData, functionToTest);
}

testAll();