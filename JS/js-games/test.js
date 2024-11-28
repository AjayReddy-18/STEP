function append(char, string) {
  return string + char;
}

function addCharAt(char, string, index) {
  const stringBeforeChar = slice(string, 0, index - 1);
  const stringAfterChar = slice(string, index, string.length - 1);

  return stringBeforeChar + char + stringAfterChar;
}

function findIndexOfChar(string, char, index) {
  if (index === string.length) {
    return -1;
  }

  if (string[index] === char) {
    return index;
  }

  return findIndexOfChar(string, char, index + 1);
}

function findIndex(string, char) {
  return findIndexOfChar(string, char, 0);
}


function isSubset(set, subset) {
  for (let index = 0; index < subset.length; index++) {
    if (findIndex(set, subset[index]) === -1) {
      return false;
    }
  }

  return true;
}

function reverseString(string, index) {
  if (index < 0) {
    return '';
  }

  return string[index] + reverseString(string, index - 1);
}

function reverse(string) {
  return reverseString(string, string.length - 1);
}

function printRow(rowData, color1, color2, count) {
  if (count === 0) {
    return '';
  }

  const remainder = rowData % 2;
  const color = remainder === 0 ? color1 : color2;

  return printRow((rowData - remainder) / 2, color1, color2, count - 1) + color;
}

function printBoard() {
  const green = '🟩'
  const red = '🟥'

  const oddRow = 170;
  const evenRow = 85;

  const rows = 8;
  const columns = 8;

  let board = '';
  for (let rowCounter = 0; rowCounter < rows; rowCounter += 2) {
    board += printRow(oddRow, green, red, columns) + '\n';
    board += printRow(evenRow, green, red, columns) + '\n';
  }

  return board;
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

function union(set1, set2) {
  let unionSet = set1;
  let nextIndex = unionSet.length;

  for (let index = 0; index < set2.length; index++) {
    if (!isElementFound(unionSet, set2[index], 0, unionSet.length)) {
      unionSet[nextIndex] = set2[index];
      nextIndex++;
    }
  }

  return unionSet;
}

function intersection(set1, set2) {
  let jointSet = [];

  for (let index = 0; index < set1.length; index++) {
    if (isElementFound(set2, set1[index], 0, set2.length)) {
      jointSet[jointSet.length] = set1[index];
    }
  }

  return jointSet;
}

function difference(set1, set2) {
  let disjointSet = [];

  for (let index = 0; index < set1.length; index++) {
    if (!isElementFound(set2, set1[index], 0, set2.length)) {
      disjointSet[disjointSet.length] = set1[index];
    }
  }

  return disjointSet;
}