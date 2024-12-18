function sub(a, b) {
  return a - b;
}

const numbers = [12, 21, 1, 4, 0, -1];
numbers.sort(sub);

function lengthDiff(a, b) {
  if (a.length === b.length) {
    return a < b ? -1 : 1;
  }

  return a.length - b.length;
}

const fruits = ['Apple', 'Banana', 'Pine apple', 'Musambi', 'Gauva'];
fruits.sort(lengthDiff);