// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 4;
// Print true if a is prime otherwise print false
// Printing more than one output or printing anything other than prime or not prime might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let isPrime = a > 1; 
let currentDivisor = 2;
const lastDivisor = a / 2; 

while (currentDivisor <= lastDivisor) {
    if (a % currentDivisor === 0) {
        isPrime = false;
        currentDivisor = lastDivisor;
    } 
    currentDivisor++;
} 

console.log(isPrime);