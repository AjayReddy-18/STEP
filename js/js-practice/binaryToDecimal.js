// Convert binary to decimal

const binaryNumber = 10000; 

let power = 0;
let remainingDigits = binaryNumber;
let decimalNumber = 0; 
let lastDigit = 0;

while(remainingDigits > 0) {
    lastDigit = remainingDigits % 10;
    decimalNumber = decimalNumber + (lastDigit * (2 ** power++));
    remainingDigits = (remainingDigits - lastDigit) / 10;
} 

console.log(binaryNumber, decimalNumber);