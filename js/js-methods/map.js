function map(mapper, elements) {
  const result = [];

  for (const element of elements) {
    result.push(mapper(element));
  }

  return result;
}

function getSquareRoots(nums) {
  return map(Math.sqrt, nums);
}

function getHalf(num) {
  return num / 2;
}

function getHalfs(nums) {
  return map(getHalf, nums);
}

function toUpper(word) {
  return word.toUpperCase();
}

function getUpperCasedWords(words) {
  return map(toUpper, words);
}