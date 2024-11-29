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

function selectOdds(numbers) {
  const oddNumbers = [];

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 === 1) {
      oddNumbers[oddNumbers.length] = numbers[index];
    } 
  }

  return oddNumbers;
}

// PROGRAM END //

// Testing World! 

function testSelectOdds(array1, expected) {
  const result = selectOdds(array1);
  const mark = areEqual(expected, result) ? '✅' : '❌';
  console.log(mark, array1, expected, result);
}

function testAll() {
  testSelectOdds([1, 2, 3], [1, 3]);
  testSelectOdds([0, 1], [1]);
  testSelectOdds([0, 2, 4, 5, 7], [5, 7]);
  testSelectOdds([], []);
}

testAll();
