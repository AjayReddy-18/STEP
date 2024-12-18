function reverseString(string, index) {
  if (index === 0) {
    return string[index];
  }

  return string[index] + reverseString(string, index - 1);
}

function reverse(string) {
  if (string.length === 0) {
    return '';
  }

  return reverseString(string, string.length - 1);
}

// PROGRAM END //

// Testing World! 

function testIsSubstring(string, expected) {
  const result = reverse(string);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, string, expected, result);
}

function testAll() {
  testIsSubstring('A', 'A');
  testIsSubstring('AB', 'BA');
  testIsSubstring('ABC', 'CBA');
  testIsSubstring('ABCD', 'DCBA');
  testIsSubstring('', '');
}

testAll();