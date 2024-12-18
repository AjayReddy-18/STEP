function sumOfAP(currentTerm, commonDifference, term) {
  if (term === 0) {
    return 0;
  }

  const nextTerm = currentTerm + commonDifference;
  return currentTerm + sumOfAP(nextTerm, commonDifference, term - 1);
}

// PROGRAM END //

// Testing World! 

function testSumOfAP(firstTerm, commonDifference, term, expected) {
  const result = sumOfAP(firstTerm, commonDifference, term);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, firstTerm, commonDifference, term, expected, result);
}

function testAll() {
  testSumOfAP(1, 1, 1, 1);
  testSumOfAP(1, 1, 2, 3);
  testSumOfAP(1, 1, 3, 6);
  testSumOfAP(2, 2, 3, 12);
}

testAll();