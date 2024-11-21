function getDigit(faceValue, placeValue) {
  return faceValue * (10 ** placeValue);
}

function isDigit(char) {
  return char >= '0' && char <= '9';
}

function convertStringToNumber(string, index) {
  if (index === string.length - 1) {
    return getDigit(string[index], 0);
  }

  if (!isDigit(string[index])) {
    return NaN;
  }

  const digit = getDigit(string[index], ((string.length - index) - 1));
  return digit + convertStringToNumber(string, index + 1);
}

function stringToNumber(string) {
  if (string.length === 0) {
    return NaN;
  }

  if (string[0] === '-') {
    return -1 * convertStringToNumber(string, 1);
  }

  return convertStringToNumber(string, 0);
}

// PROGRAM END //

// Testing World! 

function testStringToNumber(string, expected) {
  const result = stringToNumber(string);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, string, expected, result);
}

function testAll() {
  testStringToNumber('', NaN);
  testStringToNumber(' ', NaN);
  testStringToNumber('adf', NaN);
  testStringToNumber('0', 0);
  testStringToNumber('123', 123);
  testStringToNumber('1', 1);
  testStringToNumber('10', 10);
  testStringToNumber('-1', -1);
  testStringToNumber('-10', -10);
  testStringToNumber('-123', -123);
}

testAll();