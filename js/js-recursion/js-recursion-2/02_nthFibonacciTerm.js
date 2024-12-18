function nthFibonacciTerm(term) {
  if (term < 3) {
    return (term + 1) % 2;
  }

  return nthFibonacciTerm(term - 1) + nthFibonacciTerm(term - 2);
}

// PROGRAM END //

// Testing World! 

function testFibonnaci(string, expected) {
  const result = nthFibonacciTerm(string);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, string, expected, result);
}

function testAll() {
  testFibonnaci(1, 0);
  testFibonnaci(2, 1);
  testFibonnaci(3, 1);
  testFibonnaci(4, 2);
  testFibonnaci(5, 3);
  testFibonnaci(6, 5);
}

testAll();