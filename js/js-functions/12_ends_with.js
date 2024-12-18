function endsWith(string, substring) {
  let stringIndex = string.length - 1;
  let subStringIndex = substring.length - 1;

  while (string[stringIndex] === substring[subStringIndex] && subStringIndex > -1) {
    stringIndex--;
    subStringIndex--;
  }

  return subStringIndex === -1;
}

console.log(endsWith('ajay', 'y'));