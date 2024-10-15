// Do not rename string and charToFind, use them as input for your program.
// While testing we will change their values.
const string = 'abcdef';
const charToFind = 'A';
// Print the first index of the character in given string. Consider case sensitivity.
// If character not present in string print -1
// If string = "abccdef" and charToFind = "c", then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let indexOfTarget = -1; 
const stringLength = string.length;

let currentIndex = 0;
while (indexOfTarget < 0 && currentIndex < stringLength) {
    if (charToFind === string[currentIndex]) {
        indexOfTarget = currentIndex;
    }
    currentIndex++;
}

console.log(indexOfTarget);