function remainder(dividend, divisor) {
  if (dividend < divisor) {
    return dividend;
  }

  return remainder(dividend - divisor, divisor);
}

function isOdd(number) {
  return remainder(number, 2) === 1;
}

function isEven(number) {
  return remainder(number, 2) === 0;
}

function max(lhs, rhs) {
  return lhs > rhs ? lhs : rhs;
}

function min(lhs, rhs) {
  return lhs < rhs ? lhs : rhs;
}

function average(number1, number2) {
  if (number1 <= number2) {
    return number1 === number2 ? number1 : number1 + 0.5;
  }

  return average(number1 - 1, number2 + 1);
}

function reverseANumber(number, reversedNumber = 0) {
  if (number === 0) {
    return reversedNumber;
  }

  reversedNumber = reversedNumber * 10;
  reversedNumber = reversedNumber + number % 10;
  return reverseANumber((number - number % 10) / 10, reversedNumber);
}

function power10(number) {
  if (number < 10) {
    return 1;
  }

  return 10 * power10(number / 10);
}

function reverseNumber(number) {
  if (number < 10) {
    return number;
  }

  const remainder = number % 10;
  return remainder * power10(number) + reverseNumber((number - remainder) / 10);
}

function maxOfThree(a, b, c) {
  if (c < a) {
    return maxOfThree(c, b, a);
  }

  if (c < b) {
    return maxOfThree(a, c, b);
  }

  return c;
}

function secondGreatest(a, b, c) {
  if (a > c) {
    return secondGreatest(c, b, a);
  }

  if (c > b) {
    return secondGreatest(a, c, b);
  }

  return c;
}

function minOfThree(a, b, c) {
  if (a < c) {
    return minOfThree(c, b, a);
  }

  if (b < c) {
    return minOfThree(a, c, b);
  }

  return c;
}

function isDivisibleByPrimeCandidates(number, k) {
  return number % (6 * k - 1) === 0 || number % (6 * k + 1) === 0;
}

function isPrimeCandidateInRange(k, number) {
  return (6 * k - 1) ** 2 < number;
}

function _isPrime(number, divisor) {
  if (!isPrimeCandidateInRange(divisor, number)) {
    return true;
  }

  if (isDivisibleByPrimeCandidates(number, divisor)) {
    return false;
  }

  return _isPrime(number, divisor + 1);
}

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isPrime(number) {
  if (number < 4) {
    return number > 1;
  }

  if (isDivisible(number, 2) || isDivisible(number, 3)) {
    return false;
  }

  return _isPrime(number, 1);
}

function slice(string, start, end) {
  if (start === end) {
    return string[start];
  }

  return string[start] + slice(string, start + 1, end);
}

function hcf(dividend, divisor) {
  if (divisor === 0) {
    return dividend;
  }

  return hcf(divisor, dividend % divisor);
}

function printNumbers(number) {
  if (number === 1) {
    return console.log(1);
  }

  printNumbers(number - 1);
  console.log(number);
}

function reverseAString(string, length = string.length - 1) {
  if (length === 0) {
    return string[length];
  }

  return string[length] + reverseAString(string, length - 1);
}

function logirthm(base, mantissa) {
  if (mantissa < base) {
    return 0;
  }

  return 1 + logirthm(base, (mantissa - mantissa % base) / base);
}

function decimalToBinary(number) {
  if (number < 2) {
    return number;
  }

  const remainder = number % 2;
  const binary = remainder * (10 ** logirthm(2, number));
  return binary + decimalToBinary((number - remainder) / 2);
} 

function findNearestZebra(jungle, start) {
  for (let index = start; index < jungle.length; index++) {
    if (jungle[index] === 'Z') {
      return index;
    }
  }

  return 0;
}

function findPosOfZebraInDanger(jungle) {
  let posOfZebraInDanger = -1;
  let disOfZebraInDanger = Infinity;

  for (let index = 0; index < jungle.length; index++) {
    let posOfNearestZebra = 0;
    if (jungle[index] === 'L') {
      posOfNearestZebra = findNearestZebra(jungle, index);
      if (posOfNearestZebra - index < disOfZebraInDanger) {
        posOfZebraInDanger = posOfNearestZebra;
        disOfZebraInDanger = posOfNearestZebra - index;
      }
    }
  }

  return posOfZebraInDanger;
}

console.log(findPosOfZebraInDanger('L   Z Z   L  Z  L   L  Z'));