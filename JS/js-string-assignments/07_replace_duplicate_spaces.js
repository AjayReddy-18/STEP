// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "statement      with    two spaces    ";
// Replace duplicate spaces with single space
// If string = "statement      with    two spaces"
// Then print "statement with two spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const stringLength = string.length;
let requiredString = "";

for (let currentIndex = 0; currentIndex < stringLength; currentIndex++) {
    const beforeCharacter = string[currentIndex - 1];
    const currentCharacter = string[currentIndex];
    if (beforeCharacter !== " " || currentCharacter !== " ") {  
        requiredString += currentCharacter;
    }
}

console.log(requiredString);