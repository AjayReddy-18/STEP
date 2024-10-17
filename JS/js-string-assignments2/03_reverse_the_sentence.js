// Do not rename sentence, use it as input for your program.
// While testing we will change it's value.
const sentence = "this is not cool";
//  Reverse the sentence
// If sentence = "this is cool" then Output should be "cool is this"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const SPACE = " ";
let reversedString = "";
let word = "";

for (let index = 0; index <= sentence.length; index++) {
    let currentCharacter = sentence[index];
    if (currentCharacter === SPACE || index === sentence.length) {
        reversedString = (currentCharacter === SPACE ? SPACE : "") + word + reversedString;
        word = "";
    } else {
        word = word + currentCharacter;
    }
}

console.log(reversedString);