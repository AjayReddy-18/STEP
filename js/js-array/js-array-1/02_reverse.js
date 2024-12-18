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

function reverse(array) {
  const reversedArray = [];
  
  for (let index = array.length - 1; index > -1; index--) {
    reversedArray[reversedArray.length] = array[index];
  }
  
  return reversedArray;
}

// PROGRAM END //

// Testing World! 

function testReverse(array1, expected) {
  const result = reverse(array1);
  const mark = areEqual(expected, result) ? '✅' : '❌';
  console.log(mark, array1, expected, result);
}

function testAll() {
  testReverse([1, 2, 3], [3, 2, 1]);
  testReverse([-1, 0, 1], [1, 0, -1]);
  testReverse([], []);
}

testAll();
