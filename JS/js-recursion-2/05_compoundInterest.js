function compoundInterest(principle, ROI, periods) {
  const interest = principle * ROI;

  if (periods === 0) {
    return 0;
  }

  return interest + compoundInterest(principle + interest, ROI, periods - 1);
}

// PROGRAM END //

// Testing World! 

function testCompoundInterest(principle, ROI, periods, expected) {
  const result = compoundInterest(principle, ROI, periods);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, principle, ROI, periods, expected, result);
}

function testAll() {
  testCompoundInterest(1, 1, 0, 0);
  testCompoundInterest(100, 0.1, 2, 21);
  testCompoundInterest(100, 0.1, 3, 33.1);
}

testAll();