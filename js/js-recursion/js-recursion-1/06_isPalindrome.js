function isStringPalindrome(string, left, right) {
  if (left > right) {
    return true;
  }

  if (string[left] !== string[right]) {
    return false;
  }

  return isStringPalindrome(string, left + 1, right - 1);
}

function isPalindrome(palindromeCandidate) {
  const string = palindromeCandidate;
  return isStringPalindrome(string, 0, string.length - 1);
}

// PROGRAM END //

// Testing World! 

function testIsPalindrome(palindromeCandidate, expected) {
  const result = isPalindrome(palindromeCandidate);
  const mark = result === expected ? '✅' : '❌';
  console.log(mark, palindromeCandidate, expected, result);
}

function testAll() {
  testIsPalindrome('1', true);
  testIsPalindrome('11', true);
  testIsPalindrome('13', false);
  testIsPalindrome('121', true);
  testIsPalindrome('1221', true);
  testIsPalindrome('2222', true);
  testIsPalindrome('101', true);
  testIsPalindrome('ABA', true);
  testIsPalindrome('ABC', false);
  testIsPalindrome(' ', true);
  testIsPalindrome('', true);
}

testAll();