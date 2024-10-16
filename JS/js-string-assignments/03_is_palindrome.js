// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "";
// Print true if the given string is palindrome otherwise false
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let isPalindrome = true;
let leftIndex = 0;
let rightIndex = string.length - 1;

while (string[leftIndex] === string[rightIndex] && leftIndex < rightIndex) {
    leftIndex++;
    rightIndex--;
}

console.log(leftIndex >= rightIndex);