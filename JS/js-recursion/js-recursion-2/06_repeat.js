function repeat(string, repetitions) {
  if (repetitions < 1) {
    return '';
  }

  return string + repeat(string, repetitions - 1);
}

// PROGRAM END //

// Testing World! 

function testRepeat(string, repetitions, expected) {
  const result = repeat(string, repetitions);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, string, repetitions, expected, result);
}

function testAll() {
  testRepeat('123', 2, '123123');
  testRepeat('', 3, '');
}

testAll();