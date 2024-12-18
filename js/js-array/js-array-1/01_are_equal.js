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

// PROGRAM END //

// Testing World! 

function testAreEqual(array1, array2, expected) {
  const result = areEqual(array1, array2);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, array1, array2, expected, result);
}

function testAll() {
  testAreEqual([1, 2, 3, 4], [1, 2, 3, 4], true);
  testAreEqual([1, 2, 3], [1, 2, 3, 4], false);
  testAreEqual([1, 2, 3], [1, 3, 2], false);
  testAreEqual([], [], true);
}

testAll();
