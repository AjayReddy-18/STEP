function max(lhs, rhs) {
  return lhs > rhs ? lhs : rhs;
}

function min(lhs, rhs) {
  return lhs < rhs ? lhs : rhs;
}

function getSubstring(text, start, end) {
  if (start > end) {
    return '';
  }

  return text[start] + getSubstring(text, start + 1, end);
}

function slice(text, start, end) {
  const startIndex = max(start, 0);
  const endIndex = min(end, text.length - 1);

  return getSubstring(text, startIndex, endIndex);
}

// PROGRAM END //

// Testing World! 

function testSlice(text, start, end, expected) {
  const result = slice(text, start, end);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, text, start, end, expected, result);
}

function testAll() {
  testSlice('0123456789', 2, 5, '2345');
  testSlice('0123456789', 0, 9, '0123456789');
  testSlice('0123456789', 0, 0, '0');
  testSlice('0123456789', 2, 7, '234567');
  testSlice('0123456789', 2, 10, '23456789');
  testSlice('0123456789', 2, -1, '');
}

testAll();