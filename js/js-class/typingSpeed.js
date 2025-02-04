const start = Date.now();

const text = prompt("type:");

const end = Date.now();

const numberOfWords = text.match(/\w+/g).length;

const durationInSec = (end - start) / 1000;

const speed = ((numberOfWords / durationInSec) * 60) >> 0;

console.log(`Your speed is ${speed} wpm`);
