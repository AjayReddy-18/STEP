// {
//   // ["abc","def","ghi"] => "cfi"
//   // You are given an array of strings. Write a function to return a single string that is the concatenation of the last character of every string in the array.
//   const allLastChars = function (arrayOfStrings) {

//   };

//   // [[-1, 2],[3,4],[-5,-6]] => [[-1, 2], [3,4]]
//   // Write a function to return a new array containing only those lists that contain at least one positive number.
//   const listsWithPositiveNumbers = function (listOfLists) {

//   };

//   // [0,-1,-2,3,4] => 12
//   // Write a function to calculate the product of all the positive numbers in the array. 0 is not positive.
//   const productOfPositives = function (numbers) {

//   };

//   // ["educate", "there", "animation"] => "educate"
//   // Write a function to return the longest string that contains the letter "e".  
//   const longestEWord = function (strings) {

//   };

//   // [[2, 4, 6], [1, 3, 5], [8, 10]] => false
//   // [[2,4],[6,8]] => true
//   // Write a function to check if all lists contain only even numbers. Return `true` if they do, and `false` otherwise.
//   const areAllListsEven = function (listOfLists) {

//   };

//   // [1,2,3,4] => 10 (sqr(1) + sqr(3))
//   // Write a function to calculate the sum of the squares of all the odd numbers in the array
//   const sumOfSquaresOfOdds = function (numbers) {

//   };


//   // ["abc","def"] => true
//   // ["abc","de"] => false
//   // Write a function to check if all strings have the same length. Return `true` if they do, and `false` otherwise. 
//   const areAllOfSameLength = function (listOfStrings) {

//   };


//   // [1,2,3,4,1,2] => [1,2,3,4]
//   // Write a function to return a new array with all duplicate values removed.  
//   const removeDuplicates = function (numbers) {

//   };

//   // ["ant", "eye", "id"] => true
//   // ["ant","bat"] => false
//   // Write a function to check if all the strings in the array start with a vowel. Return `true` if they do, and `false` otherwise.  
//   const allStartWithAVowel = function (words) {

//   };

//   // [1,2,3,4] => [1,3,6,10]
//   // [1,1,4,5] => [1,2,6,11]
//   // Build an array where each element is the running sum of the elements up to that index.
//   const runningTotal = function (numbers) {

//   };

//   // [] => [[]]
//   // [1] => [[1]]
//   // [1,2] => [[1,2]]
//   // [1,2,3] => [[1,2],[3]]
//   // [1,2,3,4] => [[1,2],[3,4]]
//   // Write a function to pair up elements of a list. 
//   const pairs = function (list) {

//   };
// }

const runTotals = function () {
  let sum = 0;
  return function (number) {
    sum += number;
    return sum;
  }
}

function runningTotal(numbers) {
  return numbers.map(runTotals());
}