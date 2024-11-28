function findIndexOfChar(string, char, index) {
  if (index === string.length) {
    return -1;
  }

  if (string[index] === char) {
    return index;
  }

  return findIndexOfChar(string, char, index + 1);
}

function findIndex(string, char) {
  return findIndexOfChar(string, char, 0);
}

// PROGRAM END //

// Testing World! 

function testFindIndex(string, char, expected) {
  const result = findIndex(string, char);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, string, char, expected, result);
}

function testAll() {
  testFindIndex('Ajay', 'A', 0);
  testFindIndex('Ajay', 'j',  1);
  testFindIndex('Ajay', 'a', 2);
  testFindIndex('Ajay', 'y', 3);
  testFindIndex('Ajay', 'X', -1);
  testFindIndex('Ajay', '', -1);
}

testAll();