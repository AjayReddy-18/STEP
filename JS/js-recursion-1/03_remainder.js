function remainder(dividend, divisor) {
  if (dividend < divisor) {
    return dividend;
  }

  return remainder(dividend - divisor, divisor);
}

// PROGRAM END //

// Testing World! 

function testRemainder(dividend, divisor, expected) {
  const result = remainder(dividend, divisor);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, dividend, divisor, expected, result);
}

function testAll() {
  testRemainder(6, 3, 0);
  testRemainder(4, 3, 1);
  testRemainder(6, 4, 2);
  // testQoutient(2, 0, 0);
  // testQoutient(0, 5, 0);
  testRemainder(44, 15, 14);
}

testAll();