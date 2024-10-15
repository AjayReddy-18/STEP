// Do not rename a and b, use them as input for your program.
// a and b will be natural numbers.
// While testing we will change their values.
const a = 0;
const b = 23;

// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let divisor = b;
let dividend = a; 
let remainder = (divisor === 0) ? divided : divisor;

while (remainder !== 0) {
    divisor = remainder;
    remainder = dividend % divisor; 
    dividend = divisor;
}

const hcf = divisor;

console.log(hcf);