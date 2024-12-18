function findIndex(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return index;
    }
  }

  return -1;
}

// PROGRAM END //

// Testing World! 

function testFindIndex(array1, array2, expected) {
  const result = findIndex(array1, array2);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, array1, array2, expected, result);
}

function testAll() {
  testFindIndex([1, 2, 3, 4], 1, 0);
  testFindIndex([1, 2, 3], 3, 2);
  testFindIndex([1, 2, 3], 4, -1);
}

testAll();
