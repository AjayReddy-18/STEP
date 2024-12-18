function multiply(multiplier, multiplicand) {
  if (multiplier === 0) {
    return 0;
  }

  return multiplicand + multiply(multiplier - 1, multiplicand);
}

// PROGRAM END //

// Testing World! 

function testMultiply(multiplier, multiplicand, expected) {
  const result = multiply(multiplier, multiplicand);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, multiplier, multiplicand, expected, result);
}

function testAll() {
  testMultiply(2, 3, 6);
  testMultiply(3, 3, 9);
  testMultiply(4, 4, 16);
  testMultiply(2, 0, 0);
  testMultiply(0, 5, 0);
  testMultiply(4, 15, 60);
  console.log('\n');
}

testAll();