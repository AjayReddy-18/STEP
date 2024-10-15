// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 10;
// Print the binary representation of a
// If a = 12, then the output should be
// 0
// 0
// 1
// 1
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let dividend = a; 
let binaryDigit = 0; 

do {
    binaryDigit = dividend % 2; 
    dividend = (dividend - binaryDigit) / 2; 
    console.log(binaryDigit);
} while(dividend > 0);