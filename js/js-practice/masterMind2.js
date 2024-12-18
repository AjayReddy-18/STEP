// 🔴🟢🟡⚪️🟣🟤🔵⚫️⭕️🟠📍📌

const colors = '🔴🟢🟡⚪️🟣🟤🔵🟠';
const matchedPegPos = '🩷';
const matchedPegAtDifferentPos = '🤍';
const nothingMatched = '⭕️';
const SPACING = '\t';
const gameName = '\t\tMASTER MIND\n';
const colorsWithNumbers = '\n1 🔴 2 🟢 3 🟡 4 ⚪️ 5 🟣 6 🟤 7 🔵 8 🟠\n\n';
const promptsOnScreen = gameName + colorsWithNumbers;

function randomOf(base) {
  const randomChoice = (Math.random() * 10) % base;
  return Math.floor(randomChoice);
}

function getColor(colorCode) {
  const index = colorCode * 2;
  return colors[index] + colors[index + 1];
}

function setPegs(pegsCount, colorCodeNumbers) {
  if (pegsCount === 0) {
    return '';
  }

  const colorCode = randomOf(8);
  if (isSubString(colorCodeNumbers, '' + colorCode)) {
    return setPegs(pegsCount, colorCodeNumbers);
  }

  const color = getColor(colorCode);

  return color + setPegs(pegsCount - 1, colorCodeNumbers + colorCode);
}

function isValidDigit(char) {
  return char > '0' && char < '9';
}

function areColorsValid(choice, count) {
  if (choice.length !== count * 2) {
    return false;
  }

  for (let index = 0; index < count; index += 2) {
    if (!isSubString(colors, choice[index] + choice[index + 1])) {
      return false;
    }
  }

  return true;
}

function areNumbersValid(choice, count) {
  if (choice.length !== count) {
    return false;
  }

  for (let index = 0; index < count; index++) {
    if (!isValidDigit(choice[index])) {
      return false;
    }
  }

  return true;
}

function isChoiceValid(choice, count) {
  return areNumbersValid(choice, count) || areColorsValid(choice, count);
}

function getColorCode() {
  const choice = prompt('Enter the order of colors in number:');
  return choice;
}

function getColors(colorCode) {
  let colors = '';

  for (let index = 0; index < colorCode.length; index++) {
    colors += getColor(+(colorCode[index] - 1));
  }

  return colors;
}

function getPegs(pegsCount) {
  const colorCode = getColorCode(pegsCount);

  if (!isChoiceValid(colorCode, pegsCount)) {
    console.log('Invalid Entry, Try again!');
    return getPegs(pegsCount);
  }

  if (colorCode.length === pegsCount) {
    return getColors(colorCode);
  }

  return colorCode;
}

function isSubStringOccuring(subString, string, index, subStringIndex) {
  if (subStringIndex === subString.length) {
    return true;
  }

  if (string[index] !== subString[subStringIndex]) {
    return false;
  }

  return isSubStringOccuring(subString, string, index + 1, subStringIndex + 1);
}

function isSubStringAtPosition(subString, string, index) {
  if (index === string.length) {
    return false;
  }

  if (isSubStringOccuring(subString, string, index, 0)) {
    return true;
  }

  return isSubStringAtPosition(subString, string, index + 1);
}

function isSubString(string, otherString) {
  if (otherString.length === 0 || otherString.length > string.length) {
    return false;
  }

  return isSubStringAtPosition(otherString, string, 0);
}

function firstElementAtLast(string, index) {
  if (index === string.length - 2) {
    return string[0] + string[1];
  }

  const currentElement = string[index + 2] + string[index + 3];
  return currentElement + firstElementAtLast(string, index + 2);
}

function shuffle(string, times) {
  if (times === 0) {
    return string;
  }

  const shuffledString = firstElementAtLast(string, 0);
  return shuffle(shuffledString, times - 1);
}

function getFeedback(pegs, guessedPegs) {
  let feedBack = '';
  for (let index = 0; index < guessedPegs.length; index += 2) {
    const currentColor = guessedPegs[index] + guessedPegs[index + 1];
    const colorFound = isSubString(pegs, currentColor);
    const isPositionMatched = currentColor === pegs[index] + pegs[index + 1];

    if (colorFound) {
      feedBack += isPositionMatched ? matchedPegPos : matchedPegAtDifferentPos;
    }

    if (!colorFound) {
      feedBack += nothingMatched;
    }
  }

  const shuffleTimes = Math.ceil(Math.random() * 10);
  const shuffledFeedback = shuffle(feedBack, shuffleTimes);
  return shuffledFeedback;
}

function playMasterMind(count) {
  const pegsArrangement = setPegs(count, '');
  let guessedPegs = '';
  let pegsMatched = false;
  let numberOfGuesses = 0;
  let previousResults = promptsOnScreen;

  while (!pegsMatched) {
    console.log(previousResults);
    guessedPegs = getPegs(count);
    pegsMatched = pegsArrangement === guessedPegs;
    numberOfGuesses++;
    previousResults += guessedPegs + SPACING;
    previousResults += getFeedback(pegsArrangement, guessedPegs) + '\n';
    console.clear();
  }

  console.log('You guessed the pegs in', numberOfGuesses, 'guess.');
}

playMasterMind(4);