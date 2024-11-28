// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = '    ';
// Print the number of vowles in given string. Consider case sensitivity.
// If string = "abcdefghi" then output should be 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let vowelsCount = 0; 
const stringLength = string.length;

for (let currentIndex = 0; currentIndex < stringLength; currentIndex++) { 
    const currentCharacter = string[currentIndex];
    switch (currentCharacter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            vowelsCount = vowelsCount + 1;
    }
 }

console.log(vowelsCount);