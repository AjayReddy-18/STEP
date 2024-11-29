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
  if (array1.length !== array2.length) {
    return false;
  }

  return areArraysEqual(array1, array2, 0, array1.length - 1);
}

function filterAbove(array, threshold) {
  const filteredArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] > threshold) {
      filteredArray[filteredArray.length] = array[index];
    }
  }

  return filteredArray;
}

// PROGRAM END //

// Testing World! 

function testFilterAbove(array, threshold, expected) {
  const result = filterAbove(array, threshold);
  const mark = areEqual(result, expected) ? '✅' : '❌';
  console.log(mark, array, threshold, expected, result);
}

function testAll() {
  testFilterAbove([1, 2, 3, 4], 0, [1, 2, 3, 4]);
  testFilterAbove([6, 2, 3, 1, 4, 7], 3, [6, 4, 7]);
  testFilterAbove([1, 2, 3], 4, []);
}

testAll();
