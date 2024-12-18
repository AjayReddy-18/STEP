function filter(filter, elements) {
  const result = [];

  for (const element of elements) {
    if (filter(element)) {
      result.push(element);
    }
  }

  return result;
}

function map(method, elements) {
  const result = [];

  for (const element of elements) {
    result.push(method(element));
  }

  return result;
}

function getSquareRoots(nums) {
  return map(Math.sqrt, nums);
}

function isOdd(num) {
  return (num | 1) === num;
}

function getOdds(nums) {
  return filter(isOdd, nums);
}

function getHalf(num) {
  return num / 2;
}

function getHalfs(nums) {
  return map(getHalf, nums);
}

function isLengthGreaterThanFive(word) {
  return word.length > 5;
}

function getWordsGreaterThanFive(words) {
  return filter(isLengthGreaterThanFive, words);
}

function toUpper(word) {
  return word.toUpperCase();
}

function getUpperCasedWords(words) {
  return map(toUpper, words);
}

function reduce(operation, initialValue, elements) {
  let result = initialValue;
  
  for (const element of elements) {
    result = operation(result, element);  
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

// testing 
{
  function areArraysEqual(array1, array2, left, right) {
    if (right < left) {
      return true;
    }

    if (array1[left] !== array2[left] || array1[right] !== array2[right]) {
      return false;
    }

    return areArraysEqual(array1, array2, left + 1, right - 1);
  }

  function areEqual(array1, array2) {
    if (Object.is(array1, array2)) {
      return true;
    }

    if (array1.length !== array2.length) {
      return false;
    }

    return areArraysEqual(array1, array2, 0, array1.length - 1);
  }

  function testFunction(functionName, input, expected, testResults) {
    const actual = functionName(input);
    const testCaseData = [functionName, input, expected, actual];
    const index = areEqual(actual, expected) ? 0 : 1;

    testResults[index].push(testCaseData);
  }

  function testGetSquareRoots(input, expected, testResults) {
    testFunction(getSquareRoots, input, expected, testResults);
  }

  function testSquareRoots(testResults) {
    testGetSquareRoots([1], [1], testResults);
    testGetSquareRoots([1, 4], [1, 2], testResults);
    testGetSquareRoots([1, 4, 9], [1, 2, 3], testResults);
  }

  function testGetOdds(input, expected, testResults) {
    testFunction(getOdds, input, expected, testResults);
  }

  function testOdds(testResults) {
    testGetOdds([1], [1], testResults);
    testGetOdds([1, 2], [1], testResults);
    testGetOdds([1, 2, 3], [1, 3], testResults);
    testGetOdds([1, 2, 3, 5], [1, 3, 5], testResults);
  }

  function testGetHalfs(input, expected, testResults) {
    testFunction(getHalfs, input, expected, testResults);
  }

  function testHalfs(testResults) {
    testGetHalfs([0], [0], testResults);
    testGetHalfs([0, 1], [0, 0.5], testResults);
    testGetHalfs([0, 1, 2], [0, 0.5, 1], testResults);
    testGetHalfs([0, 1, 2, 3], [0, 0.5, 1, 1.5], testResults);
    testGetHalfs([0, 1, 2, 3, 4], [0, 0.5, 1, 1.5, 2], testResults);
  }

  function testGetWordsGreaterThanFive(input, expected, testResults) {
    testFunction(getWordsGreaterThanFive, input, expected, testResults);
  }

  function testWordsGreaterThanFive(testResults) {
    testGetWordsGreaterThanFive([' '], [], testResults);
  }

  function testGetLongestString(input, expected, testResults) {
    testFunction(getLongestString, input, expected, testResults);
  }

  function testLongestString(testResults) {
    testGetLongestString([], '', testResults);
    testGetLongestString(['hi'], 'hi', testResults);
    testGetLongestString(['hi', 'hello'], 'hello', testResults);
    testGetLongestString(['hi', 'hello', 'bye'], 'hello', testResults);
  }

  function testGetComninedString(input, expected, testResults) {
    testFunction(combineAllStrings, input, expected, testResults);
  }

  function testCombineAll(testResults) {
    testGetComninedString([], '', testResults);
    testGetComninedString([''], '', testResults);
    testGetComninedString(['a'], 'a', testResults);
    testGetComninedString(['a', 'b'], 'ab', testResults);
    testGetComninedString(['a', 'b', 'c'], 'abc', testResults);
  }

  function testGetProduct(input, expected, testResults) {
    testFunction(getProduct, input, expected, testResults);
  }

  function testProduct(testResults) {
    testGetProduct([1], 1, testResults);
    testGetProduct([1, 0], 0, testResults);
  }

  function testGetOddsCount(input, expected, testResults) {
    testFunction(countOdds, input, expected, testResults);
  }

  function testCountOdds(testResults) {
    testGetOddsCount([], 0, testResults);
    testGetOddsCount([2], 0, testResults);
    testGetOddsCount([1], 1, testResults);
    testGetOddsCount([1, 2], 1, testResults);
    testGetOddsCount([1, 2, 1], 2, testResults);
  }

  function allPassingMsg(passedCases) {
    console.log('All tests are passing!');

    if (confirm('Do you want to see passed test cases')) {
      console.table(passedCases);
    }
  }

  function displayTestResults(testResults) {
    if (testResults[1].length === 0) {
      return allPassingMsg(testResults[0]);
    }

    console.table(testResults[1]);
  }

  function testAll() {
    const testResults = [[], []];

    testSquareRoots(testResults);
    testOdds(testResults);
    testHalfs(testResults);

    testWordsGreaterThanFive(testResults);
    testLongestString(testResults);
    testCombineAll(testResults);

    testProduct(testResults);
    testCountOdds(testResults);

    displayTestResults(testResults);
  }

  testAll();
}