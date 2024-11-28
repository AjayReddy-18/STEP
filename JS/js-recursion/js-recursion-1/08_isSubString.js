function isSubStringOccuring(subString, string, index, subStringIndex) {
  if (subStringIndex === subString.length) {
    return true;
  }

  if (string[index] !== subString[subStringIndex]) {
    return false;
  }

  return isSubStringOccuring(subString, string, index + 1, subStringIndex + 1);
}

function isSubStringAtPosition(subString, string, index) {
  if (index === string.length) {
    return false;
  }

  if (isSubStringOccuring(subString, string, index, 0)) {
    return true;
  }

  return isSubStringAtPosition(subString, string, index + 1);
}

function isSubString(string, otherString) {
  if (otherString.length === 0 || otherString.length > string.length) {
    return false;
  }

  return isSubStringAtPosition(otherString, string, 0);
}

// PROGRAM END //

// Testing World! 

function testIsSubstring(subString, string, expected) {
  const result = isSubString(subString, string);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, subString, string, expected, result);
}

function testAll() {
  testIsSubstring('Ajay', 'A', true);
  testIsSubstring('Ajay', 'j',  true);
  testIsSubstring('Ajay', 'a', true);
  testIsSubstring('Ajay', 'y', true);
  testIsSubstring('Hello World', 'World', true);
  testIsSubstring('Hello World', 'lo W', true);
  testIsSubstring('Ajay', 'X', false);
  testIsSubstring('Ajay', '', false);
  testIsSubstring('lo w', 'w', true);
}

testAll();