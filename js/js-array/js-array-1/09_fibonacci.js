function areArraysEqual(array1, array2, left, right) {
  if (right < left) {
    return true;
  }
  
  if (array1[left] !== array2[left] || array1[right] !== array2[right]) {
    return false;
  }
  
  return areArraysEqual(array1, array2, left + 1, right - 1);
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  return areArraysEqual(array1, array2, 0, array1.length - 1);
}

function getFibonacciSeries(terms) {
  const fibonacciSeries = [0, 1];
  
  for (let term = 2; term < terms; term++) {
    const nextTerm = fibonacciSeries[term - 1] + fibonacciSeries[term - 2];
    fibonacciSeries[term] = nextTerm;
  }
  
  return fibonacciSeries;
}

function fibonacci(terms) {
  if (terms === 0) {
    return [];
  }
  
  if (terms < 3) {
    return terms === 1 ? [0] : [0, 1];
  }
  
  return getFibonacciSeries(terms);
}

// PROGRAM END //

// Testing World! 

function testFibonacci(n, expected) {
  const result = fibonacci(n);
  const mark = areEqual(expected, result) ? '✅' : '❌';
  console.log(mark, n, expected, result);
}

function testAll() {
  testFibonacci(0, []);
  testFibonacci(1, [0]);
  testFibonacci(2, [0, 1]);
  testFibonacci(5, [0, 1, 1, 2, 3]);
  testFibonacci(8, [0, 1, 1, 2, 3, 5, 8, 13]);
}

testAll();
