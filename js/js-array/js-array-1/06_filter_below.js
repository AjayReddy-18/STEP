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

function filterBelow(array, threshold) {
  const filteredArray = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index] < threshold) {
      filteredArray[filteredArray.length] = array[index];
    }
  }

  return filteredArray;
}

// PROGRAM END //

// Testing World! 

function testFilterBelow(array, threshold, expected) {
  const result = filterBelow(array, threshold);
  const mark = areEqual(result, expected) ? '✅' : '❌';
  console.log(mark, array, threshold, expected, result);
}

function testAll() {
  testFilterBelow([1, 2, 3, 4], 0, []);
  testFilterBelow([6, 2, 3, 1, 4, 7], 3, [2, 1]);
  testFilterBelow([1, 2, 3], 4, [1, 2, 3]);
}

testAll();
