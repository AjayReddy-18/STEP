// Do not rename string and charToFind, use them as input for your program.
// While testing we will change their values.
const string = 'abcdef';
const charToFind = 'a';
// Print the first index of the character in given string. Consider case sensitivity.
// If character not present in string print -1
// If string = "abccdef" and charToFind = "c", then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
 
const stringLength = string.length;

let currentIndex = 0;
while (string[currentIndex] !== charToFind && currentIndex < stringLength) {
    currentIndex++;
}

const indexOfTarget = currentIndex < stringLength ? currentIndex : -1;
console.log(indexOfTarget);