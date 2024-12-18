function some(predicate, elements) {
  for (const element of elements) {
    if (predicate(element)) {
      return true;
    }
  }

  return false;
}

function isOdd(number) {
  return (number & 1) === 1;
}

function containsOdd(numbers) {
  return some(isOdd, numbers);
}

function isGreaterThan100(number) {
  return number > 100;
}

function isAnyThingGreaterThan100(numbers) {
  return some(isGreaterThan100, numbers);
}