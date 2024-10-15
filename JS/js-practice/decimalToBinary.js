// Convert a decimal number into binary

const decimalNumber = 6;

let remainingNumber = decimalNumber;
let msb = 0;
let binaryNumber = 0;
let placeValue = 1;

while(remainingNumber > 0) {
    msb = remainingNumber % 2; 
    binaryNumber = binaryNumber + (msb * placeValue);
    remainingNumber = (remainingNumber - msb) / 2; 
    placeValue *= 10;
}

console.log(decimalNumber, binaryNumber);