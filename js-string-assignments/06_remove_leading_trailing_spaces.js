// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "    a   b       ";
// Remove spaces at the start and end of the given string
// If string = " spaces at the start and the end "
// Then print "spaces at the start and the end"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const stringLength = string.length;
let leftIndex = 0;
let rightIndex = stringLength - 1;
let leftStartIndex = -1;
let rightEndIndex = -2;

while (leftStartIndex < 0 || rightEndIndex < 0 && leftIndex < stringLength) {
    if (string[leftIndex] !== " " && leftStartIndex === -1) {
        leftStartIndex = leftIndex;
    }

    if (string[rightIndex] !== " " && rightEndIndex === -2) {
        rightEndIndex = rightIndex;
    }

    leftIndex++;
    rightIndex--;
}

let requiredString = "";

for (let currentIndex = leftStartIndex; currentIndex <= rightEndIndex; currentIndex++) {
    requiredString += string[currentIndex];
}

console.log(requiredString.length);