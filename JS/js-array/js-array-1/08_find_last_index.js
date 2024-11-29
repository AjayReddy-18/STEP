function findLastIndex(array, element) {
  for (let index = array.length - 1; index > -1; index--) {
    if (array[index] === element) {
      return index;
    }
  }

  return -1;
}

// PROGRAM END //

// Testing World! 

function testFindIndex(array1, array2, expected) {
  const result = findLastIndex(array1, array2);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, array1, array2, expected, result);
}

function testAll() {
  testFindIndex([1, 2, 3, 4, 1, 2], 1, 4);
  testFindIndex([1, 2, 3, 5, 6, 3], 3, 5);
  testFindIndex([1, 2, 3], 4, -1);
}

testAll();
