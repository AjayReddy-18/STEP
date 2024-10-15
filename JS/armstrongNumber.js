// Check whether a number is armstrong or not

const number = 153; 

let isArmstrong = false;
let power = 1;
let sumOfPowers = 0; 
let dividend = number; 
let msb = 0;

while(10 ** power < number) {
    power++;
}

while(dividend > 0) {
    msb = dividend % 10;
    sumOfPowers = sumOfPowers + (msb ** power);
    dividend = (dividend - msb) / 10;
}

if(number === sumOfPowers) {
    isArmstrong = true;
}

console.log(number, power, sumOfPowers, isArmstrong);