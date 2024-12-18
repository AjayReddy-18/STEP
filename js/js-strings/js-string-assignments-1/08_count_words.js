// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = '   ';
// Print the no.of words in given string. Consider multiple spaces.
// If string = "multiple words" then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let numberOfWords = 0;
const stringLength = string.length;
let beforeCharacter = " ";

for (let currentIndex = 0; currentIndex < stringLength; currentIndex++) {
    
    const currentCharacter = string[currentIndex];
    if (beforeCharacter === " " && currentCharacter !== " ") {
        numberOfWords++;
    }

    beforeCharacter = currentCharacter;
}

console.log(numberOfWords);