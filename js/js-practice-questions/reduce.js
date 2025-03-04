// sumOf([1, 2, 3, 4]) => 10
const sumOf = function (numbers) {};

// productOf([1, 2, 3, 4]) => 24
const productOf = function (numbers) {};

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {};

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) {};

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) {};

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const sumPositiveNumbers = function (numbers) {};

// sumOfSquares([1, 2, 3, 4]) => 30
const sumOfSquares = function (numbers) {};

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const sumOfOddNumbers = function (numbers) {};

// countNegativeNumbers([1, -2, 3, -4]) => 2
const countNegativeNumbers = function (numbers) {};

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = function (numbers) {};

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {};

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const longestWord = function (words) {};

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) {};

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) {};

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) {};

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {};

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {};

// countVowelsInWords(["hello", "world"]) => "eoo"
const countVowelsInWords = function (words) {};

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const makeCamelCase = function (words) {};

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseString = function (words) {};

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = function (numbers) {};

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = function (arrays) {};

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) {};

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = function (numbers) {};

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const groupByLength = function (strings) {};

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = function (strings) {};

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) {};

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) {};

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) {};

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) {};

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) {};

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) {};

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) {};

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) {};

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) {};

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) {};

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) {};

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) {};

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) {};

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) {};

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) {};

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) {};

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) {};

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) {
  return obj.reduce((flattenedObj, property) => {
    const parentKeys = Object.keys(property);
    return parentKeys.reduce((keys, parentKey) => {}, []);
  }, {});
};

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) {};

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) {};

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) {};

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) {
  return words.reduce(
    (vowelsCount, word) => {
      return [...word].reduce((vowelsCount, char) => {
        if (vowelsCount[char] !== undefined) {
          vowelsCount[char] += 1;
        }
        return vowelsCount;
      }, vowelsCount);
    },
    { a: 0, e: 0, i: 0, o: 0, u: 0 }
  );
};
console.log(countVowels(["apple", "banana", "grape"]));

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) { };

const getSubsequences = (array) => {
  return array.map((element) => {
    let current = element;
    const subsequence = [];
    while (array.includes(current)) {
      subsequence.push(current++);
    }
    return subsequence;
  });
}

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) {
  const nums = numbers.sort((a, b) => a - b);
  const unique = nums.filter((num, index) => nums.indexOf(num) === index);
  const subsequences = getSubsequences(unique)
  console.log(subsequences);
};
console.log(longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]));

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) {
  const frequency = numbers.reduce((frequency, number) => {
    frequency[number] = (frequency[number] || 0) + 1;
    return frequency;
  }, {});

  return Object.keys(frequency)
    .sort((a, b) => frequency[b] - frequency[a])
    .slice(0, k)
    .map((x) => +x);
};
console.log(topKFrequent([4, 4, 4, 4, 3, 1, 1, 1, 2, 2], 2));

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) {};

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) {
  return arr1.reduce(function (cartesianProduct, x) {
    return arr2.reduce(function (cartesianProduct, y) {
      return cartesianProduct.concat([[x, y]]);
    }, cartesianProduct);
  }, []);
};
console.log(cartesianProduct([1, 2], ["a", "b"]));

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const groupByDate = function (records) {
  return records.reduce(function (groupedRecords, record) {
    const values = groupedRecords[record.date] || [];
    values.push(record.value);
    groupedRecords[record.date] = values;
    return groupedRecords;
  }, {});
};
console.log(
  groupByDate([
    { date: "2024-01-01", value: 10 },
    { date: "2024-01-01", value: 20 },
    { date: "2024-01-02", value: 30 },
  ])
);

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) {
  return numbers.reduce(
    function (minAndMax, number) {
      minAndMax.min = Math.min(number, minAndMax.min);
      minAndMax.max = Math.max(number, minAndMax.max);
      return minAndMax;
    },
    { min: Infinity, max: -Infinity }
  );
};
console.log(findMinMax([1, 2, 3, 4, 5]));

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }
const sumByCategory = function (items) {
  return items.reduce(function (existing, item) {
    const previousValue = existing[item.category] || 0;
    existing[item.category] = previousValue + item.value;
    return existing;
  }, {});
};
console.log(
  sumByCategory([
    { category: "A", value: 10 },
    { category: "B", value: 20 },
    { category: "A", value: 30 },
  ])
);
