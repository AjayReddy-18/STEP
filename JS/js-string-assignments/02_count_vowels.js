// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = 'abcdef';
// Print the number of vowles in given string. Consider case sensitivity.
// If string = "abcdefghi" then output should be 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let vowelsCount = 0; 
const stringLength = string.length;

for (let currentIndex = 0; currentIndex < stringLength; currentIndex++) { 
    const currentCharacter = string[currentIndex];
    if (currentCharacter === 'a' || currentCharacter === 'e' || currentCharacter === 'i' || currentCharacter === 'o' || currentCharacter === 'u' || currentCharacter === 'A' || currentCharacter === 'E' || currentCharacter === 'I' || currentCharacter === 'O' || currentCharacter === 'U') {
        vowelsCount = vowelsCount + 1;
    } 
}

console.log(vowelsCount);