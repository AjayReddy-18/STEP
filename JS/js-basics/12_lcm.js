// Do not rename a and b, use them as input for your program.
// a and b will be natural numbers.
// While testing we will change their values.
const a = 6;
const b = 5;
// Print the lcm of a and b
// Printing more than one output or printing anything other than lcm might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE 

let divisor = a;
let dividend = b; 
let lcm = 0;

while (divisor !== lcm) {
    lcm += dividend;
    if (lcm % divisor === 0) {
        divisor = lcm;
    } 
}

console.log(lcm);