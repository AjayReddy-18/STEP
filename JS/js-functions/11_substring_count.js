function areEqual(lhs, rhs) {
  return lhs === rhs;
}

function isSubStringFound(string, subString, start) {
  let stringIndex = start;

  for (let index = 0; index < subString.length; index++) {
    if (!areEqual(string[stringIndex], subString[index])) {
      return false;
    }
    stringIndex++;
  }

  return true;
}

function countOccurences(string, substring, end) {
  let subStringCount = 0;

  for (let index = 0; index < end; index++) {
    if (isSubStringFound(string, substring, index)) {
      subStringCount += 1;
    }
  }

  return subStringCount;
}

function occurrences(string, substring) {

  if (substring.length === 0 || substring.length > string.length) {
    return 0;
  }

  const lastIndex = string.length;
  return countOccurences(string, substring, lastIndex);
}

console.log(occurrences('sss', 's'), 3);
console.log(occurrences('sss', 'ss'), 2);
console.log(occurrences('sss', 'd'), 0);
console.log(occurrences('hello', 'hell'), 1);
console.log(occurrences('why', 'wy'), 0);