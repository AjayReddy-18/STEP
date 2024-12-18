function unshift(string, element) {
  return element + string;
}

function reverseString(string) {
  return [...string].reduce(unshift, '');
}

console.log(reverseString('123456'));