function randomOf(max) {
  return Math.floor(Math.random() * (max + 1));
}

function shuffle(array, element) {
  return array.toSpliced(randomOf(array.length), 0, element);
}

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.reduce(shuffle, []));