function some(predicate, elements) {
  for (const element of elements) {
    if (predicate(element)) {
      return true;
    }
  }

  return false;
}

function every(predicate, elements) {
  for (const element of elements) {
    if (!predicate(element)) {
      return false;
    }
  }

  return true;
}

function isOdd(number) {
  return (number & 1) === 1;
}

function containsOdd(numbers) {
  return some(isOdd, numbers);
}

function isPositive(number) {
  return number > 0;
}

function areAllPositive(numbers) {
  return every(isPositive, numbers);
}

function isGreaterThan100(number) {
  return number > 100;
}

function isAnyThingGreaterThan100(numbers) {
  return some(isGreaterThan100, numbers);
}

function isLongerThan3(string) {
  return string.length > 3;
}

function isEveryStringLongerThan3(strings) {
  return every(isLongerThan3, strings);
}