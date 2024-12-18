const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 4, 3];

function includes(array) {
  return function (element) {
    return array.includes(element);
  };
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  return array1.every(includes(array2));
}

console.log(areEqual(array1, array2));