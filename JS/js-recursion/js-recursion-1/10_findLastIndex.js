function findLastIndexOfChar(string, char, index) {
  if (index === -1) {
    return -1;
  }

  if (string[index] === char) {
    return index;
  }

  return findLastIndexOfChar(string, char, index - 1);
}

function findLastIndex(string, char) {
  return findLastIndexOfChar(string, char, string.length - 1);
}

// PROGRAM END //

// Testing World! 

function testFindLastIndex(string, char, expected) {
  const result = findLastIndex(string, char);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, string, char, expected, result);
}

function testAll() {
  testFindLastIndex('Hello Hello', 'H', 6);
  testFindLastIndex('sss', 's', 2);
  testFindLastIndex('Ajay', 'a', 2);
  testFindLastIndex('YyYy', 'y', 3);
  testFindLastIndex('Ajay', 'X',-1);
  testFindLastIndex('Ajay', '',-1);
}

testAll();