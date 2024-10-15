// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 5;
// Print the first prime number above a
// Printing more than one output or printing anything other than the first prime number above a might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let currentNumber = (currentNumber === 0) ? 2 : a + 1;
let currentDivisor = 2;

let divisorEndRange = currentNumber / 2;     
while (currentDivisor <= divisorEndRange) { 
    if (currentNumber % currentDivisor === 0) {
        currentDivisor = 1;
        currentNumber++;
        divisorEndRange = currentNumber / 2; 
    }
    currentDivisor++
}

console.log(currentNumber);