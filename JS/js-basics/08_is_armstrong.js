// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 153;
// Print true if a is an armstrong number otherwise print false
// A number is called Armstrong number if it is equal to the sum of the cubes of its own digits.
// For example: 153 is an Armstrong number since 153 = 1^3 + 5^3 + 3^3.
// Printing more than one output or printing anything other than armstrong or not armstrong might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let sumOfPowers = 0; 
let dividend = a; 
let msb = 0;

const power = ("" + a).length;

while (dividend > 0) {
    msb = dividend % 10;
    sumOfPowers = sumOfPowers + (msb ** power);
    dividend = (dividend - msb) / 10;
}

const isArmstrong = (a === sumOfPowers);

console.log(isArmstrong);