// Do not rename sentence, use it as input for your program.
// While testing we will change it's value.
const sentence = "    ";
//  Reverse the sentence
// If sentence = "this is cool" then Output should be "cool is this"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const givenSentence = sentence;
const SPACE = " ";
let word = "";
let reversedSentence = "";

for (let index = 0; index < givenSentence.length; index++) {
    const currentCharacter = givenSentence[index];

    if (currentCharacter !== SPACE) {
        word += currentCharacter;
    }

    if (currentCharacter === SPACE) {
        reversedSentence = SPACE + word + reversedSentence;
        word = "";
    }
}

reversedSentence = word + reversedSentence;

console.log(reversedSentence);