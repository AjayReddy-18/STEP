function quotient(dividend, divisor) {
  if (dividend < divisor) {
    return 0;
  }

  return 1 + quotient(dividend - divisor, divisor);
}

// PROGRAM END //

// Testing World! 

function testQoutient(dividend, divisor, expected) {
  const result = quotient(dividend, divisor);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, dividend, divisor, expected, result);
}

function testAll() {
  testQoutient(6, 3, 2);
  testQoutient(3, 3, 1);
  testQoutient(4, 4, 1);
  // testQoutient(2, 0, 0);
  testQoutient(0, 5, 0);
  testQoutient(44, 15, 2);
}

testAll();