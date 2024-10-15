// Do not rename n, use it as input for your program.
// n will be a natural number.
// While testing we will change its value.
const n = 1;

// Print the nth Fibonacci term
// Printing more than one output or printing anything other than the nth Fibonacci term might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

if (n > 0) {
    let nTerm = 0;
    let nPlusOneTerm = 1;
    let nPlusTwoTerm = 0; 

    for (let termCounter = 1; termCounter < n; termCounter++) {
        nPlusTwoTerm = nTerm + nPlusOneTerm;
        nTerm = nPlusOneTerm;
        nPlusOneTerm = nPlusTwoTerm;
    }

    console.log(nTerm); 
}