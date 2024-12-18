function sumOfGP(currentTerm, commonRatio, term) {
  if (term === 0) {
    return 0;
  }

  const nextTerm = currentTerm * commonRatio;
  return currentTerm + sumOfGP(nextTerm, commonRatio, term - 1);
}

// PROGRAM END //

// Testing World! 

function testSumOfGP(currentTerm, commonRatio, term, expected) {
  const result = sumOfGP(currentTerm, commonRatio, term);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, currentTerm, commonRatio, term, expected, result);
}

function testAll() {
  testSumOfGP(1, 1, 1, 1);
  testSumOfGP(1, 2, 3, 7);
  testSumOfGP(0, 3, 4, 0);
  testSumOfGP(2, 0, 3, 2);
}

testAll();