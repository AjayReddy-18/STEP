function nthFibo([previousTerm, currentTerm]) {
  return [currentTerm, previousTerm + currentTerm];
}

function createArray(size) {
  const array = [];
  array[size - 1] = 0;

  return array.fill(0);
}

function fibonnaci(term) {
  const array = createArray(term);

  return array.reduce(nthFibo, [-1, 1])[1];
}

for (let i = 1; i < 10; i++) {
  console.log(fibonnaci(i));
}