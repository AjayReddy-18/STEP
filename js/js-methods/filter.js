function filter(predicate, elements) {
  const result = [];

  for (const element of elements) {
    if (predicate(element)) {
      result.push(element);
    }
  }

  return result;
}

function isOdd(num) {
  return (num | 1) === num;
}

function getOdds(nums) {
  return filter(isOdd, nums);
}

function isLengthGreaterThanFive(word) {
  return word.length > 5;
}

function getWordsGreaterThanFive(words) {
  return filter(isLengthGreaterThanFive, words);
}