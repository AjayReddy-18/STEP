function replaceChar(text, target, replacement, index) {
  if (index === text.length) {
    return '';
  }

  const currentChar = text[index] === target ? replacement : text[index];

  return currentChar + replaceChar(text, target, replacement, index + 1);
}

function replace(text, target, replacement) {
  if (text === '' || target === '') {
    return text;
  }

  return replaceChar(text, target, replacement, 0);
}

// PROGRAM END //

// Testing World! 

function testReplace(text, target, replacement, expected) {
  const result = replace(text, target, replacement);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, text, target, replacement, expected, result);
}

function testAll() {
  testReplace('0123456789', '2', '5', '0153456789');
  testReplace('Hello', 'l', 'n', 'Henno');
  testReplace('', 'd', 'n', '');
}

testAll();