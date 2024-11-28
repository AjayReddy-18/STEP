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

function getNextPrime(primeCandidate) {
  if (isPrime(primeCandidate)) {
    return primeCandidate;
  }

  return getNextPrime(primeCandidate + 1);
}

function firstPrimeAbove(number) {
  if (number < 2) {
    return 2;
  }

  return getNextPrime(number + 1);
}

// PROGRAM END //

// Testing World! 

function testFirstPrimeAbove(number, expected) {
  const result = firstPrimeAbove(number);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, number, expected, result);
}

function testAll() {
  testFirstPrimeAbove(-2, 2);
  testFirstPrimeAbove(-1, 2);
  testFirstPrimeAbove(0, 2);
  testFirstPrimeAbove(1, 2);
  testFirstPrimeAbove(2, 3);
  testFirstPrimeAbove(3, 5);
  testFirstPrimeAbove(4, 5);
  testFirstPrimeAbove(5, 7);
  testFirstPrimeAbove(6, 7);
  testFirstPrimeAbove(7, 11);
  testFirstPrimeAbove(8, 11);
  testFirstPrimeAbove(11, 13);
  testFirstPrimeAbove(13, 17);
}

testAll();