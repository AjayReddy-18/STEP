// Print all pairs of digits in `numberToCheck` which adds up to `target`.
const numberToCheck = 3443;
const target = 4    ;
// For example `numberToCheck` = 1234 and `target` = 5
// Pairs whose sum is 5 are (1, 4) and (2, 3) 
// Your program should print
// 1 4
// 2 3
// or
// 4 1
// 3 2
// As you can see above, order doesn't matter. You can print in any order.
// One line should contain only one pair.
// There should be exactly one space between numbers of a pair.
// You should use console.log(1, 4) to print 1 and 4 on a single line with exactly one space between them.
// If there is no pair that adds up to the target, your program should not print anything.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let givenNumber = numberToCheck; 
let checkNumber = 0;
let checkCandidate1 = 0;

while (givenNumber >= 10) {
    if (checkNumber === 0) {
        checkCandidate1 = givenNumber % 10;
        givenNumber = (givenNumber - checkCandidate1) / 10; 
        checkNumber = givenNumber;
    }
    const checkCandidate2 = checkNumber % 10;
    checkNumber = (checkNumber - checkCandidate2) / 10;

    if (checkCandidate1 + checkCandidate2 === target) {
        console.log(checkCandidate1, checkCandidate2);
    }
}

// let givenNumber = numberToCheck; 
// while (givenNumber > 0) {
//     let checkCandidate1 = givenNumber % 10;
//     givenNumber = (givenNumber - checkCandidate1) / 10;
//     let checkNumber = givenNumber;
//     while (checkNumber > 0) {
//         let checkCandidate2 = checkNumber % 10;
//         if (checkCandidate1 + checkCandidate2 === target) {
//             console.log(checkCandidate1, checkCandidate2);
//         }
//         checkNumber = (checkNumber - checkCandidate2) / 10;
//     }
// }