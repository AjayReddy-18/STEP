function sub(a, b) {
  return a - b;
}

function lengthDiff(a, b) {
  if (a.length === b.length) {
    return a < b ? -1 : 1;
  }

  return a.length - b.length;
}

const fruits = ['Apple', 'Banana', 'Pine apple', 'Musambi', 'Gauva'];
fruits.sort(lengthDiff);

function isEven(number) {
  return (number & 1) === 0;
}

function compare(a, b) {
  if (isEven(a) === isEven(b)) {
    return sub(a, b);
  }

  return isEven(a) ? -1 : 1;
}

const numbers = [1, 2, 3, 4, 5, 6];
numbers.sort(compare);