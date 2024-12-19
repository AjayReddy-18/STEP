function randomOf(max) {
  return Math.floor(Math.random() * (max + 1));
}

// function shuffle(array, element) {
//   return array.toSpliced(randomOf(array.length), 0, element);
// }

function shuffle(array) {
  return array.sort(function () {
    return Math.random() - 0.5;
  })
}

const numbers = [1, 2, 3, 4, 5];
shuffle(numbers);
console.log(numbers);