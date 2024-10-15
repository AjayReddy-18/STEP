// Do not rename a, use it as input for your program.
// a will be a natural number.
// While testing we will change its value.
const a = 1;
// Print true if a is palindrome otherwise print false
// Printing more than one output or printing anything other than palindrome or not palindrome might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let remainingDigits = a;
let reverseOfNumber = 0;
let lastDigit = 0;
    
while (remainingDigits > 0) {
    lastDigit = remainingDigits % 10;
    reverseOfNumber *= 10;
    reverseOfNumber += lastDigit;
    remainingDigits = (remainingDigits - lastDigit) / 10; 
}

const isPalindrome = (a === reverseOfNumber);

console.log(isPalindrome);