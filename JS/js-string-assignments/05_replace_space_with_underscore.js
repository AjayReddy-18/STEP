// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "abcba jd sdj   ";
// Replace all spaces with underscore "_"
// If string = "statement with spaces"
// Then print "statement_with_spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const stringLength = string.length;
let stringWithOutSpaces = "";

for (let currentIndex = 0; currentIndex < stringLength; currentIndex++) {
    const currentCharacter = string[currentIndex];
    stringWithOutSpaces = stringWithOutSpaces + (currentCharacter === " " ? "_" : currentCharacter);
}

console.log(stringWithOutSpaces);