const p = [
  ["Alice", "9876543210", 25, "123 Elm Street, Springfield"],
  ["Bob", "8765432109", 35, "456 Oak Avenue, Metropolis"],
  ["Charlie", "7654321098", 19, "789 Pine Road, Gotham City"],
  ["Diana", "6543210987", 42, "101 Maple Lane, Smallville"],
  ["Eve", "5432109876", 28, "202 Birch Boulevard, Star City"],
  ["Frank", "4321098765", 31, "303 Cedar Drive, Central City"],
  ["Grace", "3210987654", 18, "404 Willow Way, Coast City"],
  ["Hank", "2109876543", 45, "505 Aspen Circle, Riverdale"],
  ["Ivy", "1098765432", 23, "606 Fir Terrace, Hill Valley"],
  ["Jack", "0198765431", 37, "707 Spruce Court, Twin Peaks"]
];

function arrayToObject(keys) {
  return function (array) {
    const object = {};

    for (let index = 0; index < keys.length; index++) {
      object[keys[index]] = array[index];
    }

    return object;
  };
}

function objectToArray(keys) {
  return function (object) {
    const array = [];
    for (const key of keys) {
      array.push(object[key]);
    }

    return array;
  }
}

function isOlderThan(age) {
  return function (person) {
    return person.age > age;
  }
}

const keys = ['name', 'phone', 'age', 'address'];
const people = p.map(arrayToObject(keys));
const olderPeople = people.filter(isOlderThan(20));
console.log(olderPeople.map(objectToArray(keys)));