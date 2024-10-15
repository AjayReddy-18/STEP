// Do not rename startOfRange and endOfRange, use it as input for your program.
// Use them to find all prime numbers between startOfRange and endOfRange (both inclusive).
const startOfRange = 0;
const endOfRange = 11;
// Print all prime numbers between startOfRange and endOfRange
// For example, if startOfRange = 1 and endOfRange = 10, then the output should be
// 2
// 3
// 5
// 7
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let currentNumber = (currentNumber < 2) ? 2 : startOfRange;
let currentDivisor = 2; 
let endDivisor = (currentNumber - (currentNumber % 2)) / 2; 

while (currentNumber <= endOfRange) {
    if (currentNumber % currentDivisor === 0 && currentDivisor <= endDivisor) {
        currentDivisor = 1;
        currentNumber++;
        endDivisor = (currentNumber - (currentNumber % 2)) / 2;
    }
    
    if (currentDivisor >= endDivisor) {
        currentDivisor = 1;
        console.log(currentNumber++);
        endDivisor = (currentNumber - (currentNumber % 2)) / 2;
    }
    currentDivisor++; 
}