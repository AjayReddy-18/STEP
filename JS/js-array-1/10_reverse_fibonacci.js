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

function getReverseFibonacci(series, currentTerm) {
  series[currentTerm] = series[currentTerm + 1] + series[currentTerm + 2];

  if (currentTerm === 0) {
    return series;
  }

  return getReverseFibonacci(series, currentTerm - 1);
}

function reverseFibonacci(terms) {
  if (terms === 0) {
    return [];
  }

  if (terms < 3) {
    return terms === 1 ? [0] : [1, 0];
  }

  const reverseFibonacciSeries = [];
  reverseFibonacciSeries[terms - 1] = 0;
  reverseFibonacciSeries[terms - 2] = 1;
  return getReverseFibonacci(reverseFibonacciSeries, terms - 3);
}

// PROGRAM END //

// Testing World! 

function testReverseFibonacci(n, expected) {
  const result = reverseFibonacci(n);
  const mark = areEqual(expected, result) ? '✅' : '❌';
  console.log(mark, n, expected, result);
}

function testAll() {
  testReverseFibonacci(0, []);
  testReverseFibonacci(1, [0]);
  testReverseFibonacci(2, [1, 0]);
  testReverseFibonacci(3, [1, 1, 0]);
  testReverseFibonacci(4, [2, 1, 1, 0]);
  testReverseFibonacci(5, [3, 2, 1, 1, 0]);
  testReverseFibonacci(6, [5, 3, 2, 1, 1, 0]);
}

testAll();