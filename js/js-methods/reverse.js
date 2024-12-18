function unshift(array, element) {
  return [element].concat(array);
}

console.log([1, 2, 3, 4, 5, 6].reduce(unshift, []));