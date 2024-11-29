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

function mapLengths(words) {
  const lengthsOfWords = [];
  
  for (let index = 0; index < words.length; index++) {
    lengthsOfWords[lengthsOfWords.length] = words[index].length;
  }

  return lengthsOfWords;
}

// PROGRAM END //

// Testing World! 

function testMapLengths(array1, expected) {
  const result = mapLengths(array1);
  const mark = areEqual(expected, result) ? '✅' : '❌';
  console.log(mark, array1, expected, result);
}

function testAll() {
  testMapLengths(["apple", "cat", "Four"], [5, 3, 4]);
  testMapLengths(["one", "two", "three"], [3, 3, 5]);
  testMapLengths(["1", "-1", "55"], [1, 2, 2]);
}

testAll();
