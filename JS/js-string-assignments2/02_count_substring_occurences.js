// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "    ";
const subString = " ";
// Print the count of occurences of a substring in the given string
// If string = "duplicate substring statement" and subString = "ate", then print 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let subStringsCount = 0;

for (let index = 0; index < string.length; index++) {
    let superStringIndex = index;
    let subStringIndex = 0;
    while (string[superStringIndex] === subString[subStringIndex] && subStringIndex < subString.length) {
        superStringIndex++;
        subStringIndex++;
    } 

    if (subStringIndex === subString.length) {
        subStringsCount++;
    }
}

console.log(subStringsCount);