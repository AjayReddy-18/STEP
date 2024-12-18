function every(predicate, elements) {
  for (const element of elements) {
    if (!predicate(element)) {
      return false;
    }
  }

  return true;
}

function isPositive(number) {
  return number > 0;
}

function areAllPositive(numbers) {
  return every(isPositive, numbers);
}

function isLongerThan3(string) {
  return string.length > 3;
}

function isEveryStringLongerThan3(strings) {
  return every(isLongerThan3, strings);
}