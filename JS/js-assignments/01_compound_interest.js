// Do not rename p, r or t, use them as input for your program.
// While testing we will change their values.
const p = 10;
const r = 5;
const t = 2;
// Print the compound interest.
// Do not use compound interest formula to calculate the compound interest.
// Use simple interest formula and a loop to calculate the compound interest.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE 

let currentInterest = 0;

for (let yearCounter = 0; yearCounter < t; yearCounter++) {
    currentInterest = currentInterest + ((p * r) / 100) + ((r / 100) * currentInterest);
}

const compoundInterest = currentInterest;

console.log(compoundInterest);