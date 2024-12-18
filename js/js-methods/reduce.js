function reduce(reducer, init, elements) {
  let result = init;
  
  for (const element of elements) {
    result = reducer(result, element);  
  }
  
  return result;
}

function getLongerString(string1, string2) {
  return string1.length > string2.length ? string1 : string2;
}

function getLongestString(strings) {
  return reduce(getLongerString, '', strings);
}

function concat(string1, string2) {
  return string1 + string2;
}

function combineAllStrings(strings) {
  return reduce(concat, '', strings);
}

function product(num1, num2) {
  return num1 * num2;
}

function getProduct(numbers) {
  return reduce(product, 1, numbers);
}

function addOneIfOdd(sum, number) {
  return isOdd(number) ? sum + 1 : sum;
}

function countOdds(numbers) {
  return reduce(addOneIfOdd, 0, numbers);
}