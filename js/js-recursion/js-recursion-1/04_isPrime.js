function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isDivisibleByPotentialPrimes(number, multiplier) {
  return isDivisible(number, (6 * multiplier) - 1) ||
   isDivisible(number, (6 * multiplier) + 1);
}

function isPrimeCandidateInRange(multiplier, number) {
  return (((6 * multiplier) - 1) ** 2) <= number;
}

function _isPrime(primeCandidate, multiplier) {
  if (!isPrimeCandidateInRange(multiplier, primeCandidate)) {
    return true;
  }

  if (isDivisibleByPotentialPrimes(primeCandidate, multiplier)) {
    return false;
  }

  return _isPrime(primeCandidate, multiplier + 1);
}

function isPrime(primeCandidate) {
  if (primeCandidate < 4) {
    return primeCandidate > 1;
  }

  if (isDivisible(primeCandidate, 2) || isDivisible(primeCandidate, 3)) {
    return false;
  }

  return _isPrime(primeCandidate, 1);
}

// PROGRAM END //

// Testing World! 

function testIsPrime(number, expected) {
  const result = isPrime(number);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, number, expected, result);
}

function testAll() {
  testIsPrime(-2, false);
  testIsPrime(-1, false);
  testIsPrime(0, false);
  testIsPrime(1, false);
  testIsPrime(37, true);
  testIsPrime(101, true);
  testIsPrime(121, false);
  testIsPrime(19 * 19, false);
  testIsPrime(23 * 23, false);
}

testAll();