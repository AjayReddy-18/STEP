const letters = 'ABCDEFGHIJ';
const numbers = '0123456789';

function randomOf(endRange) {
  return Math.floor(Math.random() * endRange);
}

function getNextXValues(x, y, count) {
  if (count === 0) {
    return '';
  }

  return letters[x] + numbers[y] + getNextXValues(x + 1, y, count - 1);
}

function getNextYValues(x, y, count) {
  if (count === 0) {
    return '';
  }

  return letters[x] + numbers[y] + getNextYValues(x, y + 1, count - 1);
}

function getNextValues(x, y, position, count) {
  if (position === 0) {
    return getNextXValues(x, y, count);
  }

  return getNextYValues(x, y, count);
}

function getShipPosition(count, allShips) {
  const Xcord = randomOf(10 - count);
  const Ycord = randomOf(10 - count);

  const position = randomOf(2);

  const positions = getNextValues(Xcord, Ycord, position, count);

  if (isSubSet(allShips, positions)) {
    return getShipPosition(count, allShips);
  }

  return positions;
}

function getShipsPositions(shipLengths) {
  const ships = [];
  for (let shipCount = 0; shipCount < shipLengths.length; shipCount++) {
    ships[shipCount] = getShipPosition(shipLengths[shipCount], ships);
  }

  return ships;
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

function isSubString(string, subString) {
  if (subString.length === 0 || subString.length > string.length) {
    return false;
  }

  return isSubStringAtPosition(subString, string, 0);
}

function isAnythingBlasted(position, allShips) {
  return isSubString(allShips, position);
}

function getPosition() {
  return prompt('Enter position:');
}

function isElementFound(set, target, left, right) {
  if (right < left) {
    return false;
  }

  if (set[left] === target || set[right] === target) {
    return true;
  }

  return isElementFound(set, target, left + 1, right - 1);
}

function isSubSet(set, subSet) {
  for (let index = 0; index < subSet.length; index++) {
    if (!isElementFound(set, subSet[index], 0, set.length)) {
      return false;
    }
  }

  return true;
}

function play() {
  const lengthOfShips = [5, 4, 3, 3, 2];
  const allShips = getShipsPositions(lengthOfShips);
  console.log(allShips);

  let blastedSpots = '';

  while (!isSubSet(blastedSpots, allShips)) {
    const choice = getPosition();
    blastedSpots += choice;
    console.log(isAnythingBlasted(choice, allShips));
  }
}

console.log(play());