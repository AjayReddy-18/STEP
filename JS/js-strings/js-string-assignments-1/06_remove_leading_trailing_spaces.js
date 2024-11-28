// Do not rename string, use it as input for your program.≠
// While testing we will change it's value.
const string = "  abcb  a     ";
// Remove spaces at the start and end of the given string
// If string = " spaces at the start and the end "
// Then print "spaces at the start and the end"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const stringLength = string.length;
let leftIndex = 0;
let rightIndex = stringLength - 1;

while (string[leftIndex] === " ") {
    leftIndex++;
}

while (string[rightIndex] === " ") {
    rightIndex--;
}

let requiredString = "";

for (let currentIndex = leftIndex; currentIndex <= rightIndex; currentIndex++) {
    requiredString += string[currentIndex];
}

console.log(requiredString); 