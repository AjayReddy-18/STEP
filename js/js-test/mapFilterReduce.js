function concatLastChar(lastChars, string) {
  return lastChars.concat(string.at(-1));
};

const allLastChars = function (arrayOfStrings) {
  return arrayOfStrings.reduce(concatLastChar, '');
};

function isPositive(number) {
  return number > 0;
}

function isAnyPositive(array) {
  return array.some(isPositive);
};

const listsWithPositiveNumbers = function (listOfLists) {
  return listOfLists.filter(isAnyPositive);
};

function multiplyIfPositive(product, number) {
  return isPositive(number) ? product * number : product;
};

const productOfPositives = function (numbers) {
  return numbers.reduce(multiplyIfPositive, 1);
};

function isCandidateLonger(longerWord, candidate) {
  return candidate > longerWord;
}

function doesIncludeE(string) {
  return string.includes('e');
}

function isLongerEWord(longerWord, candidate) {
  return isCandidateLonger(longerWord, candidate) && doesIncludeE(candidate);
}

function longerEWord(longerWord, candidate) {
  return isLongerEWord(longerWord, candidate) ? candidate : longerWord;
}

const longestEWord = function (strings) {
  return strings.reduce(longerEWord, '');
};

function isEven(number) {
  return (number & 1) === 0;
}

function areAllEven(numbers) {
  return numbers.every(isEven);
}

const areAllListsEven = function (listOfLists) {
  return listOfLists.every(areAllEven);
};

function squareOf(number) {
  return number * number;
}

function addOddSquare(sum, number) {
  return !isEven(number) ? sum + squareOf(number) : sum;
}

const sumOfSquaresOfOdds = function (numbers) {
  return numbers.reduce(addOddSquare, 0);
};

const areAllOfSameLength = function (listOfStrings) {
  return listOfStrings.every(function (string) {
    return string.length === listOfStrings[0].length;
  });
};

function concatNonDuplicate(array, element) {
  return array.includes(element) ? array : array.concat(element);
}

const removeDuplicates = function (numbers) {
  return numbers.reduce(concatNonDuplicate, []);
};

function startsWithVowel(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return vowels.includes(word[0]);
}

const allStartWithAVowel = function (words) {
  return words.every(startsWithVowel);
};

function pushNewSum(sums, number) {
  return sums.concat(sums.at(-1) + number);
}

const runningTotal = function (numbers) {
  const total = numbers.reduce(pushNewSum, [0]);
  total.shift();

  return total;
};

function createPairs(pairs, element) {
  pairs.at(-1).length < 2 ? pairs.at(-1).push(element) : pairs.push([element]);
  return pairs;
}

const pairs = function (list) {
  return list.reduce(createPairs, [[]]);
};

function testFunction(results, args) {
  const [functionName, parameters, expected] = args;
  const actual = functionName(...parameters);
  const testCase = [functionName, ...parameters, expected, actual];
  const index = actual !== expected ? 0 : 1;
  results[index].push(testCase);

  return results;
}

function testAll() {
  const testCases = [
    [allLastChars, [["abc", "def", "ghi"]], "cfi"],
    [allLastChars, [["ab", "def", "ghi"]], "bfi"],
    [listsWithPositiveNumbers, [[[-1, -2], [3, 4], [5, -6]]],
      [[3, 4], [5, -6]]],
    [listsWithPositiveNumbers, [[[1, 2], [-3, -4], [5, -6]]],
      [[1, 2], [5, -6]]],
    [productOfPositives, [[0, -1, 2]], 2],
    [productOfPositives, [[0, -1, 2, 3]], 6],
    [longestEWord, [["educate", "there", "animation"]], 'educate'],
    [longestEWord, [["vacation", "there", "animation"]], 'there'],
    [areAllListsEven, [[[2, 4, 6], [1, 3, 5], [8, 10]]], false],
    [areAllListsEven, [[[2, 4, 6], [8, 10]]], true],
    [sumOfSquaresOfOdds, [[1, 2, 3, 4]], 10],
    [sumOfSquaresOfOdds, [[1, 2, 3, 4, 5]], 35],
    [areAllOfSameLength, [["abc", "def"]], true],
    [areAllOfSameLength, [["abc", "de"]], false],
    [removeDuplicates, [[1, 2, 3, 4, 1, 2]], [1, 2, 3, 4]],
    [removeDuplicates, [[1, 2, 3, 4, 1, 2, 5]], [1, 2, 3, 4, 5]],
    [allStartWithAVowel, [["ant", "eye", "id"]], true],
    [allStartWithAVowel, [["ant", "bat"]], false],
    [runningTotal, [[1, 2, 3, 4]], [1, 3, 6, 10]],
    [runningTotal, [[1, 1, 4, 5]], [1, 2, 6, 11]],
    [pairs, [[]], [[]]],
    [pairs, [[1]], [[1]]],
    [pairs, [[1, 2]], [[1, 2]]],
    [pairs, [[1, 2, 3]], [[1, 2], [3]]],
    [pairs, [[1, 2, 3, 4]], [[1, 2], [3, 4]]],
  ];

  const headings = ['FUNCTION', 'INPUT', 'EXPECTED', 'ACTUAL'];
  return testCases.reduce(testFunction, [[headings], [headings]]);
}

console.table(testAll()[0]);